import React from "react";

// redux imports
import {useDispatch, useSelector} from "react-redux";
import {bindActionCreators} from 'redux';
import {actionCreators} from '../../store/action-creators';

const Pokecard = () => {
    const pokemonStore = useSelector(state => state.pokemon);

    const dispatch = useDispatch();
    const {removePokemon} = bindActionCreators(actionCreators, dispatch);

    function deleteCard(e) {
        e.preventDefault();

        //update pokeList state to remove/unmount card
        removePokemon(e.target.parentNode.querySelector("h2").textContent);
    }

    return (
        <>
            {
                pokemonStore.length === 0 || pokemonStore.map((pokemon, i) => {
                    return (
                        <div key={i} id="card">
                            <div className="name-img-container">
                                <h2 className="poke-name">{pokemon.name}</h2>
                                <img className="close-btn"
                                     src="https://img.icons8.com/ios-glyphs/30/000000/multiply.png"
                                     alt={"delete Pokemon name card"} onClick={deleteCard}/>
                            </div>

                            <img src={pokemon.image} alt={"a pokemon"}/>
                            <div className="types">
                                <span>{pokemon.type}</span>
                            </div>
                        </div>
                    );
                })
            }
        </>
    );
};

export default Pokecard;