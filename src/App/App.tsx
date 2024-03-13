import React from 'react';
import './App.css';
import {Navigate, Routes, Route, HashRouter} from "react-router-dom";
import {Home} from "./Home/Home";
import {NavbarComponent} from "./NavbarComponent/NavbarComponent";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Team} from "./Team/Team";
import {Services} from "./Services/Services";

function App() {

    return (
      <HashRouter>
          <NavbarComponent />
          <Routes>
              <Route path="/" Component={Home} />
              <Route path="/team" Component={Team} />
              <Route path="/services" Component={Services} />
              <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
      </HashRouter>
  );
}

export default App;
