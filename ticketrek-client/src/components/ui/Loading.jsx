/* eslint-disable react/prop-types */
const Loading = ({ size = "default" }) => {
    const sizeClasses = {
      small: "w-6 h-6",
      default: "w-12 h-12",
      large: "w-16 h-16",
    }
  
    return (
      <div className="flex justify-center items-center h-full">
        <div className={`animate-spin rounded-full border-t-4 border-indigo-600 border-opacity-50 ${sizeClasses[size]}`}>
          <div className={`rounded-full border-4 border-indigo-600 border-opacity-20 ${sizeClasses[size]}`}></div>
        </div>
      </div>
    )
  }
  
  export default Loading
  
  