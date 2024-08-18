import { Button, ButtonGroup } from "@nextui-org/button";

export default function Navbar() {
    return <div className="w-full flex top-0 fixed p-[1em] justify-between items-center backdrop-blur-xl z-10">

        <span className="font-bold text-2xl">
            Encode
        </span>
        <div className="flex gap-3 items-center">

            <span className="text-4xl text-foreground-300">
                [
            </span>

            <Button radius="none" variant="flat" color="success">home</Button>
            <Button radius="none" variant="flat" color="success">about</Button>
            <Button radius="none" variant="flat" color="success">team</Button>
            <Button radius="none" variant="flat" color="success">gallery</Button>
            <Button radius="none" variant="flat" color="success">contact</Button>
            <span className="text-4xl text-foreground-300">
                ]
            </span>
        </div>
    </div>
}