import { useContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import Loading from "../../components/ui/Loading"
import Card from "../../components/ui/Card"
import Button from "../../components/ui/Button"
import useAxios from "../../hooks/useAxios"
import { AuthContext } from "../../context/AuthProvider"


const Tickets = () => {
  const [tickets, setTickets] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)
  const axiosSecure = useAxios()
  const navigate = useNavigate()
  const {user} = useContext(AuthContext)

  useEffect(() => {
    const fetchTickets = async () => {
      setIsLoading(true)
      try {
        // Simulate API call
        const res = await axiosSecure.get(`/tickets?email=${user?.email}`)
        setTickets(res?.data)
        // setTickets([
        //   { id: 1, title: "Login Issue", status: "Open" },
        //   { id: 2, title: "Payment Problem", status: "In Progress" },
        //   { id: 3, title: "Feature Request", status: "Closed" },
        // ])
        
      } catch (err) {
        setError(err.message)
      }
      finally{
        setIsLoading(false)
      }
    }

    fetchTickets()
  }, [])

  if (isLoading) {
    return (
      <div className="h-screen">
        <Loading size="large" />
      </div>
    )
  }

  if (error) {
    throw new Error(error)
  }

  return (
    <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">My Tickets</h1>
      <div className="space-y-4">
        {tickets.map((ticket) => (
          <Card key={ticket.id}>
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-lg font-semibold text-gray-900">{ticket.subject}</h2>
                <p className="text-gray-600">Status: {ticket.status}</p>
              </div>
              <Button onClick={() => navigate(`/tickets/edit/${ticket.id}`)}>View Details</Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}

export default Tickets

