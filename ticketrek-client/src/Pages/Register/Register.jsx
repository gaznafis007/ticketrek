import { useForm } from "react-hook-form"
import Card from "../../components/ui/Card"
import Button from "../../components/ui/Button"
import { Link, useNavigate } from "react-router-dom"
import { useContext, useState } from "react"
import { AuthContext } from "../../context/AuthProvider"
import useAxios from "../../hooks/useAxios"


const Register = () => {
  const {register:signUp, getProfile, setUser, user:registeredUser} = useContext(AuthContext)
  const navigate = useNavigate()
  const axiosSecure = useAxios()
  const [loading, setLoading] = useState(false)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = async (data) => {
    // console.log(data)
    const user = {
      name: data.name,
      email: data.email,
      password: data.password
    }
    // console.log(user, 'my user')
    setLoading(true)
    // Handle registration logic here
    try{
      const signUpResponse = await signUp(data.email, data.password)
      console.log(signUpResponse)
      if(signUpResponse?.user){
         await getProfile(user.name);
        const res = await axiosSecure.post('/users', user)
        let newUser = {
          ...registeredUser
        }
        newUser.role = res?.data?.role
        setUser(newUser)
        navigate('/')
      }
    }catch(error){
      console.log(error)
    }finally{
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Create your account</h2>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <Card>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Full Name
              </label>
              <div className="mt-1">
                <input
                  id="name"
                  type="text"
                  {...register("name", { required: "Name is required" })}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
                {errors.name && <p className="mt-2 text-sm text-red-600">{errors.name.message}</p>}
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email address
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  type="email"
                  {...register("email", { required: "Email is required" })}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
                {errors.email && <p className="mt-2 text-sm text-red-600">{errors.email.message}</p>}
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <div className="mt-1">
                <input
                  id="password"
                  type="password"
                  {...register("password", {
                    required: "Password is required",
                    minLength: { value: 8, message: "Password must be at least 8 characters" },
                  })}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
                {errors.password && <p className="mt-2 text-sm text-red-600">{errors.password.message}</p>}
              </div>
            </div>

            <div>
              <Button type="submit" className="w-full">
                {loading ? 'Loading...' : 'Sign up'}
              </Button>
            </div>
          </form>

          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">Or</span>
              </div>
            </div>

            <div className="mt-6">
              <div className="text-center">
                <Link to="/login" className="font-medium text-indigo-600 hover:text-indigo-500">
                  Already have an account? Sign in
                </Link>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}

export default Register

