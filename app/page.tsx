"use client"

import Hero from "@/components/hero"


const Home: React.FC = ({}) => {

  const handleClick = () => {
    console.log("Dodati broj za rezervaciju")

  };

  return (
    <div>
   <Hero  
        heading="Naslov"
        message="Poruka"
        buttonText="Rezervisi"
        onClick={handleClick}></Hero>
  

    </div>
  )
}

export default Home

    