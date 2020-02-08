import Axios from "axios"

const AllCountryURL = 'https://restcountries.eu/rest/v2/all';
export const GetAllCountries = () => {
    return Axios.get(AllCountryURL).then (res => {
        const response = res.data;
        return response;
    });
};
