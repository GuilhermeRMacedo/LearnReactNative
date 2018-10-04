//removed (SELECT_PLACE, DESELECT_PLACE, CHANGE_PLACE)
import { ADD_PLACE, DELETE_PLACE } from '../actions/actionTypes'

import placeImage from '../../assets/Mont-Saint-Michel-FRA.jpg'

const initialState = {
    placeName: '',
    places: [],
    //selectedPlace: null
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_PLACE:
            return {
                ...state,
                places: state.places.concat({
                    key: Math.random().toString(),
                    name: action.placeName,
                    image: {
                        uri: 'https://blogs.universal.org/bispomacedo/wp-content/uploads/2016/07/dest_bm0207-706x432.jpg'
                    }
                }),
                placeName: ''
            };
        case DELETE_PLACE:
            return {
                ...state,
                places: state.places.filter(place => {
                    return place.key !== state.selectedPlace.key
                }),
                //selectedPlace: null
            };
        // case SELECT_PLACE:
        //     return {
        //         ...state,
        //         selectedPlace: state.places.find(place => {
        //             return place.key === action.placeKey;
        //         })
        //     };
        // case DESELECT_PLACE:
        //     return {
        //         ...state, 
        //         selectedPlace: null
        //     }
        // case CHANGE_PLACE:
        //     return{
        //         ...state, 
        //         placeName: action.placeName
        //     }
        default:
            return state;
    }
};

export default reducer;