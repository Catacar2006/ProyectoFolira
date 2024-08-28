import { DataTypes, ENUM, Model, NOW } from "sequelize";
import {  sequelize } from "../config/db.js";

class GeneroLibro extends Model {
    static async createGeneroLibro(generoLibro){
        try{
            return await this.create(generoLibro);
        }catch(error){
            console.error(`error al crear GeneroLibro: ${error}` );
            throw error;
        }
    }

    static async getGeneroLibros(){
        try {
            return await this.findAll();
        } catch (error) {
            console.error(`error al encontrar los GeneroLibros: ${error}` );
            throw error;
        }
    }

    static async getGeneroLibro(id){
        try {
            return await this.findByPk(id);
        } catch (error) {
            console.error(`error al encontrar el GeneroLibro: ${error}` );
            throw error;
        }
    }

    static async alterarEstadoGeneroLibro(idGeneroLibro) {
        try {
          const result = await sequelize.query(
            'CALL ActivarDesactivarGeneroLibro(:idGeneroLibro)',
            {replacements: { idGeneroLibro },type: sequelize.QueryTypes.RAW} // Cambiado a RAW para manejar el resultado de un procedimiento almacenado
          );
          return result;
        } catch (error) {
          console.error(`Error al alterar estado del GeneroLibro: ${error.message}`);
          throw error;
        }
      }
      

    static async updateGeneroLibro(id, update_generoLibro){
        try {
            const generoLibro =  await this.findByPk(id);
            return generoLibro.update(update_generoLibro);
            
        } catch (error) {
            console.error(`error al actualizar el GeneroLibro: ${error}` );
            throw error;
        }
    }
}
GeneroLibro.init({
 
    idGeneroLibro:{type: DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
    idGeneroFK:{type: DataTypes.INTEGER, allowNull:false},
    idLibroFK:{type: DataTypes.INTEGER, allowNull:false},
    estado:{type:DataTypes.BOOLEAN, allowNull:false}
},
 {
    sequelize,
    tableName: "GeneroLibro",
    timestamps: false,
    underscored: false
 }
);

export {GeneroLibro};