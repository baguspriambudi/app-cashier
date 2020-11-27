import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

const Create = () =>{
    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');
    const [alert,setAlert] = useState('');
    const [error,setError] = useState('');

    const ChangeUsername= (val)=>{
        const value = val.target.value
        setUsername(value)
        setError('')
    }

    const ChangePassword= (val)=>{
        const value = val.target.value
        setPassword(value)
        setError('')
    }

    const ClickCreate = () =>{
       const data = {
           username : username,
           password : password
       }
      axios.post('https://bootcamp-imogiri.herokuapp.com/api/v1/auth/user/create', data)
      .then(result =>{
          if(result){
              if(result.data){
                  setUsername('');
                  setPassword('');
                  setAlert(result.data.message);
                  setTimeout(()=>{
                      setAlert('')
                  }, 3000)
              }
          }
      })
      .catch(e =>{
        setError(e.response.data.error[0].message);
        setTimeout(()=>{
           setError('')
        }, 3000)
      })
    }

   return(
    <div style={{marginTop: "125px"}}>
    <div className="container">
        <div className="row justify-content-center">
           <div className="col-md-6">
               <div className="card p-4">
                    <h2>Create Account</h2>
                   <div className="card-body">
                       {
                           alert && (
                            <div className='alert alert-success'>
                                <p>{alert}</p>
                            </div>
                           )
                       }
                        {
                           error && (
                            <div className='alert alert-danger'>
                                <p>{error}</p>
                            </div>
                           )
                       }
                        <div className="form-group">
                            <label>Username</label>
                            <input type='text' placeholder='Username' className="input form-control" value={username} onChange={ChangeUsername}></input>
                        </div>
                        
                        <div className="form-group">
                            <label>Password</label>
                            <input type='password' placeholder='Password' className="input form-control" value={password} onChange={ChangePassword}></input>
                        </div>
                        <button className='btn btn-success' onClick={ClickCreate}>Create</button> { }
                        <Link to='/' className='btn btn-danger'>Cancel</Link>
                   </div>
               </div>
           </div>
        </div>
    </div>
</div>
   )
}

export default Create;