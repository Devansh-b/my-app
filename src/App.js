import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import logo2 from './components/images/logo2.jpg';
import Navbar from './components/Navbar';
import Homepage from './components/Homepage';
import Signup_form from './components/Signup_form';
import About from './components/About';
import Contact from './components/Contact';
import Userpage from './pages/Userpage';
import Student_Details_Page from './pages/Student_Details_Page';
import PostPage from './pages/PostPage';

function App() {
  return (
    <Router>
      
        
        <Navbar />

       
        <div className="">
          <Routes>
            <Route
              path="/"
              element={
                <div className="w-full space-y-4  bg-cover bg-center  bg-cover min-h-screen " style={{ backgroundImage: `url(${logo2})` }}>
                  <Homepage />
                  <Signup_form />
                </div>
              }
            />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/userpage" element={<Userpage />} />
            <Route path="/studentdetailsform" element={<Student_Details_Page />} />
            <Route path="/postpage" element={<PostPage />} />
          </Routes>
        </div>
      
    </Router>
  );
}

export default App;
