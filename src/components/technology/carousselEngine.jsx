import React, {useState} from "react";
import data from '../../data.json';

let Technology = function() {

    const [tech, SetTech] = useState(data.technology[0].name)
    let dots = [] 
    let techList = data.technology.map((item, index) => {
        return (
            <div className="container__slide" key={index}>
                <div className="container__dots">
                    {dots}
                </div>
                <div className="slide__infos">
                    <h3 className="infos__subtitle">The terminology...</h3>
                    <h2 className="infos__name">{item.name}</h2>
                    <p className="infos__description">{item.description}</p>
                </div>
                <div className="slide__img">
                    <img  src = {require(`../../assets/technology/${item.images.portrait}.jpg`)} alt={item.name}/>
                </div>
            </div>
        )
    })

    let techDescription = function() {
        for (let i = 0; i < data.technology.length; i++){
            if(tech === data.technology[i].name) { 
                return (techList[i])
            }
        }
    }

    for(let i = 0 ; i < data.technology.length ; i++ ){
        dots.push(<div key={i} className={`${tech === data.technology[i].name ? 'dots__active': "dots__inactive" }`} onClick={() => SetTech(data.technology[i].name)}>{i+1}</div>
        )
    }

    return(
            <div className="technology__container">
                {techDescription()}
            </div>  
    )
}

export default Technology