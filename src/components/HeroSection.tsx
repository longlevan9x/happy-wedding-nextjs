import Image from "next/image";
import {Sacramento} from 'next/font/google'

const sacramento = Sacramento({
    subsets: ['latin'],
    weight: "400",
    display: 'swap',
})

export function HeroSection() {
    return (
        <>
            <div className="relative bg-gradient-to-r from-purple-600 to-blue-600 h-screen text-white overflow-hidden">
                <div className="absolute inset-0">
                    <Image
                        src="/images/sliders/1.jpg"
                        width={700}
                        height={900}
                        alt="Background Image" className="object-cover object-center w-full h-full"/>
                    <div className="absolute inset-0 bg-black opacity-50"></div>
                </div>

                <div className="relative z-10 flex flex-col justify-center items-center h-full text-center">
                    <div className={"flex items-center space-x-2 font-serif " + sacramento.className}>
                        <p className="lg:text-5xl text-4xl font-bold leading-tight mb-4">JENNIFER</p>
                        <p className="lg:text-5xl text-4xl font-bold leading-tight mb-4">&</p>
                        <p className="lg:text-5xl text-4xl font-bold leading-tight mb-4"> MICHAEL</p>
                    </div>
                    <p className="text-lg text-gray-300 mb-8 tracking-[5px] border-t-2 border-b-2 py-3 px-5 font-serif">
                        WE&#39;RE GETTING MARRIED
                    </p>
                    <div className="flex space-x-10 lg:space-x-20 font-serif">
                        <div className="relative animate__animated animate__pulse animate__infinite">
                            <div
                                className="heart bg-opacity-40 transform scale-125 sm:scale-[1.3] lg:scale-[1.4]"></div>
                            <div
                                className="absolute w-full h-full -top-2.5 left-0 flex flex-col justify-center items-center">
                                <p className="text-sm sm:text-base text-white font-semibold">Ngày</p>
                                <p className="text-2xl sm:text-3xl text-white font-bold">10</p>
                            </div>
                        </div>
                        <div className="relative animate__animated animate__pulse animate__infinite">
                            <div
                                className="heart bg-opacity-40 transform scale-125 sm:scale-[1.3] lg:scale-[1.4]"></div>
                            <div
                                className="absolute w-full h-full -top-2.5 left-0 flex flex-col justify-center items-center">
                                <p className="text-sm sm:text-base text-white font-semibold">Tháng</p>
                                <p className="text-2xl sm:text-3xl text-white font-bold">11</p>
                            </div>
                        </div>
                        <div className="relative animate__animated animate__pulse animate__infinite">
                            <div
                                className="heart bg-opacity-40 transform scale-125 sm:scale-[1.3] lg:scale-[1.4]"></div>
                            <div
                                className="absolute w-full h-full -top-2.5 left-0 flex flex-col justify-center items-center">
                                <p className="text-sm sm:text-base text-white font-semibold">Năm</p>
                                <p className="text-2xl sm:text-3xl text-white font-bold">2024</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/*<div*/}
                {/*    className="absolute bottom-0 right-1/2 z-20 flex flex-col justify-center p-2 rounded-full animate-bounce items-center text-center border-2">*/}
                {/*    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}*/}
                {/*         stroke="currentColor" className="size-6">*/}
                {/*        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"/>*/}
                {/*    </svg>*/}
                {/*</div>*/}

                <div
                    className="absolute bottom-5 right-1/2 z-20 flex flex-col justify-center p-4 rounded-full items-center text-center border-2 h-16">
                    <div
                        className="relative top-3 text-2xl font-bold animate__animated animate__slideInDown animate__infinite">.
                    </div>
                </div>
            </div>
        </>
    );
}