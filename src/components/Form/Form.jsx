import React, { useState } from 'react';
import PropTypes from 'prop-types';

Form.propTypes = {
    onSubmit:PropTypes.func
};

Form.defaultProps = {
    onSubmit: null
}

function Form(props) {
    const { onSubmit} = props;
    const [value, setValue] = useState('');

    function handleValueChange(e) {
        setValue(e.target.value)
    }
    function handleSubmit(e) {
        e.preventDefault();
        if(!onSubmit) return;

        const formValues ={
            title:value
        }
        onSubmit(formValues);
        setValue('')
    }
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" id="fname" name="fname" value={value} onChange={handleValueChange}></input>
        </form>
    );
}

export default Form;