import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import Users from "./comp/users/Users";
import Users2 from "./comp/users2/Users2";

function App() {
  return (
    <div>
        <h1>This is lesson_04 branch</h1>
        <button className={'btn btn-success'}>sasd</button>
        <Router>
            <nav>
                <p><Link to={'/users'}>Show all users</Link></p>
                <p><Link to={'/users2'}>Show all users v2</Link></p>

            </nav>
            <Switch>
                <Route path={'/users'} component={Users}/>
                <Route path={'/users2'} component={Users2}/>
            </Switch>
        </Router>

    </div>
  );
}

export default App;
