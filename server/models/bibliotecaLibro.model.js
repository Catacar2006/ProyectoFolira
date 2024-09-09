import { DataTypes, ENUM, Model, NOW } from "sequelize";
import {  sequelize } from "../config/db.js";

class BibliotecaLibro extends Model {
    static async createBibliotecaLibro(bibliotecaLibro){
        try{
            return await this.create(bibliotecaLibro);
        }catch(error){
            console.error(`error al crear BibliotecaLibro: ${error}` );
            throw error;
        }
    }

    static async getBibliotecaLibros(){
        try {
            return await this.findAll();
        } catch (error) {
            console.error(`error al encontrar las BibliotecaLibros: ${error}` );
            throw error;
        }
    }

    static async getBibliotecaLibro(id){
        try {
            return await this.findByPk(id);
        } catch (error) {
            console.error(`error al encontrar la BibliotecaLibro: ${error}` );
            throw error;
        }
    }

    static async alterarEstadoBibliotecaLibro(idBibliotecaLibro) {
        try {
          const result = await sequelize.query(
            'CALL ActivarDesactivarBibliotecaLibro(:idBibliotecaLibro)',
            {replacements: { idBibliotecaLibro },type: sequelize.QueryTypes.RAW} // Cambiado a RAW para manejar el resultado de un procedimiento almacenado
          );
          return result;
        } catch (error) {
          console.error(`Error al alterar estado de la BibliotecaLibro: ${error.message}`);
          throw error;
        }
      }
      

    static async updateBibliotecaLibro(id, update_bibliotecaLibro){
        try {
            const bibliotecaLibro =  await this.findByPk(id);
            return bibliotecaLibro.update(update_bibliotecaLibro);
            
        } catch (error) {
            console.error(`error al actualizar la BibliotecaLibro: ${error}` );
            throw error;
        }
    }
}
BibliotecaLibro.init({
 
    idBibliotecaLibro:{type: DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
    idBibliotecaFK:{type: DataTypes.INTEGER, allowNull:false},
    idLibroFK:{type: DataTypes.INTEGER, allowNull:false},
    estado:{type:DataTypes.BOOLEAN}
},
 {
    sequelize,
    tableName: "BibliotecaLibro",
    timestamps: false,
    underscored: false
 }
);

export {BibliotecaLibro};