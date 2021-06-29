// створити посилання /users, /posts, /comments.
//     При переході на посилання відображати інформацію з jsonplaceholder
//     про users/posts/comments відповідно до посилання за логікою.
//     Для всього використовувати окремий компонент (Users->User, Posts->Post)
import './App.css';
import Users from './comp/users/Users';
import Posts from './comp/posts/Posts';
import Comments from './comp/comments/Comments';

import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';


function App() {
  return (
    <div>
    <h1>This is homework_03 branch</h1>
      <Router>
         <div>
             <ul>
                 <li><Link to={'/'}>Home</Link></li>
                 <li><Link to={'/users'}>Users</Link></li>
                 <li><Link to={'/posts'}>Posts</Link></li>
                 <li><Link to={'/comments'}>Comments</Link></li>
             </ul>

             <Switch>
                 <Route path={'/users'} component={Users}/>
                 <Route path={'/posts'} component={Posts}/>
                 <Route path={'/comments'} component={Comments}/>
             </Switch>

         </div>
      </Router>
    </div>
  );
}

export default App;
