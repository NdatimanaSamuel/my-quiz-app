"use client"

import { useState,useEffect, useRef } from "react";
import Link from "next/link";
import Image from 'next/image';
import { auth,db } from "../../firebase";
import { useRouter } from 'next/navigation';
import {collection, getDocs} from "firebase/firestore";

const Quiz=()=>{
    const answerSolution ="" ;

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);
    const router = useRouter();

    const [questions,setQuestions]=useState([]);

    
    const questionCollectionRef=collection(db,"questions");

    useEffect(()=>{
   const getQuestions=async ()=>{
    const data=await getDocs(questionCollectionRef);
    setQuestions(data.docs.map((doc)=>({...doc.data(),id:doc.id,
      answer:doc.answer

    })));
    
    
   }
      getQuestions()
    },[])

   
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [isCorrectAnswer, setIsCorrectAnswer] = useState(null);
  const [correctAnswer, setCorrectAnswer] = useState("");
  
  

  const handleAnswer = (answer) => {
    const currentQuestion = questions[currentQuestionIndex];

    if (answer === currentQuestion.correctAnswer) {
      setIsCorrectAnswer(true);
      setTimeout(() => {
        setIsCorrectAnswer(null);
        setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
      }, 1000);
    } else {
      setIsCorrectAnswer(false);
    }
  };

    const toggleDropdown = () => {
      setIsDropdownOpen((prevState) => !prevState);
    };
  
    const handleLogout = async () => {
      // Implement your logout logic here
      try {
        await auth.signOut(); // Call Firebase's signOut method to log the user out
        router.push("/"); // Redirect the user to the home page after logout
      } catch (error) {
        console.error("Error logging out:", error);
      }
    };

   const handleProfileShow=()=>{
    
   }

    useEffect(() => {
      // Function to handle clicks outside the dropdown
      const handleOutsideClick = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
          setIsDropdownOpen(false);
        }
      };
  
      // Attach the event listener when the dropdown is open
      if (isDropdownOpen) {
        document.addEventListener("click", handleOutsideClick);
      }
  
      // Clean up the event listener when the component unmounts
      return () => {
        document.removeEventListener("click", handleOutsideClick);
      };
    }, [isDropdownOpen]);
  
    return (
        <div>

    <div className="flex flex-row justify-between items-center">
        <h1 className="text-2xl font-bold mx-10 my-5">
          
      <Link href="/" className="text-2xl font-bold text-[#00b386]">Telex</Link> Game</h1>
      <div className="relative" ref={dropdownRef}>
           <div
            className="cursor-pointer"
            onClick={toggleDropdown}
            onBlur={() => setIsDropdownOpen(false)}
          >
      <Image src="/profile.png" alt="My Image" width={50} height={30} className="rounded m-5 " />
      </div>
      {isDropdownOpen && (
            <div className="absolute bg-white rounded shadow  w-40 right-0  ">
              <ul>
                <li>
                  <Link href="#" className="ml-5"  onClick={handleProfileShow}>Profile</Link>
                </li>
                <li>
                  <button
                    onClick={handleLogout}
                    className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
                  >
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          )}
          </div>

      </div>

      <div className="py-20 bg-[#00b386] rounded h-[32rem]" >
        
    <div className="ml-60 flex flex-col items-center w-[55rem] bg-[#fff] h-[25rem] rounded mb-20 ">
   
    <div className="flex mb-4">
     <div className="w-1/2 bg-[#fff] h-[20rem]">
    
     <div className="mb-6 flex flex-col  my-20">

     {questions.map((question, index) => (
      index === currentQuestionIndex && (
     <div key={question.id}>

     <h1 className="text-[#000] mb-3 font-bold text-1xl">Question : {index + 1}</h1>
      
     <Image src={question.imag} alt="My Image" width={170} height={90} className="rounded" />
     <h1 className="text-[#000] mb-3 font-bold text-1xl ml-10">{question.name}</h1>

     </div>
           )
           ))}
     
    
         
  
        </div>

  </div>
  <div className="w-1/  h-[22rem] rounded my-5 ml-20">
   
  <div className="flex flex-col items-center my-20 rounded">

         {isCorrectAnswer === true && (
            <p className="text-green-500 mb-10">Correct</p>
          )}
          {isCorrectAnswer === false && (
            <p className="text-red-500">Incorrect </p>
          )}
      <h1 className="text-1xl text-[#000] font-bold">who is this person?</h1>
     <button  onClick={() => handleAnswer("Musician")} className=" w-40 p-2 my-2 shadow border-2 border-[#fff] bg-[#00B386] hover:bg-purple-400 focus:shadow-outline focus:outline-none text-[#000]  py-2 px-4 rounded" type="button">Muscian</button>
      <button  onClick={() => handleAnswer("Politician")} className=" w-40 p-2 my-2 shadow border-2 border-[#fff] bg-[#00B386] hover:bg-purple-400 focus:shadow-outline focus:outline-none text-[#000]  py-2 px-4 rounded" type="button">Poltician</button>
      <button onClick={() => handleAnswer("Movie Actor")} className=" w-40 p-2 my-2 shadow border-2 border-[#fff] bg-[#00B386] hover:bg-purple-400 focus:shadow-outline focus:outline-none text-[#000]  py-2 px-4 rounded" type="button">Movie Actor</button>  
   
   </div>
    
  

</div>


    </div>
    

    </div>
  
        </div>
      
    
        </div>
    )
}

export default Quiz ;