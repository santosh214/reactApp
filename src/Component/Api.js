import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Table, Image } from 'react-bootstrap';

export default function Api() {
    let [posts, updatePosts] = useState([]);
    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/photos").then(response => {
            console.log(response.data)
            updatePosts(response.data);
        }
        ).catch(err =>
            console.log(err))
//Use Fetch Method to fetch data of API

            // fetch("https://jsonplaceholder.typicode.com/photos").then((result)=>{
        //     result.json().then((response)=>{
        //         // console.log(response);
        //         updatePosts(response);
        //     })
        // })

    }, [])
    return (
        <div className="text-center my-2 mx-5">
            <h1 className="text-success"> <u>..Api in function component</u> </h1>
            <Table striped bordered hover >
                <thead className="bg-secondary text-white">
                    <tr>
                        {/* <th scope="col">User_id</th> */}
                        <th scope="col">id</th>
                        <th scope="col">Title</th>
                        <th scope="col">Photos</th>
                        <th scope="col">URL</th>

                    </tr>
                </thead>
                <tbody>
                    {
                        posts.map((items) =>
                            <tr>
                                {/* <th scope="row">{items.userId}</th> */}
                                <td key={items.id}>{items.id}</td>
                                <td key={items.title}>{items.title}</td>
                                <td key={items.thumbnailUrl}><Image src={items.thumbnailUrl} width="50" height="50" ></Image> </td>
                                <td key={items.url}><a href={items.url} > {items.url}</a> </td>
                            </tr>

                        )
                    }
                </tbody>
            </Table>


        </div>
    )
}
