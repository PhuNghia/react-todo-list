import { useEffect, useRef, useState } from 'react';

function randomColor(currentColor) {
    const colorList = ['red', 'blue', 'green']
    const currentIndex = colorList.indexOf(currentColor);
    let newIndex = currentIndex;

    while (currentIndex === newIndex) {
        newIndex = Math.trunc(Math.random() * 3);
    }
   

    console.log(colorList[newIndex]);
    return colorList[newIndex]
}

function useMagicColor(props) {
 const [ color ,setColor] = useState('transparent');
 const colorRef = useRef('transparent')
 
 useEffect(() => {
    const colorInterval = setInterval(() => {
        const  newColor =  randomColor(colorRef.current);
        setColor(newColor);

        colorRef.current = newColor
    }, 1000);

    return () => {
        clearInterval(colorInterval)
    }
 },[])

 return color
}

export default useMagicColor;