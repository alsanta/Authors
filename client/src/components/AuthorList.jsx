import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const AuthorList = (props) => {
    const [allAuthors, setAllAuthors] = useState([]);
    const [deleteClicked, setDeleteClicked] = useState(false)
    //     const history = useHistory();
    //     const {ParamNameFromRoute, otherParam, anotherParam} = useParams();

    useEffect(() => {
        axios.get("http://localhost:8000/api/authors")
            .then(res => {
                setAllAuthors(res.data.results)
            })
            .catch(err => {
                console.log("error", err);
            })
    }, [deleteClicked])

    const deleteHandler=(e,id)=>{
        axios.delete(`http://localhost:8000/api/authors/${id}`)
        .then(res=>{
            setDeleteClicked(!deleteClicked)
        })
        .catch(err=>{
            console.log("error",err);
        })
}

    return (
        <div>
            <table className="table table-dark table-striped container">
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                        { 
                        allAuthors.map((item,idx)=>{
                            return <tr key={idx}>
                            <td>{item.name}</td>
                            <td><Link className="btn btn-primary" to={`/edit/${item._id}`}>Edit</Link> <button className="btn btn-danger" onClick={(e)=>deleteHandler(e,item._id)} >Delete</button></td>
                            </tr>
                        })
                        }
                </tbody>
            </table>
        </div>
    );
}

export default AuthorList;