import React, {useState} from "react";
import data from '../../data.json';

import Moon from './planets/moon'
import Mars from './planets/mars'
import Europa from './planets/europa'
import Titan from './planets/titan'




let Destinations = function({titre}) {

    const [planet, SetPlanet] = useState('moon')

    let planetList = data.destinations.map((item, index) => {
    return(
        <div key={index}>
            <h2 className="right__title">{item.name}{titre}</h2>
            <p className="right__bodyText bodyText">{item.description}</p>
            <div className="right__infos">
                <div className="infos__left">
                    <p className="left__subtitle subtitle">AVG. DISTANCE</p>
                    <p className="left__content content">{item.distance}</p>
                </div>
                <div className="infos__right">
                    <p className="right__subtitle subtitle">EST. TRAVEL TIME</p>
                    <p className="right__content content">{item.travel}</p>
                </div>
            </div>
        </div>
    )
    })

   
    return(
            <div className="destinations__container">
                <div className="container__left">
                    <div className="left__planet">
                        {planet === 'moon' ?
                            <Moon/>
                        : planet === 'mars' ?
                            <Mars/>                        
                        : planet === 'europa' ?
                            <Europa/>
                        : planet === 'titan' ?
                            <Titan/>
                        : null
                        }
                    </div>
                </div>
                <div className="container__right">
                    <div className="right__container">
                        <ul className="right__nav">
                            <li className="nav__item" onClick={() => SetPlanet('moon')}><span className={planet === 'moon' ? "nav__active" : "nav__hover"}></span>MOON</li>
                            <li className="nav__item" onClick={() => SetPlanet('mars')}><span className={planet === 'mars' ? "nav__active" : "nav__hover"}></span>MARS</li>
                            <li className="nav__item" onClick={() => SetPlanet('europa')}><span className={planet === 'europa' ? "nav__active" : "nav__hover"}></span>EUROPA</li>
                            <li className="nav__item" onClick={() => SetPlanet('titan')}><span className={planet === 'titan' ? "nav__active" : "nav__hover"}></span>TITAN</li>
                        </ul>
                        {planet === 'moon' ?
                        planetList[0]
                        : planet === 'mars' ?
                        planetList[1]
                        : planet === 'europa' ?
                        planetList[2]
                        : planet === 'titan' ?
                        planetList[3]
                        : null
                        }
                    </div>
                </div>
            </div>
    )
}

export default Destinations