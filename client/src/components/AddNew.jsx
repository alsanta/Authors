import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

const AddNew = (props) => {
    const [formInfo,setFormInfo] = useState({
        name:null
    });
    const [errors,setErrors] = useState({})
    const history = useHistory();
//     const {ParamNameFromRoute, otherParam, anotherParam} = useParams();

    const changeHandler=(e)=>{
        setFormInfo({...formInfo,[e.target.name]:e.target.value})
    }

    const submitHandler=(e)=>{
        e.preventDefault()
        axios.post("http://localhost:8000/api/authors",formInfo)
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
                    <input onChange={(e)=>changeHandler(e)} className="me-3" name="name" type="text" />
                    <p className="text-danger">{errors.name?errors.name.message: ""}</p>
                    <input onClick={(e)=>submitHandler(e)} className="me-3 btn btn-success" type="submit" value="Add" />
                </div>
            </form>
        </div>
    );
}

export default AddNew;