import  { useEffect, useState } from 'react'
import Card from '../components/Card';
import axios from 'axios';
import { Appbar } from '../components/Appbar';
import Spinner from '../components/Spinner';

interface Note {
  id: string;
  title: string;
  content: string;
}

function Notes() {
  const [notes, setNotes] = useState<Note[]>([]);
  const [loading,setLoading] = useState(false)
  useEffect(() => {
    axios.get("https://backend.pujaharikolin.workers.dev/api/v1/notes/bulk")
      .then((response) => {
        setNotes(response.data);
        setLoading(true);
      })
  }, [])

if(!loading){
return <div><Spinner/></div>  
}

  return (
    <div className='bg-violet-200'>
      <Appbar />
      
      {/* <Card id='122232' title='hey there' content='hello i am bimal prasad'/> */}
      {notes.map(note =>
        <Card
        
         id={note.id}
          title={note.title}
          content={note.content}
        />
      )}
    </div>
  )
}

export default Notes