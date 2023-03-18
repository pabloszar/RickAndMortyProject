import { deleteFav, addFav } from "./actions";

const initialState = {
    myFavorites: [],
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case addFav:        //It recives a character by Payload
        return {...state, myFavorites: [...state.myFavorites, action.payload]};
        case deleteFav:        //It recives an ID by Payload
        return {
            ...state,
            myFavorites: state.myFavorites.filter(char => char.id !== action.payload),
        };

        default: return {...state};
    }
}

export default reducer;