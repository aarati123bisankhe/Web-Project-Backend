const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../database");

// Import models
const Admin = require("./Admin"); // Changed from User to Admin
const Video = require("./Video");

// Define relationships
Admin.hasMany(Video, { foreignKey: "uploadedBy", as: "videos" });
Video.belongsTo(Admin, { foreignKey: "uploadedBy", as: "uploader" });

const db = { sequelize, Sequelize, Admin, Video };

module.exports = db;





















// const { Sequelize, DataTypes } = require("sequelize");
// const sequelize = require("../database");

// // Import models
// const User = require("./User");
// const Video = require("./Video");
// const Notification = require("./Notification");
// const Comment = require("./Comment");

// // Define relationships
// // User & Video Relationship (Uploader)
// User.hasMany(Video, { foreignKey: "uploadedBy", as: "videos" });
// Video.belongsTo(User, { foreignKey: "uploadedBy", as: "uploader" });

// // User & Notification Relationship
// User.hasMany(Notification, { foreignKey: "userId", as: "notifications" });
// Notification.belongsTo(User, { foreignKey: "userId", as: "user" });

// User.hasMany(Comment, { foreignKey: "userId", as: "comments" });
// Video.hasMany(Comment, { foreignKey: "videoId", as: "comments" });
// Comment.belongsTo(User, { foreignKey: "userId", as: "user" });
// Comment.belongsTo(Video, { foreignKey: "videoId", as: "video" });

// // Video & Notification Relationship
// Video.hasMany(Notification, { foreignKey: "videoId", as: "videoNotifications" });
// Notification.belongsTo(Video, { foreignKey: "videoId", as: "video" });

// // Export database instance
// const db = { sequelize, Sequelize, User, Video, Notification, Comment };

// module.exports = db; // Now we use `db` in controllers



