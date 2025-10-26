import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <h1>Cloud Based Resume Generator</h1>
      <div>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/resume">Resumes</Link>
        <Link to="/">Logout</Link>
      </div>
    </nav>
  );
}
