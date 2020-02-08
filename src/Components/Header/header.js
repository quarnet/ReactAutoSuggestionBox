import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAllCountriesAsync, setActiveCountry } from '../../Store/actions';
import AutoSuggestion from '../UI/AutoSuggestion/AutoSuggestion';

const mapStateToProps = state => {
    return {
        isError: state.isError,
        countries: state.allCountries
    };
}

const mapDispatchToProps = dispatch => {
    return {
        getCountries: () => dispatch(getAllCountriesAsync()),
        setCountry: (country) => dispatch(setActiveCountry(country))
    };
};

class Header extends Component {

    getCountriesData = () => {
        return this.props.getCountries().then(res => {
            return this.props.countries;
        });
    }

    onSelect = (selectedOption) => {
        this.props.setCountry(selectedOption);
    }

    render() {
        return (
            <div className="app-header">
                <AutoSuggestion
                    dataAccessor={this.getCountriesData}
                    onSelect={this.onSelect}
                ></AutoSuggestion>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);