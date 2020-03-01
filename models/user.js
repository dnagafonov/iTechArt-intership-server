module.exports = (sequelize, type) => sequelize.define('user', {
    id: {
        type: type.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    login: {
        type: type.STRING,
        primaryKey: true,
        allowNull: false
    },
    password: {
        type: type.STRING,
        allowNull: false
    }
});