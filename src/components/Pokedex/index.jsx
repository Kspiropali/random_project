import React, {useEffect} from "react";

import {usePokemon} from "../../context";
import Pokeform from "../PokeForm";
import axios from "axios";

// redux imports
import {useDispatch} from "react-redux";
import {actionCreators} from '../../store/action-creators';
import {bindActionCreators} from 'redux';
import PokeCard from "../PokeCard";

const Pokedex = () => {
    const {pokemon} = usePokemon();

    // setter/updating function for pokemon state
    const dispatch = useDispatch();
    const {addPokemon} = bindActionCreators(actionCreators, dispatch);

    useEffect(() => {
        if (pokemon === "" || pokemon === undefined) return;
        //if (pokeList.find((pokemon) => pokemon.name === pokeName)) return;

        // API IS: https://pokeapi.co/api/v2/pokemon/{pokemon}
        axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
            .then(res => {
                if (res.status === 200) {
                    const pokeObject = {
                        name: res.data.name,
                        image: res.data.sprites.front_default,
                        type: res.data.types[0].type.name
                    }
                    addPokemon(pokeObject);
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
                <PokeCard/>
            </div>
            <Pokeform/>
        </>
    );
};

export default Pokedex;