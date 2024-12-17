/* const express = require('express');
const axios = require('axios');
require('dotenv').config();
const cors = require('cors');  // Add CORS package

const app = express();
const PORT = process.env.PORT || 5000;

// Udemy API Key from .env file
const apiKey = process.env.UDEMY_API_KEY;
const apiUrl = 'https://www.udemy.com/api-2.0/courses/';

// Middleware to enable CORS
app.use(cors());  // Use CORS middleware

// Middleware to parse JSON requests
app.use(express.json());

// API route to fetch courses based on skills and interests
app.get('/api/courses', async (req, res) => {
  const { skills, interests } = req.query;

  // Combine skills and interests into a single search query (this can be adjusted as needed)
  const searchQuery = `${skills},${interests}`;

  try {
    // Make request to Udemy API
    const response = await axios.get(apiUrl, {
      params: { search: searchQuery, page_size: 10 },
      headers: { Authorization: `Bearer ${apiKey}` },
    });

    // Return the course data from Udemy API
    res.json(response.data);
  } catch (error) {
    // Log the error for debugging purposes
    console.error('Error fetching courses:', error.message);
    
    // Return a user-friendly error message
    res.status(500).send('Error fetching courses, please try again later.');
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
}); */
/* const express = require('express');
const axios = require('axios');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Your Udemy API key from the .env file
const apiKey = process.env.UDEMY_API_KEY; 
const apiUrl = 'https://www.udemy.com/api-2.0/courses/';

app.use(cors());
app.use(express.json());

// Default route for testing the server
app.get('/', (req, res) => {
  res.send('Welcome to the Course Recommendation Backend!');
});

// API route to fetch courses based on skills and interests
app.get('/api/courses', async (req, res) => {
  const { skills, interests } = req.query;

  try {
    const response = await axios.get(apiUrl, {
      params: { search: `${skills},${interests}`, page_size: 10 },
      headers: { Authorization: `Bearer ${apiKey}` },
    });

    res.json(response.data);
  } catch (error) {
    console.error('Error fetching courses:', error);
    res.status(500).send('Error fetching courses');
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});


  app.get('/api/data', async (req, res) => {
    const response = await axios.get('https://api.example.com/data', {
      headers: { Authorization: `Bearer ${process.env.API_KEY}` },
    });
    res.json(response.data);
  }); */
 /*  const express = require('express');
const axios = require('axios');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Udemy API key from .env
const udemyApiKey = process.env.UDEMY_API_KEY; 
const udemyApiUrl = 'https://www.udemy.com/api-2.0/courses/';

app.use(cors());
app.use(express.json());

// Test server route
app.get('/', (req, res) => {
  res.send('Welcome to the Course Recommendation Backend!');
});

// Fetch Udemy courses
app.get('/api/courses', async (req, res) => {
  const { skills, interests } = req.query;

  try {
    const response = await axios.get(udemyApiUrl, {
      params: { search: `${skills},${interests}`, page_size: 10 },
      headers: { Authorization: `Bearer ${udemyApiKey}` },
    });

    res.json(response.data);
  } catch (error) {
    console.error('Error fetching courses:', error.message);
    res.status(500).send('Error fetching courses');
  }
});

// Fetch Udemy course details by courseId
app.get('/api/course/:courseId', async (req, res) => {
  const { courseId } = req.params;

  try {
    const response = await axios.get(`https://www.udemy.com/api-2.0/courses/${courseId}/`, {
      headers: { Authorization: `Basic ${process.env.UDEMY_API_KEY}` }, // Replace with your base64 credentials
    });

    res.json(response.data);
  } catch (error) {
    console.error('Error fetching course details:', error.message);
    res.status(500).send('Error fetching course details');
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
}); */



/* 
const express = require('express');
const axios = require('axios');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5001;

// Udemy API key from .env
const udemyApiKey = process.env.UDEMY_API_KEY; 
const udemyApiUrl = 'https://www.udemy.com/api-2.0/courses/';

app.use(cors());
app.use(express.json());

// Test server route
app.get('/', (req, res) => {
  res.send('Welcome to the Course Recommendation Backend!');
});

// Mock course data for testing
const mockCourseData = [
  {
    id: '1',
    title: 'Learn JavaScript',
    description: 'A comprehensive JavaScript course for beginners.',
    videoUrl: 'https://www.udemy.com/course/learn-javascript-video/',
    imageUrl: 'https://linktothecourseimage.com',
    skills:"Javascript",
    interests:"Frontend"
  },
  {
    id: '2',
    title: 'Master Python Programming',
    description: 'Learn Python from scratch to advanced levels.',
    videoUrl: 'https://www.udemy.com/course/master-python-programming-video/',
    imageUrl: 'https://linktothecourseimage.com',
  },
  {
    id: '3',
    title: 'Web Development Bootcamp',
    description: 'Become a full-stack web developer in 30 days.',
    videoUrl: 'https://www.udemy.com/course/web-development-bootcamp-video/',
    imageUrl: 'https://linktothecourseimage.com',
  },
  // More courses...
];

// Fetch Udemy courses
app.get('/api/courses', async (req, res) => {
  const { skills, interests } = req.query;

  // Simulate filtering based on skills and interests
  const filteredCourses = mockCourseData.filter(course => 
    course.title.toLowerCase().includes(skills.toLowerCase()) || 
    course.description.toLowerCase().includes(interests.toLowerCase())
  );

  if (filteredCourses.length > 0) {
    res.json(filteredCourses);
  } else {
    res.status(404).json({ message: 'No courses found for your skills and interests.' });
  }
});

// Fetch Udemy course details by courseId
app.get('/api/course/:courseId', async (req, res) => {
  const { courseId } = req.params;

  // Find the course by its ID
  const course = mockCourseData.find(course => course.id === courseId);

  if (course) {
    res.json(course);
  } else {
    res.status(404).json({ message: 'Course not found.' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
}); */


