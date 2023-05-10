import { createContext, useReducer } from "react";

export const Context = createContext()

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



const Provider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState)
    return (
        <Context.Provider value={{ state, dispatch }}>
            {children}
        </Context.Provider>
    )
}
export default Provider;