const sequelize = require("../../config/database");
const {Model, DataTypes } = require('sequelize');
 
class Users extends Model {}
 
roteiro.init({
    id_roteiro: {
        type: DataTypes.INTEGER,
        autoincrement: true,
    },
    id_usuario: {
        type: DataTypes.INTEGER,
        autoincrement: true,
    },
    titulo_roteiro: {
        type: DataTypes.varchar(100),
        allowNull: false
    },
    data_inicio: {
        type: DataTypes.DATE,
        allowNull: false
    },
    data_fim: {
        type: DataTypes.DATE,
        allowNull: false,
    },
},
{
    sequelize,
    modelName: 'Users',
    timestamps: true,
    underscored: true  
});
 
module.exports = Users;
 