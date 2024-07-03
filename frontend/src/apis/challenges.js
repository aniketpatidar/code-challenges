import { domain } from '../config'

export const createChallenge = async (jwt, data) => {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': jwt
    },
    body: JSON.stringify(data)
  }

  try {
    const response = await fetch(`${domain}/api/v1/challenges`, options)
    if (response.ok) {
      return [response.json(), '']
    }
    const errorMessage = await response.text()
    return ['', 'Network response was not ok: ' + errorMessage]
  } catch (error) {
    return ['', 'An error occurred: ' + error]
  }
}

export const getChallenges = async (jwt) => {
  const options = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': jwt
    }
  }

  try {
    const response = await fetch(`${domain}/api/v1/challenges/get_challenges`, options)
    if (response.ok) {
      return [await response.json(), '']
    }
    const errorMessage = await response.text()
    return ['', 'Network response was not ok: ' + errorMessage]
  } catch (error) {
    return ['', 'An error occurred: ' + error]
  }
}
