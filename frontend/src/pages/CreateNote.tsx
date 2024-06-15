import React, { useState } from 'react'
import { Appbar } from '../components/Appbar'
import axios from 'axios';
import { Link } from 'react-router-dom';
function CreateNote() {
const [title,setTitle]=useState("");

const [content,setContent]=useState("");


  return (
    
    <div className='bg-violet-200 min-h-screen'>
<Appbar/>
<div className="max-w-md mx-auto mt-8 p-4 bg-violet-300 shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Create a New Note</h2>
      
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
            Title
          </label>
          <input
            id="title"
            type="text"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          onChange={(e) =>{
            setTitle(e.target.value)
          }}
            
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="content">
            Content
          </label>
          <textarea
            id="content"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            rows="5"
            onChange={(e) =>{
              setContent(e.target.value)
            }}
          />
        </div>
        <div className="flex items-center justify-between">
        <Link to={"/"}>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            onClick={async ()=>{
              const response=await axios.post("https://backend.pujaharikolin.workers.dev/api/v1/notes/create",{
                        title,
                        content
              });
             alert("success")
              // navigate(`/note/${response.data.id}`)
              }} 
          >
            Add Note
          </button></Link>
        </div>
      
    </div>
  

    </div>
  )
}

export default CreateNote