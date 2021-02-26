import React, {Component} from 'react';
import './Articles.css'
import axios from "axios";
import {Link} from "react-router-dom";

class Articles extends Component {
    constructor(props) {
        super(props);
        this.state = {
            articles: []
        }

    }

    render() {
        const articles = this.state.articles.map((art, index) => {
            return (
                <div key={index}>
                    <Link to={`/Articles/${art._id}`} >
                        <div className="container">
                            <img src={art.picture} className="imgHolder"/>
                            <div className="namePrice">
                                <h3>{art.name}</h3>
                                <h5>{art.price}</h5>
                            </div>
                        </div>
                    </Link>
                    <div className="buttons">
                        <button onClick={()=>this.handleDelete(art._id)}>Delete</button>
                    </div>
                </div>
            )
        })
        return (
            <div className='mainContainer'>
                {articles}
            </div>
        );
    }

    componentDidMount() {
        axios.get("http://localhost:3000/articles")
            .then(res => {
                console.log(res)
                this.setState({articles: res.data})
            })
            .catch(e => {
                console.log(e)
            })
    }
     handleDelete = (id) => {
        axios.delete(`http://localhost:3000/articles/${id}`)
            .then(data => {
                console.log(data)
                const articles = this.state.articles.filter(art => {
                   return  art._id !== id
                })
                this.setState({articles:articles})
            })
            .catch(e => {
                console.log(e)
            })
    }


}

export default Articles;