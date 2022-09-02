import React from "react";
import axios from "axios";
import Series from "./components/Series";
import Filmes from "./components/Filmes";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Homepage from "./components/Homepage";
import Error from "./components/Error";

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <h1>page da Turma</h1>
        <ul>
          <li>
            <Link to="/series">Series</Link>
          </li>
          <li>
            <Link to="/filmes">Filmes</Link>
          </li>
          <li>
            <Link to="/">Home</Link>
          </li>
        </ul>

        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/filmes" element={<Filmes />} />
          <Route path="/series" element={<Series />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    );
  }
}
