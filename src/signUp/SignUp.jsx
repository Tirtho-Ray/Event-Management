
import { useContext, useState } from 'react';
import { Link, useNavigate, useNavigation  } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';

const SignUp = () => {
    const {createUser} =useContext(AuthContext);
    const [succeed,setSucceed] = useState('')
    

    const handelSubmit=(e)=>{
        const navigate = useNavigation('')
        e.preventDefault();
        const email = e.target.email.value
        const password =e.target.password.value;
        const name = e.target.name.value
        console.log({email,password,name});

        createUser(email, password)
        .than(result =>{
            
            result.user;
           
            e.target.reset()
           
            navigate('/')
            setSucceed('User created successfully')
            
        })
        .catch(err=>{
            console.log(err);
        })
    }
    return (
        <div>

{/* 
            <form onSubmit={handelSubmit}>
                <input  type="text" name="" id="" placeholder='name'/>
                <input  type="email" name="" id="" placeholder='email'/>
                <input  type="password" name="" id="" placeholder='password'/>
                <input type="submit" placeholder='clhck' />
            </form>
 */}
             <div className='mb-12'>
              <div>
            <div className="hero  bg-base-200">
        <div className="hero-content flex-col ">
            <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Sing Up</h1>
            </div>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
            <form onSubmit={handelSubmit} >
                <div className="form-control">
                <label className="label">
                    <span className="label-text">Name</span>
                </label>
                <input type="name" name="name" placeholder="Enter your name"required className="input input-bordered" />
                <label className="label">
                    <span className="label-text">Email</span>
                </label>
                <input type="email" name="email" placeholder="email"required className="input input-bordered" />
                </div>
                <div className="form-control">
                <label className="label">
                    <span className="label-text">Password</span>
                </label>
                <input type="password" name="password" placeholder="password" required className="input input-bordered" />
               
                </div>
                {
                    succeed && <p className='text-blue-600'>{succeed}</p>
                }
                <div className="form-control mt-6">
                <button className="btn btn-primary">Sign Up</button>
                <p>Already have an account <Link to="/login">
                <button className="btn btn-link">Login</button>
                </Link></p>
            </div>
           </form>
           {
                succeed && <p className='text-blue-600 text-4xl'>{succeed}</p>
            }
        </div>
        </div>
    </div>
    </div>
            </div>
        </div>
            
        </div>
    );
};

export default SignUp;