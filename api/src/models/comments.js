"use strict";
module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define("comment", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  });

  return Comment;
};
