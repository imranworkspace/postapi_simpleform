import React, { useState } from 'react'
import axios from 'axios'
const Post = () => {
    const data = {first_name:'',last_name:''}
    const [inputData,setinputData] = useState(data)

    const handleChange=(e)=>{
        setinputData({...inputData,[e.target.name]:e.target.value})
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        axios.post('https://reqres.in/api/users',{
            inputData
        })
        .then(res=>console.log(res))
        .catch(err=>console.log(err))
    }

  return (
    <>
        <label>firstname</label>
        <input type='text' name='first_name' value={inputData.first_name} onChange={handleChange} /> <br></br>
        <label>lastname</label>
        <input type='text' name='last_name' value={inputData.last_name} onChange={handleChange} /> <br></br>
        <input type='submit' value={'submit'} onClick={handleSubmit}/>
    </>
  )
}

export default Post
