import React, {useState} from 'react';
import {Link} from 'react-router-dom';

const Login = ()=>{
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const onChangeUsername= (val)=>{
        const value = val.target.value
        setUsername(value)
    }

    const onChangePassword= (val)=>{
        const value = val.target.value
        setPassword(value)
    }

    return(
        <div style={{marginTop: "125px"}}>
            <div className="container">
                <div className="row justify-content-center">
                   <div className="col-md-6">
                       <div className="card p-4">
                            <h2>Login</h2>
                           <div className="card-body">
                                <div className="form-group">
                                    <label>Username</label>
                                    <input type='text' placeholder='Username' className="input form-control" value={username} onChange={onChangeUsername}></input>
                                </div>
                                
                                <div className="form-group">
                                    <label>Password</label>
                                    <input type='password' placeholder='Password' className="input form-control" value={password} onChange={onChangePassword}></input>
                                </div>
                                <button className='btn btn-primary'>Login</button>
                                <div>
                                    <Link to='/create'>Create Account </Link>
                                </div>
                           </div>
                       </div>
                   </div>
                </div>
            </div>
        </div>
    )
}

export default Login