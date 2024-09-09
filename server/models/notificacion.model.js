import { DataTypes, ENUM, Model, NOW } from "sequelize";
import {  sequelize } from "../config/db.js";

class Notificacion extends Model {
    static async createNotificacion(notificacion){
        try{
            return await this.create(notificacion);
        }catch(error){
            console.error(`error al crear Notificacion: ${error}` );
            throw error;
        }
    }

    static async getNotificaciones(){
        try {
            return await this.findAll();
        } catch (error) {
            console.error(`error al encontrar las Notificaciones: ${error}` );
            throw error;
        }
    }

    static async getNotificacion(id){
        try {
            return await this.findByPk(id);
        } catch (error) {
            console.error(`error al encontrar la Notificacion: ${error}` );
            throw error;
        }
    }

    static async alterarEstadoNotificacion(idNotificacion) {
        try {
          const result = await sequelize.query(
            'CALL ActivarDesactivarNotificacion(:idNotificacion)',
            {replacements: { idNotificacion },type: sequelize.QueryTypes.RAW} // Cambiado a RAW para manejar el resultado de un procedimiento almacenado
          );
          return result;
        } catch (error) {
          console.error(`Error al alterar estado de la Notificacion: ${error.message}`);
          throw error;
        }
      }
      

    static async updateNotificacion(id, update_notificacion){
        try {
            const notificacion =  await this.findByPk(id);
            return notificacion.update(update_notificacion);
            
        } catch (error) {
            console.error(`error al actualizar la Notificacion: ${error}` );
            throw error;
        }
    }
}
Notificacion.init({
 
    idNotificacion:{type: DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
    tipo:{type:ENUM('publicacion','like','comentario','mensaje','insignea','denuncias'), allowNull:false},
    mensaje:{type:  DataTypes.TEXT, allowNull:false},
    leido:{type:DataTypes.BOOLEAN, allowNull:false},
    fechaCreacion:{type: DataTypes.DATE,defaultValue:DataTypes.NOW, allowNull:false},
    idUsuarioFK:{type: DataTypes.INTEGER, allowNull:false},
    idObjetoFK:{type: DataTypes.INTEGER, allowNull:false},
    tipoObjeto:{type:ENUM('publicacion','like','comentario','mensaje','insignea','denuncias'), allowNull:false},
    estado:{type:DataTypes.BOOLEAN}
    
},
 {
    sequelize,
    tableName: "Notificacion",
    timestamps: false,
    underscored: false
 }
);

export {Notificacion};