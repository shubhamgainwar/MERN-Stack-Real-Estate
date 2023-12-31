import React from "react";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-neutral-400 shadow-md">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
        <Link to="/">
          <div className="text-3xl font-semibold ">
            <span className="bg-clip-text text-transparent bg-gradient-to-r to-slate-900 from-amber-600">
              XiloReality
            </span>
          </div>
        </Link>
        <form className="bg-slate-100 p-3 rounded-lg flex items-center">
          <input
            type="text"
            placeholder="search.."
            className="bg-transparent focus:outline-none w-24 sm:w-64"
          />
          <FaSearch className="text-amber-600" />
        </form>
        <ul className="flex gap-4">
          <Link to="/">
            <li className="hidden sm:inline text-slate-900 hover:bg-amber-600 hover:text-slate-700">
              Home
            </li>
          </Link>
          <Link to="/about">
            <li className="hidden sm:inline text-slate-900 hover:text-amber-600">
              About
            </li>
          </Link>
          <Link to="/sign-in">
            <li className=" text-slate-900 hover:text-amber-600"> Sign in</li>
          </Link>
        </ul>
      </div>
    </header>
  );
};

export default Header;
