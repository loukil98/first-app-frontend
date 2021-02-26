import React, {Component} from 'react';
import './NavBar.css'
import {Link} from "react-router-dom";

class NavBar extends Component {
    render() {
        return (
            <div>
                <ul className="navBar">
                    <Link to="/">
                        <li>Home</li>
                    </Link>
                    <Link to="/Articles">
                        <li>Articles</li>
                    </Link>
                    <Link to="/AddArticles">
                        <li>Add articles</li>
                    </Link>
                </ul>
            </div>
        );
    }
}

export default NavBar;