const sequelize = require("../../config/database");
const {Model, DataTypes } = require('sequelize');
 
class Users extends Model {}
 
avaliacao_relato.init({
    id_usuario: {
        type: DataTypes.INTEGER,
    },
    id_destino: {
        type: DataTypes.INTEGER,
    },
    data_favorito: {
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