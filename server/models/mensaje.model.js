import { DataTypes, ENUM, Model, NOW } from "sequelize";
import {  sequelize } from "../config/db.js";

class Mensaje extends Model {
    static async createMensaje(mensaje){
        try{
            return await this.create(mensaje);
        }catch(error){
            console.error(`error al crear Mensaje: ${error}` );
            throw error;
        }
    }

    static async getMensajes(){
        try {
            return await this.findAll();
        } catch (error) {
            console.error(`error al encontrar los Mensajes: ${error}` );
            throw error;
        }
    }

    static async getMensaje(id){
        try {
            return await this.findByPk(id);
        } catch (error) {
            console.error(`error al encontrar el Mensaje: ${error}` );
            throw error;
        }
    }

    static async alterarEstadoMensaje(idMensaje) {
        try {
          const result = await sequelize.query(
            'CALL ActivarDesactivarMensaje(:idMensaje)',
            {replacements: { idMensaje },type: sequelize.QueryTypes.RAW} // Cambiado a RAW para manejar el resultado de un procedimiento almacenado
          );
          return result;
        } catch (error) {
          console.error(`Error al alterar estado del Mensaje: ${error.message}`);
          throw error;
        }
      }
      

    static async updateMensaje(id, update_Mensaje){
        try {
            const mensaje =  await this.findByPk(id);
            return mensaje.update(update_Mensaje);
            
        } catch (error) {
            console.error(`error al actualizar el Mensaje: ${error}` );
            throw error;
        }
    }
}
Mensaje.init({
    idMensaje:{type:DataTypes.INTEGER,primaryKey:true, autoIncrement:true},
    contenido:{type: DataTypes.TEXT, allowNull:false},
    fechaHoraEnvio:{type: DataTypes.DATE,defaultValue:DataTypes.NOW, allowNull:false},
    estado:{type:DataTypes.BOOLEAN},
    idConversacionFK:{type: DataTypes.INTEGER, allowNull:false}

},
 {
    sequelize,
    tableName: "Mensaje",
    timestamps: false,
    underscored: false
 }
);

export {Mensaje};