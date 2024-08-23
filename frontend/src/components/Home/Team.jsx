import { Button } from "@nextui-org/button";
import { TeamCard } from "../../pages/Team";
import { Link } from "react-router-dom";
import { teamMembers } from "../../pages/Team"
import { Button } from "@nextui-org/button"
// import { Accordion, AccordionItem } from "@nextui-org/accordion";
import { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";
import insta from '../../images/instagram.webp'
import linkedin from '../../images/linkedin.webp'
import twitter from '../../images/white-twitter.png'

const executives = [
    {
        name: "Anokhi Shah",
        position: "President",
        imgsrc: "https://i.imgur.com/2SOGOOG.png",
        about: "As a third-year student studying information Communications Technology, I like my unique name and distinct points of view. I like building relationships with a wide range of people, and i'm always ready to step up, lead, and take on new challenges. I consider myself an particularly patient and skilled problem solver. I strive to bring out the best in people and always make sure that everyone around me is acknowledged",
        links: ["https://www.instagram.com/_anokhii.s", "https://www.linkedin.com/in/anokhi-shah-07316a296", ""]
    },
    {
        name: "Saumya Talwani",
        position: "Vice President",
        imgsrc: "https://i.imgur.com/yXbXGMx.jpeg",
        about: "I'm a third-year Computer Science Engineering student with a passion for web development and graphic design. My love for Formula 1 al and cricket keeps me excited and energized. I'm always eager to learn and explore new technologies, aiming to build innovative and impactful projects. When I'm not coding or designing, you can find me rewatching Modern Family. Let's connect and create something amazing together!",
        links: ["https://www.instagram.com/saumyatalwani", "https://www.linkedin.com/in/saumyatalwani", ""]
    },
    {
        name: "Diya Mirani",
        position: "Treasurer",
        imgsrc: "https://i.imgur.com/LYXsFsQ.jpeg",
        about: "me core: pyjamas, food, and a vibe that will eat without leaving any crumbs An avid reader and passionate foodie, I love a good book and a great meal. A deep sleeper who's hard to wake up, but my funny laugh is sure to brighten your day",
        links: ["https://www.instagram.com/diyamiranii", "https://www.linkedin.com/in/diya-mirani-33b075248", ""]
    },
    {
        name: "Dhyan Shah",
        position: "Technical Head",
        imgsrc: "https://i.imgur.com/PTQeHnF.png",
        about: "I am deeply passionate about emerging technologies and am dedicated to staying at the forefront of technological advancements. My approach blends a commitment to excellence with a sense of humility, striving to achieve the highest standards while remaining grounded. A I believe in continuous learning and personal growth",
        links: ["https://www.instagram.com/eh_dhyanshah22", "https://www.linkedin.com/in/dhyanshah22", "https://x.com/KyaYaaarDhyan"]
    }
];


function flipCard(id){
    const item = document.getElementById(id);
    item.classList.toggle('rotated');
}

export function TeamCard({ imgsrc = "https://links.aryanranderiya.com/l/default_user", id, name, about, links, position }) {
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
        <div
            id={id}
            className={`card hover:translate-y-[-5px] hover:outline transition-all outline-[#00ff7b] outline-1 ${visible ? 'opacity-100' : 'opacity-0'}`}
            ref={cardRef}
        >
            <div className="card-inner bg-[#00ff7b] bg-opacity-15">
                <div className="card-front" onClick={() => flipCard(id)}>
                    <img
                        src={imgsrc}
                        className="w-[170px] h-[170px] min-w-[170px] min-h-[170px] max-h-[170px] rounded-full"
                    />
                    <div className="flex flex-col items-center">
                        <span className="text-2xl helvetica">{name}</span>
                        <span className="text-lg text-foreground-400 minecraft text-wrap w-[200px] text-center">
                            {position}
                        </span>
                    </div>
                </div>
                <div className="card-back">
                    <div className="card-descript" onClick={() => flipCard(id)}>{about}</div>
                    <div className="card-links">
                        <a href={links[0] == ""? null : links[0]}><img src={insta}/></a>
                        <a href={links[1] == ""? null : links[1]}><img src={linkedin}/></a>
                        <a href={links[2] == ""? null : links[2]}><img src={twitter}/></a>
                    </div>
                </div>
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

    const groupedMembers = groupByType(executives);


    return (
        <section className="min-h-screen justify-center h-fit w-full flex flex-col items-center gap-6">
            <div className="flex flex-col items-center gap-2">
                <span className="font-semibold text-5xl">The Executives</span>
                <span className="font-normal text-md text-foreground-500">Meet the faces behind the club!</span>
            </div>

            <div className="flex flex-wrap gap-3 md:max-w-[90vw] justify-center mb-4">
                {executives.map((member, index) => {
                        return <TeamCard
                            key={index}
                            id ={index}
                            name={member.name}
                            position={member.position}
                            imgsrc={member.imgsrc}
                            type={member.type}
                            about={member.about}
                            links={member.links}
                        />
                }
                )}


            </div>
            <Button color="success" radius="none" size="lg" className="font-semibold text-lg">View All Members</Button>
        </section >
    )
}
