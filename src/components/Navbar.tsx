import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white p-4 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-xl font-bold">My Portfolio</div>
        <ul className="flex space-x-4">
          <li><Link to="/" className="hover:text-gray-400">About</Link></li>
          <li><Link to="/experience" className="hover:text-gray-400">Experience</Link></li>
          <li><Link to="/skills" className="hover:text-gray-400">Skills</Link></li>
          <li><Link to="/projects" className="hover:text-gray-400">Projects</Link></li>
          <li><Link to="/education" className="hover:text-gray-400">Education</Link></li>
          <li><Link to="/contact" className="hover:text-gray-400">Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;