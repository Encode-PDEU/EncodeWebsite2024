import { Button, ButtonGroup } from "@nextui-org/button";

export default function Navbar() {
    return <div className="w-full flex top-0 fixed p-[1em] justify-between items-center">

        <span className="font-bold text-2xl">
            Encode
        </span>
        <div className="flex gap-3">
            <Button radius="none" variant="flat" color="success" size="lg">Home</Button>
            <Button radius="none" variant="flat" color="success" size="lg">Team</Button>
            <Button radius="none" variant="flat" color="success" size="lg">Gallery</Button>
            <Button radius="none" variant="flat" color="success" size="lg">Contact</Button>
        </div>
    </div>
}