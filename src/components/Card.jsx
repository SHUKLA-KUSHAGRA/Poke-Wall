import React from "react";
import './card.css';

function Card(props){

    return(
        <div className="container-fluid cards">
            <div className="card">
                <img src={`https://img.pokemondb.net/artwork/large/${props.name}.jpg`}
                onError={(event)=>{event.target.onerror = null; event.target.src="https://upload.wikimedia.org/wikipedia/commons/3/39/Pokeball.PNG"}}
                 className="card-img-top img" alt="pokemon" />
            <div className="card-body">
                <h3 className="card-title text-center m-5 text-capitalize text-danger">{props.name}</h3>
            </div>
            </div>
        </div>
    );
}
export  default Card;