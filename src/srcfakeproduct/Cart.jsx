import { useEffect, useState } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import { Navbar } from './Navbar'
import axios from 'axios'

function Cart() {

  let obj = useParams()
  let [data, setdata] = useState([])


  useEffect(() => {
    axios.get("http://localhost:3000/cart").then((res) => {
      setdata(res.data)
      console.log(data)
    })
  }, [])

  function cartt(v, i) {
    axios.delete("http://localhost:3000/cart/" + v.id).then(() => {
      axios.get("http://localhost:3000/cart").then((res) => {
        setdata(res.data)
        console.log(res.data)
      })
    })
  }

  function removeall() {
    data.forEach((v, i) => {
      axios.delete("http://localhost:3000/cart/" + v.id).then(() => {
        axios.get("http://localhost:3000/cart").then((res) => {
          setdata(res.data)
          console.log(res.data)
        })
      })
    })
  }



  return (

    <>
      <Navbar />
      {data.length!=[]?<>
      <button className='mt-14 absolute top-9 right-4 cursor-pointer border-1 w-[60px] bg-blue-600 text-white'
        onClick={(e) => { removeall() }}
      >Delete All items</button>
      </>:""}

      <main className='bg-white min-h-screen flex'>

        <div className='parentdiv flex flex-wrap w-[70vw] pt-[60px] gap-3  ml-[25vw]'>

          {data.map((v, i) => (
            <NavLink to={`/home/${v.id}`}>
              <div key={i}
                class="min-h-[300px] h-[380px] max-w-[200px] bg-white dark:text-gray-500 border dark:border-0 relative rounded-md hover:shadow-xl cursor-pointer duration-200 overflow-hidden">
                <span class="bg-blue-600 text-white px-2 py-1 absolute top-0 right-0 text-xs  md:tex t-sm rounded-bl-md">{v.rating.rate}</span>
                <div class="overflow-hidden p-2 rounded-md">
                  <img alt="Iphone 14+" loading="lazy" class="h-[150px] w-full" src={v.image} />

                </div>
                <div class="px-2 py-3">
                  <h5 class="text-base font-semibold text-center">{v.category}</h5>
                  <p class="text-center text-xs font-semibold flex justify-center gap-2 my-2"><del
                    class="text-gray-500">${Math.floor(v.price) + 6}</del><span>${Math.floor(v.price)}</span></p>
                  <div class="text-xs flex justify-between flex-wrap mt-1">
                    <NavLink to={"/cart"}>
                      <button class="flex items-center px-2 py-1  gap-x-2 bg-blue-600 border-2 border-blue-600 hover:bg-transparent rounded text-white hover:text-inherit"
                        onClick={(e) => { cartt(v, i) }}
                      >Remove</button>
                    </NavLink>
                    <NavLink to={`/buy`}>
                      <button class="flex items-center px-2 py-1  gap-x-2 bg-blue-600 border-2 border-blue-600 hover:bg-transparent rounded text-white hover:text-inherit"
                      >buy <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" height="1em" Width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"></path></svg></button>
                    </NavLink>
                  </div>
                  <div>{v.title}</div>
                  <p class="">{v.description}</p>
                </div>
              </div>
            </NavLink>
          ))}


        </div>

      </main>
    </>

  )


}


export default Cart 