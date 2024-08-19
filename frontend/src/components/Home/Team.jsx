import { Button } from "@nextui-org/button"


export function TeamCard({ imgsrc = "https://links.aryanranderiya.com/l/default_user", name, position }) {
    return (
        <div className="flex flex-col p-[2em] items-center gap-5 bg-[#00ff7b] bg-opacity-15 rounded-none z-[1]">
            <img src={imgsrc} className="w-[200px] h-[200px] rounded-full" />
            <div className="flex flex-col items-center">
                <span className="text-2xl helvetica">{name}</span>
                <span className="text-lg text-foreground-400 minecraft">{position}</span>
            </div>
        </div>
    )
}

export default function Team() {

    const teamMembers = [
        {
            name: "Anokhi Shah",
            position: "President",
            imgsrc: "https://i.imgur.com/2SOGOOG.png"
        },
        {
            name: "Saumya Talwani",
            position: "Vice President",
            imgsrc: "https://i.imgur.com/yXbXGMx.jpeg"
        },
        {
            name: "Diya Mirani",
            position: "Treasurer",
            imgsrc: "https://i.imgur.com/LYXsFsQ.jpeg"
        },
        {
            name: "Dhyan Shah",
            position: "Technical Head",
            imgsrc: "https://i.imgur.com/PTQeHnF.png"
        }
    ];


    return (
        <section className="min-h-screen justify-center h-fit w-full flex flex-col items-center gap-6">
            <div className="flex flex-col items-center gap-2">
                <span className="font-semibold text-5xl">The Team</span>
                <span className="font-normal text-md text-foreground-500">Meet the faces behind the club!</span>
            </div>

            <div className="flex flex-wrap gap-3 md:max-w-[70vw] justify-center mb-4">
                {teamMembers.map((member, index) => (
                    <TeamCard
                        key={index}
                        name={member.name}
                        position={member.position}
                        imgsrc={member.imgsrc}
                    />
                ))}
            </div>
            <Button color="success" radius="none" size="lg" className="font-semibold text-lg">View All</Button>
        </section>
    )
}