import React, {useState} from "react";
import {usePokemon} from "../../context";
const regex = /^[a-z]*$/;

const Pokeform = () => {
    const [searchClassName, setSearchClassName] = useState("search-form");
    const [inputValue, setInputValue] = useState("");
    const {setPokemon} = usePokemon();

    function toggleText(e) {
        e.preventDefault();

        searchClassName.includes("active") ? setSearchClassName(searchClassName.replace(" active", "")) : setSearchClassName(searchClassName + " active");

        if (!searchClassName.includes(" active")) {
            setInputValue("");
        } else {
            setPokemon(inputValue);
        }
    }

    function handleInputChange(e) {
        e.preventDefault();
        const value = e.target.value;
        if (!regex.test(value)) {
            return;
        }

        setInputValue(e.target.value);
    }

    return (
        <div>
            <div className={searchClassName}>
                <input type="text" onChange={handleInputChange} value={inputValue}/>
                <button onClick={toggleText}></button>
            </div>
        </div>
    );
};

export default Pokeform;
