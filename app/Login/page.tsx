"use client"

import { useState, useEffect } from "react";
import Link from "next/link";
import { auth } from "../../firebase";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useRouter } from 'next/navigation'

const Login =()=>{

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const router = useRouter();
  
    const handleSignInWithGoogle = async () => {
      const provider = new GoogleAuthProvider();
      try {
        const result = await signInWithPopup(auth, provider);
        // Handle successful sign-in with Google
      } catch (error) {
        // Handle error
        console.error("Error signing in with Google:",error);
      }
    };
  
    const handleSignInWithEmailPassword = () => {
      // Implement your email/password sign-in logic here
    };
  
    useEffect(() => {
        // Check if the user is already authenticated
        const unsubscribe = auth.onAuthStateChanged((user) => {
          if (user) {
            // If the user is authenticated, redirect to the home page
            router.push("/quiz");
          }
        });
    
        // Clean up the subscription when the component unmounts
        return () => unsubscribe();
      }, []);

    return (
        <div>
            <h1 className="text-2xl font-bold mx-10 my-5">
        
        <Link href="/" className="text-2xl font-bold text-[#00b386]">Telex</Link> Game
        
        </h1>

       

        <div className="flex mb-4">
     <div className="w-1/2 bg-[#fff] h-[30rem]">
    
     <div className="mb-6 flex flex-col items-center my-20">
     <h1 className="text-[#00B386] mb-10 font-bold text-3xl">Sign in To Continue</h1>
      <input type="text"  value={email}
          onChange={(e) => setEmail(e.target.value)}  className="block w-[25rem] p-3 text-gray-900 border border-gray-300 rounded-lg bg-[#D9D9D9] sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-5" placeholder="Email"/>
      <input type="password"  value={password}
          onChange={(e) => setPassword(e.target.value)} className="block w-[25rem] p-3 text-gray-900 border border-gray-300 rounded-lg bg-[#D9D9D9] sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Password"/>
      <div className="">
        <Link href="/quiz">  <button   onClick={handleSignInWithEmailPassword} className="w-40 p-2 my-5 mr-10 shadow bg-[#00B386] hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button">Sign In</button></Link>
        
        <button
            className="w-50 p-2 my-5 shadow bg-[#00B386] hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
            type="button"
            onClick={handleSignInWithGoogle}
          >
            Sign In with Google
          </button>

      </div>
     
    
         
  
        </div>

  </div>
  <div className="w-1/2 bg-[#00B386] h-[22rem] rounded mr-20">
   
  <div className="flex flex-col items-center my-20 rounded">
      
      <h1 className="text-4xl text-[#fff] font-bold">HELLO</h1>
      <p className="text-3xl text-[#fff]">Fill personal information </p>
      <p className="text-2xl text-[#fff]">start game with us</p>
     <Link href="/signup"> <button className=" w-40 p-2 my-5 shadow border-2 border-[#fff] bg-[#00B386] hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button">Sign Up</button></Link>
         
  
   </div>
    

</div>


    </div>
        </div>
    )
}

export default Login;