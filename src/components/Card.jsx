import React from "react";
import './card.css';

function Card(props){

    return(
        <div className="container-fluid cards">
            <div class="card">
                <img src={`https://img.pokemondb.net/artwork/large/${props.name}.jpg`}
                onError={(e)=>{e.target.onerror = null; e.target.src="https://upload.wikimedia.org/wikipedia/commons/3/39/Pokeball.PNG"}}
                 className="card-img-top img" alt="pokemon" />
            <div class="card-body">
                <h5 class="card-title text-center m-5">{props.name}</h5>
            </div>
            </div>
        </div>
    );
}
export  default Card;