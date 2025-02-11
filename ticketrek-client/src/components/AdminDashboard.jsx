
import { FaTicketAlt, FaUsers, FaChartBar } from "react-icons/fa"
import Card from "./ui/Card"
import Button from "./ui/Button"

const AdminDashboard = () => {
  return (
    <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Admin Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-lg font-semibold text-gray-900">All Tickets</h2>
              <p className="text-gray-600">Manage all support tickets</p>
            </div>
            <FaTicketAlt className="text-4xl text-indigo-600" />
          </div>
          <div className="mt-4">
            <Button>View All Tickets</Button>
          </div>
        </Card>
        <Card>
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-lg font-semibold text-gray-900">User Management</h2>
              <p className="text-gray-600">Manage user accounts</p>
            </div>
            <FaUsers className="text-4xl text-indigo-600" />
          </div>
          <div className="mt-4">
            <Button>Manage Users</Button>
          </div>
        </Card>
        <Card>
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-lg font-semibold text-gray-900">Analytics</h2>
              <p className="text-gray-600">View ticket statistics</p>
            </div>
            <FaChartBar className="text-4xl text-indigo-600" />
          </div>
          <div className="mt-4">
            <Button>View Analytics</Button>
          </div>
        </Card>
      </div>
    </div>
  )
}

export default AdminDashboard

