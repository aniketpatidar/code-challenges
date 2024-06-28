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
    if (response.ok) {
      return [response, ''];
    }
    if (response.status === 422) {
      return ['', 'Email has already been taken'];
    }
    const errorMessage = await response.text();
    return ['', 'Ńetwork response was not ok: ' + errorMessage];
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
    if (response.ok) {
      return [response, ''];
    }
    if (response.status === 401) {
      return ['', 'Invalid email or password'];
    }
    const errorMessage = await response.text();
    return ['', 'Ńetwork response was not ok: ' + errorMessage];
  } catch (error) {
    return ['', 'An error occurred: ' + error];
  }
}

export const logout = async (jwt) => {
  const options = {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': jwt
    },
    body: JSON.stringify(jwt)
  };

  try {
    const response = await fetch(`${domain}/users/sign_out`, options);
    if (response.ok) {
      return [response, ''];
    }
    if (response.status === 401) {
      return ['', 'Invalid email or password'];
    }
    const errorMessage = await response.text();
    return ['', 'Ńetwork response was not ok: ' + errorMessage];
  } catch (error) {
    return ['', 'An error occurred: ' + error];
  }
}
