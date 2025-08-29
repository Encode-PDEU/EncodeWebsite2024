import React from "react";
import { Button } from "@nextui-org/button";
import { Chip } from "@nextui-org/chip";
import { useRef, useEffect, useState } from "react";
import { Modal } from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';
import { Link } from "react-router-dom";
import { modal } from "@nextui-org/theme";
import { DBService } from "../../services/appwrite.config.js"

function formatDate(isoDate) {
    const date = new Date(isoDate);
    if (isNaN(date.getTime())) return isoDate
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString(undefined, options);
}

function formatDateCustom(input) {
    const date = new Date(Number(input));
  
    const day = date.getDate();
    const month = date.toLocaleString("en-US", { month: "short" });
  
    function addDaySuffix(d) {
      if (d > 3 && d < 21) return d + "th";
      switch (d % 10) {
        case 1: return d + "st";
        case 2: return d + "nd";
        case 3: return d + "rd";
        default: return d + "th";
      }
    }
  
    return `${addDaySuffix(day)}, ${month}`;
}
function EventCard({ title, date, details, moreInfo, registrationLink, imgUrl, type = "Workshop", description, isVisible }) {
    const cardRef = useRef(null);
    const [visible, setVisible] = useState(isVisible);
    const [open, setOpen] = React.useState(false);
    const myRef = React.useRef(null);

    const currentDate = new Date();
    const isEventFinished = (date+86400000) < currentDate;
    details = JSON.parse(details)

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

    const closeIcon = (
        <span class="material-symbols-outlined">
            close
        </span>
      );


    return (
        <>
        <div ref={myRef} />
        
        
        <Modal
            open={open}
            onClose={() => setOpen(false)}
            center
            container={myRef.current}
            closeIcon={closeIcon}
        >
            <div className="event-card-info">
                <div className="event-img-container">
                    <img src={imgUrl}></img>
                </div>
                <h1 className="text-3xl ">{title}</h1>
                <p><span className="text-2xl">Event Description : </span><br /><span className="text-1xl">{moreInfo}</span></p>
                <p><span className="text-2xl">Event Details : </span><br /><span className="text-1xl">{details[0]}<br />{details[1]}<br />{details[2]}<br /></span></p>
            </div>
        </Modal>

        <div
            ref={cardRef}
            className={`flex flex-col bg-[#00ff7b] bg-opacity-10 p-5 gap-2 hover:translate-y-[-10px] transition-all outline-1 hover:outline outline-[#00ff7b] sm:max-w-[20vw] sm:min-w-[20vw] max-w-[90vw] min-w-[90vw] overflow-hidden ${visible ? 'opacity-100' : 'opacity-0'}`}
            onClick={() => setOpen(true)}
        >
            <div className="flex flex-col pb-2 gap-2">
                <div className="flex justify-between pb-2 gap-2 flex-wrap">
                    <Chip color={isEventFinished ? "danger" : "success"} variant="dot">{formatDateCustom(date)}</Chip>
                    <Chip color="success" variant="flat">{type}</Chip>
                </div>
                <span className="text-2xl sm:max-w-[18vw] sm:min-w-[18vw]">{title}</span>
                <span className="text-foreground-500 sm:max-w-[18vw] sm:min-w-[18vw] helvetica">{description}</span>
            </div>

            {isEventFinished ? (
                <Button color="danger" variant="flat" radius="none" className="mt-auto" disabled>Event has ended</Button>
            ) : (
                !!registrationLink &&
                <a href={registrationLink} className="mt-auto">
                    <Button color="success" variant="flat" radius="none" className="mt-auto">Register</Button>
                </a>
            )}
        </div>
        </>
    );
}


