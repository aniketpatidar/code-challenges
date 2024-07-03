import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Features from './components/Features'
import ChallengeList from './container/ChallengeList'

function App() {
  return (
    <>
      <Navbar />
      <ChallengeList />
      <Features />
      <Footer />
    </>
  )
}

export default App
