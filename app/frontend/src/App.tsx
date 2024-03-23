import { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from "./components/navbars/Navbar";
import Footer from "./components/footers/Footer";
import Cards from "./components/cards/Cards";
import TodoList from "./components/todolist/ToDoList";
import About from "./components/about/About";
import Gallery from "./components/gallery/Gallery";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      {/* Navigation bar */}
      <Navbar />

      <div className="container mx-auto border-solid border-2 rounded-lg">
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/todolist" element={<TodoList />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/" element={<Cards />} />
        </Routes>
      </div>

      {/* Footer */}
      <Footer />
    </Router>
  );
}


export default App;
