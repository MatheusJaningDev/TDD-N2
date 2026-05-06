const sequelize = require("../../config/database");
const {Model, DataTypes } = require('sequelize');
 
class Users extends Model {}
 
destino.init({
    id_destino: {
        type: DataTypes.INTEGER,
        autoincrement: true,
    },
    id_categoria: {
        type: DataTypes.INTEGER,
    },
    nome_destino: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    localizacao: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    descricao_oficial: {
        type: DataTypes.STRING,
    },
    id_admin_criador: {
        type: DataTypes.INTEGER,
    },
    data_cadastro: {
        type: DataTypes.DATE,
    },
},
{
    sequelize,
    modelName: 'Users',
    timestamps: true,
    underscored: true  
});
 
module.exports = Users;