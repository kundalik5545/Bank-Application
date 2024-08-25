import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "../src/components/Navbar";
import Home from "../src/pages/Home";

//User module
import User from "./pages/Users/User";
import RegistrationForm from "./pages/Users/RegistrationFrom";
import LoginForm from "./pages/Users/LoginForm";

//Bank Pages import
import Bank from "./pages/Bank/Bank";
import AddBank from "./pages/Bank/AddBank";

// Footer
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* User Module Links */}
          <Route path="/user" element={<User />} />
          <Route path="/user/register" element={<RegistrationForm />} />
          <Route path="/user/login" element={<LoginForm />} />

          {/* Bank Page Route */}
          <Route path="/bank" element={<Bank />} />
          <Route path="/bank/addbank" element={<AddBank />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
