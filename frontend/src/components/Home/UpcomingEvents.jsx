import { Button } from "@nextui-org/button";
import { Chip } from "@nextui-org/chip";
import { useRef, useEffect, useState } from "react";

function formatDate(isoDate) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(isoDate).toLocaleDateString(undefined, options);
}

function EventCard({ title, date, type = "Workshop", description, isVisible }) {
    const cardRef = useRef(null);
    const [visible, setVisible] = useState(isVisible);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setVisible(entry.isIntersecting);
            },
            { threshold: 0.3 }
        );

        if (cardRef.current) {
            observer.observe(cardRef.current);
        }

        return () => {
            if (cardRef.current) {
                observer.unobserve(cardRef.current);
            }
        };
    }, []);

    return (
        <div
            ref={cardRef}
            className={`flex flex-col bg-[#00ff7b] bg-opacity-10 p-5 gap-2 hover:translate-y-[-5px] transition-all outline-1 hover:outline outline-[#00ff7b] ${visible ? 'opacity-100' : 'opacity-0'}`}
        >
            <div className="flex flex-col pb-2 gap-2">
                <div className="flex justify-between pb-2 gap-10">
                    <Chip color="success" variant="dot">{formatDate(date)}</Chip>
                    <Chip color="success" variant="flat">{type}</Chip>
                </div>
                <span className="text-2xl">{title}</span>
                <span className="text-foreground-500 sm:max-w-[19vw] helvetica">{description}</span>
            </div>
            <Button color="success" variant="flat" radius="none" className="mt-auto">Register</Button>
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
    ];

    return (
        <section className="min-h-screen h-fit justify-center w-full flex flex-col items-center gap-6">
            <div className="flex flex-col items-center gap-2">
                <span className="font-semibold text-5xl text-center">Upcoming Events</span>
                <span className="font-normal text-md text-foreground-500">This year's events of Encode!</span>
            </div>

            <div className="flex flex-wrap gap-5 justify-center">
                {events.map((event, index) => (
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
