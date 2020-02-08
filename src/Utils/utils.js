import { Country, LatLng, Language, Currency } from "./classes";

export const setCountriesToLocalStorage = data => {
    localStorage.setItem('countries', JSON.stringify(data));
};

export const getCountriesFromLocalStorage = data => {
    const stored = localStorage.getItem('countries');
    if (stored) {
        return JSON.parse(stored);
    }
    return null;
};

export const parseApiToCountry = apiRes => {
    let country = new Country();
    country.alpha2Code = apiRes.alpha2Code;
    country.alpha3Code = apiRes.alpha3Code;
    country.area = apiRes.area;
    country.callingCodes = apiRes.callingCodes;
    country.capital = apiRes.capital;
    country.cioc = apiRes.cioc;
    country.flag = apiRes.flag;
    country.latlng = new LatLng(apiRes.latlng[0], apiRes.latlng[1]);
    country.name = apiRes.name;
    country.nativeName = apiRes.nativeName;
    country.numericCode = apiRes.numericCode;
    country.population = apiRes.population;
    country.region = apiRes.region;
    country.subregion = apiRes.subregion;
    country.timezones = apiRes.timezones;

    country.currencies = apiRes.currencies.map (currency => new Currency (currency.code, currency.name, currency.symbol));
    country.languages = apiRes.languages.map(lang => new Language(lang.iso639_1, lang.iso639_2, lang.name, lang.nativeName));

    return country;
}