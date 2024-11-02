import Image from "next/image";
import {CSSProperties, useEffect, useState} from "react";

export function Slider() {
    const [sliders] = useState<number[]>(Array.from({length: 8}).map((_, i) => i + 1));
    const [currentIndex, setCurrentIndex] = useState(0);
    const [sliderInPage] = useState(3);

    useEffect(() => {
        setTimeout(() => {
            const totalSlider = sliders.length;
            if (currentIndex === totalSlider - sliderInPage) {
                setCurrentIndex(0);
            } else {
                setCurrentIndex(currentIndex + 1);
            }
        }, 3000);
    }, [currentIndex, sliderInPage, sliders.length]);

    return <>
        <div className="relative w-full overflow-hidden slider">
            <div id="slider"
                 className={'flex transition-transform duration-700 ease-in-out transform'} style={{'--translateX': currentIndex} as CSSProperties}>
                {sliders.map((_, i) => (
                    <div className="w-full flex-shrink-0 p-0 h-screen xl:w-1/3 lg:w-1/2 md:w-1/2 sm:w-full slider-image" key={i}>
                        <Image src={`/images/sliders/${i + 1}.jpg`} alt="Slide 1" className="w-full h-full"
                               width={700}
                               height={900}/>
                    </div>
                ))}
            </div>

            {/*<button onClick="prevSlide()"*/}
            {/*        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full opacity-50 hover:opacity-100">*/}
            {/*    ‹*/}
            {/*</button>*/}
            {/*<button onClick="nextSlide()"*/}
            {/*        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full opacity-50 hover:opacity-100">*/}
            {/*    ›*/}
            {/*</button>*/}
        </div>
    </>
}