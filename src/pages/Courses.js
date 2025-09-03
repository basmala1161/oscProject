import React from "react";
import "../style.css";
import { useNavigate } from "react-router-dom";

const handleEnroll = (course) => {
  console.log("Enrolled in:", course.title);
  
};
const courses = [
  {
    id: 1,
    title: "Web Development",
    description: "Learn to build modern websites with HTML, CSS, and JavaScript.",
    videoUrl: "https://www.youtube.com/embed/UB1O30fR-EE"
  },
  {
    id: 2,
    title: "React.js Mastery",
    description: "Dive deep into React.js and build dynamic single-page apps.",
    videoUrl: "https://www.youtube.com/embed/w7ejDZ8SWv8"
  },
  {
    id: 3,
    title: "Node.js Backend",
    description: "Master server-side programming with Node.js and Express.",
    videoUrl: "https://www.youtube.com/embed/Oe421EPjeBE"
  },
  {
    id: 4,
    title: "Python Programming",
    description: "Learn Python from scratch and build real-world projects.",
    videoUrl: "https://www.youtube.com/embed/_uQrJ0TkZlc"
  },
  {
    id: 5,
    title: "Machine Learning",
    description: "Understand ML algorithms and implement them with Python.",
    videoUrl: "https://www.youtube.com/embed/GwIo3gDZCVQ"
  },
  {
    id: 6,
    title: "Data Structures & Algorithms",
    description: "Master DSA for technical interviews and competitions.",
    videoUrl: "https://www.youtube.com/embed/8hly31xKli0"
  },
  {
    id: 7,
    title: "Database Management",
    description: "Learn SQL and NoSQL databases for modern applications.",
    videoUrl: "https://www.youtube.com/embed/9Pzj7Aj25lw"
  },
  {
    id: 8,
    title: "Cyber Security",
    description: "Basics of ethical hacking and securing web applications.",
    videoUrl: "https://www.youtube.com/embed/3Kq1MIfTWCE"
  },
  {
    id: 9,
    title: "Mobile App Development",
    description: "Build cross-platform mobile apps with React Native.",
    videoUrl: "https://www.youtube.com/embed/0-S5a0eXPoc"
  },
  {
    id: 10,
    title: "C++ Programming",
    description: "Learn C++ and its applications in competitive programming.",
    videoUrl: "https://www.youtube.com/embed/vLnPwxZdW4Y"
  },
  {
    id: 11,
    title: "Java Programming",
    description: "Understand Java fundamentals and OOP principles.",
    videoUrl: "https://www.youtube.com/embed/eIrMbAQSU34"
  },
  {
    id: 12,
    title: "Artificial Intelligence",
    description: "Introduction to AI concepts and practical projects.",
    videoUrl: "https://www.youtube.com/embed/JMUxmLyrhSk"
  },
  {
    id: 13,
    title: "DevOps Basics",
    description: "Learn CI/CD pipelines and modern DevOps tools.",
    videoUrl: "https://www.youtube.com/embed/0yWAtQ6wYNM"
  },
  {
    id: 14,
    title: "Cloud Computing",
    description: "Understand cloud platforms like AWS, Azure, and GCP.",
    videoUrl: "https://www.youtube.com/embed/M988_fsOSWo"
  },
  {
    id: 15,
    title: "Software Engineering",
    description: "Best practices in software development and project management.",
    videoUrl: "https://www.youtube.com/embed/7EmboKQH8lM"
  }
];

const Courses = () => {
  const navigate = useNavigate();
  const handleEnroll = (course) => {
    navigate("/dashboard", { state: { course } });
  };

  return (
    <div className="courses-page">
      <h1 className="courses-title">Our Programming Courses</h1>
      <div className="courses-grid">
        {courses.map((course) => (
          <div className="edu-card" key={course.id}>
            <iframe
              src={course.videoUrl}
              title={course.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <h2>{course.title}</h2>
            <p>{course.description}</p>
            <button 
              className="cta-button" 
              onClick={() => handleEnroll(course)}
            >
              Enroll
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Courses;