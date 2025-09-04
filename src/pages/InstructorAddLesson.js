import { useNavigate, useParams } from "react-router-dom";

export default function InstructorAddLesson() {
  const { courseId } = useParams();
  const navigate = useNavigate();

  const handleAddTask = () => {
    const lessonId = 456;
    navigate(`/lesson/${lessonId}/create-task`);
  };

  return (
    <div className="eduweb-container">
      <h2>Add Lesson to Course #{courseId}</h2>
      <form>
        <input type="text" placeholder="Lesson Title" />
        <textarea placeholder="Lesson Content"></textarea>
        <input type="file" />
      <button type="submit" className="cta-button">Save Lesson</button>
      </form>

      <div className="plus-button" onClick={handleAddTask}>
        <span style={{ fontSize: "24px", marginRight: "10px" }}>+</span>
        <span>Add Task</span>
      </div>
    </div>
  );
}
