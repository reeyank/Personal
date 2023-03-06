import {React, useState, useRef} from "react";
import { NavLink, useNavigate } from 'react-router-dom';
import "../index.css";
import Hero from "./Hero";


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// Firebase Authentication
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signInWithPopup, sendEmailVerification, updatePhoneNumber, PhoneAuthCredential, GoogleAuthProvider, GithubAuthProvider, signInWithEmailAndPassword} from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCNgY96eJBuqIvA5Y94foXdDlpZX-2oDpE",
    authDomain: "personal-743a3.firebaseapp.com",
    projectId: "personal-743a3",
    storageBucket: "personal-743a3.appspot.com",
    messagingSenderId: "91010722680",
    appId: "1:91010722680:web:abd37c507445c47c3cf68d",
    measurementId: "G-LMVFSL7J2P"
  };

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);



const Login = () => { 
    const [passwordGood, setActive] = useState(false);
    const provider = new GoogleAuthProvider();
    const provider2 = new GithubAuthProvider();
    const PasswordInput = () => {
        if (!(password.includes("!"))) {
            setActive(false);
        }
        else {
            setActive(true);
        }
    }
    // Initialize Firebase
    const navigate = useNavigate();

    function signUp(email, password) {
        if (passwordGood == true) {
            createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            sendEmailVerification(user);
            navigate("/home");
            })
            .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            navigate('/error');
            });
        }
    }
    
    function signInwithGoogle() {
        signInWithPopup(auth, provider)
        .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        // IdP data available using getAdditionalUserInfo(result)
        // ...
        }).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
    });
    }
    
    function signInwithGithub() {
        signInWithPopup(auth, provider2)
        .then((result) => {
        // This gives you a GitHub Access Token. You can use it to access the GitHub API.
        const credential = GithubAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
    
        // The signed-in user info.
        const user = result.user;
        // IdP data available using getAdditionalUserInfo(result)
        // ...
      }).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GithubAuthProvider.credentialFromError(error);
        // ...
      });
    }
    
    function signInwithEmail(email, password) {
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            navigate('/');
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            navigate('/home');
        });
    }

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");

  return (
    <>
    <div className="grid grid-cols-2">
        <div id="sign" className="w-full py-32 relative bg-cover bg-no-repeat">
            <h1 className="text-secondary text-4xl font-bold flex justify-center poppins">Sign Up</h1>
            <div className="flex justify-center p-3">
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">What is your email?</span>
                    </label>
                    <input type="text" placeholder="Email Address" className="input input-bordered w-full max-w-xs" onChange={(e) => setEmail(e.target.value)}/>
                    
                    <label className="label">
                    <span className="label-text">What is your password?</span>
                    </label>
                    <input type="text" placeholder="Password" className={"input input-bordered border-2 w-full max-w-xs" + (passwordGood ? "" : " border-red-500")} onChange={(e) => setPassword(e.target.value)} onBlur={PasswordInput}/>
                    {passwordGood ? "" : <div className="label text-red-400">You need to have special characters in your password!!</div>}
                    
                    <label className="label">
                        <span className="label-text">What is your phone number?</span>
                    </label>
                    <input type="text" placeholder="Phone Number" className="input input-bordered w-full max-w-xs" onChange={(e) => setPhone(e.target.value)}/>

                    <button className="btn mt-5" onClick={() => signUp(email, password)}>HOla</button>
                </div>
            </div>
        </div>
        <div id="sign" className="w-full py-32 relative bg-cover bg-no-repeat">
            <h1 className="text-secondary text-4xl font-bold flex justify-center poppins">Sign In</h1>
            <div className="flex justify-center p-3">
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">What is your email?</span>
                    </label>
                    <input type="text" placeholder="Email Address" className="input input-bordered w-full max-w-xs" onChange={(e) => setEmail(e.target.value)}/>
                    
                    <label className="label">
                    <span className="label-text">What is your password?</span>
                    </label>
                    <input type="text" placeholder="Password" className={"input input-bordered border-2 w-full max-w-xs"} onChange={(e) => setPassword(e.target.value)}/>
                    <button className="btn mt-5" onClick={() => signInwithEmail(email, password)}>Sign In</button>
                    <button className="btn mt-5" onClick={() => signInwithGoogle()}>Continue with Google</button>
                    <button className="btn mt-5" onClick={() => signInwithGithub()}>Continue with Github</button>
                </div>
            </div>
        </div>
    </div>
    </>
  );
}

export default Login;
{/* <div class="custom-shape-divider-top-1677640090">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" class="shape-fill"></path>
        <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" class="shape-fill"></path>
        <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" class="shape-fill"></path>
    </svg>
</div> */}