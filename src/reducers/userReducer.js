export const userReducer = (state = null, action) => {
    switch (action.type) {
        case "LOGGED_IN_USER2":
            return action.payload;
        case "LOGOUT2":
            return action.payload;
        default:
            return state;
    }
};