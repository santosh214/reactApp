import React, { Component } from 'react'
import axios from 'axios';
import { Table } from 'react-bootstrap';
export class ApiWithAxios extends Component {
    state = {
        posts: []
    }

    componentDidMount() {
        axios.get("https://jsonplaceholder.typicode.com/posts").then(response => {
            console.log(response.data);
            this.setState({ posts: response.data })
        })
    }

    render() {
        const { posts } = this.state
        return (
            <div className="text-center my-2 mx-5">
            <h1 className="text-success"> <u>Api In class Component</u> </h1>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Title</th>
                            <th>Body</th>
                        </tr>
                    </thead>
                    <tbody>
                        { posts.map((post)=>
                        <tr>
                            
                            <td>{post.id}</td>
                            <td>{post.title}</td>
                            <td>{post.body}</td>
                        </tr>
                        )}
                    </tbody>
                </Table>

            </div>
        )
    }
}

export default ApiWithAxios
