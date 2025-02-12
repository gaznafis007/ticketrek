"use client"

import { useState, useEffect } from "react"

import { FaTrash } from "react-icons/fa"
import Loading from "../../components/ui/Loading"
import Button from "../../components/ui/Button"
import useAxios from "../../hooks/useAxios"

const AllUsers = () => {
  const [users, setUsers] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const axiosSecure = useAxios()

  useEffect(() => {
    fetchUsers()
  }, [])

  const fetchUsers = async () => {
    setIsLoading(true)
    try {
      // Simulate API call
    //   await new Promise((resolve) => setTimeout(resolve, 1000))
    //   const mockUsers = [
    //     { id: 1, name: "John Doe", email: "john@example.com", role: "admin" },
    //     { id: 2, name: "Jane Smith", email: "jane@example.com", role: "user" },
    //     { id: 3, name: "Bob Johnson", email: "bob@example.com", role: "user" },
    //   ]
    const res = await axiosSecure.get('/users')
      setUsers(res?.data)
    } catch (error) {
      console.error("Error fetching users:", error)
      // Handle error (e.g., show error message)
    } finally {
      setIsLoading(false)
    }
  }

  if (isLoading) {
    return (
      <div className="h-screen flex items-center justify-center">
        <Loading size="large" />
      </div>
    )
  }

  return (
    <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">All Users</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Name
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Email
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Role
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {users.map((user) => (
              <tr key={user.id}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">{user.name}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-500">{user.email}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span
                    className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      user.role === "admin" ? "bg-red-100 text-red-800" : "bg-green-100 text-green-800"
                    }`}
                  >
                    {user.role}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default AllUsers

