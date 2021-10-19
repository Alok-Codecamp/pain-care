import { getAuth, signInWithEmailAndPassword,createUserWithEmailAndPassword,signOut,onAuthStateChanged,
    signInWithPopup, GoogleAuthProvider} from "firebase/auth";
import { useEffect, useState } from "react";
import initializeFirebase from "../firebase/firebase.init";

initializeFirebase();
const useFirebase=()=>{
    const [email, setEmail]=useState();
    const [password, setPassword]=useState("");
    const [user,setUser]=useState({});
    const [error, setError]=useState("")
    const [isLoading, setIsLoading]=useState(false);
    const auth=getAuth();

    const registration=(email,password)=>{
        createUserWithEmailAndPassword(auth,email,password)
        .then(result=>{
            console.log(result.user);
        })
    }
    const googleSignIn=()=>{
        setIsLoading(true);
        const googleProvider=new GoogleAuthProvider();
        signInWithPopup(auth,googleProvider)
        .then(result=>{
            setUser(result.user)
        })
        .finally(()=>setIsLoading(false))
    }

    useEffect(()=>{
        const unsubscribe=onAuthStateChanged(auth,(user)=>{
            if(user){
                setUser(user)
            }
            else{
                setUser({})
            }
            setIsLoading(false)
        })
    },[])

    const processLogin=(email, password)=>{
        setIsLoading(true)
        signInWithEmailAndPassword(auth, email,password)
        .then(result=>{
          setUser(result.user);
          console.log(user);
        })
        .finally(()=>setIsLoading(false))
 }
 const LogOut=()=>{
     signOut(auth)
     .then(()=>{
         setUser({});
     })
 }

    return {

        user,
        googleSignIn,
        LogOut,
        processLogin,
        setIsLoading,
        registration,
        setEmail,
        setPassword,
        email,
        password,
        isLoading,
        
    }

}

export default useFirebase;