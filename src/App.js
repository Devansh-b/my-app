import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import logo2 from './components/images/logo2.jpg';
import Navbar from './components/Navbar';
import Homepage from './components/Homepage';
import Student_Signup_form from './components/Student_Signup_form';
import About from './components/About';
import Contact from './components/Contact';
import Userpage from './pages/Userpage';
import Student_Details_Page from './pages/Student_Details_Page';
import PostPage from './pages/PostPage';
import AdminPage from './pages/AdminPage';
import StudentSignUpPage from './pages/StudentSignUpPage';

function App() {
  return (
    <Router>
      
        
        <Navbar />

       
        <div className="">
          <Routes>
            <Route
              path="/"
              element={
                <div className="w-full space-y-4  bg-cover bg-center min-h-screen " style={{ backgroundImage: `url(${logo2})` }}>
                  <Homepage />
                  <Student_Signup_form />
                </div>
              }
            />
            <Route path='/studentsignup' element={ <StudentSignUpPage/> } />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/userpage" element={<Userpage />} />
            <Route path="/studentdetailsform" element={<Student_Details_Page />} />
            <Route path="/postpage" element={<PostPage />} />
            <Route path='/adminpage' element={<AdminPage/>} />
          </Routes>
        </div>
      
    </Router>
  );
}

export default App;
