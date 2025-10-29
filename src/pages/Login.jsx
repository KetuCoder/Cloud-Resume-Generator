import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
// import { fakeLogin } from "../utils/fakeAuth";

export default function Login() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
  e.preventDefault();

  if (!form.email || !form.password) {
    alert("Please enter both email and password.");
    return;
  }

  try {
    const response = await fetch(
      "https://nvos8oe6ul.execute-api.us-east-2.amazonaws.com/test/login",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          action: "login",
          email: form.email,
          password: form.password
        })
      }
    );

    const data = await response.json();

    if (response.status === 200) {
      console.log(data.message); // "Login successful!"
      localStorage.setItem("username", data.username);
      navigate("/dashboard");
    } else {
      alert(data.message);
    }
  } catch (err) {
    console.error(err);
    alert("Something went wrong!");
  }
};



  return (
    <div className="auth-wrapper">
      <form onSubmit={handleLogin} className="auth-card">
        <h2>Welcome Back</h2>

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
          Login
        </button>

        <p className="auth-text">
          Don’t have an account? <Link to="/signup">Sign Up</Link>
        </p>
      </form>
    </div>
  );
}
