import { GET_ALL_COUNTRIES, SET_ERROR } from "./actionTypes"
import { GetAllCountries } from "../Utils/api";

const getAllCountries = list => {
    return {
        type: GET_ALL_COUNTRIES,
        payload: {
            data: list
        }
    };
};

const setError = error => {
    return {
        type: SET_ERROR,
        payload: {
            error: error
        }
    }
}

export const getAllCountriesAsync = () => {
    return dispatch => {
        GetAllCountries().then(countries => {
            dispatch(getAllCountries(countries));
        }).catch(err => {
            dispatch(setError('Failed to load data from API. Please reload the page.'));
        })
    };
};