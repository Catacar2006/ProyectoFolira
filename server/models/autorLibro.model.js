import { DataTypes, ENUM, Model, NOW } from "sequelize";
import {  sequelize } from "../config/db.js";

class AutorLibro extends Model {
    static async createAutorLibro(autorLibro){
        try{
            return await this.create(autorLibro);
        }catch(error){
            console.error(`error al crear AutorLibro: ${error}` );
            throw error;
        }
    }

    static async getAutorLibros(){
        try {
            return await this.findAll();
        } catch (error) {
            console.error(`error al encontrar los AutorLibros: ${error}` );
            throw error;
        }
    }

    static async getAutorLibro(id){
        try {
            return await this.findByPk(id);
        } catch (error) {
            console.error(`error al encontrar el AutorLibro: ${error}` );
            throw error;
        }
    }

    static async alterarEstadoAutorLibro(idAutorLibro) {
        try {
          const result = await sequelize.query(
            'CALL ActivarDesactivarAutorLibro(:idAutorLibro)',
            {replacements: { idAutorLibro },type: sequelize.QueryTypes.RAW} // Cambiado a RAW para manejar el resultado de un procedimiento almacenado
          );
          return result;
        } catch (error) {
          console.error(`Error al alterar estado del AutorLibro: ${error.message}`);
          throw error;
        }
      }
      

    static async updateAutorLibro(id, update_autorLibro){
        try {
            const autorLibro =  await this.findByPk(id);
            return autorLibro.update(update_autorLibro);
            
        } catch (error) {
            console.error(`error al actualizar el AutorLibro: ${error}` );
            throw error;
        }
    }
}
AutorLibro.init({
 
    idAutorLibro:{type: DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
    idAutorFK:{type: DataTypes.INTEGER, allowNull:false},
    idLibroFK:{type: DataTypes.INTEGER, allowNull:false},
    estado:{type:DataTypes.BOOLEAN}
},
 {
    sequelize,
    tableName: "AutorLibro",
    timestamps: false,
    underscored: false
 }
);

export {AutorLibro};