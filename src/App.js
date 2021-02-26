import logo from './logo.svg';
import './App.css';
import NavBar from "./components/NavBar";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Articles from "./components/Articles/Articles";
import AddArticle from "./components/AddArticle/AddArticle";
import Home from "./components/Home/Home";
import ArticleDetails from "./components/ArticleDetails/ArticleDetails";

function App() {
    return (
        <Router>
            <div className="App">
                <NavBar/>
                <Switch>
                   <Route path="/" exact component={Home}/>
                    <Route path="/AddArticles" component={AddArticle}/>
                    <Route path="/Articles" exact component={Articles}/>
                    <Route path="/Articles/:id" component={ArticleDetails}/>
                </Switch>
            </div>
        </Router>

    );
}

export default App;
