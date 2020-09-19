module.exports = function (sequelize, DataTypes) {
    var Note = sequelize.define("Note", {
        title: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 100]
            }
        },
        body: {
            type: DataTypes.TEXT,
            allowNull: true,
            validate: {
                len: [1]
          }
        },
        url: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        article: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        }
    });

    Note.associate = function(models) {
      Note.belongsTo(models.User, { 
        foreignKey: {
          allowNull: false
        }
      });
    };

    return Note;
};