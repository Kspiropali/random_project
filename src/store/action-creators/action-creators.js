
// TODO: change it to something else that makes sense
export const addPokemon = (pokemon) => {
    return (dispatch) => {
        dispatch({
            type: "add",
            payload: pokemon
        })
    }
}
// TODO: change it to something else that makes sense
// export const withdrawMoney = (amount) => {
//     return (dispatch) => {
//         dispatch({
//             type: "withdraw",
//             payload: amount
//         })
//     }
// }