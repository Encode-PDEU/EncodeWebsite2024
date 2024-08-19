import { Button } from "@nextui-org/button"
import { Chip } from "@nextui-org/chip"

function EventCard() {
    return (
        <div className="flex flex-col bg-[#00ff7b] bg-opacity-10 p-5 gap-2 hover:translate-y-[-5px] transition-all outline-1 hover:outline
         outline-[#00ff7b]">
            <div className="flex flex-col pb-2">
                <Chip color="success" className="mb-2">10/10/24</Chip>
                <span className="text-2xl">Event Title</span>
                <span className="text-foreground-500 max-w-[19vw]">
                    Event Description
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente neque ipsum repudiandae quod quibusdam dolorum aut
                </span>
            </div>

            <Button color="success" variant="flat" radius="none">Register</Button>
        </div>
    )
}

export default function UpcomingEvents() {
    return (
        <section className="min-h-screen h-fit justify-center w-full flex flex-col items-center gap-6 ">
            <div className="flex flex-col items-center gap-2">
                <span className="font-semibold text-5xl">Upcoming Events</span>
                <span className="font-normal text-md text-foreground-500">This years events of Encode!</span>
            </div>

            <div className="flex flex-wrap gap-4 justify-center">
                <EventCard />
                <EventCard />
                <EventCard />
                <EventCard />
                <EventCard />
                <EventCard />
                <EventCard />
                <EventCard />
            </div>

            <Button color="success" radius="none" size="lg" className="mt-2 font-semibold text-lg">View All Events</Button>
        </section>
    )
}