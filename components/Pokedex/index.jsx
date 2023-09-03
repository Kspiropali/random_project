import React, {useEffect, useState} from "react";

import {usePokemon} from "../../context";
import Pokeform from "../PokeForm";
import axios from "axios";

const Pokedex = () => {
    const {pokemon} = usePokemon();
    //const [pokeList, setPokeList] = useState(localStorage.getItem("pokeList") ? JSON.parse(localStorage.getItem("pokeList")) : []);

    useEffect(() => {
        if (pokemon === "" || pokemon === undefined) return;
        //if (pokeList.find((pokemon) => pokemon.name === pokeName)) return;

        // API IS: https://pokeapi.co/api/v2/pokemon/{pokemon}
        axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
            .then(res => {
                if(res.status === 200){
                    console.log(res.data)
                    // TODO: save data to redux
                } else {
                    console.log("Not found");
                }
            })
            .catch(err => console.log(err.message));
    }, [pokemon]);

    return (
        <>
            <p>Pokedex</p>
            <div className="container">

            </div>
            <Pokeform/>
        </>
    );
};

export default Pokedex;