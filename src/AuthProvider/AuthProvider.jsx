import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';

export const AuthContext=createContext();
const auth=getAuth(app);
const googleProvider=new GoogleAuthProvider();

const AuthProvider = ({children}) => {

    const [user,setUser]=useState(null);
    const [lodding,setLodding]=useState(true);

    const createUser=(email, password)=>{
    return createUserWithEmailAndPassword(auth,email,password)
    }

    const login=(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password);
    }

    const googleSingin=()=>{
        setLodding(true);
        return signInWithPopup(auth,googleProvider);
    }

    const logOut=()=>{
        setLodding(true)
        return signOut(auth);
    }

    useEffect(()=>{
        const unSescribe=onAuthStateChanged(auth,currentUser =>{
            setUser(currentUser);
            console.log('current user in auth proviter',currentUser)
            setLodding(false)
            if(currentUser && currentUser.email){
                const loggedUser={
                    email:currentUser.email
                }

                fetch(`http://localhost:5000/jwt`,{
                    method:'POST',
                    headers:{
                      'content-type':'application/json'
                    },
                    body:JSON.stringify(loggedUser)
                  })
                  .then(res=>res.json())
                  .then(data=>{
                    console.log('jwt responce',data)
        
                    // set localstorage token not best wey
                    localStorage.setItem('car-access-token',data.token);
                   
                  })
            }
            else{
                localStorage.removeItem('car-access-token');
            }
        });
        return ()=>{
            return unSescribe;
        }
    },[])

    const authInfo={
     user,
     lodding,
     createUser,
     login,
     logOut,
     googleSingin
    }
    return (
        <AuthContext.Provider value={authInfo}
        >
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;