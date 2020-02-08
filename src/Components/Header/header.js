import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAllCountriesAsync } from '../../Store/actions';

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
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    componentWillMount() {
        this.props.getCountries().then(res => {
            
        })
    }

    render() {
        return (
            <div>
                header
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);