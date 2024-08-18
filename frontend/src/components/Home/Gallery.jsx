import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export function GalleryImage({ url }) {
    return <img src={url} className='gallery_image'></img>
}

export default function Gallery() {

    gsap.registerPlugin(useGSAP);

    useEffect(() => {
        const images = gsap.utils.toArray('.gallery_image');
        const totalWidth = images.length * 100; // Assuming each image is 100% wide

        gsap.to(images, {
            xPercent: -totalWidth, // Move by the total width of all images
            ease: "none", // Linear motion
            duration: 10, // Adjust as necessary
            repeat: -1 // Infinite loop
        });
    }, []);

    return <section className="min-h-screen w-full flex py-[9em] flex-col items-center gap-6">
        <div className="flex flex-col items-center gap-2">
            <span className="font-semibold text-5xl">Gallery</span>
            {/* <span className="font-normal text-md text-foreground-500">Meet the faces behind the club!</span> */}
        </div>

        <div className="flex flex-row flex-nowrap gap-3 gallery_marquee">
            <GalleryImage url="https://placehold.co/600x400.png" />
            <GalleryImage url="https://placehold.co/600x400.png" />
            <GalleryImage url="https://placehold.co/600x400.png" />
            <GalleryImage url="https://placehold.co/600x400.png" />
            <GalleryImage url="https://placehold.co/600x400.png" />
        </div>
    </section>

}