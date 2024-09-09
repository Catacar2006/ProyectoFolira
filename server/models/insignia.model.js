import { DataTypes, ENUM, Model, NOW } from "sequelize";
import {  sequelize } from "../config/db.js";

class Insignia extends Model {
    static async createInsignia(insignia){
        try{
            return await this.create(insignia);
        }catch(error){
            console.error(`error al crear Insignia: ${error}` );
            throw error;
        }
    }

    static async getInsignias(){
        try {
            return await this.findAll();
        } catch (error) {
            console.error(`error al encontrar las Insignias: ${error}` );
            throw error;
        }
    }

    static async getInsignia(id){
        try {
            return await this.findByPk(id);
        } catch (error) {
            console.error(`error al encontrar la Insignia: ${error}` );
            throw error;
        }
    }

    static async alterarEstadoInsignia(idInsignia) {
        try {
          const result = await sequelize.query(
            'CALL ActivarDesactivarInsignia(:idInsignia)',
            {replacements: { idInsignia },type: sequelize.QueryTypes.RAW} // Cambiado a RAW para manejar el resultado de un procedimiento almacenado
          );
          return result;
        } catch (error) {
          console.error(`Error al alterar estado de la Insignia: ${error.message}`);
          throw error;
        }
      }
      

    static async updateInsignia(id, update_insignia){
        try {
            const insignia =  await this.findByPk(id);
            return insignia.update(update_insignia);
            
        } catch (error) {
            console.error(`error al actualizar la Insignia: ${error}` );
            throw error;
        }
    }
}
Insignia.init({
 
    idInsignia:{type: DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
    nombre:{type: DataTypes.STRING (200), allowNull:false},
    descripcion:{type:  DataTypes.TEXT, allowNull:false},
    icono:{type: DataTypes.TEXT, allowNull:false},
    iconoURL:{type: DataTypes.TEXT, allowNull:false},
    criterio:{type: DataTypes.TEXT, allowNull:false},
    fechaCreacion:{type: DataTypes.DATE,defaultValue:DataTypes.NOW, allowNull:false},
    estado:{type:DataTypes.BOOLEAN}
},
 {
    sequelize,
    tableName: "Insignia",
    timestamps: false,
    underscored: false
 }
);

export {Insignia};