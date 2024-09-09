import { DataTypes, ENUM, Model, NOW } from "sequelize";
import {  sequelize } from "../config/db.js";

class Autor extends Model {
    static async createAutor(autor){
        try{
            return await this.create(autor);
        }catch(error){
            console.error(`error al crear Autor: ${error}` );
            throw error;
        }
    }

    static async getAutores(){
        try {
            return await this.findAll();
        } catch (error) {
            console.error(`error al encontrar los Autores: ${error}` );
            throw error;
        }
    }

    static async getAutor(id){
        try {
            return await this.findByPk(id);
        } catch (error) {
            console.error(`error al encontrar el Autor: ${error}` );
            throw error;
        }
    }

    static async alterarEstadoAutor(idAutor) {
        try {
          const result = await sequelize.query(
            'CALL ActivarDesactivarAutor(:idAutor)',
            {replacements: { idAutor },type: sequelize.QueryTypes.RAW} // Cambiado a RAW para manejar el resultado de un procedimiento almacenado
          );
          return result;
        } catch (error) {
          console.error(`Error al alterar estado del Autor: ${error.message}`);
          throw error;
        }
      }
      

    static async updateAutor(id, update_autor){
        try {
            const autor =  await this.findByPk(id);
            return autor.update(update_autor);
            
        } catch (error) {
            console.error(`error al actualizar el Autor: ${error}` );
            throw error;
        }
    }
}
Autor.init({
 
    idAutor:{type: DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
    nombre:{type: DataTypes.STRING (100), allowNull:false},
    fechaNacimiento:{type:DataTypes.DATE, allowNull:false},
    biografia:{type: DataTypes.TEXT, allowNull:false},
    fotoAutor:{type: DataTypes.TEXT, allowNull:true},
    fotoAutorURL:{type: DataTypes.TEXT, allowNull:true},
    estado:{type:DataTypes.BOOLEAN}

},
 {
    sequelize,
    tableName: "Autor",
    timestamps: false,
    underscored: false
 }
);

export {Autor};