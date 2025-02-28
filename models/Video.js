const { DataTypes } = require("sequelize");
const sequelize = require("../database"); // Use sequelize instance
const Admin = require("./Admin"); // Import Admin model

const Video = sequelize.define(
  "Video",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    category: {
      type: DataTypes.STRING,
    },
    tags: {
      type: DataTypes.STRING,
    },
    videoPath: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    uploadedBy: {
      type: DataTypes.UUID, // Matches Admin ID type
      allowNull: false,
      references: {
        model: "Admins", // Correct table name for Admin
        key: "id",
      },
    },
  },
  {
    timestamps: true,
    tableName: "Videos",
  }
);

// Define relationship: An admin can upload many videos
Admin.hasMany(Video, { foreignKey: "uploadedBy", as: "videos" });
Video.belongsTo(Admin, { foreignKey: "uploadedBy", as: "uploader" });

module.exports = Video;



















































// const { DataTypes } = require("sequelize");
// const sequelize = require("../database"); // Use sequelize instance
// const User = require("./Admin"); // Import User model

// const Video = sequelize.define(
//   "Video",
//   {
//     id: {
//       type: DataTypes.INTEGER,
//       autoIncrement: true,
//       primaryKey: true,
//     },
//     title: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     description: {
//       type: DataTypes.TEXT,
//       allowNull: false,
//     },
//     category: {
//       type: DataTypes.STRING,
//     },
//     tags: {
//       type: DataTypes.STRING,
//     },
//     videoPath: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     uploadedBy: {
//       type: DataTypes.INTEGER,
//       allowNull: false,
//       references: {
//         model: "Users", // Reference the correct table name
//         key: "id",
//       },
//     },
//   },
//   {
//     timestamps: true,
//     tableName: "Videos",
//   }
// );

// module.exports = Video;
