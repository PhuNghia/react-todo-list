import React, { useState } from 'react';

ColorBox.propTypes = {
    
};
function getRandomColor() {
    const colorArr =['red', 'blue', 'orange',' white', 'silver'];
    const randomColor = Math.trunc(Math.random()*5);
    return colorArr[randomColor]
}
function ColorBox(props) {
    const initColor = localStorage.getItem('box_color') || 'purple'
    const [color, setColor] = useState(initColor);
    function handleBoxClick(){
        const newColor = getRandomColor();
        setColor(newColor);
        localStorage.setItem('box_color', newColor)
    }
    return (
        <div
         className="box"
         style={{backgroundColor:color, width:"240px", height:'240px'}}
         onClick={handleBoxClick}>
        </div>
    );
}

export default ColorBox;