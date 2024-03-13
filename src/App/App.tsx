import React from 'react';
import './App.css';
import { BrowserRouter, Routes , Route } from "react-router-dom";
import {Home} from "./Home/Home";
import {NavbarComponent} from "./NavbarComponent/NavbarComponent";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Team} from "./Team/Team";
import {Services} from "./Services/Services";

function App() {
  return (
      <BrowserRouter>
          <NavbarComponent />
          <Routes>
              <Route path="/" Component={Home} />
              <Route path="/team" Component={Team} />
              <Route path="/services" Component={Services} />
          </Routes>
      </BrowserRouter>
  );
}

export default App;
