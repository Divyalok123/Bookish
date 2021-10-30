import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import './ComponentHeader.css';

function ComponentHeader(props) {
    const [optionSelected, setOptionSelected] = useState("all");

    useEffect(() => {
        if(props.optionSelected)
            setOptionSelected(props.optionSelected);
    }, [props.optionSelected]);

    const handleOptionChange = (e) => {
        setOptionSelected(e.target.value);
    }

    return (
        <div className="component_header">
            <div className="header_text f_exo">
                { 
                    props.page === "mybooks" ? "My Books" :
                    props.page === "books" ? "Books" : 
                    "Favourites"
                }
            </div>
            <div className="header_search_bar">
                 <FontAwesomeIcon icon={faSearch} />
            </div>
            <div className="filter_container">
                <select 
                    className="select_genre pointer f_titillium" 
                    value={optionSelected} 
                    onChange={handleOptionChange}>
                    <option value="all">All</option> 
                    <option value="thriller">Thriller</option>
                    <option value="crime">Crime</option>
                    <option value="romance">Romance</option>
                    <option value="suspense">Suspense</option>
                    <option value="horror">Horror</option>
                    <option value="action">Action</option>
                    <option value="kids">Kids</option>
                    <option value="comedy">Comedy</option>
                </select>
            </div>
        </div>
    )
    
}

export default ComponentHeader;