
import { FaTicketAlt, FaClipboardList } from "react-icons/fa"
import Card from "./ui/Card"
import Button from "./ui/Button"
import { useNavigate } from "react-router-dom"

const CustomerDashboard = () => {
    const navigate = useNavigate();
    const handleViewTicket = () =>{
        navigate('/tickets')
    }
    const handleCreateTicket = () =>{
        navigate('/tickets/create')
    }
  return (
    <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Customer Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-lg font-semibold text-gray-900">My Tickets</h2>
              <p className="text-gray-600">View and manage your support tickets</p>
            </div>
            <FaTicketAlt className="text-4xl text-indigo-600" />
          </div>
          <div className="mt-4">
            <Button onClick={handleViewTicket}>View Tickets</Button>
          </div>
        </Card>
        <Card>
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-lg font-semibold text-gray-900">Create New Ticket</h2>
              <p className="text-gray-600">Submit a new support request</p>
            </div>
            <FaClipboardList className="text-4xl text-indigo-600" />
          </div>
          <div className="mt-4">
            <Button onClick={handleCreateTicket}>Create Ticket</Button>
          </div>
        </Card>
      </div>
    </div>
  )
}

export default CustomerDashboard

