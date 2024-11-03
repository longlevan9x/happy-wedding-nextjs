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
import {CoupleInfo, Metadata, WeddingInfo} from "@/data/websiteDataInfo";
import Head from "next/head";
import {HeadMeta} from "@/components/HeadMeta";
import {Gallery} from "@/components/Gallery";
import {LoadingInit} from "@/components/LoadingInit";
import {WeddingEvent} from "@/components/WeddingEvent";
import {FixedIcon} from "@/components/FixedIcon";
import {DB_COLLECTION_PREFIX} from "@/constant/constant";

const playfair = Playfair({
    subsets: ['vietnamese'],
    weight: ["300", "400", "500", "600", "700", "800", "900"],
    display: 'swap',
})

export const getServerSideProps: GetServerSideProps = async () => {
    try {
        const db = client.db("sample_mflix");
        const wishes = await db
            .collection(DB_COLLECTION_PREFIX + "wishes")
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
            <Head>
                <title>{Metadata.title}</title>
                <HeadMeta></HeadMeta>
            </Head>

            <div className={"h-full w-full bg-red-50 relative " + playfair.className}>
                <LoadingInit></LoadingInit>
                <Menu></Menu>
                <HeroSection coupleInfo={coupleInfo} weddingInfo={weddingInfo}></HeroSection>
                <CoupleInvite coupleInfo={coupleInfo} weddingInfo={weddingInfo}></CoupleInvite>
                <WeddingEvent></WeddingEvent>
                <WebsiteInfo></WebsiteInfo>
                <OurStory></OurStory>
                <ConfirmJoin></ConfirmJoin>
                <Gallery></Gallery>
                <SendWish wishes={wishes}></SendWish>
                <Thanks></Thanks>
                <FixedIcon></FixedIcon>
            </div>
        </>
    );
}