/* 
const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5001;

app.use(cors());
app.use(express.json());

// Mock course data for testing
const mockCourseData = [
  {
    id: '1',
    title: 'Learn JavaScript',
    description: 'A comprehensive JavaScript course for beginners.',
    videoUrl: 'https://www.udemy.com/course/learn-javascript-video/',
    imageUrl: 'https://linktothecourseimage.com',
    skills: 'JavaScript',
    interests: 'Frontend'
  },
  {
    id: '2',
    title: 'Master Python Programming',
    description: 'Learn Python from scratch to advanced levels.',
    videoUrl: 'https://www.udemy.com/course/master-python-programming-video/',
    imageUrl: 'https://linktothecourseimage.com',
    skills: 'Python',
    interests: 'Backend'
  },
  {
    id: '3',
    title: 'Web Development Bootcamp',
    description: 'Become a full-stack web developer in 30 days.',
    videoUrl: 'https://www.udemy.com/course/web-development-bootcamp-video/',
    imageUrl: 'https://linktothecourseimage.com',
    skills: 'JavaScript, HTML, CSS',
    interests: 'Fullstack'
  },
  // More courses...
];

// Fetch Udemy courses
app.get('/api/courses', (req, res) => {
  const { skills, interests } = req.query;

  // Simulate filtering based on skills and interests
  const filteredCourses = mockCourseData.filter(course =>
    (course.skills.toLowerCase().includes(skills.toLowerCase()) || skills === '') &&
    (course.interests.toLowerCase().includes(interests.toLowerCase()) || interests === '')
  );

  if (filteredCourses.length > 0) {
    res.json(filteredCourses);
  } else {
    res.status(404).json({ message: 'No courses found for your skills and interests.' });
  }
});

// Fetch Udemy course details by courseId
app.get('/api/course/:courseId', (req, res) => {
  const { courseId } = req.params;

  // Find the course by its ID
  const course = mockCourseData.find(course => course.id === courseId);

  if (course) {
    res.json(course);
  } else {
    res.status(404).json({ message: 'Course not found.' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
}); */

/* const express = require('express');
const axios = require('axios');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5001;

// Udemy API key from .env
const udemyApiKey = process.env.UDEMY_API_KEY; 
const udemyApiUrl = 'https://www.udemy.com/api-2.0/courses/';

app.use(cors());
app.use(express.json());

const corsOptions = {
  origin: 'http://localhost:3000',  // Allow React to access backend
  methods: 'GET,POST',  // Allow these HTTP methods
  allowedHeaders: 'Content-Type',  // Allow specific headers if needed
};

app.use(cors(corsOptions));
// Test server route
app.get('/', (req, res) => {
  res.send('Welcome to the Course Recommendation Backend!');
});

// Mock course data for testing
const mockCourseData = [
  {
    id: '1',
    title: 'Learn JavaScript',
    description: 'A comprehensive JavaScript course for beginners.',
    videoUrl: 'https://www.udemy.com/course/learn-javascript-video/',
    imageUrl: 'https://linktothecourseimage.com',
    skills:"Javascript",
    interests:"Frontend"
  },
  {
    id: '2',
    title: 'Master Python Programming',
    description: 'Learn Python from scratch to advanced levels.',
    videoUrl: 'https://www.udemy.com/course/master-python-programming-video/',
    imageUrl: 'https://linktothecourseimage.com',
  },
  {
    id: '3',
    title: 'Web Development Bootcamp',
    description: 'Become a full-stack web developer in 30 days.',
    videoUrl: 'https://www.udemy.com/course/web-development-bootcamp-video/',
    imageUrl: 'https://linktothecourseimage.com',
  },
  // More courses...
];

// Fetch Udemy courses
app.get('/api/courses', async (req, res) => {
  const { skills, interests } = req.query;

  // Ensure skills and interests are not undefined or empty
  if (!skills || !interests) {
    return res.status(400).json({ message: 'Skills and interests are required.' });
  }

  // Simulate filtering based on skills and interests
  const filteredCourses = mockCourseData.filter(course => 
    (course.skills && course.skills.toLowerCase().includes((skills || '').toLowerCase())) || 
    (course.interests && course.interests.toLowerCase().includes((interests || '').toLowerCase()))
  );

  if (filteredCourses.length > 0) {
    res.json(filteredCourses);
  } else {
    res.status(404).json({ message: 'No courses found for your skills and interests.' });
  }
});

// Fetch Udemy course details by courseId
app.get('/api/course/:courseId', async (req, res) => {
  const { courseId } = req.params;

  // Find the course by its ID
  const course = mockCourseData.find(course => course.id === courseId);

  if (course) {
    res.json(course);
  } else {
    res.status(404).json({ message: 'Course not found.' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

 */

