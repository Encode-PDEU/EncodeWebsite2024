import { useEffect, useRef, useState } from "react";
import 'ldrs/jelly'

export default function Preloader() {
    const preloader = useRef(null);
    const preloaderWhite = useRef(null);
    const preloaderText = useRef(null);
    const preloaderSpinner = useRef(null);
    const intervalIdRef = useRef(null);

    const [timerCount, setTimerCount] = useState(0);
    const [intervalTime, setIntervalTime] = useState(5);
    const [loadingDots, setLoadingDots] = useState("...");


    useEffect(() => {
        preloader.current.scrollIntoView({ block: 'start' });
        const startInterval = () => {
            document.documentElement.style.overflow = 'hidden';

            intervalIdRef.current = setInterval(() => {
                setTimerCount(prevCount => {
                    if (prevCount >= 100) {
                        clearInterval(intervalIdRef.current);
                        preloader.current.classList.add("preloader1-animation");
                        preloaderWhite.current.classList.add("preloader2-animation");
                        preloaderText.current.style.opacity = "0";
                        preloaderSpinner.current.style.opacity = "0";

                        setTimeout(() => {
                            document.documentElement.style.overflow = 'scroll';
                        }, 100);

                        return prevCount;
                    }

                    if (prevCount === 70) setIntervalTime(15);
                    if (prevCount === 90) setIntervalTime(75);
                    return prevCount + 1;
                });
            }, intervalTime);
        };

        const loadingDots = setInterval(() => {
            setLoadingDots(prev => {
                if (prev === "...") return ".";
                else return prev + ".";
            });
        }, 150);

        startInterval();

        return () => {
            clearInterval(intervalIdRef.current);
            clearInterval(loadingDots);
        }
    }, [intervalTime]);

    return (
        <div className="fixed top-0 z-20">
            <div className="preloader1 flex justify-center bg-black" ref={preloader}>

                <div className="flex w-full h-full justify-center items-center transition-opacity flex-col" ref={preloaderSpinner}>

                    encode
                    <l-jelly
                        size="50"
                        speed="0.5"
                        color="#00ff7b"
                    />
                </div>

                <div
                    className="absolute bottom-0 left-0 px-[20px] font-bold flex justify-between w-full items-end transition-opacity text-[#00ff7b]                    "
                    ref={preloaderText}
                >
                    <span className="uppercase self-center text-[2rem] leading-none mb-[-4rem]">loading{loadingDots}</span>
                    <span className="text-[7rem] leading-none minecraft font-normal">{timerCount}%</span>
                </div>
            </div>
            <div className="preloader2 bg-[#00ff7b]" ref={preloaderWhite}>
                hey
            </div>
        </div>
    );
}
