import React, {Component} from 'react';
import axios from "axios";

class AddArticle extends Component {

    constructor(props) {
        super(props);
        this.state = {
            sent: false,
            article: {
                name: "",
                description: "",
                price: "",
                picture: "https://www.courir.com/dw/image/v2/BCCL_PRD/on/demandware.static/-/Sites-master-catalog-courir/default/dwd72280a5/images/hi-res/001456562_101.png"
            }
        }
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Article Name :</label><input type="text" name="name" value={this.state.name}
                                                        onChange={this.handleChange}/>
                    <label>Article Description :</label><input type="text" name="description"
                                                               value={this.state.description}
                                                               onChange={this.handleChange}/>
                    <label>Article price :</label><input type="text" name="price" value={this.state.price}
                                                         onChange={this.handleChange}/>
                    <button type="submit">Add Article</button>
                </form>
                {this.state.sent &&
                <div>
                    <p>data sent succeffully</p>
                </div>}
            </div>
        );
    }

    handleSubmit = (e) => {
        e.preventDefault()
        axios.post("http://localhost:3000/articles", this.state.article)
            .then(response => {
                console.log(response)
                this.setState({sent: !this.state.sent})
                this.setTimeout(() => this.props.history.push("/"), 5000)
            })
            .catch(e => {
                console.log(e)
            })
    }

    handleChange = e => {
        this.setState({
            article: {...this.state.article, [e.target.name]: e.target.value}
        })
    }
}

export default AddArticle;