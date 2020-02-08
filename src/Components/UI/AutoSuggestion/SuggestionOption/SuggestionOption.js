import React from 'react';
import { capitalize } from '../../../../Utils/utils';
import CountryFlag from './CountryFlag';

const SuggestionOption = (props) => {
    const { optionData, isActive } = props;
    return (
        <div className={['suggestion-option', isActive ? 'active' : ''].join(' ')} onClick={() => props.clicked(optionData)}>
            <div className="country-flag-sm">
                <CountryFlag url={optionData.flag} imgClass="country-flag-wrapper"></CountryFlag>
            </div>
            <div className="country-sm">
                <div className="country-row">
                    <b>
                        {capitalize(optionData.name)}
                    </b>
                    {
                        ' - ' + optionData.alpha3Code + ' (' + optionData.nativeName + ')'
                    }
                </div>
                <div className="country-detail-row">
                    {
                        optionData.region + ' (capital: ' + optionData.capital + ') + Popu.: ' + optionData.population
                    }
                </div>
            </div>
        </div>
    );
};

export default SuggestionOption;