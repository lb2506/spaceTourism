import React from "react";
import CarousselCrew from "../../components/crew/carousselCrew.jsx";
import Layout from "../../layout/layout.jsx";

let Crew = function() {
   
    return(
        <Layout number="02" title="meet the crew" backgroundImage="url('https://zupimages.net/up/22/40/q1y9.jpg')">
            <CarousselCrew/>
        </Layout>
    )
}

export default Crew