import React, { Component } from 'react';
import { getEditDistance } from '../../../Utils/levenshtein';

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
                const {options} = this.state;
                if (options.length && oldActiveIndex >= 0 && oldActiveIndex <= options.length) {
                    this.setState({
                        showOptions: false
                    })
                    this.onSelect(options[oldActiveIndex]);
                }
                break;
            }
            case 27: {
                //escape
                this.setState({
                    showOptions: false
                })
                break;
            }
            default:
                break;
        }

        if (newActiveIndex !== oldActiveIndex) {
            this.setState({
                activeIndex: newActiveIndex
            })
        }
    }

    render() {
        return (
            <div>
                <div>auggestion search box</div>
                <input
                    onChange={this.onchange}
                    value={this.state.keyword}
                    onKeyDown={this.keyDown}
                ></input>
                {
                    this.state.showOptions && (
                        <ul>
                            {
                                this.state.options.map((option, index) => {
                                    const classes = ['option'];
                                    if(index === this.state.activeIndex)
                                    classes.push('active');
                                    return (
                                        <li key={option.name} className={classes.join(' ')}>
                                            {option.name}
                                        </li>
                                    );
                                })
                            }
                        </ul>
                    )
                }
            </div>
        );
    };
};

export default AutoSuggestion;