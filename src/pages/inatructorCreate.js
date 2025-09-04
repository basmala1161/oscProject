
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function InstructorCreateCourse() {
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newCourseId = 123;
    console.log("Course Created:", { title, description, file, id: newCourseId });

    alert("Course created successfully!");
    navigate(`/course/${newCourseId}/add-lesson`);
  };

  return (
    <div className="eduweb-container">
      <div className="create-form">
        <h2 className="form-title">Create Course</h2>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Course Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
          <input
            type="file"
            onChange={(e) => setFile(e.target.files[0])}
          />
          <textarea
            placeholder="Course Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
          <button type="submit" className="cta-button">
            Save Course
          </button>
        </form>
        <div
          className="plus-button"
          style={{ display: "flex", alignItems: "center", cursor: "pointer", marginTop: "20px" }}
          onClick={() => navigate(`/course/123/add-lesson`)} 
        >
          <span style={{ fontSize: "24px", marginRight: "10px" }}>+</span>
          <span>Add Lesson</span>
        </div>
      </div>
    </div>
  );
}

