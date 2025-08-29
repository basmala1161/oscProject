import { useState } from "react";
export default function Login() {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [accept, setAccept] = useState(false);
  function Submit(e) {
    e.preventDefault();
    setAccept(true);
  }
  return (
    <div className="parent">
      <div className="register">
        <form onSubmit={Submit}>
          <div style={{ textAlign: "center", marginBottom: "20px" }}>
            <p style={{ color: "#cfd8dc", marginBottom: "10px" }}>Select your role:</p>
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
            value={Email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            placeholder="Password..."
            value={Password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {Password.length < 8 && accept && (
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

