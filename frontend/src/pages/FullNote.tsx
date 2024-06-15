import React from 'react';
import { Appbar } from '../components/Appbar';
import { useSearchParams } from 'react-router-dom';
import axios from 'axios';
import { useEffect,useState } from 'react';
import Spinner from '../components/Spinner';

const FullNote = () => {
  const [blog, setBlog] = useState({ content: '',title:""}); // Initialize with an empty string
  const [searchParams] = useSearchParams();
  const [loading,setLoading]=useState(false)
  const id = searchParams.get('id');

  useEffect(() => {
    axios.get(`https://backend.pujaharikolin.workers.dev/api/v1/notes/${id}`)
      .then((response) => {
        setBlog(response.data);
        setLoading(true)
      })
  }, [id]);

if(!loading){
return <div>
<Spinner/>
</div>
}

  return (
    <div>
      <Appbar />
       {/* <div className="min-h-screen mx-auto p-6 bg-violet-200 rounded-lg shadow-md">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">hi</h2>
        <p className="text-gray-700 text-lg">bro</p>
      </div> */}
      <div className="min-h-screen mx-auto p-6 bg-violet-200 rounded-lg shadow-md">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">{blog.title}</h2>
        <p className="text-gray-700 text-lg">{blog.content}</p>
      </div>
    </div>
  );
}

export default FullNote;