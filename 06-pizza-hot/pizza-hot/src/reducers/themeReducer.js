export function themeReducer(state, action) {
    switch(action.type) {
        case "CHANGE_COLOR":
            return { ...state, color: action.payload } // { color: "dark" }
        case "CHANGE_MODE":
            return { ...state, mode: action.payload}  // { color: "dark", mode: "dark" }
        default:
            return state;
    }
}