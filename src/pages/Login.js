import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [accept, setAccept] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setAccept(true);

    if (!role) {
      alert("Please select your role");
      return;
    }
    if (password.length < 8) {
      return;
    }

    // 🔹 هنا المفروض يكون API call للتحقق من الباك إند
    console.log("Login:", { email, password, role });

    // 🔹 redirect حسب الدور
    if (role === "Instructor") {
      navigate("/create-course");
    } else if (role === "Student") {
      navigate("/student-dashboard");
    }
  };

  return (
    <div className="parent">
      <div className="register">
        <form onSubmit={handleSubmit}>
          <div style={{ textAlign: "center", marginBottom: "20px" }}>
            <p style={{ color: "#cfd8dc", marginBottom: "10px" }}>
              Select your role:
            </p>
            <button
              type="button"
              className={`role-button ${role === "Instructor" ? "active" : ""}`}
              onClick={() => setRole("Instructor")}
            >
              Instructor
            </button>
            <button
              type="button"
              className={`role-button ${role === "Student" ? "active" : ""}`}
              onClick={() => setRole("Student")}
            >
              Student
            </button>
          </div>

          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            placeholder="Email..."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            placeholder="Password..."
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {password.length < 8 && accept && (
            <p className="error">Password must be more than 8 characters</p>
          )}

          <div style={{ textAlign: "center", marginTop: "20px" }}>
            <button type="submit">Login</button>
          </div>
        </form>
      </div>
    </div>
  );
}
