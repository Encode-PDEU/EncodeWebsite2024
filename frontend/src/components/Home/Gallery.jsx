import { useEffect } from 'react';
import gsap from 'gsap';
import { Button } from '@nextui-org/button';

export function GalleryImage({ url, type = "" }) {
    return <img src={url} className={`gallery_image${type} w-[500px] h-[250px] object-cover`}></img>
}

export default function Gallery() {
    useEffect(() => {
        function marqueeScrollAnimation() {
            let currentScroll = 0;
            let isScrollingDown = true;

            // let tween = gsap.to(".gallery_image", {
            //     // xPercent: -210,
            //     xPercent: -100,
            //     repeat: -1,
            //     duration: 1,
            //     ease: "linear",
            //     // yoyo: true,
            //     rotation: 0.01,
            // });

            // let tween1 = gsap.to(".gallery_image1", {
            //     xPercent: 100,
            //     repeat: -1,
            //     // yoyo: true,
            //     // reversed: true,
            //     duration: 1,
            //     ease: "linear",
            //     rotation: 0.01,
            // });

            window.addEventListener("scroll", function () {

                if (window.scrollY > currentScroll) isScrollingDown = true;
                else isScrollingDown = false;


                // tween.reverse()

                // gsap.to(tween, {
                //     timeScale: isScrollingDown ? 1 : -1,
                // });

                // gsap.to(tween1, {
                //     timeScale: isScrollingDown ? -1 : 1,
                // });

                currentScroll = window.scrollY;
            });
        }

        marqueeScrollAnimation();
    }, []);

    return (
        <section className="min-h-screen h-fit justify-center w-full flex flex-col items-center gap-6 z-[1]">
            <div className="flex flex-col items-center gap-2">
                <span className="font-semibold text-5xl">Gallery</span>
            </div>

            <div className='flex flex-col gap-3'>
                <div className="flex flex-row flex-nowrap gap-3">
                    {Array(5).fill().map((_, index) =>
                        <GalleryImage key={index} url="https://placehold.co/500x250.png" />
                    )}
                </div>

                <div className="flex flex-row flex-nowrap gap-3">
                    {Array(5).fill().map((_, index) =>
                        <GalleryImage key={index} url="https://placehold.co/500x250.png" type="1" />
                    )}
                </div>
            </div>

            <Button color="success" radius="none" size="lg" className="mt-2 font-semibold text-lg">View Gallery</Button>
        </section>
    );
}
