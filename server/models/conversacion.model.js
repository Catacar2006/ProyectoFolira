import { DataTypes, ENUM, Model, NOW } from "sequelize";
import {  sequelize } from "../config/db.js";

class Conversacion extends Model {
    static async createConversacion(conversacion){
        try{
            return await this.create(conversacion);
        }catch(error){
            console.error(`error al crear Conversacion: ${error}` );
            throw error;
        }
    }

    static async getConversaciones(){
        try {
            return await this.findAll();
        } catch (error) {
            console.error(`error al encontrar las Conversaciones: ${error}` );
            throw error;
        }
    }

    static async getConversacion(id){
        try {
            return await this.findByPk(id);
        } catch (error) {
            console.error(`error al encontrar la Conversacion: ${error}` );
            throw error;
        }
    }

    static async alterarEstadoConversacion(idConversacion) {
        try {
          const result = await sequelize.query(
            'CALL ActivarDesactivarConversacion(:idConversacion)',
            {replacements: { idConversacion },type: sequelize.QueryTypes.RAW} // Cambiado a RAW para manejar el resultado de un procedimiento almacenado
          );
          return result;
        } catch (error) {
          console.error(`Error al alterar estado de la Conversacion: ${error.message}`);
          throw error;
        }
      }
      

    static async updateConversacion(id, update_Conversacion){
        try {
            const conversacion =  await this.findByPk(id);
            return conversacion.update(update_Conversacion);
            
        } catch (error) {
            console.error(`error al actualizar la Conversacion: ${error}` );
            throw error;
        }
    }
}
Conversacion.init({
 
    idConversacion:{type: DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
    idRemitente:{type: DataTypes.INTEGER, allowNull:false},
    idReceptor:{type: DataTypes.INTEGER, allowNull:false},
    fechaConversacion:{type: DataTypes.DATE,defaultValue:DataTypes.NOW, allowNull:false},
    estado:{type:DataTypes.BOOLEAN, allowNull:false},
    tipoConversacion:{type:ENUM('personal','comunidad'), allowNull:false}
},
 {
    sequelize,
    tableName: "Conversacion",
    timestamps: false,
    underscored: false
 }
);

export {Conversacion};