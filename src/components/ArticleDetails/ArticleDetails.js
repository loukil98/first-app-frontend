import React, {Component} from 'react';
import axios from "axios";
import './ArticleDetails.css'
class ArticleDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            article:{}
        }
    }

    render() {
        return (
            <div>
                <img className="imageDetail" src={this.state.article.picture}/>
                <div>{this.state.article.name}</div>
                <div>{this.state.article.description}</div>
                <div>{this.state.article.price}</div>
            </div>
        );
    }
    componentDidMount() {
        axios.get(`http://localhost:3000/articles/${this.props.match.params.id}`)
            .then(res => {
                console.log(res.data[0])
                this.setState({
                    article:res.data[0]
                })
            })
            .catch(e => {
                console.log(e)
            })
    }
}

export default ArticleDetails;