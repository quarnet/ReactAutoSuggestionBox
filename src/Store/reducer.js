import initialStore from "./initialStore";
import { GET_ALL_COUNTRIES, SET_ERROR, SET_ACTIVE_COUNTRY } from "./actionTypes";

const reducer = (state = initialStore, action) => {
    switch (action.type) {
        case GET_ALL_COUNTRIES: {
            return {
                ...state,
                allCountries: action.payload.data,
                isDataAvailable: true,
                isError: false
            };
        }
        case SET_ERROR: {
            return {
                ...state,
                isError: true,
                error: action.payload.error
            };
        }
        case SET_ACTIVE_COUNTRY: {
            return {
                ...state,
                activeCountry: action.payload.country
            };
        }
        default: {
            return state;
        }
    }
}

export default reducer;