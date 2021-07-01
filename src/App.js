// створити посилання /users, /posts, /comments.
//     При переході на посилання відображати інформацію з jsonplaceholder про users/posts/comments відповідно
//     до посилання за логікою.
//     Для всього використовувати окремий компонент (Users->User, Posts->Post).
//
//     В компоненті user та post comment зробити Link. При натисканні на які відображається детальна
//     інформація про user/post/comment

import './App.css';
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import Users from "./components/users/Users";
import Posts from "./components/posts/Posts";

function App() {
  return (
    <div className={'wrap'}>
        <h1>This is homework_04 branch</h1>
        <Router>
            <div className={'navigation'}>
                <Link to={'/users'}>Users</Link>
                <Link to={'/posts'}>Posts</Link>
            </div>
            <Switch>
                <Route path={'/users'} component={Users}/>
                <Route path={'/posts'} component={Posts}/>
            </Switch>
        </Router>
    </div>
  );
}

export default App;
