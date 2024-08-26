import { Button } from '@nextui-org/button';
import gsap from 'gsap';
import { useEffect, useRef, useState } from 'react';
import { horizontalLoop } from "../../gsapLoopHelper";
import image1 from "../../images/gallery/1.webp"
import image2 from "../../images/gallery/2.webp"
import image3 from "../../images/gallery/3.webp"
import image4 from "../../images/gallery/4.webp"
import image5 from "../../images/gallery/5.webp"
import image6 from "../../images/gallery/6.webp"

const imageUrls = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    'https://i.ibb.co/KNhB2Dz/img1.jpg',
    'https://i.ibb.co/JtbNDgb/img2.jpg',
    'https://i.ibb.co/X4xzJfz/img3.jpg',
    'https://i.ibb.co/Vp3FTyS/img4.jpg',
    'https://i.ibb.co/SsJQ3Ym/img5.jpg',
    'https://i.ibb.co/tB0Pr3g/img6.jpg',
    'https://i.ibb.co/zxh9rw7/img7.jpg',
    'https://i.ibb.co/w4G3Crx/img8.jpg',
    'https://i.ibb.co/K6Btt7B/img9.png',
    'https://i.ibb.co/YN5gkqm/img10.jpg',
    'https://i.ibb.co/vzRpvjy/img11.jpg',
    'https://i.ibb.co/PD1fNPT/img12.jpg',
    'https://i.ibb.co/YQxxnT4/img13.jpg',
    'https://i.ibb.co/TPK5yt4/img14.jpg',
    'https://i.ibb.co/njfBVHC/img15.jpg',
    'https://i.ibb.co/vwr569v/img16.jpg',
    'https://i.ibb.co/XtjHSNp/img17.jpg',
    'https://i.ibb.co/31jKm9H/img18.jpg',
    'https://i.ibb.co/HrdHSjb/img19.jpg',
    'https://i.ibb.co/Jcw8WLT/img20.jpg',
    'https://i.ibb.co/YQ7v4cX/img21.jpg',
    'https://i.ibb.co/0CWMjxP/img22.jpg',
    'https://i.ibb.co/xgXg4qS/img23.jpg',
    'https://i.ibb.co/gjG93nF/img24.jpg'
];

export function GalleryImage({ url, type = "" }) {
    const imageRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => { setIsVisible(entry.isIntersecting); },
            { threshold: 0.1 }
        );

        if (imageRef.current) observer.observe(imageRef.current);

        return () => {
            if (imageRef.current) {
                observer.unobserve(imageRef.current);
            }
        };
    }, []);

    return (
        <img
            ref={imageRef}
            src={url}
            className={`gallery_image${type}
                sm:min-w-[500px] sm:max-w-[500px] sm:min-h-[300px] sm:max-h-[300px]
                min-w-[250px] max-w-[250px] min-h-[150px] max-h-[150px]
                object-cover
                ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0'}
                transition-opacity duration-500`}
            alt="Gallery"
        />
    );
}


export default function Gallery() {
    const horizontalLoop1 = useRef(null);
    const horizontalLoop2 = useRef(null);

    useEffect(() => {
        horizontalLoop1.current = horizontalLoop(gsap.utils.toArray(".gallery_image"), {
            reversed: true, speed: 1, repeat: -1,
        });

        horizontalLoop2.current = horizontalLoop(gsap.utils.toArray(".gallery_image1"), {
            speed: 1, repeat: -1,
        });

        let currentScroll = 0, isScrollingDown = false;
        const handleScroll = () => {
            if (window.scrollY > currentScroll) {
                if (!isScrollingDown) {
                    isScrollingDown = true;
                    if (horizontalLoop1.current) horizontalLoop1.current.reverse();
                    if (horizontalLoop2.current) horizontalLoop2.current.play();
                }
            } else {
                if (isScrollingDown) {
                    isScrollingDown = false;
                    if (horizontalLoop1.current) horizontalLoop1.current.play();
                    if (horizontalLoop2.current) horizontalLoop2.current.reverse();
                }
            }

            currentScroll = window.scrollY;
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };

    }, []);

    const midIndex = Math.ceil(imageUrls.length / 2);
    const firstHalf = imageUrls.slice(0, midIndex);
    const secondHalf = imageUrls.slice(midIndex);


    return (
        <section className="sm:min-h-screen h-fit justify-center w-full flex flex-col items-center gap-6 z-[1]">
            <div className="flex flex-col items-center gap-2">
                <span className="font-semibold text-5xl">Gallery</span>
            </div>

            <div className="flex flex-row flex-nowrap gap-4">
                {firstHalf.map((url, index) =>
                    <GalleryImage key={index} url={url} />
                )}
            </div>

            <div className="flex flex-row flex-nowrap gap-4">
                {secondHalf.map((url, index) =>
                    <GalleryImage key={index} url={url} type={1} />
                )}
            </div>


            <Button color="success" radius="none" size="lg" className="mt-5 font-semibold text-lg">View More Photos</Button>
        </section>
    );
}
