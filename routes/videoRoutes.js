const express = require('express');
const router = express.Router();
const videoController = require('../controllers/videoController'); // Import video controller
const multer = require('multer');
const path = require('path');
const authenticate = require('../middleware/authMiddleware');

// Multer configuration for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, '../uploads')); // Save files in the "uploads" folder
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`); // Name files with timestamp
  },
});

const upload = multer({ 
  storage,
  fileFilter: (req, file, cb) => {
    const allowedTypes = [
      'video/mp4',
      'video/mkv',
      'video/x-matroska',
      'video/avi',
      'video/mov',
      'video/quicktime'
    ];
    if (allowedTypes.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new Error('Only video files are allowed!'), false);
    }
  },
});

// Middleware to check if the user is an admin
const isAdmin = (req, res, next) => {
  if (req.user && req.user.role === "admin") {
    next(); // Admin can proceed
  } else {
    return res.status(403).json({ message: "Forbidden: Only admins can upload videos" });
  }
};

// Video upload route (Only admin can upload)
router.post('/upload', authenticate, isAdmin, upload.single('video'), videoController.upload);

// Search videos
router.get("/search", videoController.searchVideos);

// Get all videos
router.get('/videoList', videoController.getAllVideos);

// Get a single video by ID
router.get("/:id", videoController.getVideoById);

// Get remaining videos
router.get("/remaining/:id", videoController.getRemainingVideos);

module.exports = router;





















































// const express = require('express');
// const router = express.Router();
// const videoController = require('../controllers/videoController'); // Import video controller
// const multer = require('multer');
// const path = require('path');
// const authenticate = require('../middleware/authMiddleware');

// // Multer configuration for file uploads
// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, path.join(__dirname, '../uploads')); // Save files in the "uploads" folder
//   },
//   filename: (req, file, cb) => {
//     cb(null, `${Date.now()}-${file.originalname}`); // Name files with timestamp
//   },
// });

// const upload = multer({ 
//   storage,
//   fileFilter: (req, file, cb) => {
//     const allowedTypes = [
//       'video/mp4',
//       'video/mkv',
//       'video/x-matroska',
//       'video/avi',
//       'video/mov',
//       'video/quicktime'
//     ];
//     if (allowedTypes.includes(file.mimetype)) {
//       cb(null, true);
//     } else {
//       cb(new Error('Only video files are allowed!'), false);
//     }
//   },
//  });

// // Video upload route
// router.post('/upload',authenticate, upload.single('video'), videoController.upload);

// router.get("/search", videoController.searchVideos);

// // Get all videos
// router.get('/videoList', videoController.getAllVideos);

// router.get("/:id", videoController.getVideoById);



// router.get("/remaining/:id", videoController.getRemainingVideos);





// module.exports = router;
