// створити посилання /users, /posts, /comments.
//     При переході на посилання відображати інформацію з jsonplaceholder
//     про users/posts/comments відповідно до посилання за логікою.
//     Для всього використовувати окремий компонент (Users->User, Posts->Post).

//     В компоненті user та post зробити кнопки. При натисканні на які відображаються пости юзера
//     (а в постах коментарі поста. Але не в постах юзера, а за урлою /posts)

import './App.css';
import {BrowserRouter as Router, Link, Switch, Route} from "react-router-dom";
import Users from "./components/users/Users";

function App() {
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


    </div>
  );
}

export default App;
