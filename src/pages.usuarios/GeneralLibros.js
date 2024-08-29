import React from "react";
import LibrosGenerales from '../components/LibrosGenerales';
import MenuLateral from "../components/layout/MenuLateral";
import Nav from "../components/layout/Nav";



function GeneralLibros (){
    return(
        <div> 
            <Nav/>
            <MenuLateral/>
            <LibrosGenerales />
        </div>
    );
};

export default  GeneralLibros;