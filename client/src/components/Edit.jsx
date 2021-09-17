import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

const Edit = (props) => {
    const [singleAuthor,setSingleAuthor] = useState({})
    const [errors,setErrors] = useState({})
    const history = useHistory();
    const {id} = useParams();

    const changeHandler=(e)=>{
        setSingleAuthor({...singleAuthor,[e.target.name]:e.target.value})
    }

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/authors/${id}`)
        .then(res=>{
            console.log(res);
            setSingleAuthor(res.data.result[0])
        })
        .catch(err=>{
            console.log("error",err);
        })
    },[])

    const submitHandler=(e)=>{
        e.preventDefault()
        axios.put(`http://localhost:8000/api/authors/${id}`,singleAuthor)
        .then(res=>{
            if(res.data.error){
                // console.log(res);
                setErrors(res.data.error.errors)
            }else{
                history.push("/")
            }
        })
        .catch(err=>{
            console.log("error",err);
        })
    }

    return (
        <div className="App">
            <form action="">
                <div className="form-group">
                    <label className="me-1" htmlFor="">Name:</label>
                    <input onChange={(e)=>changeHandler(e)} className="me-3" name="name" type="text" value={singleAuthor.name}/>
                    <p className="text-danger">{errors.name?errors.name.message: ""}</p>
                    <input onClick={(e)=>submitHandler(e)} className="me-3 btn btn-success" type="submit" value="Update" />
                </div>
            </form>
        </div>
    );
}

export default Edit;