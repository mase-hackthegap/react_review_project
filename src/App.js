import React from 'react';
import { Route, Routes } from 'react-router-dom';

//import components
import AlbumList from './components/AlbumList';
import AboutProject from './components/AboutProject';
import Header from './components/Header';


function App() {
  return (
    <div>
      <Header/>
      {/* Establishes that we can use routes */}
      <Routes>
        {/* The individual routes to use */}
        <Route path="/" element={<AboutProject/>}/>
        <Route path="/albumlist" element={<AlbumList/>}/>
      </Routes>
    </div>
  );
}

export default App;