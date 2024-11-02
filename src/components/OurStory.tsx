import Image from "next/image";
import {useState} from "react";
import dayjs from "dayjs";

export function OurStory() {
    const _stories = [
        {
            date: '2024/09/20',
            title: "Bạn Có Tin Vào Tình Yêu Online Không?",
            content: "Tôi đã từng không tin vào tình yêu online. Đã từng nghĩ làm sao có thể thích một người chưa từng gặp mặt? Vậy mà giờ đây tôi lại đang như vậy, bây giờ tôi đã hiểu: thế giới ảo tình yêu thật đấy!!! Ngày ấy vu vơ đăng một dòng status trên facebook than thở, vu vơ đùa giỡn nói chuyện với một người xa lạ chưa từng quen. Mà nào hay biết, 4 năm sau người ấy lại là chồng mình."
        },
        {
            date: '2024/10/21',
            title: "Lời Tỏ Tình Dễ Thương^^",
            content: "Ngày ấy, tôi 21! Một mình giữa phố thị nấp tập. Mỗi chiều cuối tuần thường chạy xe vòng quanh qua những con phố, len lỏi trong từng dòng người tấp nập. Hay thậm chí là ghé vào một quán cà phê ven đường để ngồi đó và cảm nhận về cuộc sống của riêng mình. Đôi khi lạc lõng và hơi cô đơn. Nhưng rồi một ngày đẹp trời, người con trai ấy xuất hiện, nắm tay rồi thủ thỉ vào tai: “Hy vọng sau này anh được làm những điều ấy cùng em”."
        },
        {
            date: '2024/11/19',
            title: "Phút Giây Cầu Hôn",
            content: "5 năm bên nhau không phải là quãng thời gian quá dài, nhưng đủ cho chúng ta nhận ra được rất nhiều điều. Yêu nhau, vun vén hạnh phúc và cùng nỗ lực vượt qua những khó khăn trong cuộc sống. Chúng ta từ 2 con người xa lạ mà bước vào cuộc đời nhau. Và giờ đây chúng ta tiếp tục cùng nhau sang trang mới. Giây phút anh ngỏ lời “Làm vợ anh nhé!”, em đã nguyện ý đời này, đi đâu cũng được, miễn là cùng anh."
        },
        {
            date: '2024/12/10',
            title: "Ngày Lễ Đính Hôn",
            content: "“Tiếng trái tim đôi ta đập thật nhanh. Thì thầm lời yêu thương. Ngày tình về chung đôi...” Sau bao nhiêu chờ đợi, cuối cùng ngày vui của chúng ta cũng tới rồi. Cảm ơn vì mình đã luôn là một phần trong cuộc sống của nhau. Em và anh không chỉ là người yêu mà chúng ta còn là tri kỷ. Ngày hôm nay, em sẽ là cô dâu của anh và sau này sẽ là mẹ của các con anh."
        }
    ];

    const [stories] = useState(_stories);
    const [currentIndex, setCurrentIndex] = useState(0);

    const getDay = (date: string) => {
        return dayjs(date).format("DD");
    }

    const getMonth = (date: string) => {
        return dayjs(date).format("MM");
    }

    const getYear = (date: string) => {
        return dayjs(date).format("YYYY");
    }
    return (
        <>
            <div className="w-screen h-full md:h-screen relative our-story">
                <div className="flex flex-col lg:flex-row h-full lg:h-auto">
                    <div className="w-full lg:w-1/2 h-[calc(100vh/2)] lg:h-screen relative">
                        <div
                            className="absolute -bottom-5 lg:-right-5 lg:bottom-auto flex justify-center w-full lg:h-full">
                            <div
                                className="w-full h-full flex flex-row lg:flex-col items-center sm:items-end justify-center space-x-8 md:space-x-16 lg:space-x-0 lg:space-y-10">
                                {stories.map((_, i) => (
                                    <div className=" z-30 flex flex-col items-center cursor-pointer justify-center"
                                         key={i}>
                                        <div className="w-10 h-10 rounded-full">
                                            <Image
                                                onClick={() => setCurrentIndex(i)}
                                                className={"w-10 h-10 rounded-full " + (currentIndex == i ? ' border-2 border-white' : '')}
                                                src={`/images/sliders/${i + 1}.jpg`}
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
                                           src="/images/icons/love.png" width={100} height={100}
                                           alt="Love">
                                    </Image>
                                    <Image className="size-10 lg:size-16 relative lg:top-20"
                                           src="/images/icons/love.png" width={100} height={100}
                                           alt="Love">
                                    </Image>
                                    <Image className="size-10 lg:size-20 relative lg:top-0"
                                           src="/images/icons/love.png" width={100} height={100}
                                           alt="Love">
                                    </Image>
                                </div>

                            </div>
                            <div className="absolute z-20 -top-[4%] -right-[4%] lg:top-28 lg:right-52">
                                <div className="flex relative">
                                    <Image className="scale-50 lg:scale-125" src="/images/icons/rose-4.png"
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
                                    src={`/images/sliders/${currentIndex + 1}.jpg`} width={700} height={700}
                                    alt="image"/>
                            </div>
                            <div
                                className="lg:hidden absolute z-10 border-opacity-50 border-pink-300 border-[3px] border-double w-[90%] h-[90%] m-10"></div>
                        </div>
                    </div>

                    <div
                        className="w-full lg:w-1/2 relative bg-rose-100 h-full lg:h-screen flex items-center">
                        <div
                            className="w-full md:w-4/5 lg:w-2/3 mx-auto flex justify-center space-y-2 lg:space-y-10 flex-col px-6 pt-10 pb-8 lg:p-0">
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
                                <p className="text-3xl md:text-6xl font-bold">{stories[currentIndex].title}</p>
                                <p className="text-xl font-medium leading-8 text-justify">{stories[currentIndex].content}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}