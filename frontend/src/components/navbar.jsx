import { Button, ButtonGroup } from "@nextui-org/button";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
    const navigate = useNavigate();
    const handleClickHome = () => {
        navigate("/");
    };
    return (
        <div className="w-full flex top-0 fixed p-[1em] justify-between items-center backdrop-blur-xl z-10 bg-black bg-opacity-20">
            <span className="font-bold text-2xl">Encode</span>
            <div className="flex gap-3 items-center">
                <span className="text-4xl text-foreground-300">[</span>

                <Button radius="none" variant="flat" color="success" onClick={handleClickHome}>
                    home
                </Button>
                <Button radius="none" variant="flat" color="success">
                    about
                </Button>
                <Button radius="none" variant="flat" color="success">
                    team
                </Button>
                <Button radius="none" variant="flat" color="success">
                    gallery
                </Button>
                <Button radius="none" variant="flat" color="success">
                    contact
                </Button>
                <span className="text-4xl text-foreground-300">]</span>
            </div>
        </div>
    );
}