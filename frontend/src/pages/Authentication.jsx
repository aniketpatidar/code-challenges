import PropTypes from 'prop-types'
import { useState, useEffect } from 'react'
import { validateEmail, validatePassword } from '../utils/validation'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { register, login } from '../apis/authentication'
import { useCookies } from 'react-cookie'
import Button from '../elements/Button'

const initiateError = {
  email: '',
  password: '',
  api: ''
}
const Authentication = ({page}) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(initiateError)
  const navigate = useNavigate()
  const [cookies, setCookie] = useCookies(['jwt'])
  useEffect(() => {
    if (cookies.jwt) {
      navigate('/')
    }
  }, [])

  const handleEmail = (e) => {
    setEmail(e.target.value)
  }

  const handlePassword = (e) => {
    setPassword(e.target.value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    let newError = {}

    if (!validateEmail(email)) {
      newError = { ...newError, email: 'Invalid email'}
    }
    if (!validatePassword(password)) {
      newError = { ...newError, password: 'Password must be at least 8 characters long' }
    }

    setError(newError)

    const hasError = Object.values(newError).some((err) => err !== '')
    if (hasError) {
      return
    }

    if (page == Page.Login) {
      // Login
      const [response, error] = await login({
        user: {
          email: email,
          password: password
        }
      })
      handleResponse([response, error])
    } else {
      // Register
      const [response, error] = await register({
        user: {
          email: email,
          password: password
        }
      })
      handleResponse([response, error])
    }
  }

  const handleResponse = async ([response, error]) => {
    if (error) {
      setError({ ...error, api: error })
    } else {
      const jwt = response.headers.get('Authorization')
      const result = await response.json()
      const message = result.message
      const user = result.user
      setCookie('jwt', jwt)
      navigate('/')
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

        { error.api && <p className="text-sm text-medium text-red-500 mt-2">{ error.api }</p> }
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

          <Button
            // childClassName=''
            // parentClassName=''
            onClick={handleSubmit}
          >
            {page === Page.Login ? (
              <p>Login</p>
            ) : (
              <p>Register</p>
            )}
          </Button>
        </form>

        {page === Page.Login ? (
          <p className="text-medium mt-4">Don't have an account? <Link to="/register" className="text-blue-500">Register</Link></p>
        ) : (
          <p className="text-medium mt-4">Already have an account? <Link to="/login" className="text-blue-500">Login</Link></p>
        )}
      </div>
    </div>
  )
}

export const Page = Object.freeze({ Login: 0, Register: 1 })

Authentication.propTypes = {
  page: PropTypes.number.isRequired
}
export default Authentication
