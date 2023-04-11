import { NavLink, Link } from "react-router-dom";

function Navbar() {
  return (
    <header className="bg-red-300 text-white px-8 py-4">
      <nav className="flex justify-between items-center">
        <h3 className="text-xl font-bold">
          <Link to="/">My Brand</Link>
        </h3>
        <ul className="flex gap-4">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/blog">Blog</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
