import React from 'react';
import PropTypes from 'prop-types';

Hero.propTypes = {
    name: PropTypes.string,
};

Hero.defaultProps = {
    name : ''
}

function Hero(props) {
    const { name} = props;
    console.log('Render', name);
    return (
        <h5>
           Hero Name :{name}  
        </h5>
    );
}

export default React.memo(Hero)