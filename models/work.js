module.exports = function (sequelize, DataTypes) {
    var Work = sequelize.define("Work", {
        title: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        body: {
            type: DataTypes.TEXT,
            allowNull: true,
            len: [1]
        }
    });

    // Note.associate = function(models) {
    //   // We're saying that a Note should belong to an User
    //   // A Note can't be created without an User due to the foreign key constraint
    //   Note.belongsTo(models.Author, { //should belong to a user
    //     foreignKey: {
    //       allowNull: false
    //     }
    //   });
    // };

    return Work;
};