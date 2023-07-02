import { useState } from "react";
import { SliderData } from "./SliderData"
import{ FaArrowCircleLeft, FaArrowCircleRight} from "react-icons/fa"
import Image from "next/image"


interface ImageProps {
  src: string;
  alt: string;
}

interface MyComponentProps {
  images: ImageProps[];
}


const Slider: React.FC<MyComponentProps> = ({ images }) => {

  const [current, setCurrent] = useState(0)
  const length = images.length

  const nextSlide= () => {
    setCurrent(current===length - 1 ? 0 : current + 1  )
  }

  const prevSlide= () => {
    setCurrent(current===0 ? length -1 : current - 1  )
  }

 if(!Array.isArray(images)  || images.length<=0) {
  return null
 }

  return (
    <div id="galerija" className="m-8">
      <h1 className="text-3xl font-bold text-center p-8">Galerija</h1>
      <div className="relative flex justify-center items-center bg-white">
       {images.map((image, index) => {
        return (
          <div className={index===current? "opacity-[1] ease-in duration-1000 object-cover": "opacity-0"}>
       <FaArrowCircleLeft onClick={prevSlide} className="absolute top-[50%] left-[180px] text-black/70 cursor-pointer select-none z-[2] " size={40}></FaArrowCircleLeft>
            {index===current && (
         
       <Image width="880" 
       height="550"
       className="w-[800px] h-[500px] "key={index} src={image.src} alt={image.alt} />
             
            )}
                 <FaArrowCircleRight onClick={nextSlide} className="absolute top-[50%] right-[180px] text-black/70 cursor-pointer select-none z-[2] " size={40}></FaArrowCircleRight>
                 </div>
         )}
     
        )
       
       
            }
      </div>
     </div>
  );
};



export default Slider













