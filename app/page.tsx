"use client"

import Hero from "@/components/hero"
import Slider from "@/components/slider/slider";

const images = [
  { src: "https://media.istockphoto.com/id/1293353397/photo/hijama-cupping-treatment-on-womens-back.jpg?b=1&s=612x612&w=0&k=20&c=5fd8KjooWSWFqYy_NyXjMLe3qMtpo9arpwGk4PUS-cQ=", alt: 'Image 1' },
  { src: "https://images.unsplash.com/photo-1598555748505-ccca0d9b9f7b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y3VwcGluZyUyMG1hc3NhZ2V8ZW58MHwwfDB8fHww&auto=format&fit=crop&w=500&q=60", alt: 'Image 2' },
  {src:   "https://media.istockphoto.com/id/1158438691/photo/young-man-laying-down-at-the-massage-table-and-doing-hijama-treatment.jpg?b=1&s=612x612&w=0&k=20&c=4-LfxIbI4A9otfciWnicene9BCb7lrbXLC945p7dw6I=", alt: "Image 3",
}

];

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
   <Slider images={images}></Slider>

    </div>
  )
}

export default Home

    