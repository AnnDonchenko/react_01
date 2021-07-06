// ДЗ-
// 1 дописати каунтер (декремент, ресет, інкремент кастом)
//
// 2 берем джейсон плейсхолдер + реакт роутер і тягнем дані на кожну сторінку)
import './App.css';
import {useDispatch, useSelector} from "react-redux";
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import Users from "./component/users/Users";
import Posts from "./component/posts/Posts";

function App() {
    const counter = useSelector(({counterValue}) => counterValue);
    const dispatch = useDispatch();

    function onSubmit(e){
        // let inputValue = document.getElementById('input_inc_custom').value;
        // dispatch({type: 'INC_CUSTOM', payload: +inputValue});
        let inputValue = e.target.input_inc_custom.value;
        dispatch({type: 'INC_CUSTOM', payload: +inputValue});
        e.preventDefault();
    }
    return (
        <div>
            <h1>This is homework_05 branch</h1>
            <div>
                <p>{counter}</p>
                <button onClick={() => dispatch({type: 'INC'})}>+1</button>
                <button onClick={() => dispatch({type: 'DEC'})}>-1</button>
                <button onClick={() => dispatch({type: 'DEC5'})}>+5</button>
                <button onClick={() => dispatch({type: 'RESET'})}>reset</button>
                <form onSubmit={onSubmit}>
                    <input name={'input_inc_custom'} type="text" placeholder={'enter number'}/>
                    <button>+custom</button>
                </form>

                <Router>
                    <div>
                        <Link to={'/users'}>users </Link>
                        <Link to={'/posts'}>posts </Link>
                    </div>
                    <Switch>
                        <Route path={'/users'} component={Users}/>
                        <Route path={'/posts'} component={Posts}/>
                    </Switch>
                </Router>
            </div>
        </div>
    );
}

export default App;
