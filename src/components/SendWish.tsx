import Image from "next/image";
import React, {FormEvent, useState} from "react";
import {WishesProps} from "@/types/wish";
import {titleFont} from "@/fonts/font";

export function SendWish({wishes}: WishesProps) {
    const [formState, setFormState] = useState({name: "", emailOrPhone: "", wish: ""});
    const [message, setMessage] = useState("");

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        // Fetching API endpoint
        try {
            const res = await fetch("/api/wish/create", {
                method: "POST",
                body: JSON.stringify(formState),
            });
            await res.json();
            setMessage("Cảm ơn đã gửi lời chúc cho chúng tôi.");
            setFormState({name: "", emailOrPhone: "", wish: ""});
            wishes.unshift(formState);
            setTimeout(() => {
                setMessage("");
            }, 3000);
        } catch (e) {
            console.log(e);
            setMessage("Awww~. Gửi không thành công mất rồi. Hãy thử lại nhé.");
        }
    };

    const handleChange = (e: any) => {
        setFormState((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    return (
        <>
            <div
                className="relative w-full bg-[url('/images/bg/img_bg_4.jpg')] bg-no-repeat bg-cover bg-center bg-local">
                <div className="w-full absolute bg-black opacity-40 h-full z-10"></div>
                <div
                    className="w-full h-full flex-col relative z-20 flex items-center justify-center space-y-12  px-3 sm:px-10 py-24">
                    <div className="flex justify-center flex-col items-center space-y-8">
                        <div className={"flex flex-col items-center space-y-4 " + titleFont.className}>
                            <h1 className="text-white text-4xl sm:text-6xl font-semibold">Sổ lưu bút</h1>
                            <Image src="/images/bg/divider.png" alt="Divider" width={150} height={21}></Image>
                        </div>
                        <h2 className="text-gray-100 text-base sm:text-lg text-center">
                            Cảm ơn bạn rất nhiều vì đã gửi những lời chúc mừng tốt đẹp nhất đến đám cưới của chúng tôi!
                        </h2>
                        <div className="w-full flex justify-center">
                            {
                                message &&
                                <h3 className="absolute duration-200 px-4 py-2 font-semibold rounded bg-pink-400 bg-opacity-30 text-white">
                                    {message}
                                </h3>
                            }
                        </div>
                    </div>
                    <div
                        className="w-full lg:w-2/3 mx-auto flex flex-col lg:flex-row space-y-10 lg:space-y-0 lg:space-x-10">
                        <form className="w-full lg:w-1/2 flex flex-col text-white space-y-5" onSubmit={handleSubmit}>
                            <div className="w-full">
                                <input type="text" placeholder="Nhập họ tên"
                                       required
                                       name="name"
                                       onChange={handleChange}
                                       value={formState.name}
                                       className="w-full bg-white px-5 py-3 text-base sm:text-xl bg-opacity-20 placeholder-white outline-0 rounded-lg"/>
                            </div>
                            <div className="w-full">
                                <input type="text" placeholder="Nhập số điện thoại hoặc email"
                                       required
                                       id="emailOrPhone"
                                       name="emailOrPhone"
                                       onChange={handleChange}
                                       value={formState.emailOrPhone}
                                       className="w-full bg-white px-5 py-3 text-base sm:text-xl bg-opacity-20 placeholder-white outline-0 rounded-lg"/>
                            </div>
                            <div className="w-full">
                            <textarea rows={4} placeholder="Nhập lời chúc của bạn"
                                      required
                                      name="wish"
                                      value={formState.wish}
                                      onChange={handleChange}
                                      className="w-full bg-white px-5 py-3 text-base sm:text-xl bg-opacity-20 placeholder-white outline-0 rounded-lg"></textarea>
                            </div>
                            <div className="w-full">
                                <button
                                    type="submit"
                                    className="uppercase w-full sm:px-5 md:px-10 hover:bg-pink-600 lg:px-16 py-3 bg-pink-500 rounded-full">
                                    Gửi lời chúc
                                </button>
                            </div>
                        </form>
                        <div
                            className="w-full lg:w-1/2 bg-white bg-opacity-20 text-white max-h-[500px] overflow-scroll">
                            <div className="w-full">
                                <ul>
                                    {wishes && wishes.map((wish, i) => (
                                        <li key={i}
                                            className="px-5 py-3 border-b-[1px] border-b-rose-200 border-opacity-30">
                                            <h1 className="text-3xl font-semibold mb-2">{wish.name}</h1>
                                            <p>{wish.wish}</p>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
}