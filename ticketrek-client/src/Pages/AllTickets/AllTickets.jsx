import { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom"
import { useForm } from "react-hook-form";

import { FaEdit, FaTrash } from "react-icons/fa";
import useAxios from "../../hooks/useAxios";
import Button from "../../components/ui/Button";
import Loading from "../../components/ui/Loading";

const AllTickets = () => {
  const [tickets, setTickets] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [editingTicket, setEditingTicket] = useState(null);
  const { register, handleSubmit } = useForm();
  const axiosSecure = useAxios();
  //   const navigate = useNavigate()

  useEffect(() => {
    fetchTickets();
  }, []);

  const fetchTickets = async () => {
    setIsLoading(true);
    try {
      // Simulate API call
      const res = await axiosSecure.get(`/tickets`);
      setTickets(res?.data);
    } catch (error) {
      console.error("Error fetching tickets:", error);
      // Handle error (e.g., show error message)
    } finally {
      setIsLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this ticket?")) {
      try {
        // Simulate API call
        const res = await axiosSecure.delete(`/tickets/${id}`);
        console.log(res?.data);
        if (res?.data?.deletedCount) {
          setTickets(tickets.filter((ticket) => ticket.id !== id));
        }
        // Show success message
      } catch (error) {
        console.error("Error deleting ticket:", error);
        // Show error message
      }
    }
  };

  const handleEditStatus = (ticket) => {
    setEditingTicket(ticket);
  };

  const onSubmitStatus = async (data) => {
    try {
      // Simulate API call
      const res = await axiosSecure.put(
        `/tickets/${editingTicket?.id}/status`,
        data
      );
      console.log(res?.data);
      const updatedTickets = tickets.map((t) =>
        t.id === editingTicket.id ? { ...t, status: data.status } : t
      );
      setTickets(updatedTickets);
      setEditingTicket(null);
      // Show success message
    } catch (error) {
      console.error("Error updating ticket status:", error);
      // Show error message
    }
  };

  if (isLoading) {
    return (
      <div className="h-screen flex items-center justify-center">
        <Loading size="large" />
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">All Tickets</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Subject
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Description
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Priority
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Status
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Update Status
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Delete
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {tickets.map((ticket) => (
              <tr key={ticket.id}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">
                    {ticket.subject}
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="text-sm text-gray-500">
                    {ticket.description}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span
                    className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      ticket.priority === "high"
                        ? "bg-red-100 text-red-800"
                        : ticket.priority === "medium"
                        ? "bg-yellow-100 text-yellow-800"
                        : "bg-green-100 text-green-800"
                    }`}
                  >
                    {ticket.priority}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {editingTicket && editingTicket.id === ticket.id ? (
                    <form
                      onSubmit={handleSubmit(onSubmitStatus)}
                      className="flex items-center"
                    >
                      <select
                        {...register("status")}
                        defaultValue={ticket.status}
                        className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                      >
                        <option value="open">Open</option>
                        <option value="in progress">In Progress</option>
                        <option value="resolve">Resolve</option>
                      </select>
                      <Button type="submit" className="ml-2 cursor-pointer">
                        Save
                      </Button>
                      <Button
                        type="button"
                        variant="secondary"
                        onClick={() => setEditingTicket(null)}
                        className="ml-2 cursor-pointer"
                      >
                        Cancel
                      </Button>
                    </form>
                  ) : (
                    <span
                      className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        ticket.status === "open"
                          ? "bg-blue-100 text-blue-800"
                          : ticket.status === "in_progress"
                          ? "bg-yellow-100 text-yellow-800"
                          : "bg-green-100 text-green-800"
                      }`}
                    >
                      {ticket.status}
                    </span>
                  )}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <Button
                    onClick={() => handleEditStatus(ticket)}
                    className="mr-2 cursor-pointer flex items-center"
                  >
                    <FaEdit className="mr-1" /> Edit Status
                  </Button>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <Button
                    variant="danger"
                    onClick={() => handleDelete(ticket.id)}
                    className={"cursor-pointer flex items-center"}
                  >
                    <FaTrash className="mr-1" /> Delete
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllTickets;
