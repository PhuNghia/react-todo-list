import React from 'react';
import useClock from '../../hooks/useClock';

Clock.propTypes = {
    
};


function Clock(props) {
 const {timeString} = useClock()
    return (
        <div>
            <h3>{timeString}</h3>
        </div>
    );
}

export default Clock;