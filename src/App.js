import './App.css';
import {useReducer} from "react";

const BG_COLOR_RED = 'BG_COLOR_RED';
const BG_COLOR_YELLOW = 'BG_COLOR_YELLOW';

function reducer(state, action){
    switch (action.type){
        case 'ADD_1':
            return {...state, counter1: state.counter1 + action.payload};
        case 'ADD_5':
            return {...state, counter2: state.counter2 + action.payload};
        case BG_COLOR_RED:
            return {...state, bg_color: action.payload};
        case BG_COLOR_YELLOW:
            return {...state, bg_color: action.payload};
        default:
            return state;
    }
}
function App() {
    const initialState = {
        counter1: 0,
        counter2: 0,
        bg_color: 'white'
    }
    const [{counter1, counter2, bg_color}, dispatch] = useReducer(reducer, initialState);
useReducer()
  return (
    <div className={bg_color}>
        <h1>This is lesson_03_reducer branch</h1>
        <div>
            <span>Counter 1: </span>
            <b>{counter1} </b>
            <button onClick={()=>dispatch({type:'ADD_1', payload:2})}>Add 2</button>
        </div>
        <div>
            <span>Counter 2: </span>
            <b>{counter2} </b>
            <button onClick={()=>dispatch({type:'ADD_5', payload:5})}>Add 5</button>
        </div>
        <div>
            <button onClick={()=>dispatch({type: BG_COLOR_RED, payload: 'red'})}>Set BG Color on red</button>
        </div>
        <div>
            <button onClick={()=>dispatch({type: BG_COLOR_YELLOW, payload: 'yellow'})}>Set BG Color on yellow</button>
        </div>
    </div>
  );
}

export default App;
