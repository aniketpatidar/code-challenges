import { getChallenges } from '../apis/challenges'
import { useCookies } from 'react-cookie'
import { useState, useEffect } from 'react'


const ChallengeList = () => {
  const [cookies] = useCookies(['jwt'])
  const [activeChallenge, setActiveChallenge] = useState('')
  const [upcomingChallenge, setUpcomingChallenge] = useState('')

  useEffect(() => {
    getChallengesApi(cookies.jwt)
  }, [])

  const getChallengesApi = async () => {
    const [result, error] = await getChallenges(cookies.jwt)
    handleResponse([result, error])
  }

  const handleResponse = async ([response, error]) => {
    if (error) {
    } else {
      if (response.status === 201) {
        const data = await response.json()
        setActiveChallenge(data.active)
        setUpcomingChallenge(data.upcoming)
      }
    }
  }

  return (
    <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl">
        Add Challenge
        Active Challenge: {activeChallenge.length}
        Upcoming Challenge: {upcomingChallenge.length}
      </h1>
    </div>
  )
}

export default ChallengeList
