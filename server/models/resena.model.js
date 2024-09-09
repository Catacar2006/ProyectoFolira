import { DataTypes, ENUM, Model, NOW } from "sequelize";
import {  sequelize } from "../config/db.js";

class Reseña extends Model {
    static async createReseña(reseña){
        try{
            return await this.create(reseña);
        }catch(error){
            console.error(`error al crear Reseña: ${error}` );
            throw error;
        }
    }

    static async getReseñas(){
        try {
            return await this.findAll();
        } catch (error) {
            console.error(`error al encontrar las Reseñas: ${error}` );
            throw error;
        }
    }

    static async getReseña(id){
        try {
            return await this.findByPk(id);
        } catch (error) {
            console.error(`error al encontrar la Reseña: ${error}` );
            throw error;
        }
    }

    static async alterarEstadoReseña(idResena) {
        try {
          const result = await sequelize.query(
            'CALL ActivarDesactivarResena(:idResena)',
            {replacements: { idResena },type: sequelize.QueryTypes.RAW} // Cambiado a RAW para manejar el resultado de un procedimiento almacenado
          );
          return result;
        } catch (error) {
          console.error(`Error al alterar estado de la Reseña: ${error.message}`);
          throw error;
        }
      }
      

    static async updateReseña(id, update_reseña){
        try {
            const reseña =  await this.findByPk(id);
            return reseña.update(update_reseña);
            
        } catch (error) {
            console.error(`error al actualizar la Reseña: ${error}` );
            throw error;
        }
    }
}
Reseña.init({
 
    idResena:{type: DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
    contenido:{type:  DataTypes.TEXT, allowNull:false},
    puntuacion:{type: DataTypes.INTEGER, allowNull:false},
    fechaCreacion:{type: DataTypes.DATE,defaultValue:DataTypes.NOW, allowNull:false},
    idLibroFK:{type: DataTypes.INTEGER, allowNull:false},
    idUsuarioFK:{type: DataTypes.INTEGER, allowNull:false},
    estado:{type:DataTypes.BOOLEAN}

},
 {
    sequelize,
    tableName: "Resena",
    timestamps: false,
    underscored: false
 }
);

export {Reseña};