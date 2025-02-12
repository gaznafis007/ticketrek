import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa"

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p>&copy; 2025 Ticketrek. All rights reserved to Gazi Nafis Rafi.</p>
          </div>
          <div className="flex space-x-6">
            <a href="https://github.com/gaznafis007" className="text-gray-400 hover:text-white">
              <FaGithub className="h-6 w-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <FaTwitter className="h-6 w-6" />
            </a>
            <a href="https://www.linkedin.com/in/gazi-nafis-4712771a4/" className="text-gray-400 hover:text-white">
              <FaLinkedin className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

