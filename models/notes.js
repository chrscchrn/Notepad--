module.exports = (sequelize, DataTypes) => {
    var Note = sequelize.define("Note", {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      body: {
        type: DataTypes.TEXT,
        allowNull: false,
        len: [1]
      }
    });
  
    Note.associate = () => {
      // Post should belong to a user
    };
  
    return Note;
};