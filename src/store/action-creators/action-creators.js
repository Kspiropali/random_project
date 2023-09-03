
export const addPokemon = (pokemon) => {
    return (dispatch) => {
        dispatch({
            type: "add",
            payload: pokemon
        })
    }
}

export const removePokemon = (pokemon) => {
    return (dispatch) => {
        dispatch({
            type: "remove",
            payload: pokemon
        })
    }
}