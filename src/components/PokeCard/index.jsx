import React from "react";
import {usePokemon} from "../../context";

const Pokecard = () => {
    const {pokeName} = usePokemon();




    function deleteCard(e) {
        e.preventDefault();

        // update pokeList state to remove/unmount card
        //setPokeList((pokeList) => pokeList.filter((poke) => poke.name !== pokemon.name));

        // remove from localStorage
        // localStorage.setItem("pokeList", JSON.stringify(JSON.parse(localStorage.getItem("pokeList")).filter((poke) => poke.name !== pokemon.name)));
    }

    return (<div id="card">
        <div className="name-img-container">
            <h2 className="poke-name">Pokemon name</h2>
            <img className="close-btn" src="https://img.icons8.com/ios-glyphs/30/000000/multiply.png"
                 alt={"delete Pokemon name card"} onClick={deleteCard}/>
        </div>

        <img src="Pokemon image" alt={"an image of pokemon name"}/>
        <div className="types">
            <span>poketype</span>
        </div>
    </div>);
};

export default Pokecard;