import React, { Component } from 'react';
import { getEditDistance } from '../../../Utils/levenshtein';
import SuggestionOption from './SuggestionOption/SuggestionOption';

class AutoSuggestion extends Component {
    dataAccessor = this.props.dataAccessor;
    onSelect = this.props.onSelect;
    state = {
        isDataAvailable: false,
        isDownloading: false,
        data: [],
        options: [],
        showOptions: false,
        keyword: '',
        activeIndex: -1
    }

    getData = () => {
        this.setState({
            isDownloading: true
        }, () => {
            this.dataAccessor().then(res => {
                this.setState({
                    data: [...res],
                    isDataAvailable: true,
                    isDownloading: false
                }, () => {
                    this.filterData(this.state.keyword);
                });
            })
        });
    }

    filterData = search => {
        const { data } = this.state;
        const filteredOptions = data.map(option => {
            const s = getEditDistance(search, option.name);
            return {
                ...option,
                d: s
            };
        }).sort((a, b) => a.d - b.d).slice(0, 15);

        this.setState({
            options: filteredOptions
        })
    }

    onchange = (e) => {

        const searchParameter = e.target.value;
        const isDownloadRequired = !this.state.isDataAvailable;

        this.setState({
            keyword: searchParameter,
            showOptions: !!searchParameter.length
        }, () => {
            if (isDownloadRequired) {
                this.getData();
            } else {
                this.filterData(searchParameter);
            }
        });
    }

    keyDown = (e) => {
        const key = e.keyCode;
        const oldActiveIndex = this.state.activeIndex;
        let newActiveIndex = oldActiveIndex;
        switch (key) {
            case 38: {
                //top
                newActiveIndex--;
                break;
            }
            case 37: {
                //left
                break;
            }
            case 39: {
                //right
                break;
            }
            case 40: {
                //bottom
                newActiveIndex++;
                break;
            }
            case 13: {
                //enter
                const { options } = this.state;
                if (options.length && oldActiveIndex >= 0 && oldActiveIndex <= options.length) {
                    this.setState({
                        showOptions: false,
                        keyword: '',
                        activeIndex: -1,
                        options: []
                    })
                    this.onSelect(options[oldActiveIndex]);
                }
                return;
            }
            case 27: {
                //escape
                this.setState({
                    showOptions: false
                });
                return;
            }
            default:
                return;
        }

        if (newActiveIndex !== oldActiveIndex) {
            this.setState({
                activeIndex: newActiveIndex
            })
        }
    }

    render() {
        return (
            <div className="suggestionbox-container">
                <div className="suggestionbox-label">Search</div>
                <div className="suggestionbox-wrapper">
                    <input
                        onChange={this.onchange}
                        value={this.state.keyword}
                        onKeyDown={this.keyDown}
                        className="suggestionbox"
                    ></input>
                    {
                        this.state.showOptions && (
                            <div className="suggestionbox-options-wrapper">
                                <ul className="suggestionbox-options">
                                    {
                                        this.state.options.map((option, index) => {
                                            const isActive = index === this.state.activeIndex;
                                            return (
                                                <SuggestionOption
                                                    key={option.name}
                                                    optionData={option}
                                                    isActive={isActive}>
                                                </SuggestionOption>

                                            );
                                        })
                                    }
                                </ul>
                            </div>
                        )
                    }
                </div>
            </div>
        );
    };
};

export default AutoSuggestion;