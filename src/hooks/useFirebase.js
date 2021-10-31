import { useEffect, useState} from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut,  createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile, sendEmailVerification} from "firebase/auth";
import initializeAuthentication from '../Firebase/firebase.init';
import {useHistory} from 'react-router-dom';

initializeAuthentication();

const useFirebase =()=>{
    const [user,setUser] = useState({});
    const auth = getAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const [isLogin, setIsLogin] = useState(false);
    const [error, setError] = useState('');
    const googleProvider = new GoogleAuthProvider();
    const history = useHistory();




    const signInUsingGoogle = () =>{
       return signInWithPopup(auth, googleProvider);
    }

    const logOut = ()=>{
        signOut(auth)
        .then(()=>{
            setUser({});
        })
        .finally(()=>{setIsLoading(false)})
    }


    const handleEmailChange = e =>{
        setEmail(e.target.value);
     }

     const handlePasswordChange = e =>{
        setPassword(e.target.value);
     }

     const handleNameChange = e =>{
        setName(e.target.value);
     }

     const handleRegistration = e =>{
         e.preventDefault();
         console.log(email,password,name);
         if(password.length<6){
            setError("Password must be at least 6 characters long!");
            return;
         }
         if(!/(?=.*[A-Z].*[A-Z])/.test(password)){
            setError("Password must contain at least 2 uppercase!");
            return;
        }

         if(isLogin){
             processLogin(email,password);
         }
         else{
             registerNewUser(email,password);
         }
    }

    const registerNewUser =(email,password)=>{
        createUserWithEmailAndPassword(auth,email,password)
         .then((result) =>{
            const user = result.user;
            console.log(user);
            setError('');
            verifyEmail();
            setUserName();
            history.push("/");
         })
         .catch((error) =>{
            setError(error.message);
         })
    }


    const processLogin=(email,password)=>{
        signInWithEmailAndPassword(auth, email, password)
         .then((result) => {
            history.push('/');
            const user = result.user;
             console.log(user);
             setError("");
         })
         .catch((error) => {
            setError(error.message);
         });
    }


    const verifyEmail=()=>{
        sendEmailVerification(auth.currentUser)
        .then(res=>{})
    }


    const setUserName=()=>{
        updateProfile(auth.currentUser,{displayName:name})
        .then(result=>{})
    }


    useEffect(() =>{
        const unsubscribed = onAuthStateChanged(auth,(user)=>{
            if(user){
                setUser(user);
            }
            else{
                setUser({});
            }
            setIsLoading(false);
        });
        return()=> unsubscribed;
    }, [auth])

    return {
        user,
        setUser,
        signInUsingGoogle,
        logOut,
        setEmail,
        setPassword,
        setError,
        isLogin,
        setIsLogin,
        name,
        setName,
        isLoading,
        setIsLoading,
        handleEmailChange,
        handlePasswordChange,
        handleNameChange,
        handleRegistration,
        error
    }
}

export default useFirebase;