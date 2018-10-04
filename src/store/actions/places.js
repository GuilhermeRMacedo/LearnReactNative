//removed (SELECT_PLACE, DESELECT_PLACE, CHANGE_PLACE)
import { ADD_PLACE, DELETE_PLACE} from './actionTypes'

export const addPlace = (placeName) =>{
    return{
        type: ADD_PLACE,
        placeName: placeName
    };
};

export const deletePlace = () => {
    return{
        type: DELETE_PLACE
    };
};

// export const selectPlace = (key) => {
//     return{
//         type: SELECT_PLACE,
//         placeKey: key
//     };
// };

// export const deselectPlace = () => {
//     return{
//         type: DESELECT_PLACE
//     };
// };

// export const changePlace = (placeName) => {
//     return {
//         type: CHANGE_PLACE,
//         placeName: placeName
//     }
// }