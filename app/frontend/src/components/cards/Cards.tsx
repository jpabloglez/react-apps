import React from "react";
import ToDoList from "../todolist/ToDoList";
//import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";


const CrystalTextContainer = ({ title }) => {
  return (
    <div className="bg-green-300 bg-opacity-20 backdrop-filter backdrop-blur-lg border border-green-100 shadow-sm rounded-lg p-4 hover:bg-opacity-30 transition duration-300 ease-in-out mt-2">
      <h2 className="text-lg font-bold text-green-700">{title}</h2>
    </div>
  );
};



export default function Cards() {
  return (
    <div className="bg-gray-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
          <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
          <div className="group relative">
              <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
                <Link
                  to="/gallery"
                  className="text-blue-500 hover:text-blue-700"
                >
                  <img
                    src="gallery.webp"
                    alt="Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant."
                    className="h-full w-full object-cover object-center hover:scale-110"
                  ></img>
                </Link>
              </div>
              <CrystalTextContainer title="Image gallery" />
            </div>

            <div className="group relative">
              <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
                <Link
                  to="/todolist"
                  className="text-blue-500 hover:text-blue-700"
                >
                  <img
                    src="todolist.webp"
                    alt="Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant."
                    className="h-full w-full object-cover object-center hover:scale-110"
                  ></img>
                </Link>
              </div>
              <CrystalTextContainer title="To do list" />
            </div>

            <div className="group relative">
              <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
                <Link
                  to="/todolist"
                  className="text-blue-500 hover:text-blue-700"
                >
                  <img
                    src="music.webp"
                    alt="Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant."
                    className="h-full w-full object-cover object-center hover:scale-110"
                  ></img>
                </Link>
              </div>
              <CrystalTextContainer title="Music references" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
