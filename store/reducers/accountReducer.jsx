// TODO: change to reflect the action-creators file
// state initialized as 0
// action is of type { "type":"deposit|withdraw", "payload":"positive|0|negative" }
const accountReducer = (state = 0, action) => {
    try {
        switch (action.type) {
            case "deposit":
                return state + action.payload;
            case "withdraw":
                return state - action.payload;
            default:
                return state;
        }
    } catch (error) {return state}
}

export default accountReducer;
