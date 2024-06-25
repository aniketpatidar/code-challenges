import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Features from './components/Features'

function App() {
  return (
    <>
      <Navbar />
      <h1 className="text-3xl font-bold underline text-center">
        Hello world!
      </h1>
      <Features />
      <Footer />
    </>
  )
}

export default App
