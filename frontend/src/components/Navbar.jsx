import { useNavigate } from 'react-router-dom'
import { logout } from '../apis/authentication'
import { useCookies } from 'react-cookie'
import { useState } from 'react'
import Button from '../elements/Button'

const Navbar = () => {
  const [cookies, setCookie, removeCookie] = useCookies([])
  const [jwt, setJwt] = useState(cookies.jwt)
  const navigate = useNavigate()

  const handleLogout = async (e) => {
    const [result, error] = await logout(cookies.jwt)
    handleResponse([result, error])
    navigate('/login')
  }

  const handleLogin = async (e) => {
    navigate('/login')
  }

  const handleResponse = async ([response, error]) => {
    if (error) {
      removeCookie('jwt')
    } else {
      removeCookie('jwt')
      navigate('/')
    }
    setJwt(null)
  }

  return (
    <div className="bg-gray-800 shadow">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 items-center" >
        <nav className="bg-gray-800 text-white p-4 items-center flex justify-between">
          <div className="flex items-center gap-3">
            <img
              src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
              alt="Workflow"
              className="h-8 w-auto">
            </img>
            Code Challenges
          </div>
          {/* <ul className="flex gap-20">
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
          </ul> */}
          <div className="">
            { jwt ? (
              <Button onClick={handleLogout}><p>Logout</p></Button>
            ) : (
              <Button onClick={handleLogin}><p>Login</p></Button>
            )}
          </div>
        </nav>
      </div>
    </div>
  );
}
export default Navbar