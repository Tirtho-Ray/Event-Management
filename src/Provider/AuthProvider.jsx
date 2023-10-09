import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateCurrentUser } from "firebase/auth";
import auth from "../firebase/FirebaseAuth";

// import PropTypes from 'prop-types';

export const AuthContext =createContext(null)
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null)
    const[load,setLoad]=useState(true)

    const createUser =(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const login =(email,password)=>{
        setLoad(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

    const logout=()=>{
        return signOut(auth)
    }
    const signWithGoogle =()=>{
        setLoad(true)
        return signInWithPopup(auth,googleProvider)
    }
    useEffect(()=>{
        onAuthStateChanged(auth,currentUser =>{
            console.log("current",currentUser);
            setUser(currentUser)
            setLoad(false);
           
        })
    },[])
    // useEffect(()=>{
    //  const unSubscribe= onAuthStateChanged(auth,currentUser=>{
    //         setUser(currentUser)
    //         console.log(setUser);
    //     })
    //     return()=>{
    //         unSubscribe()
    //     }
    // },[])
       
    const authinfo ={
        user,
        createUser,
        login,
        logout,
        load,
        signWithGoogle
     }


    return (
        <AuthContext.Provider value={authinfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;