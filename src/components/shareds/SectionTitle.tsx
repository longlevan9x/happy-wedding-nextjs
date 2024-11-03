import {titleFont} from "@/fonts/font";
import React from "react";

interface SectionTitleProps {
    title: string;
    quote?: string
}

interface QuoteProps {
    quote?: string;
}

export function SectionTitle({title, quote}: SectionTitleProps) {
    return (
        <>
            <div
                className={"w-full min-h-40 text-center flex flex-col items-center justify-center "}>
                <div className={titleFont.className}>
                    <h1 className="text-pink-400 font-black text-6xl md:text-7xl mb-6 ">{title}</h1>
                </div>
                <div className="w-full flex justify-center items-center space-x-3">
                    <div className="border-b-2 w-32 md:w-44 border-pink-400"></div>
                    <div className="border-[1px] w-4 h-4 rounded-full border-pink-400"></div>
                    <div className="border-b-2 w-32 md:w-44 border-pink-400"></div>
                </div>
                <Quote quote={quote}></Quote>
            </div>
        </>
    );
}

function Quote({quote}: QuoteProps) {
    if (!quote) {
        return <></>
    }

    return <div className="text-center pt-8">
        <q className="italic md:text-lg lg:text-xl">
            {quote}
        </q>
    </div>
}