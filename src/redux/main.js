console.log(window.Redux);

const { createStore} = window.Redux;
// Setup Redux Store
// state
// reducer
// store

const initialState = JSON.parse(localStorage.getItem('hobbylist'))  || [];

const hobbyReducer = ( state = initialState, action) => {
    switch (action.type) {
        case 'ADD_HOBBY': {
            const newList = [...state];
            newList.push(action.payload);

            return newList
        }
            
       
    
        default:
            return state
    }
   
}

const store = createStore(hobbyReducer)

const renderHobbyList = (hobbyList) => {
    if(!Array.isArray(hobbyList) || hobbyList.length === 0) return;
    
    const ulElement = document.querySelector('#hobbyListId');
    if(!ulElement) return;

    // reset previous content of ul
    ulElement.innerHTML= '';
    for (const hobby of hobbyList) {
        const liElement = document.createElement('li');
        liElement.textContent = hobby;
        
        ulElement.appendChild(liElement)
    }
}

// Render Hobby list
const initialHobbyList = store.getState();
// console.log(initialHobbyList);
renderHobbyList(initialHobbyList);

// Handle Form submit
const hobbyFormElement = document.querySelector('#hobbyFormId');
if(hobbyFormElement) {
    const handleFormSubmit = (e) => {
        //prevent browser from loading
        e.preventDefault();
        const hobbyTextElement = hobbyFormElement.querySelector('#hobbyTextId');
        if(!hobbyTextElement) return;
        console.log('SUBMIT', hobbyTextElement.value);
        
        const action = {
            type: 'ADD_HOBBY',
            payload: hobbyTextElement.value
        };
        store.dispatch(action);

        //reset form
        hobbyFormElement.reset();



    };
    hobbyFormElement.addEventListener('submit', handleFormSubmit)
}
store.subscribe(() =>  {
    console.log('UPDATE', store.getState());
    const newHobbyList = store.getState();
    renderHobbyList(newHobbyList);
    localStorage.setItem('hobbylist', JSON.stringify(newHobbyList))
})


