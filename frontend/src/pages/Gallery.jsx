import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'framer-motion';
import { Button } from "@nextui-org/button";
import image1 from "../images/gallery/1.webp";
import image2 from "../images/gallery/2.webp";
import image3 from "../images/gallery/3.webp";
import image4 from "../images/gallery/4.webp";
import image5 from "../images/gallery/5.webp";
import image6 from "../images/gallery/6.webp";

gsap.registerPlugin(ScrollTrigger);

const galleryImages = [
    { url: image1, description: "Code Tatva 2024" },
    { url: image2, description: "Web Development Workshop" },
    { url: image3, description: "CTF Competition" },
    { url: image4, description: "AI/ML Workshop" },
    { url: image5, description: "Team Building Activity" },
    { url: image6, description: "Encode Meetup" },
    { url: "https://i.ibb.co/KNhB2Dz/img1.jpg", description: "Tech Talk" },
    { url: "https://i.ibb.co/JtbNDgb/img2.jpg", description: "Hackathon" },
    { url: "https://i.ibb.co/X4xzJfz/img3.jpg", description: "Team Meeting" }
];

function GalleryImage({ url, description, index }) {
    const cardRef = useRef(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => { setVisible(entry.isIntersecting); },
            { threshold: 0.3 }
        );

        if (cardRef.current) observer.observe(cardRef.current);

        return () => {
            if (cardRef.current) observer.unobserve(cardRef.current);
        };
    }, []);

    return (
        <div 
            ref={cardRef}
            className={`relative group cursor-none overflow-hidden rounded-none 
                bg-[#00ff7b] bg-opacity-15 
                aspect-[4/3] // Changed aspect ratio
                hover:translate-y-[-5px] transition-all 
                hover:outline hover:outline-1 hover:outline-[#00ff7b]
                ${visible ? 'opacity-100' : 'opacity-0'}`}
        >
            <div className="absolute top-4 right-4 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Button 
                    isIconOnly
                    radius="none"
                    className="bg-[#00ff7b] bg-opacity-20 backdrop-blur-sm"
                    onClick={() => window.open(url, '_blank')}
                >
                    <span className="text-[#00ff7b]">↗</span>
                </Button>
            </div>

            <img 
                src={url} 
                alt={description}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/50 to-transparent p-6 transform translate-y-full transition-transform duration-300 group-hover:translate-y-0">
                <p className="text-center minecraft text-sm text-[#00ff7b]">{description}</p>
            </div>
        </div>
    );
}

export default function GalleryPage() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <section className="sm:min-h-[70vh] min-h-screen pt-[160px] justify-start h-fit w-full flex flex-col items-center gap-6">
            {/* Hero Section - Matching Team Page */}
            <div className="flex flex-col items-center gap-2">
                <span className="font-semibold text-5xl">Gallery</span>
                <span className="font-normal text-md text-foreground-500 minecraft">
                    Capturing moments of innovation and learning
                </span>
            </div>

            {/* Gallery Grid */}
            <div className="flex sm:w-fit w-full sm:p-0 p-[2em]">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 
                    md:max-w-[90vw] lg:max-w-[85vw] justify-center mb-4 
                    auto-rows-auto">
                    {galleryImages.map((image, index) => (
                        <GalleryImage 
                            key={index}
                            url={image.url}
                            description={image.description}
                            index={index}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}