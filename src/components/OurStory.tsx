import Image from "next/image";
import {useState} from "react";
import {OurStoryInfos} from "@/data/websiteDataInfo";
import {OurStoryModel} from "@/types/ourStory";
import {getDay, getMonth, getYear} from "@/utils/date";
import {SectionTitle} from "@/components/shareds/SectionTitle";

export function OurStory() {
    const [stories] = useState(OurStoryInfos as OurStoryModel[]);
    const [currentIndex, setCurrentIndex] = useState(0);

    return (
        <>
            <SectionTitle title="Chuyện tình yêu"></SectionTitle>
            <div className="w-full h-full md:h-screen relative our-story">
                <div className="flex flex-col lg:flex-row h-full lg:h-auto">
                    <div className="w-full lg:w-1/2 h-[calc(100vh/2)] lg:h-screen relative">
                        <div
                            className="absolute -bottom-5 lg:-right-5 lg:bottom-auto flex justify-center w-full lg:h-full">
                            <div
                                className="w-full h-full flex flex-row lg:flex-col items-center sm:items-end justify-center space-x-8 md:space-x-16 lg:space-x-0 lg:space-y-10">
                                {stories.map((story, i) => (
                                    <div className=" z-30 flex flex-col items-center cursor-pointer justify-center"
                                         key={i}>
                                        <div className="w-10 h-10 rounded-full">
                                            <Image
                                                onClick={() => setCurrentIndex(i)}
                                                className={"w-10 object-cover h-10 rounded-full " + (currentIndex == i ? ' border-2 border-white' : '')}
                                                src={story.image.src}
                                                width={100} height={100} alt="image"></Image>
                                        </div>
                                    </div>
                                ))}
                            </div>

                        </div>

                        <div className="heart-pain">
                            <div className="absolute z-20 bottom-0 left-0 md:left-5 lg:bottom-60 lg:left-20">
                                <div className="flex flex-col lg:flex-row relative lg:space-x-5">
                                    <Image className="size-10 lg:size-14 relative lg:top-36"
                                           src="/icons/love.png" width={100} height={100}
                                           alt="Love">
                                    </Image>
                                    <Image className="size-10 lg:size-16 relative lg:top-20"
                                           src="/icons/love.png" width={100} height={100}
                                           alt="Love">
                                    </Image>
                                    <Image className="size-10 lg:size-20 relative lg:top-0"
                                           src="/icons/love.png" width={100} height={100}
                                           alt="Love">
                                    </Image>
                                </div>

                            </div>
                            <div className="absolute z-20 -top-[4%] -right-[4%] lg:top-28 lg:right-52">
                                <div className="flex relative">
                                    <Image className="scale-50 lg:scale-125" src="/icons/rose-4.png"
                                           width={100} height={100}
                                           alt="Love">
                                    </Image>
                                </div>
                            </div>
                        </div>

                        <div className="our-story__image w-full h-full flex flex-col items-center justify-center">
                            <div className="w-full h-full lg:w-3/5 lg:h-3/5 ">
                                <Image
                                    className="object-cover object-center w-full h-full  lg:rounded-full"
                                    src={stories[currentIndex].image.src}
                                    width={stories[currentIndex].image.with}
                                    height={stories[currentIndex].image.height}
                                    alt="image"/>
                            </div>
                            <div
                                className="lg:hidden absolute z-10 border-opacity-50 border-pink-300 border-[3px] border-double w-[90%] h-[90%] m-10"></div>
                        </div>
                    </div>

                    <div
                        className="w-full lg:w-1/2 relative bg-rose-100 h-full lg:h-screen flex items-center">
                        <div
                            className="w-full lg:w-2/3 mx-auto flex justify-center space-y-2 lg:space-y-10 flex-col px-6 pt-10 pb-8 lg:p-0">
                            <div className="flex items-end space-x-2">
                                <div className="flex w-10 h-10 md:w-14 md:h-14 text-lg">
                                    <p className="font-semibold">{getDay(stories[currentIndex].date)}</p>
                                    <p className="w-[1px] bg-red-500 transform rotate-45"></p>
                                    <p className="mt-5 font-semibold flex items-end">{getMonth(stories[currentIndex].date)}</p>
                                </div>
                                <div className="text-3xl md:text-4xl">
                                    {getYear(stories[currentIndex].date)}
                                </div>
                            </div>

                            <div className="flex flex-col space-y-2 md:space-y-10">
                                <p className="text-3xl md:text-6xl font-bold">{stories[currentIndex].caption}</p>
                                <p className="text-xl font-medium leading-8 text-justify">{stories[currentIndex].content}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}