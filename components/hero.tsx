"use client"

interface PageProps {
  heading: string;
  message: string;
  buttonText: string;
  onClick: () => void;
}


const Hero: React.FC<PageProps> =({ heading, message, buttonText, onClick }) => { 
  return (

    
    <div className="flex justify-center items-center h-screen mb-12 bg-fixed bg-center custom-img">
    <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/60 y-[2]"/>
    <div className="p-5 text-white z-[2] mt-[-10rem]">
    <h1 className="text-5xl font-bold">{heading}</h1>
      <p className="py-5 text-xl">{message}</p>
      <button className="px-8 py-2 border" onClick={onClick}>{buttonText}</button>
    </div>
   
    </div>
  )
}
export default Hero
