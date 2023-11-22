import { useContext, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";


const Singup = () => {

    const {createUser,updateuser,singWithpop} = useContext(AuthContext)
    const [errormessage,seterrormsg] = useState(null)
    const [errorpass,seterrorpass] = useState(null)
    const nevi = useNavigate()
    
    const handleSingup = e =>{
        e.preventDefault()
        const form = e.target 
        const name = form.name.value 
        const email = form.email.value 
        const photo = form.photo.value 
        const password = form.password.value 
        seterrormsg('')
    seterrorpass('')
    if(password.length <7){
      seterrorpass('Password Should Be At Least 7 Characters')
      return;
    }
    else if(!/[A-Z]/.test(password)){
      seterrorpass('Password Should Have At Least One Upper Case Characters')
      return;
    }
    else if(!/[#?!@$^*-]/.test(password)){
      seterrorpass('Password Should Have At Least One Special Characters')
      return;
    }

        console.log(name,email,photo,password)
       createUser(email,password)
       .then(result=>{
        updateuser(name,photo)
        console.log(result.user)
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'You Login Successfully',
          showConfirmButton: false,
          timer: 1500
        })
        nevi('/')
       })
       .catch(error=>{
        console.error(error)
        seterrormsg(error.message)

       })
    }
    const handlegoogle = () =>{
        singWithpop()
        .then(result=>{
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'You Login Successfully',
            showConfirmButton: false,
            timer: 1500
          })
          nevi('/')
        })
        .catch()
    }
    return (
        <div>
            <div className=" container mx-auto md:w-3/4 lg:w-2/4 p-8 md:p-1">
            
           <h2 className="text-center mt-6 text-2xl mb-4">New Here? Singup Now</h2> 
      <form onSubmit={handleSingup}>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" name="name" placeholder="Enter your Name Here" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">PhotoUrl</span>
          </label>
          <input type="text" name="photo" placeholder="Enter your Photo Url Here" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
          {
                    errormessage ? <>
                  
                
                  <p className="  text-red-600">{errormessage} </p>
        
                    </> 
                    :
                    <span className="label-text">Email</span>
                  }
          </label>
          <input type="email" name="email" placeholder="Enter your Email Here" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
          {
                    errorpass ? <span className=" text-red-600">{errorpass}</span> : <span className="label-text">Password</span>
                  }
          </label>
          <input type="password" name="password" placeholder="Enter your Password Here" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">SingUp</button>
        </div>
        
      </form>
      <h2 className=" mt-4 text-[18px]">new Here? <Link to='/login'> <span className="text-red-200">login Now</span></Link></h2>
      <div className=" flex flex-col justify-center items-center gap-4">
                <h2>or</h2>
               <button onClick={handlegoogle} className="btn bg-red-100 text-black hover:bg-white" ><FcGoogle></FcGoogle> Google</button>
              </div>
    </div>
  </div>

    );
};

export default Singup;