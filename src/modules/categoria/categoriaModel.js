const sequelize = require("../../config/database");
const {Model, DataTypes } = require('sequelize');
 
class Users extends Model {}
 
destino.init({
    id_categoria: {
        type: DataTypes.INTEGER,
        autoincrement: true,
    },
    nome_categoria: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
    },
    descricao: {
        type: DataTypes.STRING,
    }},

{
    sequelize,
    modelName: 'Users',
    timestamps: true,
    underscored: true  
});
 
module.exports = Users; 