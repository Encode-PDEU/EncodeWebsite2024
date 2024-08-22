import { Button } from "@nextui-org/button";
import { TeamCard } from "../../pages/Team";
import { Link } from "react-router-dom";
import { teamMembers } from "../../pages/Team"

export default function Team() {

    return (
        <section className="min-h-screen py-[3em] justify-center h-fit w-full flex flex-col items-center gap-6">
            <div className="flex flex-col items-center gap-2">
                <span className="font-semibold text-5xl">The Executives</span>
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

            </div>
            <Link to={"team"}>
                <Button color="success" radius="none" size="lg" className="font-semibold text-lg">
                    View All Members
                </Button>
            </Link>
        </section >
    )
}