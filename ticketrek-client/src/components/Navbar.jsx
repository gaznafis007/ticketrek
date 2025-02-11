import { Link } from "react-router-dom"
import { FaTicketAlt } from "react-icons/fa"
import { useContext } from "react"
import { AuthContext } from "../context/AuthProvider"

const Navbar = () => {
  const{user, logOut, setUser} = useContext(AuthContext)
  const handleLogout = async() =>{
    await logOut()
    setUser(null)
    console.log('hello')
  }
  return (
    <nav className="bg-indigo-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <FaTicketAlt className="h-8 w-8 mr-2" />
              <span className="font-bold text-xl">Ticketrek</span>
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link to="/" className="hover:bg-indigo-700 px-3 py-2 rounded-md text-sm font-medium">
                Home
              </Link>
              <Link to="/dashboard" className="hover:bg-indigo-700 px-3 py-2 rounded-md text-sm font-medium">
                Dashboard
              </Link>
              <Link to="/tickets" className="hover:bg-indigo-700 px-3 py-2 rounded-md text-sm font-medium">
                Tickets
              </Link>
              {
                user?.uid ? <>
                <p className="hover:bg-indigo-700 px-3 py-2 rounded-md text-sm font-medium">
                {user?.displayName}
              </p>
              <p onClick={handleLogout} className="hover:bg-indigo-700 px-3 py-2 rounded-md text-sm font-medium cursor-pointer">
                Logout
              </p>
                </> : <>
                  <Link to="/login" className="hover:bg-indigo-700 px-3 py-2 rounded-md text-sm font-medium">
                Login
              </Link>
              <Link to="/register" className="hover:bg-indigo-700 px-3 py-2 rounded-md text-sm font-medium">
                Register
              </Link>
                </>
              }
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar

