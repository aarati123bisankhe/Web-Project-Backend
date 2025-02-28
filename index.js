// Initialization
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
const sequelize = require('./database');

// Import database and models
const db = require('./models'); // Import db from index.js
const adminRoute = require('./routes/adminRoutes');
const videoRoute = require('./routes/videoRoutes');

// Define PORT explicitly
const PORT = process.env.PORT || 8080; // Now it's clearly defined

// Creating a Server
const app = express();

// Enable CORS for all origins
app.use(cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"]
}));

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve uploaded videos
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// Routes
app.use('/admin', adminRoute); // Changed '/users' to '/admin' for admin-specific routes
app.use('/videos', videoRoute);

// Sync Database and Start Server on the Defined PORT
db.sequelize.sync({ alter: true })
    .then(() => {
        console.log("Database synchronized successfully!");
        app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
    })
    .catch(err => console.error("Database sync error:", err));








// require('dotenv').config();
// const express = require('express');
// const cors = require('cors');
// const sequelize = require('./database');
// const userRoutes = require('./routes/userRoutes');

// const app = express();
// app.use(cors());
// app.use(express.json());

// // Routes
// app.use('/api/users', userRoutes);

// // Sync Database
// sequelize.sync()
//     .then(() => console.log('Database synchronized successfully!'))
//     .catch(err => console.error('Error syncing database:', err));

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
