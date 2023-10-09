import  { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';


const Login = () => {
    const {login,signWithGoogle} = useContext(AuthContext)
    const [succeed,setSucceed] = useState('')
    const navigate=useNavigate();
    const handelSubmit=(e)=>{
        e.preventDefault();
        const email = e.target.email.value
        const password =e.target.password.value;
        console.log({email,password,name});
        login(email,password)
        .than(result=>{
            console.log(result.user);
            setSucceed("login succeeded")
            e.target.reset()
            navigate('/')
            setSucceed("login succeeded")
        })
        .catch(err=>{
            console.log(err);
        })
    }

    const handelGoogleSignin=()=>{
        signWithGoogle()
        .than(res=>{
            console.log(res.user);
        })
        .catch(err=>{
            console.log(err);
        })
    }

    return (
        <div>
                    <div>
            <div className="hero  bg-base-200">
    <div className="hero-content flex-col ">
        <div className="text-center lg:text-left">
        <h1 className="text-5xl font-bold">Login now!</h1>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <div className="card-body">
           <form onSubmit={handelSubmit}>
            <div className="form-control">
                <label className="label">
                    <span className="label-text">Email</span>
                </label>
                <input type="email" name="email" placeholder="email" required className="input input-bordered" />
                </div>
                <div className="form-control">
                <label className="label">
                    <span className="label-text">Password</span>
                </label>
                <input type="password" name="password" placeholder="password" required className="input input-bordered" />
                <label className="label">
                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
                </div>
                {
                     succeed && <p className='text-blue-600 text-4xl'>{succeed}</p>
                }
                
                <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
                <p><button onClick={handelGoogleSignin} className='mt-4 btn btn-'>Google</button></p>
                <p>Already have an account <Link to="/signIn">
                <button className="btn btn-link">Register</button>
                </Link></p>
                
            </div>
            
           </form>
        </div>
        </div>
    </div>
    </div>
            </div>
        </div>
    );
};

export default Login;