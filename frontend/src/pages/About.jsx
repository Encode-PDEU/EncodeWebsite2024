import React, { useEffect, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from '@gsap/react';
import Marquee from "react-fast-marquee";

gsap.registerPlugin(ScrollTrigger);

const About = ({ preloaderEnded }) => {
  const [year, setYear] = useState("");
  useEffect(()=> {
    setYear( (new Date().getFullYear()) - 2013 );
  })

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
        color: "#00ff7b"
      });

      ScrollTrigger.matchMedia({
        // Desktop
        "(min-width: 768px)": function () {
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
        "(max-width: 767px)": function () {
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
        xPercent: -250,
        scrollTrigger: {
          trigger: ".journey",
          scroller: "body",
          start: "top 0%",
          end: "top -100%",
          scrub: 3
        }
      });

      gsap.to(".second-sticker", {
        xPercent: -30,
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
      gsap.to(".image-sticker", {
        xPercent: 50, // Move sticker along the x-axis
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
      color: "#00ff7b",
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
      color: "#00ff7b",
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
      <div className="about flex sm:flex-col flex-col-reverse justify-center sm:pt-[7em] pt-[5em] sm:pb-[3em] pb-[2em] px-[2em]">
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
        {/* <p className='text-center font-menseal mb-[10px]'>At Encode, We explore</p> */}
        <Marquee className='marquee mb-10 border-t-[#00ff7b] border-t-4 border-b-[#00ff7b] border-b-4' speed={200} pauseOnHover>
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
      <div className="journey relative w-[100vw] absolute">
        <h1 className='journey-text text-[40vw] text-nowrap z-[1]' style={{fontWeight: 700}}>
          OUR JOURNEY!
          <div className='first-sticker bg-[#39DD20] absolute top-[30%] left-[20%] px-[4vw] py-[1vw] text-[2vw] transform -rotate-25 rounded-2xl border-white lg:border-4 border-2' style={{ boxShadow: "2px 3px 5px black" }}>
            <p className='text-[white] minecraft'>Started in 2013!</p>
          </div>
          <div className='second-sticker bg-[green] absolute top-[35%] right-[-245%] p-[2vw] text-[2vw] transform rotate-25 rounded border-white border-4'>
            <p className='text-[white] minecraft'>This is our {year}th Year!</p>
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
          <div className='first-sticker bg-[lightseagreen] absolute top-[20%] left-[215%] p-[2vw] text-[1vw] transform -rotate-30 rounded border-black lg:border-4 border-2'>
            <p className='date text-[black] minecraft'>Mar 2017</p>
            <p className='info text-[black] minecraft'>First MATLAB Workshop</p>
          </div>
          <div className='first-sticker bg-[indigo] absolute top-[55%] left-[255%] p-[2vw] text-[1vw] transform  rounded border-white lg:border-4 border-2'>
            <p className='date text-[white] minecraft'>CODEWARS</p>
            <p className='info text-[white] minecraft'>2022 & 2023</p>
          </div>
          <div className='third-sticker absolute top-[10%] left-[80%] text-[2vw] transform rotate-15'>
            <img src="https://i.ibb.co/KNhB2Dz/img1.jpg" alt="" style={{ width: '20vw', objectFit: 'cover', borderRadius: "10%" }} />
          </div>
          <img src="https://i.ibb.co/PD1fNPT/img12.jpg" alt="" style={{width: '15vw', objectFit: 'cover', borderRadius: "9%"}} className='image-sticker absolute left-[130%] top-[60%] transform -rotate-25'/>
          <img src="https://i.ibb.co/0CWMjxP/img22.jpg" alt="" style={{width: '15vw', objectFit: 'cover', borderRadius: "7%"}} className='image-sticker absolute left-[150%] top-[15%] transform'/>
          <img src="https://i.ibb.co/X4xzJfz/img3.jpg" alt="" style={{width: '20vw', objectFit: 'cover', borderRadius: "8%"}} className='image-sticker absolute left-[220%] top-[15%] transform'/>
          <img src="https://i.ibb.co/JtbNDgb/img2.jpg" alt="" style={{width: '10vw', objectFit: 'cover', borderRadius: "5%"}} className='image-sticker absolute left-[195%] top-[55%] transform'/>
          <img src="https://i.imgur.com/fwCwlHR.jpeg" alt="" style={{width: '18vw', objectFit: 'cover', borderRadius: "2%"}} className='image-sticker absolute left-[255%] top-[50%] transform border-3 border-black '/>
          
          
          
        </h1>
        
      </div>
      
    </>
  );
}

export default About;
