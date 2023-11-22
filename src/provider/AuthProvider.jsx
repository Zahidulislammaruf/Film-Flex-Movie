import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import auth from "../Firebase/firebase.config";

export const AuthContext = createContext(null)
const googleProvider = new GoogleAuthProvider()

const AuthProvider = ({children}) => {
 
    const [user,setUser] = useState(null)
    const [loading,setLoading] = useState(true)
    const createUser = (email,password) =>{
       setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)

    }

    const updateuser = (name,purl) =>{
        return updateProfile(auth.currentUser,{displayName : name, photoURL: purl})
    }
    const loginHandle = (email,password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

    const singWithpop = () =>{
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }
    const logOut = () =>{
        setLoading(true)
       return signOut(auth);
     }
    useEffect(()=>{
        const unsubscribe =   onAuthStateChanged(auth,currentUser=>{
               setUser(currentUser);
               setLoading(false)
           });
           return ()=>{
               unsubscribe()
           }
        },[])



    const authinfo = {
       user,
       createUser,
       updateuser,
       loginHandle,
       singWithpop,
       logOut,
       loading
    }
      
    return (
        <AuthContext.Provider value={authinfo}>
           {children} 
        </AuthContext.Provider>
    );
};

export default AuthProvider;