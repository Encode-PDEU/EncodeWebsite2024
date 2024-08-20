import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

export default function Footer() {
    const [text, setText] = useState(["E", "N", "C", "O", "D", "E"]);
    const shuffleIntervalRef = useRef(null);
    const footerRef = useRef(null);
    const footerTextRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);
    const [isTextVisible, setIsTextVisible] = useState(false);

    function getRandomCharacter() {
        const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ;!@#$%^&*(){}[]Ø";
        return chars[Math.floor(Math.random() * chars.length)];
    }

    const handleMouseEnter = () => {
        let count = 0;

        shuffleIntervalRef.current = setInterval(() => {
            count++;
            setText((text) => text.map(() => getRandomCharacter()));
            if (count >= 30) {
                setText(["E", "N", "C", "O", "D", "E"]);
                clearInterval(shuffleIntervalRef.current);
                count = 0;
            }
        }, 10);
    };

    const handleMouseLeave = () => {
        setText(["E", "N", "C", "O", "D", "E"]);
        clearInterval(shuffleIntervalRef.current);
    };


    useEffect(() => {
        const handleIntersection = (entries) => {
            entries.forEach(entry => {
                if (entry.target === footerRef.current) setIsVisible(entry.isIntersecting)
                else if (entry.target === footerTextRef.current) setIsTextVisible(entry.isIntersecting);
            });
        };

        const observer = new IntersectionObserver(handleIntersection, { threshold: 0.2 });

        if (footerRef.current) observer.observe(footerRef.current);
        if (footerTextRef.current) observer.observe(footerTextRef.current);

        return () => {
            if (footerRef.current) observer.unobserve(footerRef.current);
            if (footerTextRef.current) observer.unobserve(footerTextRef.current);
        };
    }, []);

    return (
        <div
            ref={footerRef}
            className={`flex items-center justify-center flex-col overflow-hidden transition-opacity duration-1000 ease-in-out
             ${isVisible ? 'opacity-100' : 'opacity-0'}`}
        >
            <hr style={{ borderColor: "#00ff7b" }} className="w-full sm:mb-6 pt-[50px]" />

            <div className="flex w-full justify-between sm:px-[3em] px-[1.3em] pb-[2em] items-start">
                <div className="flex flex-col justify-end items-start">
                    <span className="text-foreground-400 mb-4 z-[1]">
                        STAY CONNECTED
                    </span>

                    <a className="z-[1] cursor-pointer" href="https://www.instagram.com/encode_pdeu/">INSTAGRAM</a>
                    <a className="z-[1] cursor-pointer" href="https://twitter.com/Encode_PDEU">TWITTER</a>
                    <a className="z-[1] cursor-pointer" href="https://www.linkedin.com/company/encode-pdpu/">LINKEDIN</a>
                </div>

                <div className="flex flex-col justify-end items-end ">
                    <span className="text-foreground-400 mb-4 z-[1]">
                        PAGES
                    </span>

                    <Link to="/">
                        <span className="z-[1] cursor-pointer">HOME</span>
                    </Link>
                    <span className="z-[1] cursor-pointer">ABOUT</span>
                    <Link to="team">
                        <span className="z-[1] cursor-pointer">TEAM</span>
                    </Link>
                    <span className="z-[1] cursor-pointer">CONTACT</span>
                </div>
            </div>

            <span className="text-xs text-foreground-400 sm:mb-[-1vw] lowercase">Built by the 2024 Web Dev Team at Encode</span>
            <div className="flex justify-betweeen items-center w-full flex-col overflow-hidden" ref={footerTextRef}>
                <span
                    className={`font-bold leading-none sm:mb-[-3vw] text-[20vw] z-[1] hover:text-[#00ff7b] transition-all 
                    duration-500
                    overflow-hidden ${isTextVisible ? " transformVisible" : "transformInvisible"}`}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    {text.map((letter, index) => (
                        <span key={index}>{letter}</span>
                    ))}
                </span>
            </div>
        </div>
    );
}
