import React, { useState } from 'react'
import './App.css'
import TopBar from './component/TopBar'
import Article from './component/Article'
import HomePage from './component/HomePage'

function App() {

  const [title, setTitle]=useState("Sample Title")
 

  return (
    <>
      <HomePage />
      <TopBar />
      <Article title={title} />
    </>
  )
}

export default App