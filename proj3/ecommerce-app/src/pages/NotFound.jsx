// src/pages/NotFound.jsx
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center text-center">
      <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
      <p className="mb-6">The page you’re looking for doesn’t exist.</p>
      <Link to="/" className="bg-blue-600 text-white px-4 py-2 rounded">
        Go Back Home
      </Link>
    </div>
  );
};

export default NotFound;
