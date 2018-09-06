import { createStore, combineReducers, compose } from 'redux'

import placesReducer from './reducers/places'

const rootReducer = combineReducers({
    places: placesReducer
});

let composeEnchacers = compose;

if(__DEV__){
    composeEnchacers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
}

const configureStore = () => {
    return createStore(rootReducer, composeEnchacers());
}

export default configureStore;