/* const express = require('express');
const axios = require('axios');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5001;

// Udemy API key from .env
const udemyApiKey = process.env.UDEMY_API_KEY;
const udemyApiUrl = 'https://www.udemy.com/api-2.0/courses/';

app.use(cors());
app.use(express.json());

 const corsOptions = {
  origin: 'http://localhost:3000',
  methods: 'GET, POST',
  allowedHeaders: 'Content-Type',
};
app.use(cors(corsOptions));
 

// Test server route
app.get('/', (req, res) => {
  res.send('Welcome to the Course Recommendation Backend!');
});

// Mock course data for testing
const mockCourseData = [
  {
    id: '1',
    title: 'Learn JavaScript',
    description: 'A comprehensive JavaScript course for beginners.',
    videoUrl: 'https://www.udemy.com/course/learn-javascript-video/',
    imageUrl: 'https://linktothecourseimage.com',
    skills: "Javascript",
    interests: "Frontend"
  },
  {
    id: '2',
    title: 'Master Python Programming',
    description: 'Learn Python from scratch to advanced levels.',
    videoUrl: 'https://www.udemy.com/course/master-python-programming-video/',
    imageUrl: 'https://linktothecourseimage.com',
  },
  {
    id: '3',
    title: 'Web Development Bootcamp',
    description: 'Become a full-stack web developer in 30 days.',
    videoUrl: 'https://www.udemy.com/course/web-development-bootcamp-video/',
    imageUrl: 'https://linktothecourseimage.com',
  },
  // More courses...
];

// Fetch Udemy courses
app.get('/api/courses', async (req, res) => {
  const { skills, interests } = req.query;
  console.log("Received skills:", skills, "Received interests:", interests);  // Debugging query values
  // Simulate filtering based on skills and interests
    const filteredCourses = mockCourseData.filter(course => {
    return Object.assign({}, course, {
      title: course.title.toLowerCase(),
      description: course.description.toLowerCase(),
    });
  });   
  
    
  
   const filteredResults = filteredCourses.filter(course =>
    course.title.includes(skills.toLowerCase()) || 
    course.description.includes(interests.toLowerCase())
  ); 
  const filteredCourses = mockCourseData.filter(course =>
    course.skills.toLowerCase().includes(skills.toLowerCase()) &&
    course.interests.toLowerCase().includes(interests.toLowerCase())
  );

  if (filteredResults.length > 0) {
    res.json(filteredResults);
  } else {
    res.status(404).json({ message: 'No courses found for your skills and interests.' });
  }
});

// Fetch Udemy course details by courseId
app.get('/api/course/:courseId', async (req, res) => {
  const { courseId } = req.params;

  // Find the course by its ID
  const course = mockCourseData.find(course => course.id === courseId);

  if (course) {
    res.json(course);
  } else {
    res.status(404).json({ message: 'Course not found.' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

 */

/* const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5001;

// Mock course data for testing
const mockCourseData = [
  {
    id: '1',
    title: 'Learn JavaScript',
    description: 'A comprehensive JavaScript course for beginners.',
    videoUrl: 'https://www.udemy.com/course/learn-javascript-video/',
    imageUrl: 'https://linktothecourseimage.com',
    skills: 'JavaScript',
    interests: 'Frontend'
  },
  {
    id: '2',
    title: 'Master Python Programming',
    description: 'Learn Python from scratch to advanced levels.',
    videoUrl: 'https://www.udemy.com/course/master-python-programming-video/',
    imageUrl: 'https://linktothecourseimage.com',
    skills: 'Python',
    interests: 'Backend'
  },
  {
    id: '3',
    title: 'Web Development Bootcamp',
    description: 'Become a full-stack web developer in 30 days.',
    videoUrl: 'https://www.udemy.com/course/web-development-bootcamp-video/',
    imageUrl: 'https://linktothecourseimage.com',
    skills: 'Web Development',
    interests: 'Frontend'
  },
  // Add more courses as needed...
];

// Enable CORS for your frontend (React app)
const corsOptions = {
  origin: 'http://localhost:3000',  // Allow React to access backend
  methods: 'GET,POST',  // Allow these HTTP methods
  allowedHeaders: 'Content-Type',  // Allow specific headers if needed
};

app.use(cors(corsOptions));
app.use(express.json());

// Test server route
app.get('/', (req, res) => {
  res.send('Welcome to the Course Recommendation Backend!');
});

// Fetch Udemy courses
app.get('/api/courses', (req, res) => {
  const { skills, interests } = req.query;

  console.log("Received skills:", skills);  // Debugging log
  console.log("Received interests:", interests);  // Debugging log

  if (!skills || !interests) {
    return res.status(400).json({ message: "Skills and interests are required." });
  }

  // Filtering logic
  const filteredCourses = mockCourseData.filter(course => 
    course.skills.toLowerCase().includes(skills.toLowerCase()) ||
    course.interests.toLowerCase().includes(interests.toLowerCase())
  );

  if (filteredCourses.length > 0) {
    console.log("Filtered Courses: ", filteredCourses);  // Check filtered data
    res.json(filteredCourses);
  } else {
    res.status(404).json({ message: "No courses found for your skills and interests." });
  }
});

// Fetch Udemy course details by courseId
app.get('/api/course/:courseId', (req, res) => {
  const { courseId } = req.params;

  // Find the course by its ID
  const course = mockCourseData.find(course => course.id === courseId);

  if (course) {
    res.json(course);
  } else {
    res.status(404).json({ message: 'Course not found.' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

 */




