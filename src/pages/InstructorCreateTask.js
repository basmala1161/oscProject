import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function InstructorCreateTask() {
  const { lessonId } = useParams();
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [question, setQuestion] = useState("");
  const [options, setOptions] = useState(["", "", "", ""]);
  const [answer, setAnswer] = useState("");

  const handleOptionChange = (index, value) => {
    const newOptions = [...options];
    newOptions[index] = value;
    setOptions(newOptions);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Task for Lesson Created:", { lessonId, title, description, question, options, answer });
    alert("Task created successfully!");

    navigate(`/lesson/${lessonId}`);
  };

  return (
    <div className="eduweb-container">
      <div className="create-form">
        <h2 className="form-title">Create Task for Lesson #{lessonId}</h2>

        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Task Title" value={title} onChange={(e) => setTitle(e.target.value)} required />
          <textarea placeholder="Task Description" value={description} onChange={(e) => setDescription(e.target.value)} />
          <input type="text" placeholder="Question" value={question} onChange={(e) => setQuestion(e.target.value)} />
          {options.map((opt, i) => (
            <input key={i} type="text" placeholder={`Option ${i + 1}`} value={opt} onChange={(e) => handleOptionChange(i, e.target.value)} />
          ))}
          <input type="text" placeholder="Correct Answer" value={answer} onChange={(e) => setAnswer(e.target.value)} />
          <button type="submit" className="cta-button">Save Task</button>
        </form>
      </div>
    </div>
  );
}
