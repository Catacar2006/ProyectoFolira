import { DataTypes, ENUM, Model, NOW } from "sequelize";
import {  sequelize } from "../config/db.js";

class ComunidadUsuario extends Model {
    static async createComunidadUsuario(comunidadusuario){
        try{
            return await this.create(comunidadusuario);
        }catch(error){
            console.error(`error al crear comunidadusuario: ${error}` );
            throw error;
        }
    }

    static async getComunidadUsuarios(){
        try {
            return await this.findAll();
        } catch (error) {
            console.error(`error al encontrar la comunidadusuarios: ${error}` );
            throw error;
        }
    }

    static async getComunidadUsuario(id){
        try {
            return await this.findByPk(id);
        } catch (error) {
            console.error(`error al encontrar la comunidadusuario: ${error}` );
            throw error;
        }
    }

    static async alterarEstadoComunidadUsuario(idComunidadUsuario) {
        try {
          const result = await sequelize.query(
            'CALL ActivarDesactivarComunidadUsuario(:idComunidadUsuario)',
            {replacements: { idComunidadUsuario },type: sequelize.QueryTypes.RAW} // Cambiado a RAW para manejar el resultado de un procedimiento almacenado
          );
          return result;
        } catch (error) {
          console.error(`Error al alterar estado de ComunidadUsuario: ${error.message}`);
          throw error;
        }
      }
      

    static async updateComunidadUsuario(id, update_comunidadusuario){
        try {
            const comunidadusuario =  await this.findByPk(id);
            return comunidadusuario.update(update_comunidadusuario);
            
        } catch (error) {
            console.error(`error al actualizar la comunidadusuario: ${error}` );
            throw error;
        }
    }
}
ComunidadUsuario.init({
 
    idComunidadUsuario:{type: DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
    rol:{type:ENUM('miembro','administrador')},
    estado:{type:DataTypes.BOOLEAN, allowNull:false},
    idUsuarioFK:{type: DataTypes.INTEGER, allowNull:false},
    idComunidadFK:{type: DataTypes.INTEGER, allowNull:false}
},
 {
    sequelize,
    tableName: "ComunidadUsuario",
    timestamps: false,
    underscored: false
 }

);

export {ComunidadUsuario};