import React from "react";
import './card.css'; 

const Card = ({card}) => {
    const cardButtonClick = (e)=> {
        console.log("botton clicked", e)
    }
    // const card = props.card;
    

    return (
        <div className='card-page'>
            
            {card.map((card)=>(
                <div className='card' key={card.id}>
                    <img src={card.img} />
                    <h3>{card.heading}</h3>
                    <p>{card.desc}</p>
                    <button className='dna-button' onClick={cardButtonClick}>Read More</button>
                </div>

            ))}


           
        </div>
    )
}

export default Card