export default function UpcomingEvents() {

    const[eventData, setEventData] = useState([])

    const events = [
        {
            title: "Web Security Basics",
            date: "2025-01-24T00:00:00Z",
            description: "Join us for a comprehensive workshop on web security fundamentals to learn about the latest threats and how to protect your web applications.",
            type: "Workshop"
        },
        {
            title: "MERN Stack Bootcamp",
            date: "2025-02-08T00:00:00Z",
            description: "Get hands-on full-stack experience in our two-day MERN Stack Bootcamp, building applications with MongoDB, Express.js, React, and Node.js",
            type: "Workshop"
        },
        {
            title: "WWW Day",
            date: "2024-08-15T00:00:00Z",
            description: "Worldwide Web Day celebration with exciting talks, networking, and activities.",
            type: "Event"
        },
        {
            title: "Intro to Data Pre-Processing",
            date: "2024-09-06T00:00:00Z",
            description: "Learn the basics of data pre-processing, a critical step in data science and machine learning workflows.",
            type: "Workshop"
        },
        {
            title: "Intro to Mobile App Development with Kotlin",
            date: "2024-09-07T00:00:00Z",
            description: "An introductory workshop to mobile app development using native Kotlin for Android apps.",
            type: "Workshop"
        },
        {
            title: "General AI Workshop",
            date: "2025-01-25T00:00:00Z",
            description: "A workshop exploring the fundamentals of AI, Machine Learning, and MLOps.",
            type: "Workshop"
        },
        {
            title: "Codethon",
            date: "2025-01-01T00:00:00Z",
            description: "Hackathon spanning the entire month of January",
            type: "Competition"
        },
        {
            title: "Back-end as a Service (BaaS) with Firebase API",
            date: "2025-03-22T00:00:00Z",
            description: "Learn how to build back-end services using Firebase API, Maps integration, and Flutter/Kotlin in this two-day workshop.",
            type: "Workshop"
        },
        {
            title: "Intro to DevOps",
            date: "2025-02-21T00:00:00Z",
            description: "Learn how to build back-end services using Firebase API, Maps integration, and Flutter/Kotlin in this two-day workshop.",
            type: "Workshop"
        },
        {
            title: "AWS Bootcamp",
            date: "2025-03-12T00:00:00Z",
            description: "Join us for a deep dive into AWS services, focusing on cloud computing essentials.",
            type: "Workshop"
        },


        {
            title: "Guardians of the Elements",
            date: "19th Oct",
            status: "current",
            description: "Navigate through real-world locations, solve unique elemental challenges, and unlock hidden clues. This interactive adventure blends technology and nature, as you journey to prove your worth as true Guardians of the Elements!",
            moreInfo: "Embark on Guardians of the Elements, a thrilling geolocation-based treasure hunt where you and your team will explore the power of Earth, Fire, Water, Air, and Ether through a custom-built app. Navigate through real-world locations, solve unique elemental challenges, and unlock hidden clues. This interactive adventure blends technology and nature, testing your endurance, intellect, and adaptability as you journey to prove your worth as true Guardians of the Elements!",
            details: ["1. Event Timings:  19th October 2024, Saturday 10:00 AM to 12:00 PM", "2. Event Venue: To be conducted throughout the whole campus with various locations for clues", "3. Event Price: Rs. 120 per team"],
            imgUrl: "https://i.imgur.com/IX9LTKS.png",
            registrationLink: "https://docs.google.com/forms/d/e/1FAIpQLSdN3cQDTvbAwTtJ8OUNFUA9N_ARb64YdIkzW1I-cQy-B0bKgA/viewform",
            type: "Treasure hunt"
        },
        {
            title: "Capture The Flag",
            date: "19th Oct",
            status: "current",
            description: "Whether you're cracking cryptography, mastering reverse engineering, or outsmarting digital defenses, this competition has it all.",
            moreInfo: "Capture The Flag (CTF), the ultimate thrill ride in cybersecurity, brought to you by our coding club! Ready to put your hacker hat on and dive into a world of puzzles, codes, and challenges? Whether you’re cracking cryptography, mastering reverse engineering, or outsmarting digital defenses, this competition has it all. Our custom-built CTF platform is your playground, where you’ll face off against the best, push your skills to the limit, and compete for the glory of being crowned the top cyber sleuth. Let the games begin!",
            details: ["1. Event Timings:  19th October 2024, Saturday 02:00 PM to 05:00 PM", "2. Event Venue:  BLT/ Computer Lab", "3. Event Price: Rs. 50 per team"],
            imgUrl: "https://i.imgur.com/Dpj6yRA.png",
            registrationLink: "https://docs.google.com/forms/d/e/1FAIpQLScSS2SHdhDXWUw2TscHjEwNF8gPJqwRnMP3fC5bArodtTTvnQ/viewform",
            type: "Competition"
        },
        {
            title: "Code Tatva",
            date: "20th Oct",
            status: "current",
            description: "Feel the adrenaline of solving challenges? Join Encode's Code Tatva to compete in challenges that tests your foundational coding skills and reasoning.",
            moreInfo : "Code Tatva is a Competitive Programming challenge where participants in a team take part to solve CP questions in a contest. where the five elements—Earth, Fire, Water, Air, and Ether—guide your coding journey. Compete in challenges that test your foundational skills with Earth-based problems, speed and efficiency with Fire-themed tasks, adaptability with Water puzzles, logical flow with Air challenges, and creative thinking with Ether problems. Showcase your coding prowess and unlock the secrets of each element as you strive to become the ultimate coding Guardian!",
            details: ["1. Event Timings:  20th October 2024, Sunday 09:00 AM to 01:00 PM", "2. Event Venue:  C007/C008/Computer Lab", "3. Event Price: Rs. 70 per team"],
            imgUrl: "https://i.imgur.com/DuTMdrW.png",
            registrationLink: "https://forms.gle/oFm41wRoAam1iRgv6",
            type: "Competition"
        }
    ];

    useEffect(() =>{
        const res = DBService.getAllEvents().then((obj) => setEventData(obj))
    }, [])

    return (
        
        <section className="min-h-screen h-fit justify-center w-full flex flex-col items-center gap-6">
            <div className="flex flex-col items-center gap-2">
                <span className="font-semibold text-5xl text-center">Upcoming Events</span>
                <span className="font-normal text-md text-foreground-500">Upcoming events of Encode!</span>
            </div>

            <div className="flex flex-wrap gap-5 justify-center w-[100vw]">
                {eventData
                    .filter((e) => e.status == "upcoming" || e.status == "ongoing")
                    .sort((a, b) => Number(a.date) - Number(b.date))
                    .slice(0,3) 
                    .map((event, index) => (
                        <EventCard
                            key={index}
                            title={event.title}
                            date={(event.date)}
                            description={event.description}
                            type={event.type}
                            moreInfo={event.moreInfo}
                            details={event.details}
                            isVisible={false}
                            imgUrl={event.imgUrl}
                            registrationLink={event.registrationLink}
                        />
                ))}
            </div>
        </section>
        
    );
}
