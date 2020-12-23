import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';

PostFilter.propTypes = {
    onSubmit:PropTypes.func,
};

PostFilter.defaultProps = {
    onSubmit: null,
}

function PostFilter(props) {
    const {onSubmit} = props;
    const [searchTerm, setSearchTerm] = useState('');
    const typingTimeoutRef = useRef(null)

    function handleSearchTermChange(e) {
        setSearchTerm(e.target.value);

        if(!onSubmit) return;

        if(typingTimeoutRef.current) {
            clearTimeout(typingTimeoutRef.current)
        };
        typingTimeoutRef.current = setTimeout(() => {
            const formValues = {
                searchTerm:e.target.value,
            }
            onSubmit(formValues)
        },300)
       
    }

    return (
      <form>
          <input 
          type='text'
          value={searchTerm}
          onChange={ handleSearchTermChange}>
          </input>
      </form>
    );
}

export default PostFilter;