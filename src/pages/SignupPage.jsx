import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignUpPage =()=>{
    const [form, setForm] = useState({ userName:'', email: '', password: ' '});
    const navigate = useNavigate();
    const [error, setError] = useState('')
 
    const handleChange =(e)=> setForm({...form,[e.target.name]: e.target.value});

    const handleSubmit = async(e)=>{
        e.preventDefault();
        setError('');
        
        try{
             
            const res = await fetch('http://localhost:5000/api/auth/register',{
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(form),
            });

            const data = await res.json();

            if(!res.ok) throw new Error(data.message || 'signUp failed')
            
            alert('Signup successful! Please login.');
      navigate('/login');
        }catch(err){
            setError(err.message)
        }

    }

    return(
        <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow rounded">
            <h2 className="text-xl font-semibold mb-4">SignUp</h2>
            { error && <p>{error}</p>}
           <form onSubmit={handleSubmit} className="space-y-4">
            <input
            type="text"
            name="userName"
            placeholder="UserName"
            className="w-full border px-3 py-2"
            onChange={handleChange}
            required
            />
            <input
          type="email"
          name="email"
          placeholder="Email"
          className="w-full border px-3 py-2"
          onChange={handleChange}
          required
        />
         <input
          type="password"
          name="password"
          placeholder="Password"
          className="w-full border px-3 py-2"
          onChange={handleChange}
          required
        />

        <button type="submit" className="bg-indigo-600 text-white px-4 py-2 rounded">
          Sign Up
        </button>
           </form>
        </div>
    )

}

export default SignUpPage;


