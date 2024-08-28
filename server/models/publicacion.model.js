import { DataTypes, ENUM, Model, NOW } from "sequelize";
import {  sequelize } from "../config/db.js";

class Publicacion extends Model {
    static async createPublicacion(publicacion){
        try{
            return await this.create(publicacion);
        }catch(error){
            console.error(`error al crear Publicacion: ${error}` );
            throw error;
        }
    }

    static async getPublicaciones(){
        try {
            return await this.findAll();
        } catch (error) {
            console.error(`error al encontrar las Publicaciones: ${error}` );
            throw error;
        }
    }

    static async getPublicacion(id){
        try {
            return await this.findByPk(id);
        } catch (error) {
            console.error(`error al encontrar la Publicacion: ${error}` );
            throw error;
        }
    }

    static async alterarEstadoPublicacion(idPublicacion) {
        try {
          const result = await sequelize.query(
            'CALL ActivarDesactivarPublicacion(:idPublicacion)',
            {replacements: { idPublicacion },type: sequelize.QueryTypes.RAW} // Cambiado a RAW para manejar el resultado de un procedimiento almacenado
          );
          return result;
        } catch (error) {
          console.error(`Error al alterar estado de la Publicacion: ${error.message}`);
          throw error;
        }
      }
      

    static async updatePublicacion(id, update_publicacion){
        try {
            const publicacion =  await this.findByPk(id);
            return publicacion.update(update_publicacion);
            
        } catch (error) {
            console.error(`error al actualizar la Publicacion: ${error}` );
            throw error;
        }
    }
}
Publicacion.init({
 
    idPublicacion:{type: DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
    contenido:{type: DataTypes.TEXT, allowNull:false},
    foto:{type: DataTypes.STRING (255), allowNull:false},
    tipoPublicacion:{type:ENUM('publicacion','Eventos'), allowNull:false},
    estado:{type:DataTypes.BOOLEAN, allowNull:false},
    idComunidadFK:{type: DataTypes.INTEGER, allowNull:false}
    
},
 {
    sequelize,
    tableName: "Publicacion",
    timestamps: false,
    underscored: false
 }
);

export {Publicacion};