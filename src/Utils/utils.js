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