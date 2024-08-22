import React from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from '@gsap/react';
import Marquee from "react-fast-marquee";

gsap.registerPlugin(ScrollTrigger);

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

      ScrollTrigger.matchMedia({
        // Desktop
        "(min-width: 768px)": function() {
          gsap.to(".journey h1", {
            transform: "translateX(-250%)",
            scrollTrigger: {
              trigger: ".journey",
              scroller: "body",
              start: "top 0%",
              end: "top -100%",
              scrub: 3,
              pin: true
            }
          });
        },
        // Mobile
        "(max-width: 767px)": function() {
          gsap.to(".journey h1", {
            transform: "translateX(-250%)",
            scrollTrigger: {
              trigger: ".journey",
              scroller: "body",
              start: "top 20%",  
              end: "top -80%",   
              scrub: 3,
              pin: true
            }
          });
        }
      });

      gsap.to(".first-sticker", {
        xPercent: -250, // Move sticker along the x-axis
        scrollTrigger: {
          trigger: ".journey",
          scroller: "body",
          start: "top 0%",
          end: "top -100%",
          scrub: 3
        }
      });

      gsap.to(".second-sticker", {
        xPercent: -30, // Move sticker along the x-axis
        scrollTrigger: {
          trigger: ".journey",
          scroller: "body",
          start: "top 0%",
          end: "top -100%",
          scrub: 3
        }
      });

      gsap.to(".third-sticker", {
        xPercent: 100, // Move sticker along the x-axis
        scrollTrigger: {
          trigger: ".journey",
          scroller: "body",
          start: "top 0%",
          end: "top -100%",
          scrub: 3
        }
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
        <div className="para overflow-hidden lg:pl-[50%] sm:pl-[30%]">
          <p className='lg:text-[1.7vw] sm:text-[1.9vw]'>Encode is an inclusive technical community that goes beyond conventional tech promotion, 
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
        <Marquee className='marquee mb-10 border-t-[#17C964] border-t-4 border-b-[#17C964] border-b-4' speed={150}>
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
      <div className="journey relative">
        <h1 className='journey-text text-[40vw] text-nowrap' style={{fontWeight: 700}}>
          OUR JOURNEY!
          <div className='first-sticker bg-[#39DD20] absolute top-[30%] left-[20%] px-[4vw] py-[1vw] text-[2vw] transform -rotate-25 rounded-2xl border-white lg:border-4 border-2' style={{boxShadow: "2px 3px 5px black"}}>
            <p className='text-[white] minecraft'>Started in 2013!</p>
          </div>
          <div className='second-sticker bg-[green] absolute top-[35%] right-[-245%] p-[2vw] text-[2vw] transform rotate-25 rounded'>
            <p className='text-[white] minecraft'>This is our 11th Year!</p>
          </div>
          <div className='first-sticker bg-[crimson] absolute top-[55%] left-[55%] p-[2vw] text-[1vw] transform rotate-25 rounded border-white lg:border-4 border-2'>
            <p className='date text-[white] minecraft'>Nov 2014</p>
            <p className='info text-[white] minecraft'>-First Coding Contest by the Club</p>
            <p className='info text-[white] minecraft'>-First C++ Workshop</p>
          </div>
          <div className='first-sticker bg-[lightblue] absolute top-[55%] left-[105%] p-[2vw] text-[1vw] transform -rotate-25 rounded border-black lg:border-4 border-2'>
            <p className='date text-[black] minecraft'>Oct 2015</p>
            <p className='info text-[black] minecraft'>First App Dev Workshop (Android)</p>
          </div>
          <div className='first-sticker bg-[yellow] absolute top-[30%] left-[145%] p-[2vw] text-[1vw] transform rotate-30 rounded border-black lg:border-4 border-2'>
            <p className='date text-[black] minecraft'>Mar 2016</p>
            <p className='info text-[black] minecraft'>First Web Dev Workshop</p>
          </div>
          <div className='first-sticker bg-[crimson] absolute top-[55%] left-[185%] p-[2vw] text-[1vw] transform  rounded border-white lg:border-4 border-2'>
            <p className='date text-[white] minecraft'>Sept 2016</p>
            <p className='info text-[white] minecraft'>First SQL Workshop</p>
          </div>
          <div className='first-sticker bg-[lightseagreen] absolute top-[30%] left-[225%] p-[2vw] text-[1vw] transform -rotate-30 rounded border-black lg:border-4 border-2'>
            <p className='date text-[black] minecraft'>Mar 2017</p>
            <p className='info text-[black] minecraft'>First MATLAB Workshop</p>
          </div>
          <div className='first-sticker bg-[indigo] absolute top-[55%] left-[255%] p-[2vw] text-[1vw] transform  rounded border-white lg:border-4 border-2'>
            <p className='date text-[white] minecraft'>CODEWARS</p>
            <p className='info text-[white] minecraft'>2022 & 2023</p>
          </div>
          <div className='third-sticker absolute top-[10%] left-[80%] text-[2vw] transform rotate-15'>
            <img src="https://i.ibb.co/KNhB2Dz/img1.jpg" alt="" style={{width: '20vw', objectFit: 'cover', borderRadius: "10%"}}/>
          </div>
          {/* <div className='fourth-sticker absolute top-[20%] left-[180%] transform rotate-15 z-[10]'>
            <img src="https://i.ibb.co/KNhB2Dz/img1.jpg" alt="" style={{width: '20vw', objectFit: 'cover', borderRadius: "10%"}}/>
          </div> */}
        </h1>
      </div>
    </>
  );
}

export default About;
