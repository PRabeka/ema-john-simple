import { useEffect, useState } from "react";
import {getAuth,  signInWithPopup,   GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import initializeAuthentication from '../Firebase/firebase.init';

initializeAuthentication();



const useFirebase = () => {
    const [user, setUser] = useState({});

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const signInUsinGoogle = ()=>{
      return  signInWithPopup(auth, googleProvider)
       
    }

    const logOut = () => {
        signOut(auth)
            .then(()=>{
                setUser({})
        })
    }
    //observe whether user auth state
    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
              setUser(user)
              
            }
        });
    },[])

   return {
    user,
    signInUsinGoogle,
    logOut
}
}
export default useFirebase;