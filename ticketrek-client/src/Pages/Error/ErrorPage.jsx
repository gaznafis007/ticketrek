
import { FaExclamationTriangle } from "react-icons/fa"
import { Link, useRouteError } from "react-router-dom"
import Button from "../../components/ui/Button"

const ErrorPage = () => {
  const error = useRouteError()

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 text-center">
        <FaExclamationTriangle className="mx-auto h-16 w-16 text-indigo-600" />
        <h1 className="mt-6 text-3xl font-extrabold text-gray-900">Oops! Something went wrong</h1>
        <p className="mt-2 text-lg text-gray-600">
          {error?.statusText || error?.message || "An unexpected error occurred"}
        </p>
        {error?.status && <p className="mt-2 text-sm text-gray-500">Error {error.status}</p>}
        <div className="mt-6">
          <Link to="/">
            <Button>Go back home</Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ErrorPage

