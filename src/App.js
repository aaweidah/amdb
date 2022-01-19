import React, { useState} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './components/Main';
import Navbar from './components/Navbar';
import mainJson from "./components/mainJson";
import TopMovies from './components/TopMovies';

const App = () => {
  
  const [movies, setMovies] = useState(mainJson);

  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className='bg-dark container-fluid movie-app justify-content-center'>
        <Navbar setMovies={setMovies}/>
      </div>
        <Routes>
          <Route path="/top100" element={<TopMovies className="bg-danger"/>}/>
            {/* <Navbar setMovies={setMovies}/> */}
          <Route path="/" element={<Main movies={movies} setMovies={setMovies}/>}/> 
            {/* <Main movies={movies}/> */}
        </Routes>
    </Router>
  )
}

export default App;
