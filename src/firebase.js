import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider,  signInWithPopup , FacebookAuthProvider , GithubAuthProvider , EmailAuthProvider} from 'firebase/auth'

// const app = firebase.initializeApp({
//     // apiKey:process.env.NEXT_PUBLIC_API_KEY,
//     // authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
//     // projectId : proces.env.NEXT_PUBLIC_PROJECT_ID,
//     // storageBucket : process.env.NEXT_PUBLIC_STORAGE_BUCKET,
//     // messagingSenderId : proces.env.NEXT_PUBLIC_MESSAGING_SENDER_ID,
//     // appId : process.env.NEXT_PUBLIC_APP_ID ,
// })

export const firebaseConfig = {
    apiKey: "AIzaSyCmbib1K2Qc_YYggU_eaTWjd3qN2Zl6bg8",
    authDomain: "food-to-fly-cf5ad.firebaseapp.com",
    databaseURL: "https://food-to-fly-cf5ad-default-rtdb.firebaseio.com",
    projectId: "food-to-fly-cf5ad",
    storageBucket: "food-to-fly-cf5ad.appspot.com",
    messagingSenderId: "267534307400",
    appId: "1:267534307400:web:352afd0594c73cdf64887d"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)

const googleProvider = new GoogleAuthProvider();
export const signInWithGoogle = () => {
    signInWithPopup(auth, googleProvider).then((res) => {
        console.log(res)
    }).catch(error => console.log(error))
}

const GithubProvider = new  GithubAuthProvider();
export const signInWithGithub= () =>{
    signInWithPopup(auth, GithubProvider).then((res) => {
        console.log(res)
    }).catch(error => console.log(error))
}

const FacebookProvider = new  FacebookAuthProvider();
export const signInWithFacebook = () =>{
    signInWithPopup(auth, FacebookProvider).then((res) => {
        console.log(res)
    }).catch(error => console.log(error))
};

const EmailProvider = new  EmailAuthProvider();
export const signInWithEmail= () =>{
    signInWithPopup(auth, EmailProvider).then((res) => {
        console.log(res)
    }).catch(error => console.log(error))
}

