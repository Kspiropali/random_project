// TODO: change to reflect the action-creators file
// state initialized as 0
// action is of type { "type":"deposit|withdraw", "payload":"positive|0|negative" }
const accountReducer = (state = JSON.parse(localStorage.getItem("pokemons")) || [], action) => {
    // try_catch in case of errors
    try {
        switch (action.type) {
            case "add":
                // append the payload to the state
                // {pokeName: "": pokeType: "", pokeSrc: ""}
                if (checkIfPokemonExists(state, action.payload)) {
                    return state;
                }
                localStorage.setItem("pokemons", JSON.stringify([...state, action.payload]));
                return [...state, action.payload]
            case "remove":
                let tempState;
                // remove the payload from the state
                if(checkIfPokemonExists(state, action.payload)) {
                    // delete the pokemon from the state array
                    tempState = state.filter((poke) => poke.name !== action.payload);
                }
                localStorage.setItem("pokemons", JSON.stringify(tempState));
                return tempState;
            default:
                return state;
        }
    } catch (error) {
        return state
    }
}

const checkIfPokemonExists = (state, pokemon) => {
    return state.find((poke) => poke.name === pokemon);
};

export default accountReducer;
