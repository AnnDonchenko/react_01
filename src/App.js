// створити посилання /users, /posts, /comments.
//     При переході на посилання відображати інформацію з jsonplaceholder
//     про users/posts/comments відповідно до посилання за логікою.
//     Для всього використовувати окремий компонент (Users->User, Posts->Post).

//     В компоненті user та post зробити кнопки. При натисканні на які відображаються пости юзера
//     (а в постах коментарі поста. Але не в постах юзера, а за урлою /posts)

import './App.css';
import {BrowserRouter as Router, Link, Switch, Route} from "react-router-dom";
import Users from "./components/users/Users";
import {useReducer} from "react";

const INC_COUNTER1 = 'INC_COUNTER1';

const reducer = (state, action) => {
    console.log(action);
    switch (action.type) {
        case INC_COUNTER1:
            return {...state, counter1: state.counter1 + action.payload}
        default:
            return state
    }
}

function App() {
    const initialState = {
        counter1: 0,
        counter2: 0,
    }

    const [{counter1, counter2}, dispatch] = useReducer(reducer, initialState);
    return (
    <div>
        <h1>This is lesson_03 branch</h1>
        <Router>
            <nav>
                <Link to={'/users'}>Users</Link>
                <Link to={'/posts'}>Posts</Link>
                <Link to={'/comments'}>Comments</Link>
            </nav>
            <Switch>
                <Route path={'/users'} componet={Users}/>
            </Switch>
        </Router>
        <hr/>
        <h2>Counter 1: {counter1}</h2>
        <button onClick={() => dispatch({type: INC_COUNTER1, payload: 5})}>Inc 1</button>
        <hr/>
        <h2>Counter 2: {counter2}</h2>
        <button>Inc 2</button>

    </div>
  );
}

export default App;
