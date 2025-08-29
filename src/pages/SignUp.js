import { useState } from "react";

export default function SignUp() {
  const [role, setRole] = useState("");
  return (
    <div className="parent">
      <div className="register">
        <form>
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
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" placeholder="Name..." />
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" placeholder="Email..." />
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" placeholder="Password..." />
          <label htmlFor="Rpassword">Repeat Password:</label>
          <input type="password" id="Rpassword" placeholder="Repeat Password..." />
          <div style={{ textAlign: "center", marginTop: "20px" }}>
            <button type="submit">Register</button>
          </div>
        </form>
      </div>
    </div>
  );
}
