import Image from "next/image";
import {Sacramento} from 'next/font/google'
import {CoupleModel} from "@/types/couple";
import {WeddingModel} from "@/types/wedding";
import {getDay, getMonth, getYear} from "@/utils/date";

const sacramento = Sacramento({
    subsets: ['latin'],
    weight: "400",
    display: 'swap',
})

interface HeroProps {
    coupleInfo: CoupleModel,
    weddingInfo: WeddingModel
}

export function HeroSection({coupleInfo, weddingInfo}: HeroProps) {
    return (
        <>
            <div className="relative bg-gradient-to-r from-purple-600 to-blue-600 h-screen text-white overflow-hidden">
                <div className="absolute inset-0">
                    <Image
                        src="/images/galleries/1.jpg"
                        width={700}
                        height={900}
                        alt="Background Image" className="object-cover object-center w-full h-full"/>
                    <div className="absolute inset-0 bg-black opacity-50"></div>
                </div>

                <div className="relative z-10 flex flex-col justify-center items-center h-full text-center p-2">
                    <div
                        className={"mb-10 flex items-center space-x-2 text-5xl  " + sacramento.className}>
                        <p className="font-bold leading-tight mb-4 w-28 sm:w-auto">{coupleInfo.male.fullName}</p>
                        <p className="font-bold leading-tight mb-4">&</p>
                        <p className="font-bold leading-tight mb-4 w-28 sm:w-auto">{coupleInfo.female.fullName}</p>
                    </div>
                    <p className="text-base sm:text-lg md:text-2xl text-gray-300 mb-12 sm:mb-20 tracking-[5px] border-t-2 border-b-2 py-3 px-5 ">
                        WE&#39;RE GETTING MARRIED
                    </p>
                    <div className="relative flex space-x-5 sm:space-x-10 lg:space-x-20 font-serif">
                        <div className="relative animate__animated animate__pulse animate__infinite">
                            <div
                                className="heart bg-opacity-40 transform scale-100 sm:scale-[1.3] lg:scale-[1.4]"></div>
                            <div
                                className="absolute w-full h-full -top-2.5 left-0 flex flex-col justify-center items-center">
                                <p className="text-sm sm:text-base text-white font-semibold">Ngày</p>
                                <p className="text-xl sm:text-3xl text-white font-bold">{getDay(weddingInfo.weddingDate)}</p>
                            </div>
                        </div>
                        <div className="relative animate__animated animate__pulse animate__infinite">
                            <div
                                className="heart bg-opacity-40 transform scale-100 sm:scale-[1.3] lg:scale-[1.4]"></div>
                            <div
                                className="absolute w-full h-full -top-2.5 left-0 flex flex-col justify-center items-center">
                                <p className="text-sm sm:text-base text-white font-semibold">Tháng</p>
                                <p className="text-xl sm:text-3xl text-white font-bold">{getMonth(weddingInfo.weddingDate)}</p>
                            </div>
                        </div>
                        <div className="relative animate__animated animate__pulse animate__infinite">
                            <div
                                className="heart bg-opacity-40 transform scale-100 sm:scale-[1.3] lg:scale-[1.4]"></div>
                            <div
                                className="absolute w-full h-full -top-2.5 left-0 flex flex-col justify-center items-center">
                                <p className="text-sm sm:text-base text-white font-semibold">Năm</p>
                                <p className="text-xl sm:text-3xl text-white font-bold">{getYear(weddingInfo.weddingDate)}</p>
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