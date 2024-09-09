import { DataTypes, ENUM, Model, NOW } from "sequelize";
import {  sequelize } from "../config/db.js";

class Like extends Model {
    static async createLike(like){
        try{
            return await this.create(like);
        }catch(error){
            console.error(`error al crear Like: ${error}` );
            throw error;
        }
    }

    static async getLikes(){
        try {
            return await this.findAll();
        } catch (error) {
            console.error(`error al encontrar los Likes: ${error}` );
            throw error;
        }
    }

    static async getLike(id){
        try {
            return await this.findByPk(id);
        } catch (error) {
            console.error(`error al encontrar el Like: ${error}` );
            throw error;
        }
    }

    static async alterarEstadoLike(idLike) {
        try {
          const result = await sequelize.query(
            'CALL ActivarDesactivarLike(:idLike)',
            {replacements: { idLike },type: sequelize.QueryTypes.RAW} // Cambiado a RAW para manejar el resultado de un procedimiento almacenado
          );
          return result;
        } catch (error) {
          console.error(`Error al alterar estado del Like: ${error.message}`);
          throw error;
        }
      }
      

    static async updateLike(id, update_like){
        try {
            const like =  await this.findByPk(id);
            return like.update(update_like);
            
        } catch (error) {
            console.error(`error al actualizar el Like: ${error}` );
            throw error;
        }
    }
}
Like.init({
 
    idLike:{type: DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
    fecha:{type: DataTypes.DATE,defaultValue:DataTypes.NOW, allowNull:false},
    idUsuarioFK:{type: DataTypes.INTEGER, allowNull:false},
    idObjetoFK:{type: DataTypes.INTEGER, allowNull:false},
    tipoObjeto:{type:ENUM('publicacion','comentario'), allowNull:false},
    estado:{type:DataTypes.BOOLEAN}

},
 {
    sequelize,
    tableName: "Likes",
    timestamps: false,
    underscored: false
 }
);

export {Like};