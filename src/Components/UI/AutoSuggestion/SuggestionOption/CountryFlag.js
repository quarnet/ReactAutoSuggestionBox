import React from 'react';

export const CountryFlag = (props) => {
    const imgUrl = props.url;
    const imgClass = props.imgClass;
    return (
        <div className={imgClass}>
            <img src={imgUrl} alt="flag" className="flag-img"></img>
        </div>
    );
};

export default CountryFlag;