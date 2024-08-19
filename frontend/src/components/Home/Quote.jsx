import { useRef, useEffect, useState } from "react";

export default function Quote() {
    const sectionRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting);
            },
            { threshold: 0.4 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    return (
        <section
            ref={sectionRef}
            className={`h-fit min-h-[100dvh] justify-center w-full flex flex-col items-center z-[1] font-bold
            sm:text-[4vw] text-[7vw] ${isVisible ? 'opacity-100' : 'opacity-0'}
            transition-opacity duration-1000 ease-in-out`}
        >
            <img
                src="https://i.ibb.co/bFJ46nW/IMG-4313.jpg"
                alt="IMG-4313"
                className="w-screen object-cover h-[80vh] absolute z-[1] opacity-30 select-none"
            />
            <div className="z-[2] w-full flex flex-col sm:gap-0 gap-5">

                <div className="overflow-hidden flex justify-center">
                    <span className={`text-center transition-transform duration-1000  ${isVisible ? 'transformVisible' : 'transformInvisible'}`}>We're Architects of Change
                    </span>
                </div>

                <div className="overflow-hidden flex justify-center">
                    <span className={`text-center font-normal sm:text-[3vw] text-[5vw transition-transform duration-1000  ${isVisible ? 'transformVisible' : 'transformInvisible'}`}>We're Architects of Change
                        Building a community that actually creates an impact.
                    </span>
                </div>

            </div>
        </section>
    );
}
