import { getChallenges } from '../apis/challenges'
import { useCookies } from 'react-cookie'
import { useState, useEffect } from 'react'
import ChallengeCard from '../components/ChallengeCard'

const ChallengeList = () => {
  const [cookies] = useCookies(['jwt'])
  const [activeChallenge, setActiveChallenge] = useState([])
  const [upcomingChallenge, setUpcomingChallenge] = useState([])

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
      const data = await response
      setActiveChallenge(data.active)
      setUpcomingChallenge(data.upcoming)
    }
  }

  return (
    <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 py-12">
      {
        activeChallenge.length > 0 &&
        <div>
          <h1 className="text-2xl font-bold my-10">Active Challenge</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {activeChallenge.map((challenge) => {
              return <ChallengeCard key={challenge.id} challenge={challenge} />
            })}
          </div>
        </div>
      }
      {
        upcomingChallenge.length > 0 &&
        <div>
          <h1 className="text-2xl font-bold my-10">Upcoming Challenge</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {upcomingChallenge.map((challenge, index) => {
              return <ChallengeCard key={challenge.id} challenge={challenge} />
            })}
          </div>
        </div>
      }
    </div>
  )
}

export default ChallengeList
