import React, { useState } from "react";
import Header from "./components/Header/Header";
import { UserProvider } from './UserContext';
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import FormUser from "./components/FormUser/FormUser";
import Jokes from "./components/Jokes/Jokes";
import Start from "./components/Start/Start";
import User from "./components/User/User";





function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Estado para controlar el inicio de sesión

  return (
    <UserProvider>
      <BrowserRouter>
        <>
          {isLoggedIn && <Header title="WAHAHA" />}

          <div >
            <Routes>
              <Route path="/" element={<Start setIsLoggedIn={setIsLoggedIn} />} />

              <Route path="/login/create" element={<FormUser />} />
              <Route path="/jokes" element={<Jokes />} />
              <Route path="/user" element={<User />} />
            </Routes>
          </div>
        </>
      </BrowserRouter>
    </UserProvider>
  )
}

export default App;