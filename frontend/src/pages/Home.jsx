import { Input } from "@nextui-org/input";
import { Button } from "@nextui-org/button";
import { SentIcon } from "../components/icons"
import Team from "../components/Home/Team";
import Gallery from "../components/Home/Gallery";
import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import UpcomingEvents from "../components/Home/UpcomingEvents";
import Quote from "../components/Home/Quote";

export default function Home({ preloaderEnded }) {
    const [cmd, setCmd] = useState("");
    const [output, setOutput] = useState("");
    const [logoDis, setLogoDis] = useState(true);
    const [currentText, setCurrentText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);
    const [welcomeTextVisible, setWelcomeTextVisible] = useState(false);
    const welcomeTextRef = useRef(null);
    const navigate = useNavigate()

    useEffect(() => {
        let hasHappenedOnce = false;
        const observer = new IntersectionObserver(
            ([entry]) => {
                setTimeout(() => {
                    setWelcomeTextVisible(entry.isIntersecting);
                    hasHappenedOnce = true;
                }, !hasHappenedOnce ? 2100 : 0);
            },
            { threshold: 0.1 }
        );

        if (welcomeTextRef.current) observer.observe(welcomeTextRef.current);

        return () => {
            if (welcomeTextRef.current) {
                observer.unobserve(welcomeTextRef.current);
            }
        };
    }, []);

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

    const text = "The Computer Science Club of PDEU";
    useEffect(() => {
        if (!preloaderEnded) return;
        if (currentIndex < text.length) {
            const timeout = setTimeout(() => {
                setCurrentText(prevText => prevText.replace("_", "") + text[currentIndex] + "_");
                setCurrentIndex(prevIndex => prevIndex + 1);
            }, 30);

            return () => clearTimeout(timeout);
        } else setCurrentText(prevText => prevText.replace("_", ""));

    }, [currentIndex, preloaderEnded]);


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
        <div className="flex p-[3em] min-h-[100vh] transition-height flex-col sm:gap-0 gap-4 items-center justify-center">
            <div className="min-h-[100vh] transition-height flex items-center justify-center p-[1em] w-screen mt-[-30px]">
                <div className="flex h-[80dvh] w-full transition-height flex-col items-center justify-center sm:w-[80%] bg-gray-500 bg-opacity-10 outline outline-1 outline-[#00ff7b71] sm:rounded-3xl rounded-2xl relative green_shadow">
                    <div className="absolute top-0 w-full h-[35px] bg-gray-500  bg-opacity-20 rounded-t-3xl p-2 pl-5 text-white text-opacity-40 justify-between flex">
                        <span>{"cmd > encode@pdeu: ~"}</span>

                        <div className="pr-3 flex items-center gap-2">
                            <div className="rounded-full bg-gray-500 bg-opacity-20 outline-1 outline-gray-600 outline w-[23px] h-[23px] flex items-center justify-center">
                                -
                            </div>
                            <div className="rounded-full bg-gray-500 bg-opacity-20 outline-1 outline-gray-600 outline w-[23px] h-[23px] flex items-center justify-center">
                                ▢
                            </div>
                            <div className="rounded-full bg-gray-500 bg-opacity-20 outline-1 outline-gray-600 outline w-[23px] h-[23px] flex items-center justify-center">
                                X
                            </div>
                        </div>
                    </div>

                    <div className={logoDis ? "flex flex-col sm:gap-0 gap-3" : "hidden"} ref={welcomeTextRef}>
                        <div className="overflow-hidden flex">
                            <span className={`text-center w-full sm:text-7xl text-3xl transition-all duration-500
                            font-bold ${welcomeTextVisible ? "transformVisible" : "transformInvisible"}`}>
                                Welcome to Encode
                            </span>
                        </div>
                        <span className="text-center w-full sm:text-2xl minecraft font-normal text-foreground-500">
                            {currentText}
                        </span>
                    </div>

                    <div className={logoDis ? "hidden" : "flex items-start w-full h-full align-top mt-12 px-6"}>
                        <span className="text-left w-full sm:text-2xl text-xl font-normal">
                            {output}
                        </span>
                    </div>

                    <form
                        className="absolute sm:bottom-5 bottom-2 sm:w-[98%] w-[95%] flex items-center gap-2"
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
                        <Button isIconOnly size="lg" color={"success"} variant="shadow" onClick={handleSubmit}>
                            <SentIcon />
                        </Button>
                    </form>
                </div>
            </div>

            <UpcomingEvents />
            <Team />
            <Gallery />
            <Quote />
        </div>
    );
}