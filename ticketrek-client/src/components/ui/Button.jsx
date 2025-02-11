/* eslint-disable react/prop-types */
const Button = ({ children, variant = "primary", className, ...props }) => {
    const baseStyle = "px-4 py-2 rounded-md font-semibold text-sm transition-colors duration-200"
    const variants = {
      primary: "bg-indigo-600 text-white hover:bg-indigo-700",
      secondary: "bg-gray-200 text-gray-800 hover:bg-gray-300",
      danger: "bg-red-600 text-white hover:bg-red-700",
    }
  
    return (
      <button {...props} className={`${baseStyle} ${variants[variant]} ${className}`}>
        {children}
      </button>
    )
  }
  
  export default Button
  
  