// import {LoadingInit} from "@/components/LoadingInit";
// import {Slider} from "@/components/Slider";
import Menu from "@/components/Menu";
import {HeroSection} from "@/components/HeroSection";
import {CoupleInvite} from "@/components/CoupleInvite";
import {WebsiteInfo} from "@/components/WebsiteInfo";
import {OurStory} from "@/components/OurStory";
import {ConfirmJoin} from "@/components/ConfirmJoin";
import {Playfair} from "next/font/google";
import {SendWish} from "@/components/SendWish";
import {GetServerSideProps} from "next";
import client from "@/libs/mongodb";
import React, {useState} from "react";
import {WishesProps} from "@/types/wish";
import {Thanks} from "@/components/Thanks";
import {CoupleInfo, WeddingInfo} from "@/data/websiteDataInfo";

const playfair = Playfair({
    subsets: ['vietnamese'],
    weight: ["300", "400", "500", "600", "700", "800", "900"],
    display: 'swap',
})

export const getServerSideProps: GetServerSideProps = async () => {
    try {
        const db = client.db("sample_mflix");
        const wishes = await db
            .collection("wishes")
            .find({})
            .sort({dateCreated: -1})
            .limit(20)
            .toArray();

        return {
            props: {wishes: JSON.parse(JSON.stringify(wishes))},
        };
    } catch (e) {
        console.error(e);
        return {props: {wishes: []}};
    }
};

export default function Home({wishes}: WishesProps) {
    const [coupleInfo] = useState(CoupleInfo);
    const [weddingInfo] = useState(WeddingInfo);

    return (
        <>
            <div className={"h-full w-full bg-red-50 relative overflow-hidden " + playfair.className}>
                {/*<LoadingInit></LoadingInit>*/}
                <Menu></Menu>
                <HeroSection coupleInfo={coupleInfo} weddingInfo={weddingInfo}></HeroSection>
                <CoupleInvite coupleInfo={coupleInfo} weddingInfo={weddingInfo}></CoupleInvite>
                <WebsiteInfo></WebsiteInfo>
                <OurStory></OurStory>
                <ConfirmJoin></ConfirmJoin>
                <SendWish wishes={wishes}></SendWish>
                <Thanks></Thanks>
            </div>
        </>
    );
}
