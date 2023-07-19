import Link from "next/link";
const SignUp =()=>{
    return (
        <div>
            <h1 className="text-2xl font-bold mx-10 my-5">
        
        <Link href="/" className="text-2xl font-bold text-[#00b386]">Telex</Link> Game
        
        </h1>

       

        <div className="flex mb-4">
     <div className="w-1/2 bg-[#fff] h-[30rem]">
    
     <div className="mb-6 flex flex-col items-center ">
     <h1 className="text-[#00B386] mb-10 font-bold text-3xl">Sign Up Here</h1>
      <input type="text"  className="block w-[25rem] p-3 text-gray-900 border border-gray-300 rounded-lg bg-[#D9D9D9] sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-5" placeholder="Full Names"/>
  
      <input type="email" className="block w-[25rem] p-3 text-gray-900 border border-gray-300 rounded-lg bg-[#D9D9D9] sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Email"/>
      <input type="text" className="block w-[25rem] p-3 my-5 text-gray-900 border border-gray-300 rounded-lg bg-[#D9D9D9] sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Phone Number"/>
      <input type="password" className="block w-[25rem] p-3 my-2 text-gray-900 border border-gray-300 rounded-lg bg-[#D9D9D9] sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Password"/>

      <div className="">
          <button className="w-40 p-2 my-5 shadow bg-[#00B386] hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button">Sign Up</button>
      </div>
     
    
         
  
        </div>

  </div>
  <div className="w-1/2 bg-[#00B386] h-[22rem] rounded mr-20">
   
  <div className="flex flex-col items-center my-20 rounded">
      
      <h1 className="text-4xl text-[#fff] font-bold">HELLO</h1>
      <p className="text-3xl text-[#fff]">Fill personal information </p>
      <p className="text-2xl text-[#fff]">start game with us</p>
     <Link href="/Login"> <button className=" w-40 p-2 my-5 shadow border-2 border-[#fff] bg-[#00B386] hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button">Sign In</button></Link>
         
  
   </div>
    

</div>


    </div>
        </div>
    )
}

export default SignUp;