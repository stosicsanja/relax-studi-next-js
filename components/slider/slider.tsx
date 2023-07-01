import { SliderData } from "./SliderData"



interface ImageProps {
  src: string;
  alt: string;
}

interface MyComponentProps {
  images: ImageProps[];
}


const Slider: React.FC<MyComponentProps> = ({ images }) => {
  return (
    <div >
      {images.map((image, index) => (
        <img className="w-[900px] h-[600px] object-cover" key={index} src={image.src} alt={image.alt} />
      ))}
    </div>
  );
};



export default Slider













