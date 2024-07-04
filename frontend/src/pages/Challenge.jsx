import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { getChallenge } from '../apis/challenges'
import { useCookies } from 'react-cookie'
import RichTextEditor from '../elements/RichTextViewer'

const Challenge = () => {
  const [cookies] = useCookies(['jwt'])
  const [challenge, setChallenge] = useState(null)
  const { pathname } = useLocation()

  useEffect(() => {
    const segment = pathname.split('/')
    const challengeId = segment[segment.length - 1]
    getChallengeApi(challengeId)
  }, [])

  const getChallengeApi = async (id) => {
    const [result, error] = await getChallenge(cookies.jwt, id)
    handleResponse([result, error])
  }

  const handleResponse = async ([response, error]) => {
    if (error) {
    } else {
      const data = await response
      setChallenge(data)
    }
  }
  return (
    <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 py-12">
      { challenge &&
        <div>
          <h1 className="text-2xl font-bold my-10">{challenge.title}</h1>
          <RichTextEditor content={challenge.description} readOnly={true} />
        </div>
      }
    </div>
  );
}

export default Challenge
