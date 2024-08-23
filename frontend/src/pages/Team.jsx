import { Accordion, AccordionItem } from "@nextui-org/accordion";
import { useEffect, useRef, useState } from "react";

export const teamMembers = [
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
        position: "Technical Head",
        imgsrc: "https://i.imgur.com/PTQeHnF.png",
        type: "executives"
    },
    {
        name: "Vraj Patel",
        position: "AI/ML Head",
        imgsrc: "https://i.imgur.com/l8xx68V.jpeg",
        type: "Technical Heads"
    },
    {
        name: "Dev Mehta",
        position: "Cloud & DevOps Head",
        imgsrc: "https://i.imgur.com/9DcCxI5.jpeg",
        type: "Technical Heads"
    },
    {
        name: "Aryan Randeriya",
        position: "Web Development Head",
        imgsrc: "https://i.imgur.com/GottnTX.jpeg",
        type: "Technical Heads"
    },
    {
        name: "Meet Dholakia",
        position: "Web Development Head",
        imgsrc: "https://i.imgur.com/8D0ByMD.jpeg",
        type: "Technical Heads"
    },
    {
        name: "Devarsh Mehta",
        position: "App Development Head",
        imgsrc: "https://i.imgur.com/IHJADE1.jpeg",
        type: "Technical Heads"
    },
    {
        name: "Mann Patel",
        position: "App Development Head",
        imgsrc: "https://i.imgur.com/e0LbDyr.png",
        type: "Technical Heads"
    },
    {
        name: "Vishal Lokwani",
        position: "Competitive Programming Head",
        imgsrc: "https://i.imgur.com/9gYDVGB.jpeg",
        type: "Technical Heads"
    },
    {
        name: "Aadish Sheth",
        position: "Competitive Programming Head",
        imgsrc: "https://i.imgur.com/4VmF5b3.png",
        type: "Technical Heads"
    },
    {
        name: "Ananta Nandpara",
        position: "Cyber Security Head",
        imgsrc: "https://i.imgur.com/MV8t7Tq.jpeg",
        type: "Technical Heads"
    },
    {
        name: "Dharmi Patel",
        position: "Cyber Security Head",
        imgsrc: "https://i.imgur.com/yOyFfbc.jpeg",
        type: "Technical Heads"
    },
    {
        name: "Meet Janiyani",
        position: "Game Development Head",
        imgsrc: "https://i.imgur.com/ePhBFfL.jpeg",
        type: "Technical Heads"
    },
    {
        name: "Anuj Sharma",
        position: "Content & Documentation Head",
        imgsrc: "https://i.imgur.com/HPNFUm3.jpeg",
        type: "non-Technical Heads"
    },
    {
        name: "Avani Gupta",
        position: "Creative Marketing Head",
        imgsrc: "https://i.imgur.com/k69bxVb.png",
        type: "non-Technical Heads"
    },
    {
        name: "Mokshal Shah",
        position: "Event Management & Logistics Head",
        imgsrc: "https://i.imgur.com/v5Ulh91.jpeg",
        type: "non-Technical Heads"
    },
    {
        name: "Axat Vaghela",
        position: "Event Management & Logistics Head",
        imgsrc: "https://i.imgur.com/P1zvRTV.png",
        type: "non-Technical Heads"
    },
    {
        name: "Aayush Khandelwal",
        position: "Graphic Design Head",
        imgsrc: "https://i.imgur.com/MHrbGpL.jpeg",
        type: "non-Technical Heads"
    },
    {
        name: "Tanish Jha",
        position: "Publicity Head",
        imgsrc: "https://i.imgur.com/Hi9cfPs.jpeg",
        type: "non-Technical Heads"
    },
    {
        name: "Yashmi Panchal",
        position: "Publicity Head",
        imgsrc: "https://i.imgur.com/PuYO4VO.jpeg",
        type: "non-Technical Heads"
    },
    {
        name: "Vansh Jain",
        position: "Sponsorship Head",
        imgsrc: "https://i.imgur.com/EINPicI.jpeg",
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
        <div className={`flex flex-col p-[2em] items-center gap-5 bg-[#00ff7b] bg-opacity-15 rounded-none z-[1] hover:translate-y-[-5px] w-[260px]  transition-all outline-1 hover:outline outline-[#00ff7b] ${visible ? 'opacity-100' : 'opacity-0'}`} ref={cardRef}>
            <img src={imgsrc} className="w-[170px] h-[170px] min-w-[170px] min-h-[170px] max-h-[170px] rounded-full object-cover" />
            <div className="flex flex-col items-center">
                <span className="text-2xl helvetica text-center ">{name}</span>
                <span className="text-lg text-foreground-400 minecraft text-wrap w-[200px] text-center">{position}</span>
            </div>
        </div>
    )
}

export default function TeamPage() {

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

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <section className="sm:min-h-[70vh] min-h-screen pt-[160px] justify-start h-fit w-full flex flex-col items-center gap-6">
            <div className="flex flex-col items-center gap-2">
                <span className="font-semibold text-5xl">The Team</span>
                <span className="font-normal text-md text-foreground-500">Meet the team of encode!</span>
            </div>
            <div className="flex sm:w-fit w-full sm:p-0 p-[2em]">
                <Accordion variant="light"
                    itemClasses={{
                        heading: "md:min-w-[80vw] md:max-w-[80vw] justify-center mb-4",
                    }}
                    selectionMode="multiple"
                    defaultExpandedKeys={["executives", "technicalheads", "non-technicalheads"]}
                >
                    {Object.entries(groupedMembers).map(([type, members], index) => (

                        <AccordionItem key={type.toLowerCase().replace(" ", "")}
                            aria-label={`Accordion ${index + 1}`}
                            title={`${type.charAt(0).toUpperCase() + type.slice(1)} `}
                        >
                            <div className="flex flex-wrap gap-3 md:max-w-[80vw] justify-center mb-4">
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
                </Accordion>
            </div>
        </section>
    )
}