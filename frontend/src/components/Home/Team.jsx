import { Button } from "@nextui-org/button"
// import { Accordion, AccordionItem } from "@nextui-org/accordion";
import { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";

const teamMembers = [
    {
        name: "Anokhi Shah",
        position: "President",
        imgsrc: "https://i.imgur.com/2SOGOOG.png",
        type: "executives"
    },
    {
        name: "Saumya Talwani",
        position: "Vice President",
        imgsrc: "https://i.imgur.com/yXbXGMx.jpeg",
        type: "executives"
    },
    {
        name: "Diya Mirani",
        position: "Treasurer",
        imgsrc: "https://i.imgur.com/LYXsFsQ.jpeg",
        type: "executives"
    },
    {
        name: "Dhyan Shah",
        position: "Technical Heads Head",
        imgsrc: "https://i.imgur.com/PTQeHnF.png",
        type: "executives"
    },
    {
        name: "Vraj Patel",
        position: "AI/ML Head",
        type: "Technical Heads"
    },
    {
        name: "Dev Mehta",
        position: "Cloud & DevOps Head",
        type: "Technical Heads"
    },
    {
        name: "Aryan Randeriya",
        position: "Web Development Head",
        imgsrc: "https://github.com/aryanranderiya.png",
        type: "Technical Heads"
    },
    {
        name: "Meet Dholakia",
        position: "Web Development Head",
        type: "Technical Heads"
    },
    {
        name: "Devarsh Mehta",
        position: "App Development Head",
        type: "Technical Heads"
    },
    {
        name: "Mann Patel",
        position: "App Development Head",
        type: "Technical Heads"
    },
    {
        name: "Vishal Lokwani",
        position: "Competitive Programming Head",
        type: "Technical Heads"
    },
    {
        name: "Aadish Sheth",
        position: "Competitive Programming Head",
        type: "Technical Heads"
    },
    {
        name: "Ananta Nandpara",
        position: "Cyber Security Head",
        type: "Technical Heads"
    },
    {
        name: "Dharmi Patel",
        position: "Cyber Security Head",
        type: "Technical Heads"
    },
    {
        name: "Meet Janiyani",
        position: "Game Development Head",
        type: "Technical Heads"
    },
    {
        name: "Anuj Sharma",
        position: "Content & Documentation Head",
        type: "non-Technical Heads"
    },
    {
        name: "Avani Gupta",
        position: "Creative Marketing Head",
        type: "non-Technical Heads"
    },
    {
        name: "Mokshal Shah",
        position: "Event Management & Logistics Head",
        type: "non-Technical Heads"
    },
    {
        name: "Axat Vaghela",
        position: "Event Management & Logistics Head",
        type: "non-Technical Heads"
    },
    {
        name: "Aayush Khandelwal",
        position: "Graphic Design Head",
        type: "non-Technical Heads"
    },
    {
        name: "Tanish Jha",
        position: "Publicity Head",
        type: "non-Technical Heads"
    },
    {
        name: "Yashmi Panchal",
        position: "Publicity Head",
        type: "non-Technical Heads"
    },
    {
        name: "Vansh Jain",
        position: "Sponsorship Head",
        type: "non-Technical Heads"
    }
];

export function TeamCard({ imgsrc = "https://links.aryanranderiya.com/l/default_user", name, position }) {
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
        <div className={`flex flex-col p-[2em] items-center gap-5 bg-[#00ff7b] bg-opacity-15 rounded-none z-[1] hover:translate-y-[-10px] transition-all outline-1 hover:outline outline-[#00ff7b] ${visible ? 'opacity-100' : 'opacity-0'}`} ref={cardRef}>
            <img src={imgsrc} className="w-[170px] h-[170px] min-w-[170px] min-h-[170px] max-h-[170px] rounded-full" />
            <div className="flex flex-col items-center">
                <span className="text-2xl helvetica">{name}</span>
                <span className="text-lg text-foreground-400 minecraft text-wrap w-[200px] text-center">{position}</span>
            </div>
        </div>
    )
}

export default function Team() {


    const groupByType = (members) => {
        return members.reduce((groups, member) => {
            const { type } = member;
            if (!groups[type]) {
                groups[type] = [];
            }
            groups[type].push(member);
            return groups;
        }, {});
    };

    const groupedMembers = groupByType(teamMembers);


    return (
        <section className="min-h-screen justify-center h-fit w-full flex flex-col items-center gap-6">
            <div className="flex flex-col items-center gap-2">
                <span className="font-semibold text-5xl">The Team</span>
                <span className="font-normal text-md text-foreground-500">Meet the faces behind the club!</span>
            </div>

            <div className="flex flex-wrap gap-3 md:max-w-[90vw] justify-center mb-4">
                {teamMembers.map((member, index) => {
                    if (member.type === "executives")
                        return <TeamCard
                            key={index}
                            name={member.name}
                            position={member.position}
                            imgsrc={member.imgsrc}
                            type={member.type}
                        />
                }
                )}

                {/* <Accordion variant="light" itemClasses={{ heading: "md:min-w-[70vw] justify-center mb-4" }}>
                    {Object.entries(groupedMembers).map(([type, members], index) => (

                        <AccordionItem key={type}
                            aria-label={`Accordion ${index + 1}`}
                            title={`${ type.charAt(0).toUpperCase() + type.slice(1) } `}

                            defaultExpandedKeys={["executives"]}
                        >
                            {console.log(type)}
                            <div className="flex flex-wrap gap-3 md:max-w-[70vw] justify-center mb-4">
                                {members.map((member, idx) => (
                                    <TeamCard
                                        key={idx}
                                        name={member.name}
                                        position={member.position}
                                        imgsrc={member.imgsrc}
                                        type={member.type}
                                    />
                                ))}
                            </div>
                        </AccordionItem>
                    ))}
                </Accordion> */}
            </div>
            <Button color="success" radius="none" size="lg" className="font-semibold text-lg">View All Members</Button>
        </section >
    )
}