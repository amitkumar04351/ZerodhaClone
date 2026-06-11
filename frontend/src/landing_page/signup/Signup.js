import axios from "axios";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function Signup() {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      await axios.post("https://zerodhaclone-5su0.onrender.com/signup", user);

      alert("Signup Successful");

      navigate("/login");

    } catch (err) {
  console.log("Signup Error:", err);
  console.log("Response:", err.response?.data);

  alert(
    err.response?.data?.message ||
    err.response?.data?.error ||
    "Signup Failed"
  );
}

    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center min-vh-100">

      <div
        className="card shadow p-4"
        style={{ width: "380px", borderRadius: "12px" }}
      >

        <h3 className="text-center mb-2 text-primary fw-bold">
          Zerodha Clone
        </h3>

        <p className="text-center text-muted mb-4">
          Create your account
        </p>

        <form onSubmit={handleSubmit}>

          <div className="mb-3">
            <label className="form-label">Username</label>
            <input
              className="form-control"
              placeholder="Enter username"
              onChange={(e) =>
                setUser({ ...user, username: e.target.value })
              }
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
              onChange={(e) =>
                setUser({ ...user, email: e.target.value })
              }
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
              onChange={(e) =>
                setUser({ ...user, password: e.target.value })
              }
              required
            />
          </div>

          <button
            type="submit"
            className="btn btn-primary w-100"
            disabled={loading}
          >
            {loading ? "Signing up..." : "Signup"}
          </button>

        </form>

        {/* LOGIN LINK */}
        <p className="text-center mt-3 mb-0" style={{ fontSize: "13px" }}>
          Already have an account?{" "}
          <Link to="/login">Login</Link>
        </p>

      </div>
    </div>
  );
}

export default Signup;
