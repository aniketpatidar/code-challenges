import { domain } from '../config'

export const getChallenges = async (jwt, data) => {
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
      return [await response.json(), '']
    }
    const errorMessage = await response.text()
    return ['', 'Network response was not ok: ' + errorMessage]
  } catch (error) {
    return ['', 'An error occurred: ' + error]
  }
}
