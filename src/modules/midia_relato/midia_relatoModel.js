const sequelize = require("../../config/database");
const {Model, DataTypes } = require('sequelize');
 
class Users extends Model {}
 
midia_relato.init({
    id_midia: {
        type: DataTypes.INTEGER,
        autoincrement: true,
    },
    id_avaliacao: {
        type: DataTypes.INTEGER,
    },
    caminho_arquivo: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    tipo_arquivo: {
        type: DataTypes.STRING,
    },
    tamanho: {
        type: DataTypes.INTEGER
    },
},
{
    sequelize,
    modelName: 'Users',
    timestamps: true,
    underscored: true  
});
 
module.exports = Users;