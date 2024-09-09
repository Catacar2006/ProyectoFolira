import { DataTypes, ENUM, Model} from "sequelize";
import {  sequelize } from "../config/db.js";


class Rol extends Model{
    static async createRol(rol){
        try {
            return await this.create(rol);
        } catch (error) {
            console.error(`error al crear rol: ${error}` );
            throw error;
        }
    }

    static async getRoles(){
        try {
            return await this.findAll();
        } catch (error) {
            console.error(`error al encontrar los roles: ${error}` );
            throw error;
        }
    }

    static async getRol(id){
        try {
            return await this.findByPk(id)
        } catch (error) {
            console.error(`error al encontrar el usuario: ${error}` );
            throw error;
        }
    }

    static async  updateRol(id, update_rol){
        try {
            const rol = await this.findByPk(id);
            return rol.update(update_rol);
        } catch (error) {
            console.error(`error al actualizar el rol: ${error}` );
            throw error;
        }
    }
    
    static async alterarEstadoRol(idRol) {
        try {
          const result = await sequelize.query(
            'CALL ActivarDesactivarRol(:idRol)',
            {replacements: { idRol },type: sequelize.QueryTypes.RAW} // Cambiado a RAW para manejar el resultado de un procedimiento almacenado
          );
          return result;
        } catch (error) {
          console.error(`Error al alterar estado del rol: ${error.message}`);
          throw error;
        }
      }

}

Rol.init({

    idRol:{type: DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
    TipoRol:{type:ENUM('usuario','admin'), allowNull:false},
    descripcion:{type:DataTypes.STRING(100), allowNull:false},
    estado:{type:DataTypes.BOOLEAN}
},
 {
    sequelize,
    tableName:"Rol",
    timestamps:false,
    underscored:false
 }
);

export {Rol};