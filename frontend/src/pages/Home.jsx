import { Input } from "@nextui-org/input";
import { Button } from "@nextui-org/button";
import { SentIcon } from "../components/icons"
import Team from "../components/Home/Team";
import Gallery from "../components/Home/Gallery";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
    const [cmd, setCmd] = useState("");
    const [output, setOutput] = useState("");
    const [logoDis, setLogoDis] = useState(true);
    const navigate = useNavigate()

    const handleCommand = (cmd) => {
        switch (cmd.toLowerCase()) {
            case 'help':
                return "Available commands:\n1. help - Display this help message\n2. about - Go to the About page";
            case 'home':
                navigate('/');
                return "You are already on the Home page.";
            case 'about':
                navigate('/about');
                return "Redirecting to the About page...";
            case 'team':
                navigate('/team');
                return "Redirecting to the Team page...";
            case 'gallery':
                navigate('/gallery');
                return "Redirecting to the Gallery page...";
            case 'contact':
                navigate('/contact');
                return "Redirecting to the Contact page...";
            case '':
                return "No Input received. Please enter a valid input.";
            default:
                return `${cmd} : The term '${cmd}' is not recognized as the name of a cmdlet, function, script file, or operable program.Check the spelling of the name, or if a path was included, verify that the path is correct and try again.;`
        }
    };

    const handleChange = (e) => {
        setCmd(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLogoDis(false);
        setOutput(handleCommand(cmd));
        setCmd("");
    };
    return (
        <div className="flex p-[3em] min-h-screen flex-col">
            <div className="flex h-[85vh] flex-col items-center justify-center w-full m-[1em] mt-[2em] bg-gray-500 bg-opacity-10 outline outline-1 outline-[#00ff7b71] rounded-3xl relative">
                <div className="absolute top-0 w-full h-[35px] bg-gray-500  bg-opacity-20 rounded-t-3xl p-2 pl-5 text-white text-opacity-40 justify-between flex">
                    <span>{"cmd > encode@pdeu: ~"}</span>

                    <div className="pr-3 flex items-center gap-2">
                        <div className="rounded-full bg-gray-500 bg-opacity-20 outline-1 outline-gray-600 outline w-[23px] h-[23px] flex items-center justify-center">
                            -
                        </div>
                        <div className="rounded-full bg-gray-500 bg-opacity-20 outline-1 outline-gray-600 outline w-[23px] h-[23px] flex items-center justify-center">
                            ▢
                        </div>
                        <div className="rounded-full bg-gray-500 bg-opacity-20 outline-1 outline-gray-600 outline w-[23px] h-[23px] flex items-center justify-center"></div>
                    </div>
                </div>

                <div className={logoDis ? "flex flex-col" : "hidden"}>
                    <span className="text-center w-full text-7xl">Welcome to Encode</span>
                    <span className="text-center w-full text-2xl minecraft font-normal text-foreground-500">
                        The Computer Science Club of PDEU
                    </span>
                </div>
                <div className={logoDis ? "hidden" : "flex items-start w-full h-full align-top mt-12 px-6"}>
                    <span className="text-left w-full text-2xl font-normal">
                        {output}
                    </span>
                </div>

                <form
                    className="absolute bottom-5 w-[98%] flex items-center gap-2"
                    action=""
                    onSubmit={handleSubmit}
                >
                    <Input
                        className="minecraft! font-normal"
                        size="lg"
                        isClearable
                        onChange={handleChange}
                        value={cmd}
                        color={"success"}
                        variant="bordered"
                        startContent={<span className="mr-5 text-success">{">"}</span>}
                        placeholder="Enter 'help' for list of all commands"
                    />
                    <Button isIconOnly size="lg" color={"success"} variant="shadow">
                        <SentIcon />
                    </Button>
                </form>
            </div>

            <Team />
            <Gallery />
        </div>
    );
}