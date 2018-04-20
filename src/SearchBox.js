import React, { Component } from 'react';

class SearchBox extends Component {
    constructor(props) {
        super(props);
        /*makes the state equal to a blank string */
        this.state = { searchText: '' }
        this.searchUpdate = this.searchUpdate.bind(this);
    }

    /*set the state of searchtext equal to whatever is typed into the searchbox */
    searchUpdate(e) {
        const newState = e.target.value
        this.setState({ searchText: newState });
        this.props.callbackP(newState);
    }


    render() {
        return (

            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" onChange={this.searchUpdate} value={this.state.searchText} />

        );
    }
}

export default SearchBox;