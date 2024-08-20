import { transform } from "framer-motion";
import { useRef, useEffect, useState } from "react";

export default function Quote() {
    const sectionRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);
    const [imageHovered, setImageHovered] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting);
            },
            { threshold: 0.3 }
        );

        if (sectionRef.current) observer.observe(sectionRef.current);

        return () => {
            if (sectionRef.current) observer.unobserve(sectionRef.current);
        };
    }, []);

    useEffect(() => { console.log(imageHovered); }, [imageHovered]);

    return (
        <section
            ref={sectionRef}
            className={`h-fit sm:min-h-[100dvh] min-h-[70dvh] pointer-events-none justify-center w-full flex flex-col items-center z-[1] font-bold
            sm:text-[4vw] text-[7vw] ${isVisible ? 'opacity-100' : 'opacity-0'}
            transition-opacity duration-1000 ease-in-out`}
        >
            <img
                src="https://i.ibb.co/bFJ46nW/IMG-4313.jpg"
                alt="IMG-4313"
                className="w-screen object-cover sm:h-[80vh] h-[60vh] absolute z-[1] opacity-30 select-none"
            />

            <div className={`z-[2] w-full flex flex-col sm:gap-0 gap-5 sm:min-h-[80vh] min-h-[60vh] justify-center`}>

                <div className="overflow-hidden flex justify-center">
                    <span className={`text-start transition-transform duration-1000 ${isVisible ? 'transformVisible' : 'transformInvisible'} ${imageHovered ? "" : ""}`}>We're Architects of Change
                    </span>
                </div>

                <div className="overflow-hidden flex justify-center">
                    <span className={`font-normal sm:text-[3vw] text-[5vw] transition-transform  text-start duration-1000  ${isVisible ? 'transformVisible' : 'transformInvisible'}`}>
                        Building a community that actually creates an impact.
                    </span>
                </div>

            </div>
        </section>
    );
}
