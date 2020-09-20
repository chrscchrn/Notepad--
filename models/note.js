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
        },
        source: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        publishedAt: {
            type: DataTypes.STRING,
        },
        author: {
            type: DataTypes.STRING,
        },
        content: {
            type: DataTypes.STRING,
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