import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const login = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const res = await axios.post("https://your-backend.onrender.com/login"), {
        email,
        password,
      });

      localStorage.setItem("token", res.data.token);

      alert("Login Successful");

      // Better than window.location
      window.location.href = "https://your-dashboard.vercel.app";

    } catch (err) {
      console.log(err);
      alert("Invalid credentials");

    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center min-vh-100">

      <div className="card shadow p-4" style={{ width: "360px", borderRadius: "12px" }}>

        <h3 className="text-center text-primary fw-bold mb-2">
          Zerodha Clone
        </h3>

        <p className="text-center text-muted mb-4">
          Login to your account
        </p>

        <form onSubmit={login}>

          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className="btn btn-primary w-100"
            disabled={loading}
          >
            {loading ? "Logging in..." : "Login"}
          </button>

        </form>

        <p className="text-center mt-3 mb-0" style={{ fontSize: "13px" }}>
          Don’t have an account? <a href="/signup">Signup</a>
        </p>

      </div>
    </div>
  );
}

export default Login;
