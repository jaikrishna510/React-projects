import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-gray-800 text-white p-4 flex justify-between">
      <div>
        <Link to="/" className="mr-4">Home</Link>
        <Link to="/register" className="mr-4">Register</Link>
        <Link to="/login">Login</Link>
      </div>
    </nav>
  );
}
