const { DataTypes } = require("sequelize");
const sequelize = require("../database");

const Admin = sequelize.define("Admin", {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  fullname: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true,
    },
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  role: {
    type: DataTypes.ENUM("admin"), // Only "admin" role allowed
    defaultValue: "admin",
  },
}, {
  timestamps: true, // Enables createdAt and updatedAt fields
});

module.exports = Admin;



































































// const { DataTypes } = require("sequelize");
// const sequelize = require("../database"); // Use sequelize instance

// const User = sequelize.define(
//   "User",
//   {
//     id: {
//       type: DataTypes.INTEGER,
//       autoIncrement: true,
//       primaryKey: true,
//     },
//     fullname: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     email: {
//       type: DataTypes.STRING,
//       allowNull: false,
//       unique: true,
//       // validate: {
//       // isEmail: true, // Ensures valid email format
//       // }
//     },
//     password: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     // contact: {
//     //   type: DataTypes.STRING,
//     //   allowNull: false,
//     // },
//     // address: {
//     //   type: DataTypes.STRING,
//     //   allowNull: false,
//     // },
//   },
//   {
//     timestamps: true,
//     tableName: "Users",
//   }
// );

// module.exports = User;

