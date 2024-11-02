export interface OurStoryModel {
    image: ImageModel;
    date: string;
    caption: string;
    content: string
}

export interface ImageModel {
    src: string;
    with: number;
    height: number;
}