const express = require('express');
const app = express();
const router = express.Router();

// Application middleware
app.use((req, res, next) => {
  console.log('Global Middleware');
  next();
});

// Router middleware
router.use((req, res, next) => {
  console.log('Router Middleware');
  next();
});

router.get('/user/:id', (req, res) => {
  res.send(`User ID: ${req.params.id}`);
});

app.use('/api', router);



// Example route that generates an error
app.get('/error', (req, res, next) => {
    const error = new Error('Something went wrong!');
    error.status = 500;
    next(error); // Pass the error to the next middleware
  });
  
  // Error handling middleware
  app.use((err, req, res, next) => {
    console.error(err.stack); // Log the error stack trace for debugging
  
    res.status(err.status || 500); // Set the status code
    res.json({
      message: err.message,
      // Include stack trace only in development mode
      stack: process.env.NODE_ENV === 'development' ? err.stack : {}
    });
  });

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