/* const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5001;

// Mock course data for testing
const mockCourseData = [
  {
    id: '1',
    title: 'Learn JavaScript',
    description: 'A comprehensive JavaScript course for beginners.',
    videoUrl: 'https://www.youtube.com/embed/sBws8MSXN7A', // Use embeddable video URLs
    imageUrl: 'https://linktothecourseimage.com',
    skills: 'JavaScript',
    interests: 'Frontend'
  },
  {
    id: '2',
    title: 'Master Python Programming',
    description: 'Learn Python from scratch to advanced levels.',
    videoUrl: 'https://www.youtube.com/embed/rfscVS0vtbw',
    imageUrl: 'https://linktothecourseimage.com',
    skills: 'Python',
    interests: 'Backend'
  },
  {
    id: '3',
    title: 'Web Development Bootcamp',
    description: 'Become a full-stack web developer in 30 days.',
    videoUrl: 'https://www.youtube.com/embed/3qBXWUpoPHo',
    imageUrl: 'https://linktothecourseimage.com',
    skills: 'Web Development',
    interests: 'Frontend'
  },
];

// Enable CORS
const corsOptions = {
  origin: 'http://localhost:3000',
  methods: 'GET,POST',
  allowedHeaders: 'Content-Type',
};

app.use(cors(corsOptions));
app.use(express.json());

// Test route
app.get('/', (req, res) => {
  res.send('Welcome to the Course Recommendation Backend!');
});

// Fetch courses based on skills and interests
app.get('/api/courses', (req, res) => {
  const { skills, interests } = req.query;

  if (!skills || !interests) {
    return res.status(400).json({ message: "Skills and interests are required." });
  }

  const filteredCourses = mockCourseData.filter(course => 
    course.skills.toLowerCase().includes(skills.toLowerCase()) ||
    course.interests.toLowerCase().includes(interests.toLowerCase())
  );

  if (filteredCourses.length > 0) {
    res.json(filteredCourses);
  } else {
    res.status(404).json({ message: "No courses found for your skills and interests." });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
 */


/* const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5001;

// Mock course data for testing
const mockCourseData = [
  {
    id: '1',
    title: 'Learn JavaScript',
    description: 'A comprehensive JavaScript course for beginners.',
    videoUrl: 'https://www.youtube.com/embed/UpA9OuTEXrE', // Valid YouTube embed URL
    imageUrl: 'https://via.placeholder.com/150',
    skills: 'JavaScript',
    interests: 'Frontend'
  },
  {
    id: '2',
    title: 'Master Python Programming',
    description: 'Learn Python from scratch to advanced levels.',
    videoUrl: 'https://www.youtube.com/embed/0eJUO6N9mI4', // Valid YouTube embed URL
    imageUrl: 'https://via.placeholder.com/150',
    skills: 'Python',
    interests: 'Backend'
  }
];

const corsOptions = {
  origin: 'http://localhost:3000', // Allow React to access backend
  methods: 'GET,POST',            // Allow these HTTP methods
  allowedHeaders: 'Content-Type'  // Allow specific headers if needed
};

app.use(cors(corsOptions));
app.use(express.json());

// Test server route
app.get('/', (req, res) => {
  res.send('Welcome to the Course Recommendation Backend!');
});

// Fetch courses
app.get('/api/courses', (req, res) => {
  const { skills, interests } = req.query;

  console.log("Received skills:", skills);  
  console.log("Received interests:", interests);  

  if (!skills || !interests) {
    return res.status(400).json({ message: "Skills and interests are required." });
  }

  const filteredCourses = mockCourseData.filter(course => 
    course.skills.toLowerCase().includes(skills.toLowerCase()) ||
    course.interests.toLowerCase().includes(interests.toLowerCase())
  );

  if (filteredCourses.length > 0) {
    console.log("Filtered Courses: ", filteredCourses);
    res.json(filteredCourses);
  } else {
    res.status(404).json({ message: "No courses found for your skills and interests." });
  }
});

// Fetch single course details
app.get('/api/course/:courseId', (req, res) => {
  const { courseId } = req.params;

  const course = mockCourseData.find(course => course.id === courseId);

  if (course) {
    res.json(course);
  } else {
    res.status(404).json({ message: 'Course not found.' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
 */


const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5001;

