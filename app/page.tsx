import Link from "next/link";
import Image from 'next/image'

const  HomePage= () =>{
  return (
    <div>
     
      <h1 className="text-2xl font-bold mx-10 my-5">
        
    <Link href="/" className="text-2xl font-bold text-[#00b386]">Telex</Link> Game</h1>
      
    <div className="py-20 bg-[#00b386] rounded h-[30rem]" >
      <div className="flex flex-col items-center container mx-auto px-6">

        <h1 className="text-4xl font-bold text-white">Let Get</h1>
        <h1 className="text-2xl  text-white my-5">Started</h1>
        <Link href="/Login"><Image src="/playme.png" alt="My Image" width={100} height={100} /></Link>

      </div>
    </div>
    
      </div>
      
  ) 
}
export default HomePage ;