import React from "react";
import Layout from "../../layout/layout.jsx";
import CarousselPlanet from "../../components/destinations/carousselPlanet";


let Destinations = function() {

    return(
        <Layout title="choose your destination" number="01" backgroundImage="url(https://zupimages.net/up/22/40/189d.jpg)">
            <CarousselPlanet/>  
        </Layout>
    )
}

export default Destinations