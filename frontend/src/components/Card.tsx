import React from 'react'
import { Link } from 'react-router-dom'


interface Card{
title:string,
content:string,
id:string,

}

function Card({ title,content,id }:Card) {
  content=content.substring(0,20)
  return (
    <div>
      <div></div>
      
      <div className="flex justify-center items-center pb-3 ">

        <Link to={"/fullnote?id="+id}>
        {/* navigate("/fullnote?id="+user._id) */}
        <div className="text-center bg-violet-300 rounded-md shadow-md transition-shadow mt-4">
            <h1 className="text-xl font-semibold mb-4 pt-5 pr-6 pl-6 ">{title}</h1>
            <p className="text-base pr-6 pl-6 pb-9 ">{content}</p>
          </div>
      </Link>
         
        </div>
    </div>
          
  )
}

export default Card