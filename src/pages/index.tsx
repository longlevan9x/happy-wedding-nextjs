// import {Slider} from "@/components/Slider";
import Menu from "@/components/Menu";
import {HeroSection} from "@/components/HeroSection";
import {CoupleInvite} from "@/components/CoupleInvite";
// import {WebsiteInfo} from "@/components/WebsiteInfo";
import {OurStory} from "@/components/OurStory";
// import {ConfirmJoin} from "@/components/ConfirmJoin";
import {Playfair} from "next/font/google";
import {SendWish} from "@/components/SendWish";
import {GetServerSideProps} from "next";
import client from "@/libs/mongodb";
import React, {useEffect, useState} from "react";
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
    const [isLoading, setIsLoading] = useState(true);
    const [coupleInfo] = useState(CoupleInfo);
    const [weddingInfo] = useState(WeddingInfo);

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false)
        }, 3000);


        const observer = new IntersectionObserver(intersections => {
            intersections.forEach((entry) => {
                if (entry.intersectionRatio === 1) {
                    entry.target.classList.toggle("animate__animated", entry.isIntersecting);
                    // entry.target.classList.toggle("animate__fadeInDown", entry.isIntersecting);

                    entry.target.classList.remove('opacity-0');
                    entry.target.classList.toggle('opacity-100', entry.isIntersecting);
                } else {
                    // entry.target.classList.remove('animate__animated');
                }

                // console.log("boundingClientRect", entry.boundingClientRect)
                // console.log("intersectionRatio", entry.intersectionRatio)
                // console.log("intersectionRect", entry.intersectionRect)
                // console.log("isIntersecting", entry.isIntersecting)
                // console.log("rootBounds", entry.rootBounds)
                // console.log("target", entry.target)
            });
        }, {
            threshold: [0, 0.25, 0.5, 0.75, 1],
            rootMargin: "0px"
        });

        setTimeout(() => {
            document.querySelectorAll('.animated').forEach(div => {
                observer.observe(div);
            });
        }, 4000);

    }, []);

    return (
        <>
            <Head>
                <title>{Metadata.title}</title>
                <HeadMeta></HeadMeta>
            </Head>

            <div className={"h-full w-full bg-red-50 relative overflow-x-hidden" + playfair.className}>
                <LoadingInit></LoadingInit>
                <Menu></Menu>
                <HeroSection coupleInfo={coupleInfo} weddingInfo={weddingInfo}></HeroSection>
                {
                    !isLoading && (
                        <>
                            <CoupleInvite coupleInfo={coupleInfo} weddingInfo={weddingInfo}></CoupleInvite>
                            <WeddingEvent></WeddingEvent>
                            {/*<WebsiteInfo></WebsiteInfo>*/}
                            <OurStory></OurStory>
                            {/*<ConfirmJoin></ConfirmJoin>*/}
                            <Gallery></Gallery>
                            <SendWish wishes={wishes}></SendWish>
                            <Thanks></Thanks>
                            <FixedIcon></FixedIcon>
                        </>
                    )
                }
            </div>
        </>
    );
}
