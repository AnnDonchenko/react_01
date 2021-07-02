// створити посилання /users,
//     При переході на посилання відображати інформацію з jsonplaceholder про users
// Для всього використовувати окремий компонент (Users->User).
//     в юзері створити лінк котрий поаинен виглядати як /users/USER_ID/allposts.
//     При натисканні на цей лінк, в батьківській компоненті відображаються всі пости цього юзера

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import Users from "./comp/users/Users";
import Users2 from "./comp/users2/Users2";

function App() {
  return (
    <div className={'wrap'}>
        <h1>This is lesson_04 branch</h1>
        <Router>
            <ul className="nav nav-tabs">
                <li className="nav-item">
                    <Link className={'nav-link'} to={'/users'}>Show all users with posts below</Link>
                </li>
                <li className="nav-item">
                    <Link className={'nav-link'} to={'/users2'}>Show all users with posts below user</Link>
                </li>
            </ul>
            <Switch>
                <Route path={'/users'} component={Users}/>
                <Route path={'/users2'} component={Users2}/>
            </Switch>
        </Router>

    </div>
  );
}

export default App;
