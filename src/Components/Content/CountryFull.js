import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = state => {
    return {
        countryData: state.activeCountry
    };
}

const CountryFull = props => {

let renderElem = props.countryData ? <div>{props.countryData.name}</div> : <div>no country selected</div>;
    return renderElem;
}

export default connect(mapStateToProps)(CountryFull);