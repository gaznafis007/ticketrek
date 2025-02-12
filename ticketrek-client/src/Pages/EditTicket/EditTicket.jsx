import { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import { useNavigate, useParams } from "react-router-dom"
import Loading from "../../components/ui/Loading"
import Card from "../../components/ui/Card"
import Button from "../../components/ui/Button"
import useAxios from "../../hooks/useAxios"
import { useContext } from "react"
import { AuthContext } from "../../context/AuthProvider"


const EditTicket = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm()
  const {user} = useContext(AuthContext)
  const [isLoading, setIsLoading] = useState(true)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const navigate = useNavigate()
  const axiosSecure = useAxios()
  const { id } = useParams()

  useEffect(() => {
    const fetchTicket = async () => {
      try {
        // Simulate API call
        // await new Promise((resolve) => setTimeout(resolve, 1000))

        // Mock data - replace with actual API call
        const res = await axiosSecure(`/tickets/${id}`)
        // const ticketData = {
        //   title: "Sample Ticket",
        //   description: "This is a sample ticket description.",
        //   priority: "medium",
        //   status: "open",
        // }

        reset(res?.data)
        setIsLoading(false)
      } catch (error) {
        console.error("Error fetching ticket:", error)
        // Handle error (e.g., redirect to error page)
        navigate("/error")
      }
    }

    fetchTicket()
  }, [reset, navigate])

  const onSubmit = async (data) => {
    setIsSubmitting(true)
    try {
      // Simulate API call
      const res = await axiosSecure.put(`/tickets/${id}`, data)
      console.log("Ticket updated:",  res?.data )
      // Redirect to tickets page after successful update
      navigate("/tickets")
    } catch (error) {
      console.error("Error updating ticket:", error)
      // Handle error (e.g., show error message to user)
    } finally {
      setIsSubmitting(false)
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
    <div className="max-w-2xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Edit Ticket #{id}</h1>
      <Card>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div>
            <label htmlFor="title" className="block text-sm font-medium text-gray-700">
              Title
            </label>
            <input
              type="text"
              id="subject"
              {...register("subject", { required: "Title is required" })}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
            {errors.title && <p className="mt-2 text-sm text-red-600">{errors.title.message}</p>}
          </div>

          <div>
            <label htmlFor="description" className="block text-sm font-medium text-gray-700">
              Description
            </label>
            <textarea
              id="description"
              rows="4"
              {...register("description", { required: "Description is required" })}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            ></textarea>
            {errors.description && <p className="mt-2 text-sm text-red-600">{errors.description.message}</p>}
          </div>

          <div>
            <label htmlFor="priority" className="block text-sm font-medium text-gray-700">
              Priority
            </label>
            <select
              id="priority"
              {...register("priority", { required: "Priority is required" })}
              className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
            >
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </select>
            {errors.priority && <p className="mt-2 text-sm text-red-600">{errors.priority.message}</p>}
          </div>

          {
            user?.role === 'admin' && (
              <div>
            <label htmlFor="status" className="block text-sm font-medium text-gray-700">
              Status
            </label>
            <select
              id="status"
              {...register("status", { required: "Status is required" })}
              className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
            >
              <option value="open">Open</option>
              <option value="in_progress">In Progress</option>
              <option value="resolved">Resolved</option>
              <option value="closed">Closed</option>
            </select>
            {errors.status && <p className="mt-2 text-sm text-red-600">{errors.status.message}</p>}
          </div>
            )
          }

          <div className="flex items-center justify-end">
            <Button type="button" variant="secondary" onClick={() => navigate("/tickets")} className="mr-4">
              Cancel
            </Button>
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? 'Updating....' : "Update Ticket"}
            </Button>
          </div>
        </form>
      </Card>
    </div>
  )
}

export default EditTicket

