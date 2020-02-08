import React from 'react';
import { connect } from 'react-redux';
import CountryFlag from '../UI/AutoSuggestion/SuggestionOption/CountryFlag';
import { capitalize } from '../../Utils/utils';

const mapStateToProps = state => {
    return {
        countryData: state.activeCountry
    };
}

const CountryFull = props => {

    const country = props.countryData;
    let renderElem = !props.countryData ? <div className="empty-country">Please search a country.</div> : (
        <div className="country-details">
            <div className="country-flag-bg">
                <CountryFlag url={country.flag} imgClass="flag-big"></CountryFlag>
            </div>
            <div className="country-bg-main">
                <div className="tbl">
                    <div className="tbl-row">
                        <div className="tbl-cell">
                            <span className="data-label">Name : </span>
                        </div>
                        <div className="tbl-cell">
                            <span className="data-value">{capitalize(country.name)}</span>
                        </div>
                    </div>

                    <div className="tbl-row">
                        <div className="tbl-cell">
                            <span className="data-label">Native Name : </span>
                        </div>
                        <div className="tbl-cell">
                            <span className="data-value">{country.nativeName}</span>
                        </div>
                    </div>

                    <div className="tbl-row">
                        <div className="tbl-cell">
                            <span className="data-label">Region : </span>
                        </div>
                        <div className="tbl-cell">
                            <span className="data-value">{country.region}</span>
                        </div>
                    </div>

                    <div className="tbl-row">
                        <div className="tbl-cell">
                            <span className="data-label">Latitude : </span>
                        </div>
                        <div className="tbl-cell">
                            <span className="data-value">{country.latlng.lat}</span>
                        </div>
                    </div>

                    <div className="tbl-row">
                        <div className="tbl-cell">
                            <span className="data-label">Longitude : </span>
                        </div>
                        <div className="tbl-cell">
                            <span className="data-value">{country.latlng.lng}</span>
                        </div>
                    </div>

                    <div className="tbl-row">
                        <div className="tbl-cell">
                            <span className="data-label">Population : </span>
                        </div>
                        <div className="tbl-cell">
                            <span className="data-value">{country.population}</span>
                        </div>
                    </div>

                    <div className="tbl-row">
                        <div className="tbl-cell">
                            <span className="data-label">Area : </span>
                        </div>
                        <div className="tbl-cell">
                            <span className="data-value">{country.area}</span>
                        </div>
                    </div>

                    <div className="tbl-row">
                        <div className="tbl-cell">
                            <span className="data-label">Alpha 2 Code : </span>
                        </div>
                        <div className="tbl-cell">
                            <span className="data-value">{country.alpha2Code}</span>
                        </div>
                    </div>

                    <div className="tbl-row">
                        <div className="tbl-cell">
                            <span className="data-label">Alpha 3 Code : </span>
                        </div>
                        <div className="tbl-cell">
                            <span className="data-value">{country.alpha3Code}</span>
                        </div>
                    </div>

                    <div className="tbl-row">
                        <div className="tbl-cell">
                            <span className="data-label">Calling Codes : </span>
                        </div>
                        <div className="tbl-cell">
                            <span className="data-value">{country.callingCodes.join(', ')}</span>
                        </div>
                    </div>

                    <div className="tbl-row">
                        <div className="tbl-cell">
                            <span className="data-label">Time Zones : </span>
                        </div>
                        <div className="tbl-cell">
                            <span className="data-value">{country.timezones.join(', ')}</span>
                        </div>
                    </div>

                    <div className="tbl-row">
                        <div className="tbl-cell">
                            <span className="data-label">Numeric Code : </span>
                        </div>
                        <div className="tbl-cell">
                            <span className="data-value">{country.numericCode}</span>
                        </div>
                    </div>

                    <div className="tbl-row">
                        <div className="tbl-cell">
                            <span className="data-label">Currencies : </span>
                        </div>
                        <div className="tbl-cell">
                            <span className="data-value">{country.currencies.map(c => {
                                return c.name + ' (' + c.symbol + ')'
                            }).join(', ')}</span>
                        </div>
                    </div>

                    <div className="tbl-row">
                        <div className="tbl-cell">
                            <span className="data-label">Languages : </span>
                        </div>
                        <div className="tbl-cell">
                            <span className="data-value">{country.languages.map(c => c.name).join(', ')}</span>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
    return <div className="country-details-wrapper">{renderElem}</div>;
}

export default connect(mapStateToProps)(CountryFull);