import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAllCountriesAsync } from '../../Store/actions';
import AutoSuggestion from '../UI/AutoSuggestion/AutoSuggestion';

const mapStateToProps = state => {
    return {
        isError: state.isError,
        countries: state.allCountries
    };
}

const mapDispatchToProps = dispatch => {
    return {
        getCountries: () => dispatch(getAllCountriesAsync())
    };
};

class Header extends Component {

    getCountriesData = () => {
        return this.props.getCountries().then(res => {
            return this.props.countries;
        });
    }

    render() {
        return (
            <div>
                header
                <AutoSuggestion dataAccessor={this.getCountriesData}></AutoSuggestion>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);