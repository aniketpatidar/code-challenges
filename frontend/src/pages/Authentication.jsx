import PropTypes from 'prop-types'
import { useState } from 'react'
import { validateEmail, validatePassword } from '../utils/validation'
import { Link } from 'react-router-dom'

const initiateError = {
  email: '',
  password: ''
}
const Authentication = ({page}) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(initiateError)

  const handleEmail = (e) => {
    setEmail(e.target.value)
  }

  const handlePassword = (e) => {
    setPassword(e.target.value)
  }

  const handleSubmit = (e) => {
    // e.preventDefault()
    if (!validateEmail(email)) {
      setError({ ...error, email: 'Invalid email' })
    }
    if (!validatePassword(password)) {
      setError({ ...error, password: 'Password must be at least 8 characters long' })
    }
  }

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 py-12">
        <h2 className="text-2xl font-bold">
          {page === Page.Login ? (
            <p>Login</p>
          ) : (
            <p>Register</p>
          )}
        </h2>

        {page === Page.Login ? (
          <p className="text-medium mt-2">Don't have an account? <Link to="/register" className="text-blue-500">Register</Link></p>
        ) : (
          <p className="text-medium mt-2">Already have an account? <Link to="/login" className="text-blue-500">Login</Link></p>
        )}

        <form className="mt-6 max-w-96 flex flex-col gap-8" onSubmit={handleSubmit}>
          <div>
            <input
              name="email"
              type="email"
              placeholder="Email"
              className="p-2 border border-gray-300 rounded-md w-full"
              value={email}
              onChange={handleEmail}
            />

            { error.email && <p className="text-sm text-medium text-red-500 mt-2">{ error.email }</p> }
          </div>

          <div>
            <input
              name="password"
              type="password"
              placeholder="Password"
              className="p-2 border border-gray-300 rounded-md w-full"
              value={password}onChange={handlePassword}
            />

            { error.password && <p className="text-sm text-medium text-red-500 mt-2">{ error.password }</p> }
          </div>

          <button className="bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-md" type="submit">
            {page === Page.Login ? (
              <p>Login</p>
            ) : (
              <p>Register</p>
            )}
          </button>
        </form>
      </div>
    </div>
  )
}

export const Page = Object.freeze({ Login: 0, Register: 1 })

Authentication.propTypes = {
  page: PropTypes.number.isRequired
}
export default Authentication
