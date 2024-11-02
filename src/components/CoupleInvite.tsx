import Image from "next/image";
import {CoupleModel} from "@/types/couple";
import {WeddingModel} from "@/types/wedding";
import {titleFont} from "@/fonts/font";

interface CoupleInviteProps {
    coupleInfo: CoupleModel,
    weddingInfo: WeddingModel
}

export function CoupleInvite({coupleInfo}: CoupleInviteProps) {
    return (
        <>
            <section className="my-10 lg:my-32 px-4 lg:px-10 w-full xl:w-4/5 2xl:w-2/3 mx-auto">
                <div className="w-full flex flex-col justify-center">
                    <div
                        className="flex flex-col items-center mb-12 md:mb-28">
                        <div className={titleFont.className}>
                            <h2 className={"text-pink-400 font-black text-6xl md:text-7xl mb-4 lg:mb-20 "}>Xin chào!</h2>
                        </div>
                        <h3 className="mb-2 md:mb-6 text-xl md:text-2xl font-medium">
                            Ngày 
                            November 28th, 2016 New York,
                            USA
                        </h3>
                        <p className="text-base md:text-xl font-medium text-rose-400 text-center ">
                            Chúng tôi trân trọng mời bạn đến chung vui trong ngày cưới của chúng tôi.
                        </p>
                    </div>

                    <div className="relative flex flex-col md:flex-row">
                        <div className="flex flex-row-reverse items-center mb-24 md:mb-auto lg:mr-3">
                            <div className="flex ml-4">
                                <div className="w-40 h-40 lg:w-52 lg:h-52">
                                    <Image src={coupleInfo.male.avatar.src} width={coupleInfo.male.avatar.with}
                                           height={coupleInfo.male.avatar.height} alt={coupleInfo.male.fullName}
                                           className="object-cover object-center w-40 h-40 lg:w-52 lg:h-52 rounded-full"/>
                                </div>
                            </div>
                            <div className="flex space-y-2 flex-col">
                                <div className={titleFont.className}>
                                    <h3 className="text-right text-4xl lg:text-5xl font-semibold text-pink-600">{coupleInfo.male.fullName}</h3>
                                </div>
                                <p className="text-right text-base text-pink-500 lg:leading-8">
                                    {coupleInfo.male.description}
                                </p>
                            </div>
                        </div>
                        <div
                            className="absolute flex items-center w-full justify-center h-full animate__animated animate__pulse animate__infinite">
                            <div className="relative bg-white rounded-full w-14 h-14 flex items-center justify-center">
                                <div
                                    className="absolute flex items-center justify-center -left-[0.4rem] scale-[0.3] heart"></div>
                            </div>
                        </div>
                        <div className="flex items-center lg:ml-3">
                            <div className="flex mr-4">
                                <div className="w-40 h-40 lg:w-52 lg:h-52">
                                    <Image src={coupleInfo.female.avatar.src} width={coupleInfo.female.avatar.with}
                                           height={coupleInfo.female.avatar.height} alt={coupleInfo.female.fullName}
                                           className="object-cover object-center w-40 h-40 lg:w-52 lg:h-52 rounded-full"/>
                                </div>
                            </div>
                            <div className="flex space-y-2 flex-col">
                                <div className={titleFont.className}>
                                    <h3 className="text-left text-4xl lg:text-5xl font-semibold text-pink-600">{coupleInfo.female.fullName}</h3>
                                </div>
                                <p className="text-left text-base text-pink-500 lg:leading-8">
                                    {coupleInfo.female.description}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}