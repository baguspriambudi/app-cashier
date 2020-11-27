import React, {useState} from 'react';

const Create = () =>{
    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');

    const ChangeUsername= (val)=>{
        const value = val.target.value
        setUsername(value)
    }

    const ChangePassword= (val)=>{
        const value = val.target.value
        setPassword(value)
    }

   return(
    <div style={{marginTop: "125px"}}>
    <div className="container">
        <div className="row justify-content-center">
           <div className="col-md-6">
               <div className="card p-4">
                   <div className="card-body">
                        <div className="form-group">
                            <label>Username</label>
                            <input type='text' placeholder='Username' className="input form-control" value={username} onChange={ChangeUsername}></input>
                        </div>
                        
                        <div className="form-group">
                            <label>Password</label>
                            <input type='password' placeholder='Password' className="input form-control" value={password} onChange={ChangePassword}></input>
                        </div>
                        <button className='btn btn-success'>Create</button>
                   </div>
               </div>
           </div>
        </div>
    </div>
</div>
   )
}

export default Create;