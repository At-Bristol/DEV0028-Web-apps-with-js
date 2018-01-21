import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger'

const render = () => ReactDOM.render(<App />, document.getElementById('root'));

const defaultState = [
  {
    name:'Black Sand',
    description:'Magnetic Black Sand',
    xid:'X02345',
    type:'physical',
    selected:false,
    id:Math.random()
  },
  {
    name:'Spinning Patterns',
    description:'Patterns made in sand on a spinning table',
    xid:'X02REGGR5',
    type:'physical',
    selected:false,
    id:Math.random()
  },
  {
    name:'Grinding Grain',
    description:'Grind flour from wheat',
    xid:'X05435',
    type:'physical',
    selected:false,
    id:Math.random()
  }
]

const reducer = (state = defaultState, action) => {
  if(action.type === 'ADD_ITEM'){
    return [
      ...state,
      action.payload
     ]
  };
  if(action.type === 'SELECT_ITEM'){
   return state.map(e => Object.assign(
     e,
     {selected: action.payload === e.id ? true : false}
   ))
  }
  return state
}

const store = createStore(
  reducer,
  applyMiddleware(logger)
);

const App = () => (
  <div>
    <div 
      style={{float:'left',  overflow:'auto', padding: '10px', borderRight: '1px solid black'}}
    >
      <h2>Input</h2>
      <Input />
    </div>
    <div  style={{float:'left',  overflow:'auto', padding: '10px', borderRight: '1px solid black'}}>
      <h2>Exhibits</h2>
      <List 
        todos={store.getState()} 
      />
    </div>
    <div  style={{float:'left', overflow:'auto', padding: '10px', borderRight: '1px solid black'}}>
      <h2>Inspector</h2>
      <Inspector 
        payload={store.getState().filter(e => e.selected)[0]}
      />
    </div>
  </div>
)

const List = ({todos}) => {
  return (
    <ul>
      { todos.map(e => <Todo 
          key={e.id} 
          content={e}
          >
        </Todo>) }
    </ul>
  )
}

const Todo = ({content}) => {

  const handleClick = payload => {
    store.dispatch({
      type: 'SELECT_ITEM',
      payload: payload.id
    })
  }

  return(
    <li 
      onClick={() => handleClick(content)}
      style={{color: content.selected ? 'red' : 'black'}}
    >
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
    xid.value = '';
    description.value = '';
  }

  let name, xid, description, type;  

  return(
    <form>
      <label> Name: </label><br/>
      <input ref={n => name = n}/><br/>
      <label> Exhibit Id: </label><br/>
      <input ref={n => xid = n}/><br/>
      <label> Description: </label><br/>
      <textarea 
        rows="4" 
        cols="50" 
        style={{resize: 'none'}} 
        ref={n => description = n}/><br/>
      <label> Type: </label><br/>
      <select ref={n => type = n}>
        <option value="physical">Physical</option>
        <option value="digital">Digital</option>
      </select><br/><br/>
      <input 
        type="button" 
        value="Add" 
        onClick={() => handleClick({
          name: name.value,
          id: Math.random(),
          xid: xid.value,
          description: description.value,
          type: type.value,
          selected: false
        })} 
      />
    </form>
  )
};


const Inspector = ({payload = {}}) => {
  return(
    <div 
      backgroundcolor='red'
    >
      <ul>
        {
          Object.keys(payload).map(e => 
            payload[e] ? 
              <li key={e}>{e} : {payload[e]}</li> 
              : null
          )
        }
      </ul>
    </div>
  )
}



render()
store.subscribe(render);