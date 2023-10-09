
import { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';

const NAvbar = () => {
  const { user,logout}=useContext(AuthContext)
  const handelLogout =()=>{
    logout()
    .than(()=>{
      console.log("user logged out");
    })
    .catch(err=>{
      console.log(err);
    })
  }
   const links =<>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/place">Places</NavLink></li>
        <li><NavLink to="/about">Blog</NavLink></li>
        { user&&<>
          <li><NavLink to="/travel">Travel</NavLink></li>
        </>}
        </>

    return (
        <div>
            <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        {links}
      </ul>
    </div>
    <a className="btn btn-ghost normal-case text-xl">Travels</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
     {links}
    </ul>
  </div>
  <div className="navbar-end">
    
   <button className='px-3 mr-4 py-2 bg-red-500 rounded-md'>
    <NavLink
    to="/signIn">Register</NavLink>
   </button>
   {/* <button className='px-3 py-2 bg-red-500 rounded-md mr-4'>
    <NavLink to="/login">Login</NavLink>
   </button> */}
   {
    user?<>
    <span>{user.name}</span>
    <button className='px-3 py-2 bg-red-500 rounded-md mr-5' onClick={handelLogout}>Log Out</button>
    </>
    :<Link to="/login">
      <button className='px-3 py-2 bg-red-500 rounded-md mr-5'>Log in</button>
    </Link>
   }
  
  
  </div>
</div>
        </div>
    );
};

export default NAvbar;