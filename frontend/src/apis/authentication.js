import { domain } from '../config';

export const register = async (data) => {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  };

  try {
    const response = await fetch(`${domain}/users`, options);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const result = await response.json();
    return [result, ''];
  } catch (error) {
    return ['', 'An error occurred: ' + error];
  }
}

export const login = async (data) => {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  };

  try {
    const response = await fetch(`${domain}/users/sign_in`, options);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const result = await response.json();
    return [result, ''];
  } catch (error) {
    return ['', 'An error occurred: ' + error];
  }
}
