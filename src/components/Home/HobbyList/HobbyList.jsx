import React from 'react';
import PropTypes from 'prop-types';
import './HobbyList.scss'

HobbyList.propTypes = {
    hobbyList:  PropTypes.array,
    activeId:   PropTypes.number,
    onHobbyClick: PropTypes.func,   
};

HobbyList.defaultProps = {
    hobbyList: [],
    activeId: null,
    onHobbyClick: null
}

function HobbyList(props) {
    const {hobbyList, activeId, onHobbyClick} = props;

    const handleClick = (hobby) => {
        if(onHobbyClick) {
            onHobbyClick(hobby)
        }
    }
    return (
        <ul className="list">
            {hobbyList.map(el => (
                <li 
                key={el.id}
                className={el.id === activeId ? 'active' :''}
                onClick={() => handleClick(el)}
                >{el.title}</li>
            ))}
        </ul>
    );
}

export default HobbyList;