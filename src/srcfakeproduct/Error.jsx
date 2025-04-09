import React from 'react'
import { useNavigate, useRouteError } from 'react-router-dom'


function Error() {


let navigate=useNavigate()
let navigatetohome=useNavigate()

    return (

  < >
    <div className='ml-4'>404 error page</div>
    <div 
    onClick={()=>{navigate(-1)}}
    className='ml-4 bg-gray-800 text-white w-[70px]'> Go back</div>
     <div 
    onClick={()=>{navigatetohome("/home")}}
    className='ml-4 bg-red-900 text-white w-[70px]'> Home</div> 
  </> 
  )
}

export default Error



