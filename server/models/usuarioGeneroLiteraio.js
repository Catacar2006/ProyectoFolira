import { DataTypes, ENUM, Model, NOW } from "sequelize";
import {  sequelize } from "../config/db.js";
import { Usuario } from "./usuario.model.js";
import { GeneroLiterario } from "./generoLiterario.model.js"; 

const UsuarioGeneroLiterario = sequelize.define('UsuarioGeneroLiterario', {
  idUsuarioFK: {
    type: DataTypes.INTEGER.UNSIGNED,
    references: {
      model: Usuario,
      key: 'idUsuario'
    },
    onDelete: 'CASCADE'
  },
  idGeneroFK: {
    type: DataTypes.INTEGER.UNSIGNED,
    references: {
      model: GeneroLiterario,
      key: 'idGenero'
    },
    onDelete: 'CASCADE'
  }
}, {
  tableName: 'UsuarioGeneroLiterario',
  timestamps: false,
  primaryKey: ['idUsuarioFK', 'idGeneroFK']
});

Usuario.belongsToMany(GeneroLiterario, { through: UsuarioGeneroLiterario, foreignKey: 'idUsuarioFK' });
GeneroLiterario.belongsToMany(Usuario, { through: UsuarioGeneroLiterario, foreignKey: 'idGeneroFK' });

export {UsuarioGeneroLiterario}
