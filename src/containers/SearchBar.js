/**
 * Name: Lior Elrom
 * Date: 2/13/16
 * Time: 8:21 PM
 */

'use strict';

import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import weatherActions from '../actions/weatherActions';

const { fetchWeather } = weatherActions;

class SearchBar extends Component {

    constructor(props) {
        super(props);
        this.state = { term: '' };
    }

    onFormSubmit(event) {
        const { term } = this.state;
        const { fetchWeather } = this.props;
        event.preventDefault();
        fetchWeather(term);
        this.setState({ term: '' });
    }

    onInputChange(event) {
        const { value } = event.target;
        event.preventDefault();
        this.setState({ term: value });
    }

    render () {
        const { term } = this.state;

        return (
            <form action="" className="input-group" onSubmit={this.onFormSubmit.bind(this)}>
                <input
                    type="text"
                    className="form-control"
                    placeholder="Get a five-day forecast in your favorite cities"
                    value={term}
                    onChange={this.onInputChange.bind(this)}
                />
                <span className="input-group-btn">
                    <button type="submit" className="btn btn-secondary">Submit</button>
                </span>
            </form>
        );
    }
}

SearchBar.propTypes = {
    fetchWeather: PropTypes.func.isRequired
};

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchWeather }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);
