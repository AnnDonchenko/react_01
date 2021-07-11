// ДЗ-
// 1 дописати каунтер (декремент, ресет, інкремент кастом)
// 2 берем джейсон плейсхолдер + реакт роутер і тягнем дані на кожну сторінку)
import './App.css';
import {BrowserRouter as Router} from "react-router-dom";
import Routes from "./routes/Routes";
import Navs from "./component/navs/Navs";

function App() {
    return (
        <div>
            <h1>This is homework_05 branch</h1>
            <div className={'wrap'}>
                <Router>
                    <Navs/>
                    <Routes/>
                </Router>
            </div>
        </div>
    );
}

export default App;
