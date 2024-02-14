import {useState} from "react";
import './ImageCarousel.css';

export default function ImageCarousel(){   
    const imageArray = ['https://images.pexels.com/photos/18148937/pexels-photo-18148937/free-photo-of-vintage-tram-on-a-street.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                        'https://images.pexels.com/photos/18094275/pexels-photo-18094275.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                        'https://images.pexels.com/photos/3532558/pexels-photo-3532558.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                        'https://images.pexels.com/photos/3532557/pexels-photo-3532557.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                        'https://images.pexels.com/photos/3532556/pexels-photo-3532556.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1']

    const [current,setCurrent] = useState(0);
    
    const sliderMaker = () => {
        const imageWrap = []
        for(let i = 0; i< imageArray.length; i++){
            let activeSlider = ""
            if(current == i){
                imageWrap.push(
                    <div key={i} className={`slide ${activeSlider}`} ><img src={imageArray[i]} alt='img' /></div>
                )
            }
            // if(current == i){
            //     activeSlider = "current"
            // }
            // else{
            //     activeSlider = ""
            // }
            // imageWrap.push(
            //     <div key={i} className={`slide ${activeSlider}`} ><img src={imageArray[i]} alt='img' /></div>
            // )
        }
        return imageWrap
    }


    

    function nextImage(){
        setCurrent(current === imageArray.length - 1 ? 0 : current+1 )
        // console.log(current)
    }
    function prevImage(){
        setCurrent(current === 0 ? imageArray.length - 1 : current-1 )
        // console.log(current)
    }
    return (
        <>
        <div className="slider_wrap ">
            <div className="slider">
                {sliderMaker()}
            </div>
            <button 
            className="right-arrow"
            onClick={nextImage}>
                Next
            </button>
            <button 
            className="left-arrow"
            onClick={prevImage}>
                Prev
            </button>
        </div>
            {/* <img src={imageArray[0]} />
            <img src={imageArray[1]} />
            <img src={imageArray[2]} />
            <img src={imageArray[3]} />
            <img src={imageArray[4]} /> */}
        </>
    )
}