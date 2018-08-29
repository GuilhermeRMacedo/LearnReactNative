import { ADD_PLACE, DELETE_PLACE, SELECT_PLACE, DESELECT_PLACE } from '../actions/actionTypes'

const initialState = {
    places: [],
    selectedPlace: null
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
            case ADD_PLACE:
                return {
                    
                };
            case DELETE_PLACE:
                return {

                };
            case SELECT_PLACE: 
                return {

                };
            case DESELECT_PLACE:
                return {
                    
                }
        default:
            return state;
    }
};

export default reducer;