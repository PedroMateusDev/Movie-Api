import React from 'react'
import './index.css';
import SearchMovie from './SearchMovie';

const App = () => {
  return (
    <div className='container'>
      <h1 className='title text-amber-400 tracking-in-expand focus-in-contract-bck'>Movie API</h1>
      <h className="Subtitle focus-in-contract-bck">Search Any Movie</h>
      <SearchMovie />
    </div>
  )
}

export default App
