import React, { useEffect } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import Marquee from "react-fast-marquee";

const About = ({ preloaderEnded }) => {

  useGSAP(() => {
    if (preloaderEnded) {
      gsap.from(".about p", {
        x: 200,
        opacity: 0,
        duration: 1,
        delay: 1
      });

      gsap.from(".about .title h1 span", {
        y: 200,
        opacity: 0,
        duration: 1,
        delay: 1,
        stagger: 0.1,
        color: "#17C964"
      });
    }
  }, [preloaderEnded]);

  const handleMouseEnter = (e) => {
    gsap.to(e.target, {
      y: -30,
      color: "#17C964",
      ease: "elastic.out(1.4,0.3)"
    });
  };

  const handleMouseLeave = (e) => {
    gsap.to(e.target, {
      y: 0,
      color: "#fff",
      ease: "elastic.out"
    });
  };

  const handleMarqueeHover = (e) => {
    gsap.to(e.target, {
      scale: 1.1,
      color: "#17C964",
      duration: 0.1
    });
  };

  const handleMarqueeLeave = (e) => {
    gsap.to(e.target, {
      scale: 1,
      color: "#fff", 
      duration: 0.1
    });
  };

  return (
    <>
      <div className="about flex flex-col justify-center pt-[6.5em] pb-[1em] px-[2em]">
        <div className="para overflow-hidden pl-[50%]">
          <p className='text-[1.7vw]'>Encode is an inclusive technical community that goes beyond conventional tech promotion, 
              embracing individuals eager to explore the realms of computer science and emerging technologies. 
              It&apos;s a supportive space where curiosity, knowledge sharing, and innovation are celebrated, 
              fostering the growth of both technology and its passionate enthusiasts.</p>
        </div>
        <div className="title">
          <h1 className='font-semibold overflow-hidden text-[15vw] font-menseal whitespace-nowrap'>
            <span className='inline-block' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>A</span>
            <span className='inline-block' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>b</span>
            <span className='inline-block' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>o</span>
            <span className='inline-block' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>u</span>
            <span className='inline-block' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>t</span>
            <span className='inline-block'>&nbsp;</span>
            <span className='inline-block' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>U</span>
            <span className='inline-block' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>s</span>
          </h1>
        </div>
      </div>
      <div className="marquee-container">
        <p className='text-center font-menseal mb-[10px]'>At Encode, We explore</p>
        <Marquee className='marquee bg-[darkgreen] mb-10 border-t-[#17C964] border-t-4 border-b-[#17C964] border-b-4' speed={150}>
          <h1 className='text-[5vw]'>
            <span onMouseEnter={handleMarqueeHover} onMouseLeave={handleMarqueeLeave}>&nbsp;Web Development </span>
            <span>✦ </span>
            <span onMouseEnter={handleMarqueeHover} onMouseLeave={handleMarqueeLeave}>App Development </span>
            <span>✦ </span>
            <span onMouseEnter={handleMarqueeHover} onMouseLeave={handleMarqueeLeave}>AI/ML </span>
            <span>✦ </span>
            <span onMouseEnter={handleMarqueeHover} onMouseLeave={handleMarqueeLeave}>Cloud and DevOps </span>
            <span>✦ </span>
            <span onMouseEnter={handleMarqueeHover} onMouseLeave={handleMarqueeLeave}>Competitive Programming </span>
            <span>✦ </span>
            <span onMouseEnter={handleMarqueeHover} onMouseLeave={handleMarqueeLeave}>Cyber Security </span>
            <span>✦ </span>
            <span onMouseEnter={handleMarqueeHover} onMouseLeave={handleMarqueeLeave}>Game Development </span>
            <span>✦ </span>
          </h1>
        </Marquee>
      </div>
    </>
  );
}

export default About;
