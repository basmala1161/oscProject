import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SignUp() {
  const [role, setRole] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
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
    if (password !== repeatPassword) {
      alert("Passwords do not match!");
      return;
    }
    console.log("Registered:", { role, name, email, password });
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

          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            placeholder="Name..."
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

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

          <label htmlFor="Rpassword">Repeat Password:</label>
          <input
            type="password"
            id="Rpassword"
            placeholder="Repeat Password..."
            value={repeatPassword}
            onChange={(e) => setRepeatPassword(e.target.value)}
          />

          <div style={{ textAlign: "center", marginTop: "20px" }}>
            <button type="submit">Register</button>
          </div>
        </form>
      </div>
    </div>
  );
}