// Mock course data for testing
const mockCourseData = [
  {
    "id": '1',
    "title": 'Learn JavaScript',
    "description": 'A comprehensive JavaScript course for beginners.',
    "videoUrl": 'https://www.youtube.com/embed/PkZNo7MFNFg', // YouTube embed URL
    "imageUrl": 'https://linktothecourseimage.com',
    "skills": 'JavaScript',
    "interests": 'Frontend'
  },
  {
    "id": '2',
    "title": 'Master Python Programming',
    "description": 'Learn Python from scratch to advanced levels.',
    "videoUrl": 'https://www.youtube.com/embed/_uQrJ0TkZlc', // Example YouTube embed URL
    "imageUrl": 'https://linktothecourseimage.com',
    "skills": 'Python',
    "interests": 'Backend'
  },
  {
    "id": '3',
    "title": 'Web Development Bootcamp',
    "description": 'Become a full-stack web developer in 30 days.',
    "videoUrl": 'https://www.youtube.com/embed/jS4aFq5-91M', // Example YouTube embed URL
    "imageUrl": 'https://linktothecourseimage.com',
    "skills": 'Web Development',
    "interests": 'Frontend'
  },
  {
    "id": "4",
    "title": "Data Science for Beginners - Full Course",
    "description": "Learn data science with Python, covering all the essential libraries and tools like Pandas, NumPy, and Matplotlib.",
    "videoUrl": "https://www.youtube.com/embed/ua-CiDNNj30",
    "imageUrl": "https://linktothecourseimage.com",
    "skills": "Data Science",
    "interests": "Data Analysis"
  },
  {
    "id": "5",
    "title": "Introduction to Machine Learning",
    "description": "Learn the basics of machine learning with Python, covering essential algorithms and techniques.",
    "videoUrl": "https://www.youtube.com/embed/ukzFI9rgwfU",
    "imageUrl": "https://linktothecourseimage.com",
    "skills": "Machine Learning",
    "interests": "AI"
  },
  {
    "id": "6",
    "title": "Mastering SQL for Data Science",
    "description": "Learn SQL in-depth for data analysis and data science applications, covering complex queries and database management.",
    "videoUrl": "https://www.youtube.com/embed/HXV3zeQKqGY",
    "imageUrl": "https://linktothecourseimage.com",
    "skills": "SQL",
    "interests": "Data Analysis"
  },
  {
    "id": "7",
    "title": "React JS Full Course",
    "description": "A comprehensive course on React.js, a popular JavaScript library for building user interfaces.",
    "videoUrl": "https://www.youtube.com/embed/Ke90Tje7VS0",
    "imageUrl": "https://linktothecourseimage.com",
    "skills": "React.js",
    "interests": "Frontend"
  },
  {
    "id": "8",
    "title": "JavaScript ES6 for Beginners",
    "description": "Learn the latest features of JavaScript (ES6) in this course, including arrow functions, promises, and more.",
    "videoUrl": "https://www.youtube.com/embed/nZ1DMMsyVyI?si=_fEa5ztQ7rsddBQt",
    "imageUrl": "https://linktothecourseimage.com",
    "skills": "JavaScript",
    "interests": "Frontend"
  },
  {
    "id": "9",
    "title": "CSS for Beginners - Full Course",
    "description": "Learn how to style web pages effectively using CSS, including layout techniques and modern practices.",
    "videoUrl": "https://www.youtube.com/embed/OXGznpKZ_sA?si=Ag_4IZr5MAilu4pZ",
    "imageUrl": "https://linktothecourseimage.com",
    "skills": "CSS",
    "interests": "Frontend"
  },
  {
    "id": "10",
    "title": "Node.js for Beginners",
    "description": "Get started with backend development using Node.js, a popular runtime for building scalable server-side applications.",
    "videoUrl": "https://www.youtube.com/embed/RLtyhwFtXQA?si=fnDihLVTxKq8SGAu",
    "imageUrl": "https://linktothecourseimage.com",
    "skills": "Node.js",
    "interests": "Backend"
  },
  {
    "id": "11",
    "title": "Vue.js Full Course",
    "description": "Learn Vue.js, a progressive JavaScript framework for building user interfaces and single-page applications.",
    "videoUrl": "https://www.youtube.com/embed/FXpIoQ_rT_c?si=rKNGzUQvNuEnK7uO",
    "imageUrl": "https://linktothecourseimage.com",
    "skills": "Vue.js",
    "interests": "Frontend"
  },
  {
    "id": "12",
    "title": "Django for Beginners - Full Course",
    "description": "Learn the fundamentals of Django, a high-level Python web framework, and how to build web applications.",
    "videoUrl": "https://www.youtube.com/embed/F5mRW0jo-U4",
    "imageUrl": "https://linktothecourseimage.com",
    "skills": "Django",
    "interests": "Backend"
  },
  {
    "id": "13",
    "title": "Introduction to Cloud Computing",
    "description": "Learn about cloud computing, its architecture, and different cloud service models like IaaS, PaaS, and SaaS.",
    "videoUrl": "https://www.youtube.com/embed/RWgW-CgdIk0?si=vZJEh8hmUyKOn08g",
    "imageUrl": "https://linktothecourseimage.com",
    "skills": "Cloud Computing",
    "interests": "DevOps"
  },
  {
    "id": "14",
    "title": "Linux for Beginners",
    "description": "Master Linux commands and tools, and learn how to use the Linux operating system for everyday tasks.",
    "videoUrl": "https://www.youtube.com/embed/sWbUDq4S6Y8?si=8jbCczKtUinMGOQP",
    "imageUrl": "https://linktothecourseimage.com",
    "skills": "Linux",
    "interests": "DevOps"
  },
  {
    "id": "15",
    "title": "Introduction to Cyber Security",
    "description": "Learn the fundamentals of cybersecurity and how to protect your data from attacks.",
    "videoUrl": "https://www.youtube.com/embed/z5nc9MDbvkw?si=6RdoZqGI8ynueh5g",
    "imageUrl": "https://linktothecourseimage.com",
    "skills": "Cybersecurity",
    "interests": "Security"
  },
  {
    "id": "16",
    "title": "Ethical Hacking - Full Course",
    "description": "Become a certified ethical hacker with this course covering penetration testing and security auditing.",
    "videoUrl": "https://www.youtube.com/embed/fNzpcB7ODxQ?si=dYePq8M-nswsmc9B",
    "imageUrl": "https://linktothecourseimage.com",
    "skills": "Ethical Hacking",
    "interests": "Security"
  },
  {
    "id": "17",
    "title": "Flutter for Beginners",
    "description": "Learn how to develop mobile apps using Flutter, the Google framework for building cross-platform apps.",
    "videoUrl": "https://www.youtube.com/embed/VPvVD8t02U8?si=X0pisPteHcxfP35H",
    "imageUrl": "https://linktothecourseimage.com",
    "skills": "Flutter",
    "interests": "Mobile App Development"
  },
  {
    "id": "18",
    "title": "Introduction to Blockchain Technology",
    "description": "Learn how blockchain technology works and how it can be applied in industries like finance and healthcare.",
    "videoUrl": "https://www.youtube.com/embed/qOVAbKKSH10?si=5tl86M7P-I8P3XYR",
    "imageUrl": "https://linktothecourseimage.com",
    "skills": "Blockchain",
    "interests": "FinTech"
  },
  {
    "id": "19",
    "title": "Building RESTful APIs with Node.js",
    "description": "Learn how to create RESTful APIs using Node.js and Express.js, an essential skill for backend developers.",
    "videoUrl": "https://www.youtube.com/embed/pKd0Rpw7O48?si=eyZmbz3rubmMDkGL",
    "imageUrl": "https://linktothecourseimage.com",
    "skills": "Node.js",
    "interests": "Backend"
  },
  {
    "id": "20",
    "title": "Introduction to AI and Deep Learning",
    "description": "Learn the basics of AI and deep learning, and understand how neural networks are used for advanced applications.",
    "videoUrl": "https://www.youtube.com/embed/6M5VXKLf4D4?si=ydfl780on4aZ7KIQ",
    "imageUrl": "https://linktothecourseimage.com",
    "skills": "Artificial Intelligence",
    "interests": "AI"
  },
  {
    "id": "21",
    "title": "Game Development with Unity",
    "description": "Learn the fundamentals of game development using Unity, one of the most popular game engines.",
    "videoUrl": "https://www.youtube.com/embed/XtQMytORBmM?si=lNcGoYq8AT_gOyJ9",
    "imageUrl": "https://linktothecourseimage.com",
    "skills": "Unity",
    "interests": "Game Development"
  },
  {
    "id": "22",
    "title": "Node.js Advanced",
    "description": "Learn how to build scalable server-side applications using Node.js.",
    "videoUrl": "https://www.youtube.com/embed/Ck5Iu2A0WpU?si=7_kfc7FNYgWhv_79",
    "imageUrl": "https://linktothecourseimage.com",
    "skills": "Node.js",
    "interests": "Backend"
  },
  
    {
      "id": "23",
      "title": "Advanced JavaScript Concepts",
      "description": "Dive deeper into JavaScript, exploring concepts like closures, promises, and async/await.",
      "videoUrl": "https://www.youtube.com/embed/5fb2aPlgoys?si=GYVKVnB18qVcpDXK",
      "imageUrl": "https://linktothecourseimage.com",
      "skills": "JavaScript",
      "interests": "Frontend"
    },
    {
      "id": "24",
      "title": "Data Structures in Python",
      "description": "Understand essential data structures like lists, tuples, dictionaries, and sets in Python.",
      "videoUrl": "https://www.youtube.com/embed/pkYVOmU3MgA?si=t9641vVbIaCdAer_",
      "imageUrl": "https://linktothecourseimage.com",
      "skills": "Python",
      "interests": "Backend"
    },
    {
      "id": "25",
      "title": "Building Mobile Apps with React Native",
      "description": "Learn to create cross-platform mobile apps using React Native, a popular framework for building native apps.",
      "videoUrl": "https://www.youtube.com/embed/gvkqT_Uoahw?si=Cf3BgIY1rsrLDxAN",
      "imageUrl": "https://linktothecourseimage.com",
      "skills": "React Native",
      "interests": "Mobile App Development"
    },
    {
      "id": "26",
      "title": "Deep Learning Specialization",
      "description": "Learn deep learning techniques and how to implement neural networks with Python and TensorFlow.",
      "videoUrl": "https://www.youtube.com/embed/VyWAvY2CF9c?si=banO2w7CHx1aVEK_",
      "imageUrl": "https://linktothecourseimage.com",
      "skills": "Deep Learning",
      "interests": "AI"
    },
    {
      "id": "27",
      "title": "Mastering Git and GitHub",
      "description": "Learn version control using Git and GitHub to manage your codebase efficiently and collaborate with others.",
      "videoUrl": "https://www.youtube.com/embed/apGV9Kg7ics?si=6QU98HfTY_B15Og9",
      "imageUrl": "https://linktothecourseimage.com",
      "skills": "Git, GitHub",
      "interests": "DevOps"
    },
    {
      "id": "28",
      "title": "Building Modern Web Apps with Angular",
      "description": "Learn how to build powerful web applications using Angular, a popular JavaScript framework.",
      "videoUrl": "https://www.youtube.com/embed/k5E2AVpwsko?si=I4dsuqzQjnhdWYmY",
      "imageUrl": "https://linktothecourseimage.com",
      "skills": "Angular",
      "interests": "Frontend"
    },
    {
      "id": "29",
      "title": "Intro to App Development with Swift",
      "description": "Learn how to develop iOS apps using Swift, Apple’s programming language for building mobile applications.",
      "videoUrl": "https://www.youtube.com/embed/CwA1VWP0Ldw?si=e4zNWF0SCbCaoIMB",
      "imageUrl": "https://linktothecourseimage.com",
      "skills": "Swift",
      "interests": "Mobile App Development"
    },
    {
      "id": "30",
      "title": "Mastering Web APIs with Express.js",
      "description": "Learn to build scalable web APIs using Node.js and Express.js for backend development.",
      "videoUrl": "https://www.youtube.com/embed/-MTSQjw5DrM?si=JdeRiZxPxpqtpq2B",
      "imageUrl": "https://linktothecourseimage.com",
      "skills": "Node.js, Express.js",
      "interests": "Backend"
    },
    {
      "id": "31",
      "title": "Introduction to Cloud-Native Development",
      "description": "Learn how to develop and deploy applications in cloud-native environments with Kubernetes and Docker.",
      "videoUrl": "https://www.youtube.com/embed/YrGcb_zaE3s?si=qvr5X0Q9feVGbDyY",
      "imageUrl": "https://linktothecourseimage.com",
      "skills": "Cloud-Native Development",
      "interests": "DevOps"
    },
    {
      "id": "32",
      "title": 'Data Science Crash Course',
      "description": 'An in-depth introduction to data science, covering Python, Pandas, Matplotlib, and machine learning basics.',
      "videoUrl": 'https://www.youtube.com/embed/ua-CiDNNj30?si=rfjUSBJ9hi4Pjryq', // Example YouTube embed URL
      "imageUrl": 'https://linktothecourseimage.com/datascience',
      "skills": 'Python, Data Analysis, Machine Learning, Visualization',
      "interests": 'Data Science, AI, Analytics'
  },
  
    
      {
        "id": "33",
        "title": "Java Programming for Beginners",
        "description": "Learn Java from scratch, covering variables, loops, and object-oriented programming concepts.",
        "videoUrl": "https://www.youtube.com/embed/A74TOX803D0?si=ejDljqOBQr5dn05n",
        "imageUrl": "https://linktothecourseimage.com",
        "skills": "Java",
        "interests": "Backend"
      },
      {
        "id": "34",
        "title": "React Native: Build Mobile Apps with JavaScript",
        "description": "Build mobile apps using React Native and JavaScript, without needing native development skills.",
        "videoUrl": "https://www.youtube.com/embed/mJ3bGvy0WAY?si=HIO7WTG1j2ytwHNO",
        "imageUrl": "https://linktothecourseimage.com",
        "skills": "React Native",
        "interests": "Mobile App Development"
      },
      {
        "id": "35",
        "title": "AI for Everyone",
        "description": "An introduction to AI, its applications, and how it's shaping the future of work and society.",
        "videoUrl": "https://www.youtube.com/embed/mEsleV16qdo?si=QJETgMj23iUqAW5z",
        "imageUrl": "https://linktothecourseimage.com",
        "skills": "Artificial Intelligence",
        "interests": "AI"
      },
      {
        "id": "36",
        "title": "advanced js",
        "description": "Go beyond the basics and learn advanced JavaScript techniques, including closures, promises, and async programming.",
        "videoUrl": "https://www.youtube.com/embed/5fb2aPlgoys?si=piyVDtLuBIvNF2lZ",
        "imageUrl": "https://linktothecourseimage.com",
        "skills": "JavaScript",
        "interests": "Frontend"
      },
      {
        "id": "37",
        "title": "C# for Beginners",
        "description": "Learn C# programming from scratch and build applications using one of the most powerful languages.",
        "videoUrl": "https://www.youtube.com/embed/GhQdlIFylQ8?si=uqT9P5QvgxWjWNVj",
        "imageUrl": "https://linktothecourseimage.com",
        "skills": "C#",
        "interests": "Backend"
      },
      {
        "id": "38",
        "title": "Introduction to Data Analysis with Python",
        "description": "Learn how to analyze data using Python, focusing on libraries like Pandas and Matplotlib.",
        "videoUrl": "https://www.youtube.com/embed/r-uOLxNrNk8?si=sVdnKaZjSsx1H2nr",
        "imageUrl": "https://linktothecourseimage.com",
        "skills": "Python",
        "interests": "Data Analysis"
      },
      {
        "id": "39",
        "title": "Flutter Advanced - Build Beautiful Apps",
        "description": "Take your Flutter skills to the next level and build complex mobile applications with advanced features.",
        "videoUrl": "https://www.youtube.com/embed/0PIMKYdxOm0?si=ZM57g6kRFOoxwbG8",
        "imageUrl": "https://linktothecourseimage.com",
        "skills": "Flutter",
        "interests": "Mobile App Development"
      },
      {
        "id": "40",
        "title": "Advanced SQL",
        "description": "Learn how to work with databases and write SQL queries to interact with data efficiently.",
        "videoUrl": "https://www.youtube.com/embed/M-55BmjOuXY?si=hotHE3Jl7_dBsTL6",
        "imageUrl": "https://linktothecourseimage.com",
        "skills": "SQL",
        "interests": "Data Analysis"
      },
      {
        "id": "41",
        "title": "Building REST APIs with Django",
        "description": "Learn how to create robust RESTful APIs with Django, a powerful Python web framework.",
        "videoUrl": "https://www.youtube.com/embed/t-uAgI-AUxc?si=NgM408L3NS-LfMNk",
        "imageUrl": "https://linktothecourseimage.com",
        "skills": "Django",
        "interests": "Backend"
      },
      {
        "id": "42",
        "title": "Introduction to Blockchain with Ethereum",
        "description": "Learn the basics of blockchain and how Ethereum enables decentralized applications (dApps).",
        "videoUrl": "https://www.youtube.com/embed/coQ5dg8wM2o?si=i_NgCxCg8y_8NODR",
        "imageUrl": "https://linktothecourseimage.com",
        "skills": "Blockchain",
        "interests": "FinTech"
      },
      {
        "id": "43",
        "title": "Web Design for Beginners",
        "description": "Learn web design basics, including HTML, CSS, and responsive design principles.",
        "videoUrl": "https://www.youtube.com/embed/B-ytMSuwbf8?si=l3FHqkMlJZuAKbTW",
        "imageUrl": "https://linktothecourseimage.com",
        "skills": "Web Design",
        "interests": "Frontend"
      },
      {
        "id": "44",
        "title": "Introduction to Artificial Intelligence with Python",
        "description": "Learn how to build AI models using Python, from simple machine learning algorithms to neural networks.",
        "videoUrl": "https://www.youtube.com/embed/7O60HOZRLng?si=gyrF0Ww1nfhdIuGp",
        "imageUrl": "https://linktothecourseimage.com",
        "skills": "AI",
        "interests": "AI"
      },
      {
        "id": "45",
        "title": "Learning Django: From Beginner to Pro",
        "description": "Master the Django web framework by building real-world applications using Python.",
        "videoUrl": "https://www.youtube.com/embed/OTmQOjsl0eg?si=TFiP017C-jTtQny-",
        "imageUrl": "https://linktothecourseimage.com",
        "skills": "Django",
        "interests": "Backend"
      },
      {
        "id": "46",
        "title": "Advanced React and Redux",
        "description": "Dive into advanced concepts of React and Redux, including state management and hooks.",
        "videoUrl": "https://www.youtube.com/embed/9P2IUx13MZI?si=qByAfeQx8MloFJ0A",
        "imageUrl": "https://linktothecourseimage.com",
        "skills": "React, Redux",
        "interests": "Frontend"
      },
      {
        "id": "47",
        "title": "Building Chatbots with Python",
        "description": "Learn how to develop chatbots using Python libraries such as NLTK and TensorFlow.",
        "videoUrl": "https://www.youtube.com/embed/q5HiD5PNuck?si=4cgGAqoBKwlvUKCX",
        "imageUrl": "https://linktothecourseimage.com",
        "skills": "Python",
        "interests": "AI"
      },
      {
        "id": "48",
        "title": "Node.js for Advanced Developers",
        "description": "Take your Node.js skills to the next level by learning advanced topics like streams, clustering, and testing.",
        "videoUrl": "https://www.youtube.com/embed/f2EqECiTBL8?si=jAgZPLzuc0HqLi6e",
        "imageUrl": "https://linktothecourseimage.com",
        "skills": "Node.js",
        "interests": "Backend"
      },
      {
        "id": "49",
        "title": "Introduction to Data Science with R",
        "description": "Get started with data science using R, learning basic techniques for data manipulation and analysis.",
        "videoUrl": "https://www.youtube.com/embed/0vCK17cQt14?si=Sod4Q9atMQ4wfhXO",
        "imageUrl": "https://linktothecourseimage.com",
        "skills": "R",
        "interests": "Data Analysis"
      },
      {
        "id": "50",
        "title": "Kubernetes for Beginners",
        "description": "Learn Kubernetes, the leading platform for automating deployment, scaling, and management of containerized applications.",
        "videoUrl": "https://www.youtube.com/embed/X48VuDVv0do?si=ELowDGq5Bcw_wzSn",
        "imageUrl": "https://linktothecourseimage.com",
        "skills": "Kubernetes",
        "interests": "DevOps"
      },
      {
        "id": "51",
        "title": "Java Programming: A Comprehensive Guide",
        "description": "Learn core Java programming concepts like object-oriented design, data structures, and algorithms.",
        "videoUrl": "https://www.youtube.com/embed/VDEn3I478B0?si=h_Xd8UrEP6k81CvU",
        "imageUrl": "https://linktothecourseimage.com",
        "skills": "Java",
        "interests": "Backend"
      },
      {
        "id": "52",
        "title": "Mastering Mobile Development with React Native",
        "description": "Learn to build cross-platform mobile apps with React Native, integrating device APIs and creating beautiful UIs.",
        "videoUrl": "https://www.youtube.com/embed/X8ipUgXH6jw?si=kyolh5-g8Awgh2x-",
        "imageUrl": "https://linktothecourseimage.com",
        "skills": "React Native",
        "interests": "Mobile App Development"
      },
      {
        "id": "53",
        "title": "Introduction to Big Data Analytics",
        "description": "Learn the basics of big data analytics and tools like Hadoop and Spark for analyzing large datasets.",
        "videoUrl": "https://www.youtube.com/embed/yZvFH7B6gKI?si=9-nkZCMIYMnL3odq",
        "imageUrl": "https://linktothecourseimage.com",
         "skills": "Big Data Technologies",
    "interests": "Big Data"
      },
      {
        "id": "54",
        "title": "Problem Solving with Algorithms and Data Structures",
        "description": "Enhance your problem-solving skills by mastering algorithms and data structures. Learn how to solve complex coding problems efficiently using techniques like recursion, dynamic programming, and greedy algorithms.",
        "videoUrl": "https://www.youtube.com/embed/oBt53YbR9Kk?si=FnOe1YY9Qbf70Y9m",
        "imageUrl": "https://linktothecourseimage.com",
        "skills": "Algorithms, Data Structures, Problem Solving",
        "interests": "Competitive Programming, Coding Challenges"
      },
      {
        "id": "55",
        "title": "Full-Stack Web Development with React & Node.js",
        "description": "Learn to build full-stack web applications using React for the frontend and Node.js with Express for the backend. Master both client-side and server-side development and integrate with databases like MongoDB.",
        "videoUrl": "https://www.youtube.com/embed/nu_pCVPKzTk?si=QIAo6P6yI2lC_9rU",
        "imageUrl": "https://linktothecourseimage.com",
        "skills": "React, Node.js, Express, MongoDB",
        "interests": "Full-Stack Development, Web Development"
      }
  
]

