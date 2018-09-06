import { ADD_PLACE, DELETE_PLACE, SELECT_PLACE, DISELECT_PLACE, CHANGE_PLACE} from './actionTypes'

export const addPlace = () =>{
    
    return{
        type: ADD_PLACE
    };
};

export const deletePlace = () => {
    return{
        type: DELETE_PLACE
    };
};

export const selectPlace = (key) => {
    return{
        type: SELECT_PLACE,
        placeKey: key
    };
};

export const deselectPlace = () => {
    return{
        type: DISELECT_PLACE
    };
};

export const changePlace = (placeName) => {
    return {
        type: CHANGE_PLACE,
        placeName: placeName
    }
}