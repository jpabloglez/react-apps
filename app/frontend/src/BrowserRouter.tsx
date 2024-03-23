import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ToDoList from './components/todolist/ToDoList';
// Import other pages or components here

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/todolist" element={<ToDoList />} />
        {/* Define other routes here */}
      </Routes>
    </Router>
  );
}

export default App;
