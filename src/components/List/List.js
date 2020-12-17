import React from 'react';
import PropTypes from 'prop-types'
List.propTypes = {
    todos:PropTypes.array,
    onTodoClick:PropTypes.func,
};
List.defaultProps= {
    todos:[],
    onTodoClick:null
}
  



function List(props) {
    const {todos, onTodoClick} = props;

    function handleClick(todo) {
        if(onTodoClick) {
            onTodoClick(todo)
        }
    }

    return ( 
    <ul className="listItem">
        {todos.map(el => (
        <li key={el.id} onClick={ () => handleClick(el)}>{el.title}</li>))}
        </ul>
    );
}

export default List;