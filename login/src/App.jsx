import React ,{useState}from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/LoginForm";
import Profile from "./components/Profile";
import Signup from "./components/Register";

function App() {
  const [user, setUser] = useState(null); 
  return (
    <Router>
      <Routes>
      
        <Route path="/" element={<Login setUser={setUser}/>} />
        <Route path="/profile" element={<Profile user={user}/>} />
        <Route path="/signup" element={<Signup />} />
        
      </Routes>
    </Router>
  );
}

export default App;
