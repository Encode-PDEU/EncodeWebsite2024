import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";

export default function Preloader({ setPreloaderEnded }) {
    const location = useLocation();
    const preloader = useRef(null);
    const preloaderWhite = useRef(null);
    const preloaderText = useRef(null);
    const preloaderSpinner = useRef(null);
    const intervalIdRef = useRef(null);

    const [timerCount, setTimerCount] = useState(0);
    const [intervalTime, setIntervalTime] = useState(location.pathname === "/" ? 6 : 1);
    const [loadingDots, setLoadingDots] = useState("...");
    const [text, setText] = useState(Array(10).fill());

    // useEffect(() => {
    //     console.log(location.pathname === "/");
    // }, [location]);

    function getRandomCharacter() {
        const chars = ";!@#$%^&*(){}[]Ø;!@#$%^&*(){}[]Ø;!@#$%^&*(){}[]Ø"
        return chars[Math.floor(Math.random() * chars.length)];
    }

    useEffect(() => {
        preloader.current.scrollIntoView({ block: 'start' });
        const startInterval = () => {
            document.documentElement.style.overflowY = 'hidden';
            window.scrollTo(0, 0);

            intervalIdRef.current = setInterval(() => {
                setTimerCount(prevCount => {
                    if (prevCount >= 100) {
                        clearInterval(intervalIdRef.current);
                        preloader.current.classList.add("preloader1-animation");
                        preloaderWhite.current.classList.add("preloader2-animation");
                        preloaderText.current.style.opacity = "0";
                        preloaderSpinner.current.style.opacity = "0";

                        setTimeout(() => {
                            document.documentElement.style.overflowY = 'scroll';
                            setPreloaderEnded(true);
                        }, 100);

                        return prevCount;
                    }

                    if (location.pathname === "/") {
                        if (prevCount === 60) setIntervalTime(10);
                        if (prevCount === 75) setIntervalTime(20);
                        if (prevCount === 90) setIntervalTime(75);


                        if (prevCount >= 82 && prevCount <= 90)
                            setText(["l", "o", "a", "d", "i", "n", "g", " ", "e", "n", "c", "o", "d", "e", " ", "w", "e", "b", "s", "i", "t", "e"]);
                        else if (prevCount >= 95 && prevCount <= 100) setText(["w", "e", "l", "c", "o", "m", "e", "."]);
                        else setText((text) => text.map(() => getRandomCharacter()))
                    }

                    return prevCount + (location.pathname === "/" ? 1 : 5);
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

                <div className="h-[100vh] absolute w-full dark:bg-black bg-white dark:bg-grid-[white]/[0.2] bg-grid-black/[0.2] top-0 z-0 flex items-center justify-center opacity-70">
                    <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]">
                    </div>
                </div>

                <div className="flex w-full h-full justify-center items-center transition-opacity flex-col z-[1] relative" ref={preloaderSpinner}>

                    <span className="text-xl">
                        {text.map((letter) => letter)}
                    </span>

                    <l-jelly
                        size="50"
                        speed="0.5"
                        color="#00ff7b"
                    ></l-jelly>
                </div>

                <div
                    className="absolute bottom-0 left-0 sm:px-[20px] px-[15px] font-bold flex justify-between w-full items-end transition-opacity text-[#00ff7b]"
                    ref={preloaderText}
                >
                    <span className="uppercase self-center sm:text-[2rem] leading-none sm:mb-[-4rem]">loading{loadingDots}</span>
                    <span className="sm:text-[7rem] text-[3rem] leading-none font-bold">
                         {timerCount % 3 === 0 && timerCount !== 100 ?
                            getRandomCharacter() + getRandomCharacter() + getRandomCharacter()
                            : timerCount}%
                    </span>
                </div>
            </div>
            <div className="preloader2 bg-[#00ff7b]" ref={preloaderWhite} />
        </div>
    );
}
