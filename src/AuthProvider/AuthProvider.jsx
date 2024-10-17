

import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import useAxiosPublic from "../hooks/useAxiosPublic";
import { auth } from "../firebase/firebase.config";

export const AuthContext = createContext(null)


// eslint-disable-next-line react/prop-types
const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
    const axiosPublic = useAxiosPublic()

    const registerUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
        .then(result => console.log(result.user))
    }



    const loginUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
        //    .then(result => console.log(result.user))
    }
    const googleLogin = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }
    const updateUserProfile = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        })
    }

    const githubLogin = () => {
        setLoading(true)
        return signInWithPopup(auth, githubProvider)
    }


    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            console.log('current value of the current user, ', currentUser);
            setUser(currentUser)
            if(currentUser){
                // get token and store client
                const userInfo = {email: currentUser.email}
                axiosPublic.post('/jwt', userInfo)
                .then(res => {
                    if(res.data){
                        localStorage.setItem('access-token', res.data.token)
                    }
                })
            }
            else{
                //do somethings
                localStorage.removeItem('access-token')
            }
            setLoading(false)
        });
        return () => {
            unSubscribe()
        }
    }, [])

    const authInfo = {
        registerUser,
        loginUser,
        googleLogin,
        githubLogin,
        user,
        logOut,
        loading,
        updateUserProfile

    }

    return (
        <div>
            <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;