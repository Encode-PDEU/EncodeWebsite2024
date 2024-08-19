import { Button } from "@nextui-org/button"
import { Chip } from "@nextui-org/chip"

function formatDate(isoDate) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(isoDate).toLocaleDateString(undefined, options);
}

function EventCard({ title, date, type = "Workshop",
    description = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente neque ipsum repudiandae quod quibusdam dolorum aut`
}) {
    return (
        <div className="flex flex-col bg-[#00ff7b] bg-opacity-10 p-5 gap-2 hover:translate-y-[-5px] transition-all outline-1 hover:outline
         outline-[#00ff7b]">
            <div className="flex flex-col pb-2">
                <div className="flex justify-between pb-3 gap-11">
                    <Chip color="success" className="mb-2" variant="dot" >{formatDate(date)}</Chip>
                    <Chip color="success" className="mb-2" variant="flat"  >{type}</Chip>
                </div>
                <span className="text-2xl">{title}</span>
                <span className="text-foreground-500 max-w-[19vw]">{description}</span>
            </div>
            <Button color="success" variant="flat" radius="none">Register</Button>
        </div>
    )
}

export default function UpcomingEvents() {

    const events = [
        {
            title: "Web Security Basics",
            date: "2025-01-24T00:00:00Z",
            description: "",
            type: "Workshop"
        },
        {
            title: "MERN Stack Bootcamp",
            date: "2025-02-08T00:00:00Z",
            description: "",
            type: "Workshop"
        },
    ];


    return (
        <section className="min-h-screen h-fit justify-center w-full flex flex-col items-center gap-6 ">
            <div className="flex flex-col items-center gap-2">
                <span className="font-semibold text-5xl">Upcoming Events</span>
                <span className="font-normal text-md text-foreground-500">This years events of Encode!</span>
            </div>

            <div className="flex flex-wrap gap-4 justify-center">
                {events.map((event, index) => (
                    <EventCard key={index} title={event.title} date={event.date} description={event.description} type={event.type} />
                ))}
            </div>

            <Button color="success" radius="none" size="lg" className="mt-2 font-semibold text-lg">View All Events</Button>
        </section>
    )
}