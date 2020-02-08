import { GET_ALL_COUNTRIES, SET_ERROR, SET_ACTIVE_COUNTRY } from "./actionTypes"
import { GetAllCountries } from "../Utils/api";
import { getCountriesFromLocalStorage, setCountriesToLocalStorage, parseApiToCountry } from "../Utils/utils";

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

export const setActiveCountry = country => {
    return {
        type: SET_ACTIVE_COUNTRY,
        payload: {
            country: country
        }
    }
}

export const getAllCountriesAsync = () => {
    return dispatch => {
        const AllCountryData = getCountriesFromLocalStorage();
        if (AllCountryData) {
            dispatch(getAllCountries(AllCountryData.map(c => parseApiToCountry(c))));
            return Promise.resolve(true);
        }

        return GetAllCountries().then(countries => {
            dispatch(getAllCountries(countries.map(c => parseApiToCountry(c))));
            setCountriesToLocalStorage(countries);
            return true;
        }).catch(err => {
            dispatch(setError('Failed to load data from API. Please reload the page.'));
            return false;
        })
    };
};
