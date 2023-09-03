import {useSelector, useDispatch} from "react-redux";
import {actionCreators} from './store/action-creators';
import {bindActionCreators} from 'redux';
import {AuthProvider} from "./context";
import Pokeform from "./components/PokeForm";
import "./res/styles.css"
import {PokeCard} from "./components";
import {useState} from "react";
import Pokedex from "./components/Pokedex";

function App() {
    //const account = useSelector(state => state.account);

    //const dispatch = useDispatch();
    //const {depositMoney, withdrawMoney} = bindActionCreators(actionCreators, dispatch);


    return (

        <Pokedex/>

    );
}

export default App;
