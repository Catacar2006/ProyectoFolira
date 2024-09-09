import { DataTypes, ENUM, Model, NOW } from "sequelize";
import {  sequelize } from "../config/db.js";

class Biblioteca extends Model {
    static async createBiblioteca(biblioteca){
        try{
            return await this.create(biblioteca);
        }catch(error){
            console.error(`error al crear Biblioteca: ${error}` );
            throw error;
        }
    }

    static async getBibliotecas(){
        try {
            return await this.findAll();
        } catch (error) {
            console.error(`error al encontrar las Bibliotecas: ${error}` );
            throw error;
        }
    }

    static async getBiblioteca(id){
        try {
            return await this.findByPk(id);
        } catch (error) {
            console.error(`error al encontrar la Biblioteca: ${error}` );
            throw error;
        }
    }

    static async alterarEstadoBiblioteca(idBiblioteca) {
        try {
          const result = await sequelize.query(
            'CALL ActivarDesactivarBiblioteca(:idBiblioteca)',
            {replacements: { idBiblioteca },type: sequelize.QueryTypes.RAW} // Cambiado a RAW para manejar el resultado de un procedimiento almacenado
          );
          return result;
        } catch (error) {
          console.error(`Error al alterar estado de la Biblioteca: ${error.message}`);
          throw error;
        }
      }
      

    static async updateBiblioteca(id, update_biblioteca){
        try {
            const biblioteca =  await this.findByPk(id);
            return biblioteca.update(update_biblioteca);
            
        } catch (error) {
            console.error(`error al actualizar la Biblioteca: ${error}` );
            throw error;
        }
    }
}
Biblioteca.init({
 
    idBiblioteca:{type: DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
    tipoBiblioteca:{type:ENUM('Fisica','Virtual'), allowNull:false},
    fechaCreacion:{type: DataTypes.DATE,defaultValue:DataTypes.NOW, allowNull:false},
    biografia:{type: DataTypes.TEXT, allowNull:false},
    estado:{type:DataTypes.BOOLEAN}
},
 {
    sequelize,
    tableName: "Biblioteca",
    timestamps: false,
    underscored: false
 }
);

export {Biblioteca};