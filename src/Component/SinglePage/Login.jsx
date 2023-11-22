import { useContext, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";


const Login = () => {
    const {loginHandle,singWithpop} = useContext(AuthContext)
    const [checkError,setError] =  useState(null)
    const nevi = useNavigate()

    const handleLogin = e =>{
        e.preventDefault()
        const form = e.target  
        const email = form.email.value    
        const password = form.password.value
        console.log(email,password)
        loginHandle(email,password)
        .then(result=>{
            console.log(result.user)
            
            
            nevi('/')
        })
        .catch(error=>{
            console.error(error)
            setError(error.message)
        })
    }
    const handlegoogle = () =>{
        singWithpop()
        .then(result=>{
          
          
          nevi('/')
        })
        .catch()
    }
    return (
        <div className="container mx-auto md:w-3/4 lg:w-2/4 p-8 md:p-1">
        <h2 className="text-2xl text-center mt-6 mb-4 text-red-500 ">Already Have A Account?<br /> Login Now</h2>    
      <form onSubmit={handleLogin}>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name="password" placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
        <div>
                {
                  checkError && <p className=" text-[20px] text-red-600 text-center">{checkError}</p>
                }
              </div>
              
      </form>
      <h2 className=" mt-4 text-[18px]">Have A Account? <Link to='/singup'> <span className="text-red-200">Singup Now</span></Link></h2>

      <div className=" flex flex-col justify-center items-center gap-4">
                <h2>or</h2>
               <button onClick={handlegoogle} className="btn bg-red-100 text-black hover:bg-white" ><FcGoogle></FcGoogle> Google</button>
              </div>
    </div>
  
    );
};

export default Login;