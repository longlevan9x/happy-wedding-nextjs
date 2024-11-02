import Image from "next/image";
import React, {useState} from "react";
import {titleFont} from "@/fonts/font";

export function Gallery() {
    const [galleries] = useState(Array(9).fill(0));

    return (
        <>
            <div className="w-full 2xl:w-2/3 mx-auto py-20 px-3">
                <div className="flex flex-col w-full mb-10 lg:mb-20">
                    <div className={"flex flex-col items-center mb-6 " + titleFont.className}>
                        <h1 className="text-pink-400 font-black text-5xl sm:text-6xl md:text-7xl">Album Hình Cưới</h1>
                    </div>
                    <div className="text-center">
                        <q className="italic md:text-lg lg:text-xl">
                            Tình yêu từ người khác mang đến cho ta sức mạnh, còn tình yêu ta
                            dành cho người khác mang đến
                            cho ta sự dũng cảm.
                        </q>
                    </div>
                </div>
                <div className="w-full columns-2 lg:columns-3 gap-4 lg:gap-8 space-y-4 lg:space-y-8">
                    {
                        galleries.map((_, index) => (
                            <Image key={index}
                                   className="w-full h-full" src={`/images/galleries/${index + 1}.jpg`}
                                   width={500} height={500}
                                   alt="Love">
                            </Image>
                        ))}
                </div>
            </div>
        </>
    );
}