/* // src/CourseCard.js
import React from 'react';
import './CourseCard.css';

const CourseCard = ({ course }) => {
  return (
    <div className="course-card">
      <h3>{course.name}</h3>
      <p>{course.description}</p>
      <p><strong>Level:</strong> {course.level}</p>
      <p><strong>Duration:</strong> {course.duration}</p>
      <p><strong>Skills:</strong> {course.skills}</p>
      <p><strong>Interests:</strong> {course.interests}</p>
      <button className="enroll-button">Enroll Now</button>
    </div>
  );
};

export default CourseCard; */
/* import React from 'react';

const CourseCard = ({ course }) => {
  return (
    <div className="course-card">
      <h3>{course.title}</h3>
      <p>{course.description}</p>
      <a href={course.url} target="_blank" rel="noopener noreferrer">View Course</a>
    </div>
  );
};

export default CourseCard; */
/* import React from 'react';

const CourseCard = ({ course }) => {
  return (
    <div className="course-card">
      <img src={course.imageUrl} alt={course.title} className="course-image" />
      <div className="course-details">
        <h3 className="course-title">{course.title}</h3>
        <p className="course-description">{course.description}</p>
        <a href={course.videoUrl} target="_blank" rel="noopener noreferrer" className="course-link">
          Watch Now
        </a>
      </div>
    </div>
  );
};

export default CourseCard;





 */


import React, { useState } from "react";
import VideoPlayer from "./VideoPlayer";

const CourseCard = ({ course }) => {
  const [playVideo, setPlayVideo] = useState(false);

  return (
    <div className="course-card">
      <h3>{course.title}</h3>
      <p>{course.description}</p>
      {playVideo ? (
        <VideoPlayer videoUrl={course.videoUrl} />
      ) : (
        <img
          src={course.imageUrl}
          alt={course.title}
          style={{ width: "100%" }}
        />
      )}
      <button onClick={() => setPlayVideo(!playVideo)}>
        {playVideo ? "Close Video" : "Play Video"}
      </button>
    </div>
  );
};

export default CourseCard;
