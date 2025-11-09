import { Link , useNavigate  } from "react-router-dom";

export default function Navbar() {

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("resumeData");
    localStorage.removeItem("user");
    navigate("/");
  };

  return (
    <nav>
      <h1>Cloud Based Resume Generator</h1>
      <div>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/resume">Resumes</Link>
        <Link to="/" onClick={handleLogout}>Logout</Link>
      </div>
    </nav>
  );
}