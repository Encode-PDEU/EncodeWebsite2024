import { Button } from "@nextui-org/button";
import { Chip } from "@nextui-org/chip";
import { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";

function formatDate(isoDate) {
    const date = new Date(isoDate);
    if (isNaN(date.getTime())) return isoDate
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString(undefined, options);
}
function EventCard({ title, date, type = "Workshop", description, isVisible, registrationLink }) {
    const cardRef = useRef(null);
    const [visible, setVisible] = useState(isVisible);

    const eventDate = new Date(date);
    const currentDate = new Date();
    const isEventFinished = eventDate < currentDate;

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
            className={`flex flex-col bg-[#00ff7b] bg-opacity-10 p-5 gap-2 hover:translate-y-[-10px] transition-all outline-1 hover:outline outline-[#00ff7b] sm:max-w-[23vw] sm:min-w-[23vw]  max-w-[90vw] min-w-[90vw] overflow-hidden ${visible ? 'opacity-100' : 'opacity-0'}`}
        >
            <div className="flex flex-col pb-2 gap-2">
                <div className="flex justify-between pb-2 gap-2 flex-wrap">
                    <Chip color={isEventFinished ? "danger" : "success"} variant="dot">{formatDate(date)}</Chip>
                    <Chip color="success" variant="flat">{type}</Chip>
                </div>
                <span className="text-2xl sm:max-w-[20vw] sm:min-w-[20vw]">{title}</span>
                <span className="text-foreground-500 sm:max-w-[20vw] sm:min-w-[20vw] helvetica">{description}</span>
            </div>

            {isEventFinished ? (
                <Button color="danger" variant="flat" radius="none" className="mt-auto" disabled>Event has ended</Button>
            ) : (
                !!registrationLink &&
                <a href={registrationLink}>
                    <Button color="success" variant="flat" radius="none" className="mt-auto">Register</Button>
                </a>
            )}
        </div>
    );
}


export default function UpcomingEvents() {
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
            title: "Pre-Tesseract Pixel Art Workshop",
            date: "Soon",
            description: "A creative art workshop before Tesseract events.",
            type: "Workshop"
        },
        {
            title: "Tesseract: CodeWars",
            date: "Soon",
            description: "A competitive coding challenge for all levels, where participants can showcase their skills and win exciting prizes.",
            type: "Competition"
        },
        {
            title: "Tesseract: CTF & Treasure Hunt",
            date: "Soon",
            description: "Capture The Flag and Treasure Hunt events, testing your problem-solving skills and knowledge.",
            type: "Competition"
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
    ];


    return (
        <section className="min-h-screen h-fit justify-center w-full flex flex-col items-center gap-6">
            <div className="flex flex-col items-center gap-2">
                <span className="font-semibold text-5xl text-center">Upcoming Events</span>
                <span className="font-normal text-md text-foreground-500">This year's events of Encode!</span>
            </div>

            <div className="flex flex-wrap gap-5 justify-center w-[100vw]">
                {events
                    .filter(event => event.date !== "Soon").sort((a, b) => new Date(a.date) - new Date(b.date))
                    .concat(events.filter(event => event.date === "Soon")).map((event, index) => (
                        <EventCard
                            key={index}
                            title={event.title}
                            date={event.date}
                            description={event.description}
                            type={event.type}
                            isVisible={false}
                        />
                    ))}
            </div>

            <Button color="success" radius="none" size="lg" className="mt-2 font-semibold text-lg">View All Events</Button>
        </section>
    );
}
