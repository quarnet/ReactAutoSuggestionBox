export class Currency {
    constructor(code, name, symbol) {
        this.code = code;
        this.name = name;
        this.symbol = symbol;
    }
}

export class LatLng {
    constructor(lat, lng) {
        this.lat = lat;
        this.lng = lng;
    }
}

export class Language {
    constructor(iso639_1, iso639_2, name, nativeName) {
        this.iso639_1 = iso639_1;
        this.iso639_2 = iso639_2;
        this.name = name;
        this.nativeName = nativeName;
    }
}

export class Country {
    name = null;
    alpha2Code = null;
    alpha3Code = null;
    callingCodes = [];
    capital = null;
    region = null;
    subregion = null;
    population = null;
    latlng = new LatLng();
    area = null;
    timezones = [];
    nativeName = null;
    numericCode = null;
    currencies = [];
    languages = [];
    flag = null;
    cioc = null;
}