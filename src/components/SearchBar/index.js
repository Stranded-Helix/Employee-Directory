import React, { setState } from 'react';

export default function SearchBar(props) {

    return (
        <form className="form-inline m-2" onSubmit={props.handleFormSubmit}>
            <input
                onChange={event => props.handleInputChange(event)}
                value={props.search}
                name="search"
                type="search"
                className="form-control"
                placeholder="Search"
            />
        </form>
    );
}