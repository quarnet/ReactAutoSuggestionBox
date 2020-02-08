import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = state => {
    return {
        isError: state.isError
    };
}

const Header = (props) => {
    return props.isError ? <div>Error</div> : <div>No Error</div>;
}

export default connect(mapStateToProps, null)(Header);