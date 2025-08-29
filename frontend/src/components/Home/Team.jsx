// import { TeamCard } from "../../pages/Team";
import { Link } from "react-router-dom";
import { Button } from "@nextui-org/button";
import { useRef, useEffect, useState } from "react";
import insta from '../../images/instagram.webp';
import linkedin from '../../images/linkedin.webp';
import twitter from '../../images/white-twitter.png';

const executives = [
  {
    name: "Axat Vaghela",
    position: "President",
    imgsrc: "/CommittePhotos/Execs/Axat_Vaghela.jpeg",
    type: "executives",
    links: ["", "", ""], 
  },
  {
    name: "Nemil Shah",
    position: "Vice President",
    imgsrc: "/CommittePhotos/Execs/Nemil_Shah.jpeg",
    type: "executives",
    links: ["", "", ""],
  },
  {
    name: "Aayush Khandelwal",
    position: "Treasurer",
    imgsrc: "/CommittePhotos/Execs/Aayush_Khandelwal.jpg",
    type: "executives",
    links: ["", "", ""],
  },
  {
    name: "Mokshal Shah",
    position: "Above Tech Co-Ordinator",
    imgsrc: "/CommittePhotos/Execs/Mokshal_Shah.jpeg",
    type: "executives",
    links: ["", "", ""],
  },
  {
    name: "Parth Panot",
    position: "Technical Co-Ordinator",
    imgsrc: "/CommittePhotos/Execs/Parth_Panot.jpg",
    type: "executives",
    links: ["", "", ""],
  },
];

function flipCard(id) {
  const item = document.getElementById(id);
  item.classList.toggle("rotated");
}

export function TeamCard({
  imgsrc = "https://links.aryanranderiya.com/l/default_user",
  id,
  name,
  about = "No description available",
  links = [], // ✅ default empty array
  position,
}) {
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
      id={id}
      className={`card hover:translate-y-[-5px] hover:outline transition-all outline-[#00ff7b] outline-1 ${
        visible ? "opacity-100" : "opacity-0"
      }`}
      ref={cardRef}
    >
      <div className="card-inner bg-[#00ff7b] bg-opacity-15">
        {/* FRONT */}
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

        {/* BACK */}
        <div className="card-back">
          <div className="card-descript" onClick={() => flipCard(id)}>
            {about}
          </div>
          <div className="card-links">
            {links?.[0] && (
              <a href={links[0]} target="_blank" rel="noreferrer">
                <img src={insta} />
              </a>
            )}
            {links?.[1] && (
              <a href={links[1]} target="_blank" rel="noreferrer">
                <img src={linkedin} />
              </a>
            )}
            {links?.[2] && (
              <a href={links[2]} target="_blank" rel="noreferrer">
                <img src={twitter} />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
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
        <span className="font-normal text-md text-foreground-500">
          Meet the faces behind the club!
        </span>
      </div>

      <div className="flex flex-wrap gap-3 md:max-w-[90vw] justify-center mb-4">
        {executives.map((member, index) => (
          <TeamCard
            key={index}
            id={index}
            name={member.name}
            position={member.position}
            imgsrc={member.imgsrc}
            type={member.type}
            about={member.about}
            links={member.links}
          />
        ))}
      </div>

      <Link to={"team"}>
        <Button
          color="success"
          radius="none"
          size="lg"
          className="font-semibold text-lg"
        >
          View All Members
        </Button>
      </Link>
    </section>
  );
}
