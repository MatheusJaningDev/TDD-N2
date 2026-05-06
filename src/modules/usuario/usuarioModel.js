const sequelize = require("../../config/database");
const {Model, DataTypes } = require('sequelize');
 
class Users extends Model {}
 
usuario.init({
    id_usuario: {
        type: DataTypes.INTEGER,
        autoincrement: true,
    },
    nome: {
        type: DataTypes.STRING,

    },
    email: {
        type: DataTypes.STRING,
    },
    senha_hash: {
        type: DataTypes.STRING,
        allowNull: false
    },
    foro_perfil: {
        type: DataTypes.STRING
    },
    bio: {
        type: DataTypes.STRING
    },
    cidade_origem: {
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