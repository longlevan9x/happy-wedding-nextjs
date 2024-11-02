import {Sacramento} from "next/font/google";

const sacramento = Sacramento({
    subsets: ['latin'],
    weight: "400",
    display: 'swap',
})

export function ConfirmJoin() {
    return <>
        <div
            className="relative w-full bg-[url('/images/bg/img_bg_4.jpg')] h-96 bg-no-repeat bg-cover bg-center bg-local">
            <div className="w-full absolute bg-black opacity-40 h-full z-10"></div>
            <div className="w-full h-full flex-col relative z-20 flex items-center justify-center space-y-12 px-10">
                <div className="flex justify-center flex-col items-center space-y-8">
                    <div className={sacramento.className}>
                        <h1 className="text-white text-4xl sm:text-6xl font-semibold">Are You Attending?</h1>
                    </div>
                    <h2 className="text-gray-100 text-base sm:text-lg text-center">
                        Please Fill-up the form to notify you that you&#39;re attending. Thanks.
                    </h2>
                </div>
                <div
                    className="flex flex-col sm:flex-row w-full lg:w-2/3 xl:w-1/2 items-center justify-center space-y-5 sm:space-y-0 sm:space-x-6 md:space-x-10 text-white">
                    <div className="w-full sm:w-2/3 md:w-2/3 lg:w-1/2 xl:w-1/2">
                        <input type="text" placeholder="Nhập tên hoặc số điện thoại"
                               className="w-full bg-white px-5 py-3 text-base sm:text-xl bg-opacity-30 placeholder-white outline-0 rounded-lg"/>
                    </div>
                    <div className="w-full sm:w-auto">
                        <button
                            className="uppercase w-full sm:px-5 md:px-10 hover:bg-pink-600 lg:px-16 py-3 bg-pink-500 rounded-full">
                            I am Attending
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </>;
}