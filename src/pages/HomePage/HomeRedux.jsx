import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
// import casual from "casual";
import HobbyList from '../../components/Home/HobbyList/HobbyList';
import { addNewHobby, setActiveHobby } from '../../actions/hobby';

HomeRedux.propTypes = {
    
};

const randomNumber = () =>{
    return 1000 + Math.trunc((Math.random()*9000))
}

function HomeRedux(props) {
    const hobbyList = useSelector(state => state.hobby.list);
    const activeId = useSelector(state => state.hobby.activeId)
    const dispatch = useDispatch();
    console.log('List', hobbyList);

    const handleAddHobbyClick = () => {
        const newId = randomNumber()
        //Random a object :id, title
        const newHobby = {
            // id: casual.uuid,
            // title: casual.title
            id: newId,
            title:`Hobby ${newId}`
        }
        //Dispatch action
        const action = addNewHobby(newHobby);
        dispatch(action);

    }

    const handleHobbyClick = (hobby) => {
        const action = setActiveHobby(hobby);
        dispatch(action);
    }
    return (
        <div>
            <h1>Redux</h1>
            <button onClick={handleAddHobbyClick}>Random Id</button>
            <HobbyList 
                hobbyList={hobbyList}
                activeId ={activeId}
                onHobbyClick= {handleHobbyClick}
            ></HobbyList>
        </div>
    );
}

export default HomeRedux;