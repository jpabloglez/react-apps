import React from "react";
import Cards from "../cards/Cards";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Navbar({}) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <nav className="flex items-center justify-between flex-wrap bg-neutral-100 p-6 rounded-lg shadow-md">
      <div className="bg-clip-border p-2 bg-green-100 border-2 border-green-300 rounded-md flex items-center flex-shrink-0 mr-6 shadow-sm hover:scale-110">
        <Link to="/" className="font-semibold text-xl tracking-tight">
          <h3 className="text-gray-500">React apps</h3>
        </Link>
      </div>
      <div className="bg-clip-border p-2 bg-green-100 border-2 border-green-300 rounded-md flex items-center flex-shrink-0 mr-6 shadow-sm hover:scale-110">
        <div className="text-sm lg:flex-grow">
          <Link to="/about" className="font-semibold text-xl tracking-tight">
            <h3 className="text-gray-500">About</h3>
          </Link>
        </div>
      </div>
    </nav>
  );
}
