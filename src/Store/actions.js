import { GET_ALL_COUNTRIES, SET_ERROR } from "./actionTypes"
import { GetAllCountries } from "../Utils/api";
import { getCountriesFromLocalStorage, setCountriesToLocalStorage } from "../Utils/utils";

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
        const AllCountryData = getCountriesFromLocalStorage();
        if (AllCountryData) {
            dispatch(getAllCountries(AllCountryData));
            return Promise.resolve(true);
        }

        return GetAllCountries().then(countries => {
            dispatch(getAllCountries(countries));
            setCountriesToLocalStorage(countries);
            return true;
        }).catch(err => {
            dispatch(setError('Failed to load data from API. Please reload the page.'));
            return false;
        })
    };
};