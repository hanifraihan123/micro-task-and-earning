import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../../firebase/firebase.init";


export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {

    const [user,setUser] = useState(null)
    const [loading,setLoading] = useState(true)
    const provider = new GoogleAuthProvider();

    const createUser = async(email,password) => {
        setLoading(true)
        return await createUserWithEmailAndPassword(auth,email,password) 
    }

    const userLogin = async(email,password) => {
        setLoading(true)
        return await signInWithEmailAndPassword(auth,email,password)
    }

    const updateUserProfile = async(updatedData) => {
        setLoading(true)
        return await updateProfile(auth.currentUser,updatedData)
    }

    const logInWithGoogle = async() => {
        setLoading(true)
        return await signInWithPopup(auth,provider)
    }

    const userLogout = async() => {
        setLoading(true)
        return await signOut(auth)
    }

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth,currentUser=>{
            setUser(currentUser)
            setLoading(false)
            return () => unSubscribe()
        })
    },[])

    const authInfo = {
        user,
        createUser,
        userLogin,
        updateUserProfile,
        logInWithGoogle,
        userLogout,
    }

    return <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
};

export default AuthProvider;