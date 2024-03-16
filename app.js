const express = require('express');
const { Scene } = require('@soulmachines/smwebsdk');
const path = require('path');

const app = express();
const port = 8080;

// Serve HTML files
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/why', (req, res) => {
  res.sendFile(path.join(__dirname, 'why.html'));
});

app.get('/contact', (req, res) => {
  res.sendFile(path.join(__dirname, 'contact.html'));
});

app.get('/trainer', (req, res) => {
  res.sendFile(path.join(__dirname, 'trainer.html'));
});

// Serve WebSDK
app.use('/smwebsdk', express.static('node_modules/@soulmachines/smwebsdk/dist'));

// Start server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

// Digital Person integration
if (typeof window === 'undefined') {
  // This code will run in Node.js environment
  console.log('This code is running in a Node.js environment.');
} else {
  // This code will only run in the browser environment
  const videoEl = document.getElementById('sm-video');
  
  if (videoEl) {
    const scene = new Scene({ apiKey: 'eyJzb3VsSWQiOiJkZG5hLW91dHNvdXJjZWJyZWV6ZWI2ZGQtLWV4cGxvcmVyIiwiYXV0aFNlcnZlciI6Imh0dHBzOi8vZGguYXouc291bG1hY2hpbmVzLmNsb3VkL2FwaS9qd3QiLCJhdXRoVG9rZW4iOiJhcGlrZXlfdjFfZmEwMmRkOTYtNTkwMC00M2Q4LTg1MjctOGZmMTVhMDIwMmUyIn0=' });

    scene.connect()
      .then(sessionId => {
        console.log('Success! Session ID:', sessionId);
        scene.startVideo().then(videoState => {
          console.log('Video started', videoState);
        }).catch(error => console.log('Video start error:', error));
      })
      .catch(error => {
        console.log('Connection failed:', error);
        // Additional error handling logic can be added here
      });
  } else {
    console.log('Element with ID "sm-video" not found.');
  }
}
