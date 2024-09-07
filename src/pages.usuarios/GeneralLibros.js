import React from "react";
import LibrosGenerales from '../components/LibrosGenerales';

import Nav from "../components/layout/Nav";



function GeneralLibros (){
    return(
        <div> 
            <Nav/>

            <LibrosGenerales />
        </div>
    );
};

export default  GeneralLibros;