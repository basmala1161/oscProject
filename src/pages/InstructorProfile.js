import React, { useState } from "react";
import "../style.css";
export default function InstructorProfile() {
  const [courses, setCourses] = useState([]);
  const [courseTitle, setCourseTitle] = useState("");
  const [courseDesc, setCourseDesc] = useState("");
  const [courseImg, setCourseImg] = useState(null);

  const handleAddCourse = () => {
    if (!courseTitle) return;
    setCourses([
      ...courses,
      {
        id: Date.now(),
        title: courseTitle,
        description: courseDesc,
        img: courseImg,
        lessons: [],
        show: true,
      },
    ]);
    setCourseTitle("");
    setCourseDesc("");
    setCourseImg(null);
  };

  const handleAddLesson = (courseId, lesson) => {
    setCourses(
      courses.map((c) =>
        c.id === courseId
          ? {
              ...c,
              lessons: [
                ...c.lessons,
                { ...lesson, id: Date.now(), show: true, task: null },
              ],
            }
          : c
      )
    );
  };

  const handleAddTask = (courseId, lessonId, task) => {
    setCourses(
      courses.map((c) =>
        c.id === courseId
          ? {
              ...c,
              lessons: c.lessons.map((l) =>
                l.id === lessonId ? { ...l, task: task } : l
              ),
            }
          : c
      )
    );
  };

  return (
    <div className="dashboard-main">
      <h1 style={{ color: "#f06292", marginBottom: "20px" }}>Instructor Profile</h1>

      {/* ================= Add Course ================= */}
      <div className="create-form">
        <h2 className="form-title">Create Course</h2>
        <label>Course Title:</label>
        <input
          type="text"
          value={courseTitle}
          onChange={(e) => setCourseTitle(e.target.value)}
        />
        <label>Course Description:</label>
        <textarea
          value={courseDesc}
          onChange={(e) => setCourseDesc(e.target.value)}
        />
        <label>Upload Course Image:</label>
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setCourseImg(URL.createObjectURL(e.target.files[0]))}
        />
        <button className="plus-button" onClick={handleAddCourse}>
          + Add Course
        </button>
      </div>

      {/* ================= Courses ================= */}
      <div style={{ marginTop: "40px" }}>
        {courses.map((course) => (
          <div key={course.id} className="course-card">
            <h2>{course.title}</h2>
            {course.img && (
              <img
                src={course.img}
                alt={course.title}
                style={{ width: "200px", height: "120px", objectFit: "cover" }}
              />
            )}
            <p>{course.description}</p>
            <button
              className="toggle-btn"
              onClick={() =>
                setCourses(
                  courses.map((c) =>
                    c.id === course.id ? { ...c, show: !c.show } : c
                  )
                )
              }
            >
              {course.show ? "Hide Lessons" : "Show Lessons"}
            </button>

            {course.show && (
              <LessonSection
                course={course}
                onAddLesson={handleAddLesson}
                onAddTask={handleAddTask}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
// ================= Lesson Section =================
function LessonSection({ course, onAddLesson, onAddTask }) {
  const [lessonTitle, setLessonTitle] = useState("");
  const [lessonVideo, setLessonVideo] = useState(null);

  const handleAddLessonClick = () => {
    if (!lessonTitle) return;
    onAddLesson(course.id, {
      title: lessonTitle,
     
     
      video: lessonVideo,
    });
    setLessonTitle("");
    setLessonVideo(null);
  };

  return (
    <div style={{ marginTop: "20px", paddingLeft: "20px" }}>
      <h3>Lessons</h3>
      <label>Lesson Title:</label>
      <input
        type="text"
        value={lessonTitle}
        onChange={(e) => setLessonTitle(e.target.value)}
      />
      
      <label>Upload Lesson Video:</label>
      <input
        type="file"
        accept="video/*"
        onChange={(e) => setLessonVideo(URL.createObjectURL(e.target.files[0]))}
      />
      <button className="plus-button" onClick={handleAddLessonClick}>
        + Add Lesson
      </button>

      {course.lessons.map((lesson) => (
        <div
          key={lesson.id}
          className="course-card"
          style={{ marginTop: "15px" }}
        >
          <h4>{lesson.title}</h4>
          {lesson.img && (
            <img
              src={lesson.img}
              alt={lesson.title}
              style={{ width: "180px", height: "100px", objectFit: "cover" }}
            />
          )}
          {lesson.video && (
            <video
              controls
              style={{ width: "200px", height: "120px" }}
              src={lesson.video}
            />
          )}
          <p>{lesson.description}</p>
          <button
            className="toggle-btn"
            onClick={() =>
              onAddTask(course.id, lesson.id, lesson.task ? null : {
                questions: Array.from({ length: 5 }, (_, i) => ({
                  question: "",
                  options: ["", "", "", ""],
                  answer: "",
                })),
              })
            }
          >
            {lesson.task ? "Hide Task" : "Add Task"}
          </button>

          {lesson.task && (
            <div style={{ paddingLeft: "20px", marginTop: "10px" }}>
              {lesson.task.questions.map((q, i) => (
                <div key={i} style={{ marginBottom: "10px" }}>
                  <input
                    type="text"
                    placeholder={`Question ${i + 1}`}
                    value={q.question}
                    onChange={(e) => {
                      const newQuestions = [...lesson.task.questions];
                      newQuestions[i].question = e.target.value;
                      onAddTask(course.id, lesson.id, {
                        questions: newQuestions,
                      });
                    }}
                  />
                  {q.options.map((opt, j) => (
                    <input
                      key={j}
                      type="text"
                      placeholder={`Option ${j + 1}`}
                      value={opt}
                      onChange={(e) => {
                        const newQuestions = [...lesson.task.questions];
                        newQuestions[i].options[j] = e.target.value;
                        onAddTask(course.id, lesson.id, {
                          questions: newQuestions,
                        });
                      }}
                    />
                  ))}
                  <input
                    type="text"
                    placeholder="Correct Answer"
                    value={q.answer}
                    onChange={(e) => {
                      const newQuestions = [...lesson.task.questions];
                      newQuestions[i].answer = e.target.value;
                      onAddTask(course.id, lesson.id, {
                        questions: newQuestions,
                      });
                    }}
                  />
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
