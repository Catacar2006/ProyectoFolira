import { DataTypes, ENUM, Model, NOW } from "sequelize";
import {  sequelize } from "../config/db.js";

class Comunidad extends Model {
    static async createComunidad(comunidad){
        try{
            return await this.create(comunidad);
        }catch(error){
            console.error(`error al crear la Comunidad: ${error}` );
            throw error;
        }
    }

    static async getComunidades(){
        try {
            return await this.findAll();
        } catch (error) {
            console.error(`error al encontrar las Comunidades: ${error}` );
            throw error;
        }
    }

    static async getComunidad(id){
        try {
            return await this.findByPk(id);
        } catch (error) {
            console.error(`error al encontrar la Comunidad: ${error}` );
            throw error;
        }
    }

    static async alterarEstadoComunidad(idComunidad) {
        try {
          const result = await sequelize.query(
            'CALL ActivarDesactivarComunidad(:idComunidad)',
            {replacements: { idComunidad },type: sequelize.QueryTypes.RAW} // Cambiado a RAW para manejar el resultado de un procedimiento almacenado
          );
          return result;
        } catch (error) {
          console.error(`Error al alterar el estado de la Comunidad: ${error.message}`);
          throw error;
        }
      }
      

    static async updateComunidad(id, update_comunidad){
        try {
            const comunidad =  await this.findByPk(id);
            return comunidad.update(update_comunidad);
            
        } catch (error) {
            console.error(`error al actualizar la Comunidad: ${error}` );
            throw error;
        }
    }
}
Comunidad.init({
 
    idComunidad:{type: DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
    nombre:{type: DataTypes.STRING (100), allowNull:false},
    fechaCreacion:{type: DataTypes.DATE,defaultValue:DataTypes.NOW, allowNull:false},
    descripcion:{type: DataTypes.STRING (255), allowNull:false},
    estado:{type:DataTypes.BOOLEAN, allowNull:false}
},
 {
    sequelize,
    tableName: "Comunidad",
    timestamps: false,
    underscored: false
 }
);

export {Comunidad};