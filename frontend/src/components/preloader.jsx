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
        const startInterval = () => {
            intervalIdRef.current = setInterval(() => {
                setTimerCount(prevCount => {
                    if (prevCount >= 100) {
                        clearInterval(intervalIdRef.current);
                        preloader.current.classList.add("green-screen-animation");
                        preloaderWhite.current.classList.add("white-screen-animation");
                        preloaderText.current.style.opacity = "0";
                        preloaderSpinner.current.style.opacity = "0";
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
        <>
            <div className="green-screen bg-[#00ff7b] flex justify-center" ref={preloader}>

                <div className="flex w-full h-full justify-center items-center transition-opacity" ref={preloaderSpinner}>
                    <l-jelly
                        size="80"
                        speed="0.5"
                        color="black"
                    />
                </div>

                <div
                    className="absolute bottom-0 left-0 px-[20px] font-bold flex justify-between w-full items-end transition-opacity"
                    ref={preloaderText}
                >
                    <span className="uppercase self-center text-[3rem] leading-none mb-[-4rem]">loading{loadingDots}</span>
                    <span className="text-[9rem] leading-none">{timerCount}%</span>
                </div>
            </div>
            <div className="white-screen" ref={preloaderWhite}>
                hey
            </div>
        </>
    );
}
