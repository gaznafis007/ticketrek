import { Link } from "react-router-dom"
import Button from "../../components/ui/Button"


const Home = () => {

  return (
    <div className="bg-gray-50">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
          <div>
            <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
              Welcome to <span className="text-indigo-600">Ticketrek</span>
            </h1>
            <p className="mt-3 max-w-md mx-auto text-lg text-gray-500 sm:text-xl md:mt-5 md:max-w-3xl">
              Streamline your support process with our intuitive ticket management system. Efficiently handle customer
              inquiries and track issues in real-time.
            </p>
            <div className="mt-10 sm:flex sm:justify-center lg:justify-start">
              <div className="rounded-md shadow">
                <Link to="/register">
                  <Button variant="primary">Get Started</Button>
                </Link>
              </div>
              <div className="mt-3 sm:mt-0 sm:ml-3">
                <Link to="/login">
                  <Button variant="secondary">Sign In</Button>
                </Link>
              </div>
            </div>
          </div>
          <div className="mt-10 lg:mt-0">
            <img
              className="w-full rounded-lg shadow-xl"
              src="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80"
              alt="Ticketrek dashboard"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home

