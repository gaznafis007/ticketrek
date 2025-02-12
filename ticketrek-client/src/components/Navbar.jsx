import { Link } from "react-router-dom"
import { FaTicketAlt } from "react-icons/fa"
import { useContext, useState } from "react"
import { AuthContext } from "../context/AuthProvider"

const Navbar = () => {
  const { user, logOut, setUser } = useContext(AuthContext)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const handleLogout = async () => {
    await logOut()
    setUser(null)
    // console.log("hello")
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
          <div
            className={`${isMobileMenuOpen ? "block" : "hidden"} md:block absolute md:relative top-16 left-0 right-0 bg-indigo-600 md:top-0`}
          >
            <div className="flex flex-col md:flex-row md:items-baseline md:space-x-4 px-2 pt-2 pb-3 md:p-0">
              <Link to="/" className="hover:bg-indigo-700 px-3 py-2 rounded-md text-sm font-medium block">
                Home
              </Link>
              <Link to="/dashboard" className="hover:bg-indigo-700 px-3 py-2 rounded-md text-sm font-medium block">
                Dashboard
              </Link>
              <Link to="/tickets" className="hover:bg-indigo-700 px-3 py-2 rounded-md text-sm font-medium block">
                Tickets
              </Link>
              {user?.uid ? (
                <>
                  <p className="hover:bg-indigo-700 px-3 py-2 rounded-md text-sm font-medium block">
                    {user?.displayName}
                  </p>
                  <p
                    onClick={handleLogout}
                    className="hover:bg-indigo-700 px-3 py-2 rounded-md text-sm font-medium cursor-pointer block"
                  >
                    Logout
                  </p>
                </>
              ) : (
                <>
                  <Link to="/login" className="hover:bg-indigo-700 px-3 py-2 rounded-md text-sm font-medium block">
                    Login
                  </Link>
                  <Link to="/register" className="hover:bg-indigo-700 px-3 py-2 rounded-md text-sm font-medium block">
                    Register
                  </Link>
                </>
              )}
            </div>
          </div>
          {/* small device */}
          <div className="md:hidden">
          <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="ml-4 md:hidden text-white focus:outline-none cursor-pointer"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar

