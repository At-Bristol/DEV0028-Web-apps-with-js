import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger'

const render = () => ReactDOM.render(<App />, document.getElementById('root'));

const reducer = (state = [], action) => {
  if(action.type === 'ADD_ITEM'){
    return [
      ...state,
      action.payload
     ]
  };
  return state
}

const store = createStore(
  reducer,
  applyMiddleware(logger)
);

const App = () => (
  <div>
    <Input />
    <List items={store.getState()} />
  </div>
)

const List = ({items}) => {
  return (
    <ul>
      { items.map(e => <Item 
          key={e.id} 
          content={e}
          >
        </Item>) }
    </ul>
  )
}

const Item = ({content}) => {
  return(
    <li >
      <h4>{content.name}</h4>
    </li>
  )
}

const Input = () => {
  const handleClick = payload =>{     
    store.dispatch({
      type: 'ADD_ITEM',
      payload
    })

    name.value = '';
  }

  let name;  

  return(
    <form>
      <label> Name: </label><br/>
      <input ref={n => name = n}/><br/>
      <input 
        type="button" 
        value="Add" 
        onClick={() => handleClick({
          name: name.value,
          id: Math.random(),
        })} 
      />
    </form>
  )
};


render()
store.subscribe(render);