import { useEffect, useState } from 'react';



function formatDate(date) {
 

    const hour = `0${date.getHours()}`.slice(-2);
    const minutes =`0${date.getMinutes()}`.slice(-2); 
    const seconds = `0${date.getSeconds()}`.slice(-2);
    

    return `${hour}:${minutes}:${seconds} ${hour >= 12 ? 'PM':'AM'}`
}

function useClock(props) {
    const [timeString,setTimeString] = useState('');

    useEffect(() => {
       const clockInterval =  setInterval(() => {
            const now =  new Date();
            const newTimeString = formatDate(now);

            setTimeString(newTimeString)
        }, 1000);
        
        return () => {
            console.log('Clock Clear');
            clearInterval(clockInterval)
        }
    },[])
    return {timeString};
}

export default useClock;