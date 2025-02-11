import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import Loading from "../../components/ui/Loading"
import Card from "../../components/ui/Card"
import Button from "../../components/ui/Button"


const Tickets = () => {
  const [tickets, setTickets] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)
  const navigate = useNavigate()

  useEffect(() => {
    const fetchTickets = async () => {
      try {
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1500))

        // Simulate error (uncomment to test error handling)
        // throw new Error("Failed to fetch tickets")

        setTickets([
          { id: 1, title: "Login Issue", status: "Open" },
          { id: 2, title: "Payment Problem", status: "In Progress" },
          { id: 3, title: "Feature Request", status: "Closed" },
        ])
        setIsLoading(false)
      } catch (err) {
        setError(err.message)
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
                <h2 className="text-lg font-semibold text-gray-900">{ticket.title}</h2>
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

