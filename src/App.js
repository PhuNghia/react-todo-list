import logo from './logo.svg';
import './App.scss';
import { useEffect, useState } from 'react';
import queryString from 'query-string'

import ColorBox from './components/ColorBox/ColorBox.js';
import List from './components/List/List';
import Form from './components/Form/Form';
import PostList from './components/PostList/PostList';
import Pagination from './components/Pagination/Pagination';

function App() {
  const [listItem, setListItem] =  useState(
    [{id:1, title:"Go to market"},
      {id:2, title:"Buy food"} ,
      {id:3, title:"Make dinner"}]);
  const [postList,setPostlist]= useState([]);
  const [pagination,setPagination]= useState({
    _page : 1,
    _limit : 10,
    _totalRows : 11
  });
  
  const [filters,setFilters] = useState({
    _limit: 5,
    _page :1,
  })
  useEffect(() => {
    async function fetchPostList() {
      try {
        const paramsString = queryString.stringify(filters);
        const requestUrl = `http://js-post-api.herokuapp.com/api/posts?${paramsString}`;
        const response = await fetch(requestUrl);
        const responseJSON = await response.json()
        console.log('.....',responseJSON);
  
        const {data,pagination} = responseJSON;
        setPostlist(data);
        setPagination(pagination);
      } catch (error) {
        console.log('False loading', error.message);
      }
 
    }
    fetchPostList();
  },[filters])

  function handlePageChage(newPage) {
    console.log('New Page', newPage);
    setFilters({
      ...filters,
      _page :newPage
    })
  }

  function handleClick(el) {
  
    const index = listItem.findIndex(x => x.id === el.id);
    if( index <0) return;
    const newArr =[...listItem];
    newArr.splice(index,1);
    setListItem(newArr)
  }

  function handleOnSubmit(formValues) {
    console.log('...',formValues);
    const newItem = {  id: listItem.length+1, ...formValues}
   
    ;
    const newArr = [...listItem];
    newArr.push(newItem)
    setListItem(newArr)
  }
  return (



    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        {/* <PostList posts={postList}/> */}
        <Pagination pagination = {pagination}
        onPageChange={handlePageChage}/>
        {/* <ColorBox/>
        <Form onSubmit={handleOnSubmit}/>
        <List todos={listItem} onTodoClick={handleClick}/> */}
      
      </header>
    </div>
  );
}

export default App;
