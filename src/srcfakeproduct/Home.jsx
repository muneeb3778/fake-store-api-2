import React, { useEffect, useState } from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import Category from './Category.jsx'
import axios, { Axios } from 'axios'
import { Navbar } from './Navbar.jsx'

  

function Home() {
const [data,setdata]=useState([])



useEffect(()=>{

axios.get("http://localhost:3000/products").then((res)=>{
console.log(res)
setdata(res.data)  
})

},[])





function cartt(v,i){  
axios.post("http://localhost:3000/cart",v)  

}





  return (


    <>

<Navbar/>
<main className='bg-white min-h-screen flex'>



<div 
className='parentdiv flex flex-wrap w-[70vw] pt-[60px] gap-3  ml-[25vw]'>



  
{data.map((v,i)=>(
 <NavLink to={`/home/${v.id}`}>
<div key={v.id} onClick={()=>{navlink(v,i)}}
  class="min-h-[300px] h-[380px] max-w-[200px] bg-white dark:text-gray-500 border dark:border-0 relative rounded-md hover:shadow-xl cursor-pointer duration-200 overflow-hidden">
  <span class="bg-blue-600 text-white px-2 py-1 absolute top-0 right-0 text-xs  md:tex t-sm rounded-bl-md">{v.rating.rate}</span>
  <div class="overflow-hidden p-2 rounded-md">
    <img alt="Iphone 14+" loading="lazy" class="h-[150px] w-full" src={v.image}/>
    
  </div>
  <div class="px-2 py-3">
    <h5 class="text-base font-semibold text-center">{v.category}</h5>
    <p class="text-center text-xs font-semibold flex justify-center gap-2 my-2"><del
        class="text-gray-500">${Math.floor(v.price)+6}</del><span>${Math.floor(v.price)}</span></p>
    <div class="text-xs flex justify-between flex-wrap mt-1">
      <NavLink to={"/home"}>
      <button class="flex items-center px-2 py-1  gap-x-2 bg-blue-600 border-2 border-blue-600 hover:bg-transparent rounded text-white hover:text-inherit"
      onClick={(e)=>{cartt(v,i)}}>Add to cart <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 576 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M504.717 320H211.572l6.545 32h268.418c15.401 0 26.816 14.301 23.403 29.319l-5.517 24.276C523.112 414.668 536 433.828 536 456c0 31.202-25.519 56.444-56.824 55.994-29.823-.429-54.35-24.631-55.155-54.447-.44-16.287 6.085-31.049 16.803-41.548H231.176C241.553 426.165 248 440.326 248 456c0 31.813-26.528 57.431-58.67 55.938-28.54-1.325-51.751-24.385-53.251-52.917-1.158-22.034 10.436-41.455 28.051-51.586L93.883 64H24C10.745 64 0 53.255 0 40V24C0 10.745 10.745 0 24 0h102.529c11.401 0 21.228 8.021 23.513 19.19L159.208 64H551.99c15.401 0 26.816 14.301 23.403 29.319l-47.273 208C525.637 312.246 515.923 320 504.717 320zM403.029 192H360v-60c0-6.627-5.373-12-12-12h-24c-6.627 0-12 5.373-12 12v60h-43.029c-10.691 0-16.045 12.926-8.485 20.485l67.029 67.029c4.686 4.686 12.284 4.686 16.971 0l67.029-67.029c7.559-7.559 2.205-20.485-8.486-20.485z"></path></svg></button>
      </NavLink>
      <NavLink to={`/buy`}>
      <button class="flex items-center px-2 py-1  gap-x-2 bg-blue-600 border-2 border-blue-600 hover:bg-transparent rounded text-white hover:text-inherit"
      >buy <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" height="1em"Width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"></path></svg></button>
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



export default Home




// {

//   "products":[
//   {
//     "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
//     "price": 109.95,
//     "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
//     "category": "men's clothing",
//     "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
//     "rating": {
//       "rate": 3.9,
//       "count": 120
//     },
//     "id": "1"
//   },
//   {
//     "title": "Mens Casual Premium Slim Fit T-Shirts ",
//     "price": 22.3,
//     "description": "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
//     "category": "men's clothing",
//     "image": "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
//     "rating": {
//       "rate": 4.1,
//       "count": 259
//     },
//     "id": "2"
//   },
//   {
//     "title": "Mens Cotton Jacket",
//     "price": 55.99,
//     "description": "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
//     "category": "men's clothing",
//     "image": "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
//     "rating": {
//       "rate": 4.7,
//       "count": 500
//     },
//     "id": "3"
//   },
//   {
//     "title": "Mens Casual Slim Fit",
//     "price": 15.99,
//     "description": "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",
//     "category": "men's clothing",
//     "image": "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
//     "rating": {
//       "rate": 2.1,
//       "count": 430
//     },
//     "id": "4"
//   },
//   {
//     "title": "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
//     "price": 695,
//     "description": "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
//     "category": "jewelery",
//     "image": "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
//     "rating": {
//       "rate": 4.6,
//       "count": 400
//     },
//     "id": "5"
//   },
//   {
//     "title": "Solid Gold Petite Micropave ",
//     "price": 168,
//     "description": "Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.",
//     "category": "jewelery",
//     "image": "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg",
//     "rating": {
//       "rate": 3.9,
//       "count": 70
//     },
//     "id": "6"
//   },
//   {
//     "title": "White Gold Plated Princess",
//     "price": 9.99,
//     "description": "Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her. Gifts to spoil your love more for Engagement, Wedding, Anniversary, Valentine's Day...",
//     "category": "jewelery",
//     "image": "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg",
//     "rating": {
//       "rate": 3,
//       "count": 400
//     },
//     "id": "7"
//   },
//   {
//     "title": "Pierced Owl Rose Gold Plated Stainless Steel Double",
//     "price": 10.99,
//     "description": "Rose Gold Plated Double Flared Tunnel Plug Earrings. Made of 316L Stainless Steel",
//     "category": "jewelery",
//     "image": "https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg",
//     "rating": {
//       "rate": 1.9,
//       "count": 100
//     },
//     "id": "8"
//   },
//   {
//     "title": "WD 2TB Elements Portable External Hard Drive - USB 3.0 ",
//     "price": 64,
//     "description": "USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity; Compatibility Formatted NTFS for Windows 10, Windows 8.1, Windows 7; Reformatting may be required for other operating systems; Compatibility may vary depending on user’s hardware configuration and operating system",
//     "category": "electronics",
//     "image": "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg",
//     "rating": {
//       "rate": 3.3,
//       "count": 203
//     },
//     "id": "9"
//   },
//   {
//     "title": "SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s",
//     "price": 109,
//     "description": "Easy upgrade for faster boot up, shutdown, application load and response (As compared to 5400 RPM SATA 2.5” hard drive; Based on published specifications and internal benchmarking tests using PCMark vantage scores) Boosts burst write performance, making it ideal for typical PC workloads The perfect balance of performance and reliability Read/write speeds of up to 535MB/s/450MB/s (Based on internal testing; Performance may vary depending upon drive capacity, host device, OS and application.)",
//     "category": "electronics",
//     "image": "https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg",
//     "rating": {
//       "rate": 2.9,
//       "count": 470
//     },
//     "id": "10"
//   },
//   {
//     "title": "Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5",
//     "price": 109,
//     "description": "3D NAND flash are applied to deliver high transfer speeds Remarkable transfer speeds that enable faster bootup and improved overall system performance. The advanced SLC Cache Technology allows performance boost and longer lifespan 7mm slim design suitable for Ultrabooks and Ultra-slim notebooks. Supports TRIM command, Garbage Collection technology, RAID, and ECC (Error Checking & Correction) to provide the optimized performance and enhanced reliability.",
//     "category": "electronics",
//     "image": "https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_.jpg",
//     "rating": {
//       "rate": 4.8,
//       "count": 319
//     },
//     "id": "11"
//   },
//   {
//     "title": "WD 4TB Gaming Drive Works with Playstation 4 Portable External Hard Drive",
//     "price": 114,
//     "description": "Expand your PS4 gaming experience, Play anywhere Fast and easy, setup Sleek design with high capacity, 3-year manufacturer's limited warranty",
//     "category": "electronics",
//     "image": "https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_.jpg",
//     "rating": {
//       "rate": 4.8,
//       "count": 400
//     },
//     "id": "12"
//   },
//   {
//     "title": "Acer SB220Q bi 21.5 inches Full HD (1920 x 1080) IPS Ultra-Thin",
//     "price": 599,
//     "description": "21. 5 inches Full HD (1920 x 1080) widescreen IPS display And Radeon free Sync technology. No compatibility for VESA Mount Refresh Rate: 75Hz - Using HDMI port Zero-frame design | ultra-thin | 4ms response time | IPS panel Aspect ratio - 16: 9. Color Supported - 16. 7 million colors. Brightness - 250 nit Tilt angle -5 degree to 15 degree. Horizontal viewing angle-178 degree. Vertical viewing angle-178 degree 75 hertz",
//     "category": "electronics",
//     "image": "https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg",
//     "rating": {
//       "rate": 2.9,
//       "count": 250
//     },
//     "id": "13"
//   },
//   {
//     "title": "Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor (LC49HG90DMNXZA) – Super Ultrawide Screen QLED ",
//     "price": 999.99,
//     "description": "49 INCH SUPER ULTRAWIDE 32:9 CURVED GAMING MONITOR with dual 27 inch screen side by side QUANTUM DOT (QLED) TECHNOLOGY, HDR support and factory calibration provides stunningly realistic and accurate color and contrast 144HZ HIGH REFRESH RATE and 1ms ultra fast response time work to eliminate motion blur, ghosting, and reduce input lag",
//     "category": "electronics",
//     "image": "https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg",
//     "rating": {
//       "rate": 2.2,
//       "count": 140
//     },
//     "id": "14"
//   },
//   {
//     "title": "BIYLACLESEN Women's 3-in-1 Snowboard Jacket Winter Coats",
//     "price": 56.99,
//     "description": "Note:The Jackets is US standard size, Please choose size as your usual wear Material: 100% Polyester; Detachable Liner Fabric: Warm Fleece. Detachable Functional Liner: Skin Friendly, Lightweigt and Warm.Stand Collar Liner jacket, keep you warm in cold weather. Zippered Pockets: 2 Zippered Hand Pockets, 2 Zippered Pockets on Chest (enough to keep cards or keys)and 1 Hidden Pocket Inside.Zippered Hand Pockets and Hidden Pocket keep your things secure. Humanized Design: Adjustable and Detachable Hood and Adjustable cuff to prevent the wind and water,for a comfortable fit. 3 in 1 Detachable Design provide more convenience, you can separate the coat and inner as needed, or wear it together. It is suitable for different season and help you adapt to different climates",
//     "category": "women's clothing",
//     "image": "https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg",
//     "rating": {
//       "rate": 2.6,
//       "count": 235
//     },
//     "id": "15"
//   },
//   {
//     "title": "Lock and Love Women's Removable Hooded Faux Leather Moto Biker Jacket",
//     "price": 29.95,
//     "description": "100% POLYURETHANE(shell) 100% POLYESTER(lining) 75% POLYESTER 25% COTTON (SWEATER), Faux leather material for style and comfort / 2 pockets of front, 2-For-One Hooded denim style faux leather jacket, Button detail on waist / Detail stitching at sides, HAND WASH ONLY / DO NOT BLEACH / LINE DRY / DO NOT IRON",
//     "category": "women's clothing",
//     "image": "https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_.jpg",
//     "rating": {
//       "rate": 2.9,
//       "count": 340
//     },
//     "id": "16"
//   },
//   {
//     "title": "Rain Jacket Women Windbreaker Striped Climbing Raincoats",
//     "price": 39.99,
//     "description": "Lightweight perfet for trip or casual wear---Long sleeve with hooded, adjustable drawstring waist design. Button and zipper front closure raincoat, fully stripes Lined and The Raincoat has 2 side pockets are a good size to hold all kinds of things, it covers the hips, and the hood is generous but doesn't overdo it.Attached Cotton Lined Hood with Adjustable Drawstrings give it a real styled look.",
//     "category": "women's clothing",
//     "image": "https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg",
//     "rating": {
//       "rate": 3.8,
//       "count": 679
//     },
//     "id": "17"
//   },
//   {
//     "title": "MBJ Women's Solid Short Sleeve Boat Neck V ",
//     "price": 9.85,
//     "description": "95% RAYON 5% SPANDEX, Made in USA or Imported, Do Not Bleach, Lightweight fabric with great stretch for comfort, Ribbed on sleeves and neckline / Double stitching on bottom hem",
//     "category": "women's clothing",
//     "image": "https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_.jpg",
//     "rating": {
//       "rate": 4.7,
//       "count": 130
//     },
//     "id": "18"
//   },
//   {
//     "title": "Opna Women's Short Sleeve Moisture",
//     "price": 7.95,
//     "description": "100% Polyester, Machine wash, 100% cationic polyester interlock, Machine Wash & Pre Shrunk for a Great Fit, Lightweight, roomy and highly breathable with moisture wicking fabric which helps to keep moisture away, Soft Lightweight Fabric with comfortable V-neck collar and a slimmer fit, delivers a sleek, more feminine silhouette and Added Comfort",
//     "category": "women's clothing",
//     "image": "https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg",
//     "rating": {
//       "rate": 4.5,
//       "count": 146
//     },
//     "id": "19"
//   },
//   {
//     "title": "DANVOUY Womens T Shirt Casual Cotton Short",
//     "price": 12.99,
//     "description": "95%Cotton,5%Spandex, Features: Casual, Short Sleeve, Letter Print,V-Neck,Fashion Tees, The fabric is soft and has some stretch., Occasion: Casual/Office/Beach/School/Home/Street. Season: Spring,Summer,Autumn,Winter.",
//     "category": "women's clothing",
//     "image": "https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg",
//     "rating": {
//       "rate": 3.6,
//       "count": 145
//     },
//     "id": "20"
//   }
// ],

// "electronics":[
// {
//   "id": 9,
//   "title": "WD 2TB Elements Portable External Hard Drive - USB 3.0 ",
//   "price": 64,
//   "description": "USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity; Compatibility Formatted NTFS for Windows 10, Windows 8.1, Windows 7; Reformatting may be required for other operating systems; Compatibility may vary depending on user’s hardware configuration and operating system",
//   "category": "electronics",
//   "image": "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg",
//   "rating": {
//     "rate": 3.3,
//     "count": 203
//   }
// },
// {
//   "id": 10,
//   "title": "SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s",
//   "price": 109,
//   "description": "Easy upgrade for faster boot up, shutdown, application load and response (As compared to 5400 RPM SATA 2.5” hard drive; Based on published specifications and internal benchmarking tests using PCMark vantage scores) Boosts burst write performance, making it ideal for typical PC workloads The perfect balance of performance and reliability Read/write speeds of up to 535MB/s/450MB/s (Based on internal testing; Performance may vary depending upon drive capacity, host device, OS and application.)",
//   "category": "electronics",
//   "image": "https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg",
//   "rating": {
//     "rate": 2.9,
//     "count": 470
//   }
// },
// {
//   "id": 11,
//   "title": "Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5",
//   "price": 109,
//   "description": "3D NAND flash are applied to deliver high transfer speeds Remarkable transfer speeds that enable faster bootup and improved overall system performance. The advanced SLC Cache Technology allows performance boost and longer lifespan 7mm slim design suitable for Ultrabooks and Ultra-slim notebooks. Supports TRIM command, Garbage Collection technology, RAID, and ECC (Error Checking & Correction) to provide the optimized performance and enhanced reliability.",
//   "category": "electronics",
//   "image": "https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_.jpg",
//   "rating": {
//     "rate": 4.8,
//     "count": 319
//   }
// },
// {
//   "id": 12,
//   "title": "WD 4TB Gaming Drive Works with Playstation 4 Portable External Hard Drive",
//   "price": 114,
//   "description": "Expand your PS4 gaming experience, Play anywhere Fast and easy, setup Sleek design with high capacity, 3-year manufacturer's limited warranty",
//   "category": "electronics",
//   "image": "https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_.jpg",
//   "rating": {
//     "rate": 4.8,
//     "count": 400
//   }
// },
// {
//   "id": 13,
//   "title": "Acer SB220Q bi 21.5 inches Full HD (1920 x 1080) IPS Ultra-Thin",
//   "price": 599,
//   "description": "21. 5 inches Full HD (1920 x 1080) widescreen IPS display And Radeon free Sync technology. No compatibility for VESA Mount Refresh Rate: 75Hz - Using HDMI port Zero-frame design | ultra-thin | 4ms response time | IPS panel Aspect ratio - 16: 9. Color Supported - 16. 7 million colors. Brightness - 250 nit Tilt angle -5 degree to 15 degree. Horizontal viewing angle-178 degree. Vertical viewing angle-178 degree 75 hertz",
//   "category": "electronics",
//   "image": "https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg",
//   "rating": {
//     "rate": 2.9,
//     "count": 250
//   }
// },
// {
//   "id": 14,
//   "title": "Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor (LC49HG90DMNXZA) – Super Ultrawide Screen QLED ",
//   "price": 999.99,
//   "description": "49 INCH SUPER ULTRAWIDE 32:9 CURVED GAMING MONITOR with dual 27 inch screen side by side QUANTUM DOT (QLED) TECHNOLOGY, HDR support and factory calibration provides stunningly realistic and accurate color and contrast 144HZ HIGH REFRESH RATE and 1ms ultra fast response time work to eliminate motion blur, ghosting, and reduce input lag",
//   "category": "electronics",
//   "image": "https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg",
//   "rating": {
//     "rate": 2.2,
//     "count": 140
//   }
// }
// ],
// "mensclothing":[
// {
//   "id": 1,
//   "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
//   "price": 109.95,
//   "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
//   "category": "men's clothing",
//   "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
//   "rating": {
//     "rate": 3.9,
//     "count": 120
//   }
// },
// {
//   "id": 2,
//   "title": "Mens Casual Premium Slim Fit T-Shirts ",
//   "price": 22.3,
//   "description": "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
//   "category": "men's clothing",
//   "image": "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
//   "rating": {
//     "rate": 4.1,
//     "count": 259
//   }
// },
// {
//   "id": 3,
//   "title": "Mens Cotton Jacket",
//   "price": 55.99,
//   "description": "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
//   "category": "men's clothing",
//   "image": "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
//   "rating": {
//     "rate": 4.7,
//     "count": 500
//   }
// },
// {
//   "id": 4,
//   "title": "Mens Casual Slim Fit",
//   "price": 15.99,
//   "description": "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",
//   "category": "men's clothing",
//   "image": "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
//   "rating": {
//     "rate": 2.1,
//     "count": 430
//   }
// }
// ],
// "womensclothing":[
// {
//   "id": 15,
//   "title": "BIYLACLESEN Women's 3-in-1 Snowboard Jacket Winter Coats",
//   "price": 56.99,
//   "description": "Note:The Jackets is US standard size, Please choose size as your usual wear Material: 100% Polyester; Detachable Liner Fabric: Warm Fleece. Detachable Functional Liner: Skin Friendly, Lightweigt and Warm.Stand Collar Liner jacket, keep you warm in cold weather. Zippered Pockets: 2 Zippered Hand Pockets, 2 Zippered Pockets on Chest (enough to keep cards or keys)and 1 Hidden Pocket Inside.Zippered Hand Pockets and Hidden Pocket keep your things secure. Humanized Design: Adjustable and Detachable Hood and Adjustable cuff to prevent the wind and water,for a comfortable fit. 3 in 1 Detachable Design provide more convenience, you can separate the coat and inner as needed, or wear it together. It is suitable for different season and help you adapt to different climates",
//   "category": "women's clothing",
//   "image": "https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg",
//   "rating": {
//     "rate": 2.6,
//     "count": 235
//   }
// },
// {
//   "id": 16,
//   "title": "Lock and Love Women's Removable Hooded Faux Leather Moto Biker Jacket",
//   "price": 29.95,
//   "description": "100% POLYURETHANE(shell) 100% POLYESTER(lining) 75% POLYESTER 25% COTTON (SWEATER), Faux leather material for style and comfort / 2 pockets of front, 2-For-One Hooded denim style faux leather jacket, Button detail on waist / Detail stitching at sides, HAND WASH ONLY / DO NOT BLEACH / LINE DRY / DO NOT IRON",
//   "category": "women's clothing",
//   "image": "https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_.jpg",
//   "rating": {
//     "rate": 2.9,
//     "count": 340
//   }
// },
// {
//   "id": 17,
//   "title": "Rain Jacket Women Windbreaker Striped Climbing Raincoats",
//   "price": 39.99,
//   "description": "Lightweight perfet for trip or casual wear---Long sleeve with hooded, adjustable drawstring waist design. Button and zipper front closure raincoat, fully stripes Lined and The Raincoat has 2 side pockets are a good size to hold all kinds of things, it covers the hips, and the hood is generous but doesn't overdo it.Attached Cotton Lined Hood with Adjustable Drawstrings give it a real styled look.",
//   "category": "women's clothing",
//   "image": "https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg",
//   "rating": {
//     "rate": 3.8,
//     "count": 679
//   }
// },
// {
//   "id": 18,
//   "title": "MBJ Women's Solid Short Sleeve Boat Neck V ",
//   "price": 9.85,
//   "description": "95% RAYON 5% SPANDEX, Made in USA or Imported, Do Not Bleach, Lightweight fabric with great stretch for comfort, Ribbed on sleeves and neckline / Double stitching on bottom hem",
//   "category": "women's clothing",
//   "image": "https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_.jpg",
//   "rating": {
//     "rate": 4.7,
//     "count": 130
//   }
// },
// {
//   "id": 19,
//   "title": "Opna Women's Short Sleeve Moisture",
//   "price": 7.95,
//   "description": "100% Polyester, Machine wash, 100% cationic polyester interlock, Machine Wash & Pre Shrunk for a Great Fit, Lightweight, roomy and highly breathable with moisture wicking fabric which helps to keep moisture away, Soft Lightweight Fabric with comfortable V-neck collar and a slimmer fit, delivers a sleek, more feminine silhouette and Added Comfort",
//   "category": "women's clothing",
//   "image": "https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg",
//   "rating": {
//     "rate": 4.5,
//     "count": 146
//   }
// },
// {
//   "id": 20,
//   "title": "DANVOUY Womens T Shirt Casual Cotton Short",
//   "price": 12.99,
//   "description": "95%Cotton,5%Spandex, Features: Casual, Short Sleeve, Letter Print,V-Neck,Fashion Tees, The fabric is soft and has some stretch., Occasion: Casual/Office/Beach/School/Home/Street. Season: Spring,Summer,Autumn,Winter.",
//   "category": "women's clothing",
//   "image": "https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg",
//   "rating": {
//     "rate": 3.6,
//     "count": 145
//   }
// }
// ],
// "jewelery":[
// {
//   "id": 5,
//   "title": "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
//   "price": 695,
//   "description": "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
//   "category": "jewelery",
//   "image": "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
//   "rating": {
//     "rate": 4.6,
//     "count": 400
//   }
// },
// {
//   "id": 6,
//   "title": "Solid Gold Petite Micropave ",
//   "price": 168,
//   "description": "Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.",
//   "category": "jewelery",
//   "image": "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg",
//   "rating": {
//     "rate": 3.9,
//     "count": 70
//   }
// },
// {
//   "id": 7,
//   "title": "White Gold Plated Princess",
//   "price": 9.99,
//   "description": "Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her. Gifts to spoil your love more for Engagement, Wedding, Anniversary, Valentine's Day...",
//   "category": "jewelery",
//   "image": "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg",
//   "rating": {
//     "rate": 3,
//     "count": 400
//   }
// },
// {
//   "id": 8,
//   "title": "Pierced Owl Rose Gold Plated Stainless Steel Double",
//   "price": 10.99,
//   "description": "Rose Gold Plated Double Flared Tunnel Plug Earrings. Made of 316L Stainless Steel",
//   "category": "jewelery",
//   "image": "https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg",
//   "rating": {
//     "rate": 1.9,
//     "count": 100
//   }
// }
// ],
// "category":[{"id":"123","categories":"electronics"},
// {"id":"122","categories":"jewelery"},
// {"id":"125","categories":"men,s clothing"},
// {"id":"120","categories":"women's clothing"}
// ]


// }







