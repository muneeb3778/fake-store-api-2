import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { Link, NavLink, useParams } from "react-router-dom";
import ab from "./style.module.css"


function Category (){

let [dt,setdt]=useState([])
let [d,setd]=useState("")




let referenc=useRef(null)
let childreferenc=useRef(null)




useEffect(()=>{

axios.get("http://localhost:3000/category").then((res)=>{

setdt(res.data)
    
})

  
},[])





return (

<>
<div 
ref={referenc}
className="bg-gray-800 , w-[20vw] h-screen text-white text-[15px] flex flex-col  pt-12 fixed overflow-hidden">
{dt.map((v,i)=>(
<NavLink to={`/home/categories/${v.categories}`}>
<div key={i} className={`p-2 cursor-pointer ${ab.category} w-[100px]`}>{v.categories}</div>
</NavLink>    
))}

</div>


</>

)


}


export default Category 
