import { BrowserRouter, Route, Routes } from 'react-router-dom'
import CreateNote from './pages/CreateNote'
import FullNote from './pages/FullNote'
import Notes from './pages/Notes'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Notes />} />
          <Route path="/create" element={<CreateNote />} />
          <Route path="/fullnote" element={<FullNote />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App