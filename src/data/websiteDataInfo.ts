import {CoupleModel} from "@/types/couple";
import {WeddingModel} from "@/types/wedding";
import {OurStoryModel} from "@/types/ourStory";

export const CoupleInfo: CoupleModel = {
    male: {
        fullName: "Lê Long",
        avatar: {
            src: "/images/sliders/1.jpg",
            with: 500,
            height: 500,
        },
        description: " Là bác sĩ nha khoa hiện đang công tác tại một phòng khám nha khoa ở Quận 1 thành phồ Hồ Chí Minh. Là một người hiền lành và ít nói. Luôn coi trọng tình cảm và yêu thương gia đình."
    },
    female: {
        fullName: 'Ngô Ngọc',
        avatar: {
            src: "/images/sliders/2.jpg",
            with: 500,
            height: 500,
        },
        description: " Là bác sĩ nha khoa hiện đang công tác tại một phòng khám nha khoa ở Quận 1 thành phồ Hồ Chí Minh. Là một người hiền lành và ít nói. Luôn coi trọng tình cảm và yêu thương gia đình."
    }
};

export const WeddingInfo: WeddingModel = {
    weddingDate: "2024/12/24"
};

export const OurStoryInfos: OurStoryModel[] = [
    {
        date: '2024/09/20',
        caption: "Bạn Có Tin Vào Tình Yêu Online Không?",
        image: {
            src: "/images/sliders/8.jpg",
            with: 700,
            height: 700,
        },
        content: "Tôi đã từng không tin vào tình yêu online. Đã từng nghĩ làm sao có thể thích một người chưa từng gặp mặt? Vậy mà giờ đây tôi lại đang như vậy, bây giờ tôi đã hiểu: thế giới ảo tình yêu thật đấy!!! Ngày ấy vu vơ đăng một dòng status trên facebook than thở, vu vơ đùa giỡn nói chuyện với một người xa lạ chưa từng quen. Mà nào hay biết, 4 năm sau người ấy lại là chồng mình."
    },
    {
        date: '2024/10/21',
        caption: "Lời Tỏ Tình Dễ Thương^^",
        image: {
            src: "/images/sliders/7.jpg",
            with: 700,
            height: 700,
        },
        content: "Ngày ấy, tôi 21! Một mình giữa phố thị nấp tập. Mỗi chiều cuối tuần thường chạy xe vòng quanh qua những con phố, len lỏi trong từng dòng người tấp nập. Hay thậm chí là ghé vào một quán cà phê ven đường để ngồi đó và cảm nhận về cuộc sống của riêng mình. Đôi khi lạc lõng và hơi cô đơn. Nhưng rồi một ngày đẹp trời, người con trai ấy xuất hiện, nắm tay rồi thủ thỉ vào tai: “Hy vọng sau này anh được làm những điều ấy cùng em”."
    },
    {
        date: '2024/11/19',
        caption: "Phút Giây Cầu Hôn",
        image: {
            src: "/images/sliders/6.jpg",
            with: 700,
            height: 700,
        },
        content: "5 năm bên nhau không phải là quãng thời gian quá dài, nhưng đủ cho chúng ta nhận ra được rất nhiều điều. Yêu nhau, vun vén hạnh phúc và cùng nỗ lực vượt qua những khó khăn trong cuộc sống. Chúng ta từ 2 con người xa lạ mà bước vào cuộc đời nhau. Và giờ đây chúng ta tiếp tục cùng nhau sang trang mới. Giây phút anh ngỏ lời “Làm vợ anh nhé!”, em đã nguyện ý đời này, đi đâu cũng được, miễn là cùng anh."
    },
    {
        date: '2024/12/10',
        caption: "Ngày Lễ Đính Hôn",
        image: {
            src: "/images/sliders/5.jpg",
            with: 700,
            height: 700,
        },
        content: "“Tiếng trái tim đôi ta đập thật nhanh. Thì thầm lời yêu thương. Ngày tình về chung đôi...” Sau bao nhiêu chờ đợi, cuối cùng ngày vui của chúng ta cũng tới rồi. Cảm ơn vì mình đã luôn là một phần trong cuộc sống của nhau. Em và anh không chỉ là người yêu mà chúng ta còn là tri kỷ. Ngày hôm nay, em sẽ là cô dâu của anh và sau này sẽ là mẹ của các con anh."
    }
]

export const Metadata = {
    title: `Thư mời cưới ${CoupleInfo.male.fullName} & ${CoupleInfo.female.fullName}`,
    icon: {
        type: "image/png",
        src: "/icons/logo_32.png"
    },
    keywords: "Happy, Wedding, My Wedding, Lễ cưới, My Love, Love u, Love You",
    description: "Chúng tôi trân trọng mời bạn đến chung vui trong ngày cưới của chúng tôi.",
    image: {
        src: "https://happy-wedding-topaz.vercel.app/images/meta/wedding.jpg",
        type: 'image/jpeg',
        width: 100,
        height: 100
    }
}