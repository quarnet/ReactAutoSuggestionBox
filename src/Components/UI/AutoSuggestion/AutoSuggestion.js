import React, { Component } from 'react';

class AutoSuggestion extends Component {
    dataAccessor = this.props.dataAccessor;
    state = {
        isDataAvailable: false,
        isDownloading: false,
        data: [],
        showOptions: false,
        keyword: ''
    }


    getData = () => {
        this.setState({
            ...this.state,
            isDownloading: true
        }, () => {
            this.dataAccessor().then(res => {
                this.setState({
                    ...this.state,
                    data: [...res],
                    isDataAvailable: true,
                    isDownloading: false
                });
            })
        });
    }

    onchange = (e) => {
        const searchParameter = e.target.value;
        const isDownloadRequired = !this.state.isDataAvailable;

        this.setState({
            ...this.state,
            keyword: searchParameter,
            showOptions: !!searchParameter.length
        }, () => {
            if (isDownloadRequired) {
                this.getData();
            }
        });


    }

    keyDown = (e) => {

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
                            <li>data</li>
                        </ul>
                    )
                }
            </div>
        );
    };
};

export default AutoSuggestion;