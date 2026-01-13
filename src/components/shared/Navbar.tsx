import { Link } from 'react-router-dom'

export function Navbar() {
  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="text-xl font-bold text-gray-900">
            Jobly
          </Link>

          <div className="flex gap-6">
            <Link 
              to="/optimizer" 
              className="text-gray-600 hover:text-gray-900 font-medium"
            >
              Optimizer
            </Link>
            <Link 
              to="/tracker" 
              className="text-gray-600 hover:text-gray-900 font-medium"
            >
              Tracker
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}