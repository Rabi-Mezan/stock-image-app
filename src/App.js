import { useEffect, useState, useReducer, useMemo } from 'react';
import './App.css';
import Card from './components/Card';
import Layout from './components/Layout';






const photos = []

// initial state of useReducer
const initialState = {
  items: photos,
  count: photos.length,
  inputs: { title: null, file: null, path: null },
  isCollapsed: false
}

const handleOnChange = (state, e) => {
  if (e.target.name === 'file') {
    return { ...state.inputs, file: e.target.files[0], path: URL.createObjectURL(e.target.files[0]) }
  } else {
    return { ...state.inputs, title: e.target.value }
  }

}


// reducer function of useReducer
function reducer(state, action) {
  switch (action.type) {
    case 'setItem':
      return {
        ...state,
        items: [state.inputs, ...state.items],
        count: state.items.length + 1,
        inputs: initialState.inputs
      }
    case "setInputs":
      return {
        ...state,
        inputs: handleOnChange(state, action.payload.value)
      }
    case 'collapse':
      return {
        ...state,
        isCollapsed: action.payload.bool
      }
    default: return state
  }
}




function App() {
  const [state, dispatch] = useReducer(reducer, initialState)
  const count = useMemo(() => {
    return `Total Image${state.items.length > 1 ? 's' : ''} :  ${state.items.length}`
  }, [state.items])

  const toggle = (bool) => dispatch({ type: "collapse", payload: { bool } })
  const handleOnChange = (e) => dispatch({ type: 'setInputs', payload: { value: e } })


  //upload from submit handler
  const handleOnSubmit = (e) => {
    e.preventDefault()
    dispatch({ type: 'setItem' })

    toggle(!state.isCollapsed)

  }


  // main app componennt
  return (
    <Layout
      state={state}
      onSubmit={handleOnSubmit}
      onChange={handleOnChange}
      toggle={toggle}
      count={count}
    >
      {/* gallery home image cards */}
      <div className='row m-5 d-flex justify-content-center align-items-center'>
        {
          state.items.map((items, index) => <Card key={index} {...items} />)
        }
      </div>
    </Layout>
  );
}

export default App;
