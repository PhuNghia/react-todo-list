import React from 'react';
import useClock from '../../hooks/useClock';

ClockOther.propTypes = {
    
};


function ClockOther(props) {
 const {timeString} = useClock()
    return (

            <h3 style={{color:'purple'}}>{timeString}</h3>

    );
}

export default ClockOther;