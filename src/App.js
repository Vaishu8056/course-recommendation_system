import React, { useState, useEffect } from 'react';
import './App.css';

const App = () => {
  const [recommendedCourses, setRecommendedCourses] = useState([]);
  const [loading, setLoading] = useState(false);
  const [skills, setSkills] = useState('');
  const [interests, setInterests] = useState('');

  // Fetch courses from the API when skills or interests are entered
  const fetchCourses = async () => {
    setLoading(true);
    try {
      if (skills && interests) {
        const response = await fetch(`http://localhost:5001/api/courses?skills=${skills}&interests=${interests}`);
        const data = await response.json();
        if (data.message) {
          alert(data.message); // If the message exists, show it
        } else {
          setRecommendedCourses(data); // Set recommended courses if data is not empty
        }
      }
    } catch (error) {
      console.error('Error fetching courses:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = () => {
    fetchCourses();
  };

  return (
    <div className="App">
      <header className="header">
        <h1 id="tag">Course Recommendation System</h1>
        <p id="tag1">Find the best courses based on your skills and interests</p>
      </header>

      <section className="input-section">
        <div className="input-container">
          <label>Enter your Skills (comma separated):</label>
          <input
            type="text"
            value={skills}
            onChange={(e) => setSkills(e.target.value)}
            placeholder="e.g. JavaScript, Python"
          />
        </div>
        <div className="input-container">
          <label>Enter your Interests (comma separated):</label>
          <input
            type="text"
            value={interests}
            onChange={(e) => setInterests(e.target.value)}
            placeholder="e.g. Frontend, Backend"
          />
        </div>
        <button className="search-button" onClick={handleSearch}>Get Recommended Courses</button>
      </section>

      <section className="courses-section">
        <div className="recommended-courses">
          <h2>Recommended Courses:</h2>
          {loading ? (
            <div className="loading-spinner"></div>
          ) : (
            recommendedCourses.length > 0 ? (
              recommendedCourses.map(course => (
                <div key={course.id} className="course-card">
                  <h3>{course.title}</h3>
                  <p>{course.description}</p>
                  <iframe 
                    width="560" 
                    height="315" 
                    src={course.videoUrl} 
                    title={course.title} 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                    className="video-frame"
                  ></iframe>
                </div>
              ))
            ) : (
              <p>No courses found based on your skills and interests.</p>
            )
          )}
        </div>
      </section>
    </div>
  );
};

export default App;
 