// Enable CORS for your frontend (React app)
const corsOptions = {
  origin: 'http://localhost:3000',  // Allow React to access backend
  methods: 'GET,POST',  // Allow these HTTP methods
  allowedHeaders: 'Content-Type',  // Allow specific headers if needed
};

app.use(cors(corsOptions));
app.use(express.json());

// Test server route
app.get('/', (req, res) => {
  res.send('Welcome to the Course Recommendation Backend!');
});

// Fetch Udemy courses
app.get('/api/courses', (req, res) => {
  const { skills, interests } = req.query;

  if (!skills || !interests) {
    return res.status(400).json({ message: "Skills and interests are required." });
  }

  // Filtering logic
  const filteredCourses = mockCourseData.filter(course => 
    course.skills.toLowerCase().includes(skills.toLowerCase()) ||
    course.interests.toLowerCase().includes(interests.toLowerCase())
  );

  if (filteredCourses.length > 0) {
    res.json(filteredCourses);
  } else {
    res.status(404).json({ message: "No courses found for your skills and interests." });
  }
});

// Fetch Udemy course details by courseId
app.get('/api/course/:courseId', (req, res) => {
  const { courseId } = req.params;

  // Find the course by its ID
  const course = mockCourseData.find(course => course.id === courseId);

  if (course) {
    res.json(course);
  } else {
    res.status(404).json({ message: 'Course not found.' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
