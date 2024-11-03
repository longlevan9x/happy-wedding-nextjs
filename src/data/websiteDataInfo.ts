import {CoupleModel} from "@/types/couple";
import {WeddingModel} from "@/types/wedding";
import {OurStoryModel} from "@/types/ourStory";

export const CoupleInfo: CoupleModel = {
    male: {
        fullName: "Đỗ Trinh",
        avatar: {
            src: "/images/avatars/male_1_1.jpg",
            with: 500,
            height: 500,
        },
        description: "Là một chàng trai hiền lành, chu đáo và đam mê nấu ăn. Sự quan tâm chân thành của anh dành cho mọi người khiến anh luôn được yêu quý và trân trọng.",
        address: "Số 21B, xóm Sung, thôn Đống, Cao Viên, Thanh Oai, Hà Nội",
        mapAddress: "https://maps.app.goo.gl/qvcKc5QoV1A27Hd57",
    },
    female: {
        fullName: 'Lê Phương',
        avatar: {
            src: "/images/avatars/female_1_1.jpg",
            with: 500,
            height: 500,
        },
        description: "Là một cô gái đáng yêu, nội tâm sâu sắc và luôn yêu thương gia đình. Sự dịu dàng, biết lắng nghe và chân thành của cô khiến mọi người cảm thấy gần gũi, ấm áp.",
        address: "Số nhà 27, đường 3, Hưng giáo, Tam Hưng, Thanh Oai, Hà Nội",
        mapAddress: "https://maps.app.goo.gl/MQ2mr7zchtMsPgED7"
    },
};

export const WeddingInfo: WeddingModel = {
    weddingDate: "2024/11/09"
};

export const OurStoryInfos: OurStoryModel[] = [
    {
        date: '2024/09/20',
        caption: "Bạn Có Tin Vào Tình Yêu Online Không?",
        image: {
            src: "/images/galleries/8.jpg",
            with: 700,
            height: 700,
        },
        content: "Tôi đã từng không tin vào tình yêu online. Đã từng nghĩ làm sao có thể thích một người chưa từng gặp mặt? Vậy mà giờ đây tôi lại đang như vậy, bây giờ tôi đã hiểu: thế giới ảo tình yêu thật đấy!!! Ngày ấy vu vơ đăng một dòng status trên facebook than thở, vu vơ đùa giỡn nói chuyện với một người xa lạ chưa từng quen. Mà nào hay biết, 4 năm sau người ấy lại là chồng mình."
    },
    {
        date: '2024/10/21',
        caption: "Lời Tỏ Tình Dễ Thương^^",
        image: {
            src: "/images/galleries/7.jpg",
            with: 700,
            height: 700,
        },
        content: "Ngày ấy, tôi 21! Một mình giữa phố thị nấp tập. Mỗi chiều cuối tuần thường chạy xe vòng quanh qua những con phố, len lỏi trong từng dòng người tấp nập. Hay thậm chí là ghé vào một quán cà phê ven đường để ngồi đó và cảm nhận về cuộc sống của riêng mình. Đôi khi lạc lõng và hơi cô đơn. Nhưng rồi một ngày đẹp trời, người con trai ấy xuất hiện, nắm tay rồi thủ thỉ vào tai: “Hy vọng sau này anh được làm những điều ấy cùng em”."
    },
    {
        date: '2024/11/19',
        caption: "Phút Giây Cầu Hôn",
        image: {
            src: "/images/galleries/6.jpg",
            with: 700,
            height: 700,
        },
        content: "5 năm bên nhau không phải là quãng thời gian quá dài, nhưng đủ cho chúng ta nhận ra được rất nhiều điều. Yêu nhau, vun vén hạnh phúc và cùng nỗ lực vượt qua những khó khăn trong cuộc sống. Chúng ta từ 2 con người xa lạ mà bước vào cuộc đời nhau. Và giờ đây chúng ta tiếp tục cùng nhau sang trang mới. Giây phút anh ngỏ lời “Làm vợ anh nhé!”, em đã nguyện ý đời này, đi đâu cũng được, miễn là cùng anh."
    },
    {
        date: '2024/12/10',
        caption: "Ngày Lễ Đính Hôn",
        image: {
            src: "/images/galleries/5.jpg",
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
        src: "/images/meta/wedding.jpg",
        type: 'image/jpeg',
        width: 100,
        height: 100
    },
    url: "https://happy-wedding-topaz.vercel.app"
}

export const WeddingEventInfos = [
    {
        title: "LỄ CƯỚI NHÀ NỮ",
        date: "2024/11/09",
        time: "16:30",
        address: `Tại gia đình nhà gái - ${CoupleInfo.female.address}`,
        image: {
            src: "/images/events/1.jpg",
            type: 'image/jpeg',
            width: 300,
            height: 300
        },
        mapAddress: CoupleInfo.female.mapAddress,
        active: true

    },
    {
        title: "TIỆC CƯỚI NHÀ GÁI",
        date: "2024/11/10",
        time: "09:00",
        address: `Tại gia đình nhà gái - ${CoupleInfo.female.address}`,
        image: {
            src: "/images/events/2.jpg",
            type: 'image/jpeg',
            width: 300,
            height: 300
        },
        mapAddress: CoupleInfo.female.mapAddress,
        active: false

    },
    {
        title: "LỄ CƯỚI NHÀ TRAI",
        date: "2024/11/10",
        time: "14:00",
        address: `Tại gia đình nhà trai - ${CoupleInfo.male.address}`,
        image: {
            src: "/images/events/3.jpg",
            type: 'image/jpeg',
            width: 300,
            height: 300
        },
        mapAddress: CoupleInfo.male.mapAddress,
        active: true
    },
    {
        title: "TIỆC CƯỚI NHÀ TRAI",
        date: "2024/11/09",
        time: "16:30",
        address: `Tại gia đình nhà trai - ${CoupleInfo.male.address}`,
        image: {
            src: "/images/events/4.jpg",
            type: 'image/jpeg',
            width: 300,
            height: 300
        },
        mapAddress: CoupleInfo.male.mapAddress,
        active: true
    }
];