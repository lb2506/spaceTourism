import React, {useState} from "react";
import data from '../../data.json';

import douglas from "../../assets/crew/image-douglas-hurley.webp"
import mark from "../../assets/crew/image-mark-shuttleworth.webp"
import victor from "../../assets/crew/image-victor-glover.webp"
import anousheh from "../../assets/crew/image-anousheh-ansari.webp"

let Crew = function() {

    const [crew, SetCrew] = useState(data.crew[0].name)


    let crewList = data.crew.map((item, index) => {
    return(
        <div key={index} className='details__content'>
            <p className="details__grade">{item.role}</p>
            <h2 className="details__name">{item.name}</h2>
            <p className="details__description">{item.bio}</p> 
        </div>
    )
    })

    let crewDescription = function() {
        for (let i = 0; i < data.crew.length; i++){
            if(crew === data.crew[i].name) { 
                return (crewList[i])
            }
        }
    }

    let dots = [] 

    for(let i = 0 ; i < data.crew.length ; i++ ){
        dots.push(<div key={i} className={`${crew === data.crew[i].name ? 'dots__active': "dots__inactive" }`} onClick={() => SetCrew(data.crew[i].name)}></div>
        )
    }
           
    return(
        <div className="crew__container">
            <div className="crew__details">
                {crewDescription()}
                <div className="details__dots">
                    {dots}
                </div>
            </div>
            <div className="crew__img">
                <img className="img" src={   crew === data.crew[0].name ? douglas 
                        :   crew === data.crew[1].name ? mark 
                        :   crew === data.crew[2].name ? victor
                        :   crew === data.crew[3].name ? anousheh 
                        :   null } alt='crew'/>
            </div>
        </div>
    )
}

export default Crew