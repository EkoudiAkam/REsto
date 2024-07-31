import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home/Home';
import SignIn from './Login/SignIn';
import SignUp from './Login/SignUp';
import Contact from './Contact/Contact';
import Reservation from './Reservation/Reservation';
import Restaurant from './Restaurants/Restaurant';
import axios from 'axios'; 


function App() {
  const handleSignIn = async (formData) => {
    try {
      const response = await axios.post('/signIn', formData);
      console.log(response.data); 

    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signIn" element={<SignIn handleSignIn={handleSignIn} />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/reservation" element={<Reservation />} />
        <Route path="/restaurant" element={<Restaurant />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
