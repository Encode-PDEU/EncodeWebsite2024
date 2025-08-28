import { Accordion, AccordionItem } from "@nextui-org/accordion";
import { useEffect, useRef, useState } from "react";

const teamMembers = [
  {
    name: "Axat Vaghela",
    position: "President",
    imgsrc: "/CommittePhotos/Execs/Axat_Vaghela.jpeg",
    type: "executives"
  },
  {
    name: "Nemil Shah",
    position: "Vice President",
    imgsrc: "/CommittePhotos/Execs/Nemil_Shah.jpeg",
    type: "executives"
  },
  {
    name: "Aayush Khandelwal",
    position: "Treasurer",
    imgsrc: "/CommittePhotos/Execs/Aayush_Khandelwal.jpg",
    type: "executives"
  },
  {
    name: "Mokshal Shah",
    position: "Above Tech Co-Ordinator",
    imgsrc: "/CommittePhotos/Execs/Mokshal_Shah.jpeg",
    type: "executives"
  },
  {
    name: "Parth Panot",
    position: "Technical Co-Ordinator",
    imgsrc: "/CommittePhotos/Execs/Parth_Panot.jpg",
    type: "executives"
  },
  {
    name: "Hritik Shah",
    position: "AI/ML Head",
    imgsrc: "/CommittePhotos/AIML/Hritik_Shah.jpg",
    type: "Technical Heads"
  },
  {
    name: "Dev Dobariya",
    position: "Cloud & DevOps Head",
    imgsrc: "/CommittePhotos/Cloud/Dev_Dobariya.jpg",
    type: "Technical Heads"
  },
  {
    name: "Parth Gurlani",
    position: "Cloud & DevOps Head",
    imgsrc: "/CommittePhotos/Cloud/Parth_Gurlani.jpg",
    type: "Technical Heads"
  },
  {
    name: "Rishi Mehta",
    position: "Web Development Head",
    imgsrc: "/CommittePhotos/WebDev/Rishi_Mehta.jpeg",
    type: "Technical Heads"
  },
  {
    name: "Maitree Mistry",
    position: "Web Development Head",
    imgsrc: "/CommittePhotos/WebDev/MaitreeM.jpg",
    type: "Technical Heads"
  },
  {
    name: "Dev Mehta",
    position: "Competitive Programming Head",
    imgsrc: "/CommittePhotos/CP/Dev_Mehta.jpg",
    type: "Technical Heads"
  },
  {
    name: "Varun Iyer",
    position: "Competitive Programming Head",
    imgsrc: "/CommittePhotos/CP/Varun_Iyer.jpg",
    type: "Technical Heads"
  },
  {
    name: "Jaineel Hemnani",
    position: "Cyber Security Head",
    imgsrc: "/CommittePhotos/CyberSec/Jaineel_Hemnani.jpg",
    type: "Technical Heads"
  },
  {
    name: "Rudra Patel",
    position: "Cyber Security Head",
    imgsrc: "/CommittePhotos/CyberSec/RUDRA_PATEL.jpg",
    type: "Technical Heads"
  },
  {
    name: "Hemil Bhanderi",
    position: "Game Development Head",
    imgsrc: "/CommittePhotos/GameDev/HEMIL.jpg",
    type: "Technical Heads"
  },
  {
    name: "Anoushka Aithal",
    position: "Content & Documentation Head",
    imgsrc: "/CommittePhotos/CD/Anoushka_Aithal.jpeg",
    type: "non-Technical Heads"
  },
  {
    name: "Vidhi Sheth",
    position: "Content & Documentation Head",
    imgsrc: "/CommittePhotos/CD/VIDHI_SHETH.png",
    type: "non-Technical Heads"
  },
  {
    name: "Laksh Parekh",
    position: "Event Management & Logistics Head",
    imgsrc: "/CommittePhotos/EM/Laksh_Parekh.jpg",
    type: "non-Technical Heads"
  },
  {
    name: "Kunjan Panchal",
    position: "Graphic Design Head",
    imgsrc: "/CommittePhotos/GD/Kunjan.jpg",
    type: "non-Technical Heads"
  },
  {
    name: "Dhwani Bhut",
    position: "Social Media Head",
    imgsrc: "/CommittePhotos/SM/Dhwani_Bhut.jpeg",
    type: "non-Technical Heads"
  },
  {
    name: "Aarav Patel",
    position: "Publicity Head",
    imgsrc: "/CommittePhotos/PR/Aarav_Patel.jpeg",
    type: "non-Technical Heads"
  },
  {
    name: "Reyan Doshi",
    position: "Publicity Head",
    imgsrc: "/CommittePhotos/PR/Reyan_Doshi.jpg",
    type: "non-Technical Heads"
  }
];
export { teamMembers };

export function TeamCard({ imgsrc = "https://links.aryanranderiya.com/l/default_user", name, position }) {
  const cardRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(entry.isIntersecting);
      },
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
      className={`flex flex-col p-[2em] items-center gap-5 bg-[#00ff7b] bg-opacity-15 rounded-none z-[1] hover:translate-y-[-5px] w-[260px] transition-all outline-1 hover:outline outline-[#00ff7b] ${
        visible ? "opacity-100" : "opacity-0"
      }`}
    >
      <img
        src={imgsrc}
        className="w-[170px] h-[170px] min-w-[170px] min-h-[170px] max-h-[170px] rounded-full object-cover scale-90"
      />
      <div className="flex flex-col items-center">
        <span className="text-2xl helvetica text-center ">{name}</span>
        <span className="text-lg text-foreground-400 minecraft text-wrap w-[200px] text-center">
          {position}
        </span>
      </div>
    </div>
  );
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
        <Accordion
          variant="light"
          itemClasses={{
            heading: "md:min-w-[80vw] md:max-w-[80vw] justify-center mb-4"
          }}
          selectionMode="multiple"
          defaultExpandedKeys={["executives", "technicalheads", "non-technicalheads"]}
        >
          {Object.entries(groupedMembers).map(([type, members], index) => (
            <AccordionItem
              key={type.toLowerCase().replace(" ", "")}
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
  );
}
