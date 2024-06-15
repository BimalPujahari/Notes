import { Link } from 'react-router-dom';

export const Appbar = () => {
  return (
    <header className="bg-violet-500 text-white shadow-md py-4">
      <div className="container mx-auto flex justify-between items-center px-4">
        <div className="text-lg font-bold">
          <Link to={"/"}>Notes</Link>
        </div>
        <nav>
          <ul className="flex space-x-4">
            <li><a href="/create" className="hover:text-gray-300">Create</a></li>
           
          </ul>
        </nav>
      </div>
    </header>
  );
}





