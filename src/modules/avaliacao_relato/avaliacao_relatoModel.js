const sequelize = require("../../config/database");
const {Model, DataTypes } = require('sequelize');
 
class Users extends Model {}
 
avaliacao_relato.init({
    id_avaliacao: {
        type: DataTypes.INTEGER,
        autoincrement: true,
    },
    id_usuario: {
        type: DataTypes.INTEGER,
    },
    id_destino: {
        type: DataTypes.INTEGER,
    },
    nota: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    texto_relato: {
        type: DataTypes.STRING
    },
},
{
    sequelize,
    modelName: 'Users',
    timestamps: true,
    underscored: true  
});
 
module.exports = Users;