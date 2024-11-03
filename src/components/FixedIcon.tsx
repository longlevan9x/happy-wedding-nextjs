import {ChatBubbleLeftIcon, SpeakerWaveIcon, SpeakerXMarkIcon} from "@heroicons/react/24/outline";
import {MutableRefObject, useRef, useState} from "react";

export function FixedIcon() {
    const mp3Ref: MutableRefObject<HTMLAudioElement | null> = useRef(null);
    const [isPlayMp3, setIsPlayMp3] = useState(false);

    const playMp3 = (_isPlayMp3: boolean) => {
        _isPlayMp3 = !_isPlayMp3;
        setIsPlayMp3(_isPlayMp3);
        if (_isPlayMp3) {
            mp3Ref.current?.play().then(r => console.log(r)).catch(e => console.log(e));
        } else {
            mp3Ref.current?.pause();
        }
    }

    return (
        <>
            <div className="fixed bottom-10 left-6 sm:right-6 sm:left-auto space-y-5">
                <a href="#send-wish">
                    <div className="p-3 rounded-full z-50 bg-pink-500 hover:bg-pink-600 hover:scale-110 cursor-pointer" title="Gửi lời chúc">
                        <ChatBubbleLeftIcon
                            className="w-5 h-5 text-white"></ChatBubbleLeftIcon>
                    </div>
                </a>

                <div className="p-3 rounded-full z-50 bg-pink-500 hover:bg-pink-600 hover:scale-110 cursor-pointer" onClick={() => playMp3(isPlayMp3)}
                     title="Phát nhạc">
                    {
                        isPlayMp3 && <SpeakerWaveIcon className="w-5 h-5 text-white"></SpeakerWaveIcon>
                    }
                    {
                        !isPlayMp3 && <SpeakerXMarkIcon className="w-5 h-5 text-white"></SpeakerXMarkIcon>
                    }
                </div>
            </div>

            <audio src="/mp3/background.mp3" ref={mp3Ref} className="hidden"></audio>
        </>
    );
}