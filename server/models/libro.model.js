import { DataTypes, ENUM, Model, NOW } from "sequelize";
import {  sequelize } from "../config/db.js";

class Libro extends Model {
    static async createLibro(libro){
        try{
            return await this.create(libro);
        }catch(error){
            console.error(`error al crear Libro: ${error}` );
            throw error;
        }
    }

    static async getLibros(){
        try {
            return await this.findAll();
        } catch (error) {
            console.error(`error al encontrar los Libros: ${error}` );
            throw error;
        }
    }

    static async getLibro(id){
        try {
            return await this.findByPk(id);
        } catch (error) {
            console.error(`error al encontrar el Libro: ${error}` );
            throw error;
        }
    }

    static async alterarEstadoLibro(idLibro) {
        try {
          const result = await sequelize.query(
            'CALL ActivarDesactivarLibro(:idLibro)',
            {replacements: { idLibro },type: sequelize.QueryTypes.RAW} // Cambiado a RAW para manejar el resultado de un procedimiento almacenado
          );
          return result;
        } catch (error) {
          console.error(`Error al alterar estado del Libro: ${error.message}`);
          throw error;
        }
      }
      

    static async updateLibro(id, update_libro){
        try {
            const libro =  await this.findByPk(id);
            return libro.update(update_libro);
            
        } catch (error) {
            console.error(`error al actualizar el Libro: ${error}` );
            throw error;
        }
    }
}
Libro.init({
 
    idLibro:{type: DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
    titulo:{type: DataTypes.STRING (100), allowNull:false},
    ISBN:{type:  DataTypes.STRING (13), allowNull:false, unique:true},
    fechaPublicacion:{type:DataTypes.DATE, allowNull:false},
    editorial:{type: DataTypes.STRING (100), allowNull:false},
    sinopsis:{type: DataTypes.TEXT, allowNull:false},
    portada:{type: DataTypes.STRING (255), allowNull:false},
    calificacion:{type: DataTypes.INTEGER, allowNull:false},
    estado:{type:DataTypes.BOOLEAN, allowNull:false}
},
 {
    sequelize,
    tableName: "Libro",
    timestamps: false,
    underscored: false
 }
);

export {Libro};