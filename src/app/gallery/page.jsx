import Image from "next/image";
import image1 from "../../assets/istockphoto-1445614323-170667a.webp"
const Gallery = () => {
    return (
        <div>
            <h1 className="text-4xl text-center my-4">Image optimaizations</h1>
            <h2 className="text-2xl text-center my-2">Regular Image tag</h2>
            <img
                className="mx-auto"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0ZRGVnm2LMROIhk6E0Dw-sNcDxu2BBGt_JFZASI6RBg&s"
            />
            <h2 className="text-2xl text-center my-2">Next js Image tag</h2>
            <Image 
            // fill
            width={500} 
            height={500} 
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0ZRGVnm2LMROIhk6E0Dw-sNcDxu2BBGt_JFZASI6RBg&s" alt="dji"    
            className="mx-auto"
            >
                
            </Image>
            <h2 className="text-2xl text-center my-2">Local Image</h2>
            <Image 
            // fill
            width={500} 
            height={500} 
            src={image1} alt="dji"    
            className="mx-auto"
            >

            </Image>
        </div>
    );
};

export default Gallery;