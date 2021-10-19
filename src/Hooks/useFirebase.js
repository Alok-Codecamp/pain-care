import { getAuth, signInWithEmailAndPassword,createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import initializeFirebase from "../firebase/firebase.init";

initializeFirebase();
const useFirebase=()=>{
    
    const [user,setUser]=useState({});
    const [error, setError]=useState("")
    const [isLogin, setIsLogin]=useState(false);
    const auth=getAuth();

    const registration=(email,password)=>{
        createUserWithEmailAndPassword(auth,email,password)
        .then(result=>{
            console.log(result.user);
        })
    }

    const processLogin=(email, password)=>{
        signInWithEmailAndPassword(auth, email,password)
        .then(result=>{
          setUser(result.user);
          console.log(user);
        })
        .catch(error=>{
          setError(error.message);
        })
 }

    return {
        user,
        processLogin,
        registration,
        isLogin,
        
    }

}

export default useFirebase;