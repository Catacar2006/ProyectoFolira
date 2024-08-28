import { DataTypes, ENUM, Model, NOW } from "sequelize";
import {  sequelize } from "../config/db.js";

class Reunion extends Model {
    static async createReunion(reunion){
        try{
            return await this.create(reunion);
        }catch(error){
            console.error(`error al crear Reunion: ${error}` );
            throw error;
        }
    }

    static async getReuniones(){
        try {
            return await this.findAll();
        } catch (error) {
            console.error(`error al encontrar las Reuniones: ${error}` );
            throw error;
        }
    }

    static async getReunion(id){
        try {
            return await this.findByPk(id);
        } catch (error) {
            console.error(`error al encontrar la Reunion: ${error}` );
            throw error;
        }
    }

    static async alterarEstadoReunion(idReunion) {
        try {
          const result = await sequelize.query(
            'CALL ActivarDesactivarReunion(:idReunion)',
            {replacements: { idReunion },type: sequelize.QueryTypes.RAW} // Cambiado a RAW para manejar el resultado de un procedimiento almacenado
          );
          return result;
        } catch (error) {
          console.error(`Error al alterar estado de la Reunion: ${error.message}`);
          throw error;
        }
      }
      

    static async updateReunion(id, update_reunion){
        try {
            const reunion =  await this.findByPk(id);
            return reunion.update(update_reunion);
            
        } catch (error) {
            console.error(`error al actualizar la Reunion: ${error}` );
            throw error;
        }
    }
}
Reunion.init({
 
    idReunion:{type: DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
    idOrganizador:{type: DataTypes.INTEGER, allowNull:false},
    titulo:{type: DataTypes.STRING (50), allowNull:false},
    fechaHoraInicio:{type: DataTypes.DATE,defaultValue:DataTypes.NOW, allowNull:false},
    ubicacion:{type:  DataTypes.STRING (100), allowNull:false},
    fechaCreacion:{type: DataTypes.DATE,defaultValue:DataTypes.NOW, allowNull:false},
    estado:{type:DataTypes.BOOLEAN, allowNull:false}
},
 {
    sequelize,
    tableName: "Reunion",
    timestamps: false,
    underscored: false
 }
);

export {Reunion};