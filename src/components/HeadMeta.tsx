import React from "react";
import {Metadata} from "@/data/websiteDataInfo";

export function HeadMeta() {
    const metadata = Metadata;

    return (
        <>
            <title>{metadata.title}</title>
            <meta property="og:title" content={metadata.title} key="title"/>
            <link rel="icon" type={metadata.icon.type} href={metadata.icon.src}/>
            <meta name="keywords" content={metadata.keywords}/>
            <meta name="description" content={metadata.description}/>
            <meta name="author" content="Kivie"/>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            <meta property="og:image" content={metadata.image.src}></meta>
            <meta property="og:image:url" content={metadata.image.src}></meta>
            <meta property="og:image:type" content={metadata.image.type}/>
            <meta property="og:image:width" content="100"></meta>
            <meta property="og:image:height" content="100"></meta>
            <meta property="og:type" content="website"/>
            <meta
                property="og:description"
                content={metadata.description}/>
            <meta property="og:title" content={metadata.title}/>
        </>
    );
}