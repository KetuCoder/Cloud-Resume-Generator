import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function Dashboard() {
  const navigate = useNavigate();
  const [resume, setResume] = useState({
    username: "",
    email: "",
    country: "",
    college: "",
    skills: "",
    experience: "",
    internship: "",
    softSkills: "",
    certification: "",
  });

  const handleChange = (e) => {
    setResume({ ...resume, [e.target.name]: e.target.value });
  };

  const handleGenerate = () => {
    if (!resume.username || !resume.email) {
      alert("Username and Email are required!");
      return;
    }
    localStorage.setItem("resumeData", JSON.stringify(resume));
    navigate("/resume");
  };

  return (
    <>
      <Navbar />
      <div className="container">
        <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Resume Information</h2>
        <div className="dashboard-grid">
          <input name="username" placeholder="Full Name" value={resume.username} onChange={handleChange} />
          <input name="email" placeholder="Email" value={resume.email} onChange={handleChange} />
          <input name="country" placeholder="Country" value={resume.country} onChange={handleChange} />
          <input name="college" placeholder="College / University" value={resume.college} onChange={handleChange} />
          <textarea name="skills" placeholder="Skills (comma-separated)" value={resume.skills} onChange={handleChange} />
          <textarea name="experience" placeholder="Work Experience" value={resume.experience} onChange={handleChange} />
          <textarea name="internship" placeholder="Internship Details" value={resume.internship} onChange={handleChange} />
          <textarea name="softSkills" placeholder="Soft Skills (comma-separated)" value={resume.softSkills} onChange={handleChange} />
          <textarea name="certification" placeholder="Certifications / Courses" value={resume.certification} onChange={handleChange} />
        </div>
        <div style={{ textAlign: "center", marginTop: "20px" }}>
          <button onClick={handleGenerate}>Generate Resume</button>
        </div>
      </div>
    </>
  );
}
