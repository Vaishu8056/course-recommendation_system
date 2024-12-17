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
