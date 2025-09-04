
import { Link } from "react-router-dom";
import "../style.css";

export default function Navbar() {
  return (
    <nav className="eduweb-nav">
      <Link to="/InstructorProfile">Profile</Link>
      <Link to="/login">Login</Link>
      <Link to="/signup">SignUp</Link>
      <Link to="/">Home</Link>
      <Link to="/courses">Courses</Link>
    </nav>
  );
}
