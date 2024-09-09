import { DataTypes, ENUM, Model, NOW } from "sequelize";
import {  sequelize } from "../config/db.js";

class Comentario extends Model {
    static async createComentario(comentario){
        try{
            return await this.create(comentario);
        }catch(error){
            console.error(`error al crear Comentario: ${error}` );
            throw error;
        }
    }

    static async getComentarios(){
        try {
            return await this.findAll();
        } catch (error) {
            console.error(`error al encontrar los Comentarios: ${error}` );
            throw error;
        }
    }

    static async getComentario(id){
        try {
            return await this.findByPk(id);
        } catch (error) {
            console.error(`error al encontrar el Comentario: ${error}` );
            throw error;
        }
    }

    static async alterarEstadoComentario(idComentario) {
        try {
          const result = await sequelize.query(
            'CALL ActivarDesactivarComentario(:idComentario)',
            {replacements: { idComentario },type: sequelize.QueryTypes.RAW} // Cambiado a RAW para manejar el resultado de un procedimiento almacenado
          );
          return result;
        } catch (error) {
          console.error(`Error al alterar estado del Comentario: ${error.message}`);
          throw error;
        }
      }
      

    static async updateComentario(id, update_comentario){
        try {
            const comentario =  await this.findByPk(id);
            return comentario.update(update_comentario);
            
        } catch (error) {
            console.error(`error al actualizar el Comentario: ${error}` );
            throw error;
        }
    }
}
Comentario.init({
 
    idComentario:{type: DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
    fechaPublicacion:{type: DataTypes.DATE,defaultValue:DataTypes.NOW, allowNull:false},
    contenido:{type: DataTypes.TEXT, allowNull:false},
    estado:{type:DataTypes.BOOLEAN},
    idPublicacionFK:{type: DataTypes.INTEGER, allowNull:false}

},
 {
    sequelize,
    tableName: "Comentario",
    timestamps: false,
    underscored: false
 }
);

export {Comentario};