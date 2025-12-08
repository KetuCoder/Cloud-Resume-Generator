import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

export default function Signup() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSignup = async (e) => {
  e.preventDefault();

  if (!form.username || !form.email || !form.password) {
    alert("Please fill in all fields.");
    return;
  }

  try {
    const response = await fetch(
      "https://ayzu4tiwxk.execute-api.us-east-1.amazonaws.com/prod/signup",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          action: "signup",
          username: form.username,
          email: form.email,
          password: form.password
        })
      }
    );

    const data = await response.json();
    console.log(data.message); 
    navigate("/dashboard");
  } catch (err) {
    console.error(err);
    alert("Something went wrong!");
  }
};

  return (
    <div className="auth-wrapper">
      <form onSubmit={handleSignup} className="auth-card">
        <h2>Create Account</h2>

        <input
          name="username"
          type="text"
          placeholder="Username"
          className="auth-input"
          value={form.username}
          onChange={handleChange}
        />

        <input
          name="email"
          type="email"
          placeholder="Email"
          className="auth-input"
          value={form.email}
          onChange={handleChange}
        />

        <input
          name="password"
          type="password"
          placeholder="Password"
          className="auth-input"
          value={form.password}
          onChange={handleChange}
        />

        <button type="submit" className="auth-button">
          Sign Up
        </button>

        <p className="auth-text">
          Already have an account? <Link to="/">Login</Link>
        </p>
      </form>
    </div>
  );
}