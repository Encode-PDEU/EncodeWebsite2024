import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Gallery from "../components/Home/Gallery";
import Quote from "../components/Home/Quote";
import Team from "../components/Home/Team";
import UpcomingEvents from "../components/Home/UpcomingEvents";
import { SentIcon } from "../components/icons";

export default function Home({ preloaderEnded }) {

    const navigate = useNavigate();

    const welcomeTextRef = useRef(null);
    const convoHistoryRef = useRef(null);

    const [cmd, setCmd] = useState("");
    const [outputs, setOutputs] = useState([]);
    const [logoDis, setLogoDis] = useState(true);
    const [currentText, setCurrentText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);
    const [welcomeTextVisible, setWelcomeTextVisible] = useState(false);
    const [isOverflowed, setIsOverflowed] = useState(false);

    // useEffect(() => {
    //     const existingHistory = localStorage.getItem('commandHistory');
    //     if (!existingHistory) return;
    //     let commandHistory = existingHistory ? JSON.parse(existingHistory) : [];
    //     commandHistory.push(newCmd + "\n")
    //     localStorage.setItem('commandHistory', JSON.stringify(commandHistory));
    // }, [outputs]);

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
            if (welcomeTextRef.current) observer.unobserve(welcomeTextRef.current);
        };
    }, []);

    useLayoutEffect(() => {
        scrollToBottom();
    }, [outputs]);

    useEffect(() => {
    }, [isOverflowed]);

    const checkOverflow = () => {
        const container = convoHistoryRef.current;
        setIsOverflowed(container.scrollHeight > container.clientHeight)
    };

    const scrollToBottom = () => {
        const container = convoHistoryRef.current;
        if (container) container.scrollTop = container.scrollHeight;
    };

    const handleCommand = (cmd) => {
        let output;
        let isValidCmd = true;
        console.log(cmd.toLowerCase());
        switch (cmd.toLowerCase()) {
            case "help":
                output = (
                    <>
                        Available commands:<br /><br />
                        <span className="font-bold">help</span> - Display this help message<br />
                        <span className="font-bold">clear</span> - Clear Screen <br />

                        <br /><span className="font-bold">------- Information -------</span><br />
                        <span className="font-bold">join</span> - How to join Encode? <br />

                        <br /><span className="font-bold">------- Navigation -------</span><br />
                        <span className="font-bold">home</span> - Go to the Home page (You are already at home page) <br />
                        <span className="font-bold">about</span> - Go to the About page <br />
                        <span className="font-bold">team</span> - Go to the Team page <br />
                        <span className="font-bold">gallery</span> - Go to the Gallery page <br />
                        <span className="font-bold">contact</span> - Go to the Contact page <br />

                        <br />------- Other ------- <br />
                        coming soon <br />
                        socials <br />

                        <br /> <br />
                    </>
                );
                break;
            case "home":
                navigate("/");
                output = "You are already on the Home page.";
                break;
            case "about":
                navigate("/about");
                output = "Redirecting to the About page...";
                break;
            case "team":
                navigate("/team");
                output = "Redirecting to the Team page...";
                break;
            case "gallery":
                navigate("/gallery");
                output = "Redirecting to the Gallery page...";
                break;
            case "contact":
                navigate("/contact");
                output = "Redirecting to the Contact page...";
                break;
            case "":
            case "^c":
                output = "";
                isValidCmd = false;
                break;
            default:
                output = `${cmd} : The term '${cmd}' is not recognized as the name of a cmdlet, function, script file, or operable program. Check the spelling of the name, or if a path was included, verify that the path is correct and try again.`;
                isValidCmd = false;
        }

        return { output, isValidCmd };
    };

    const handleChange = (e) => {
        setCmd(e.target.value);
    };

    const handleKeyDown = (event) => {
        if (event.ctrlKey && event.key === 'c') {
            event.preventDefault();
            setCmd("^C")
            setOutputs((prevOutputs) => {
                const { output, isValidCmd } = handleCommand("^C");
                const newId = prevOutputs.length + 1;
                return [...prevOutputs, { id: newId, output, cmd, isValidCmd }];
            });
            setCmd("");
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (cmd === "clear") {
            setLogoDis(true);
            setWelcomeTextVisible(true);
            setOutputs([]);
        }
        else {
            if (logoDis) setLogoDis(false);
            setOutputs((prevOutputs) => {
                const { output, isValidCmd } = handleCommand(cmd);
                const newId = prevOutputs.length + 1;
                return [...prevOutputs, { id: newId, output, cmd, isValidCmd }];
            });
        }
        setCmd("");

        if (!isOverflowed) checkOverflow();
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


    return (
        <div className="flex p-[3em] min-h-[100vh] transition-height flex-col sm:gap-0 gap-4 items-center justify-center">
            <div className="min-h-[100vh] transition-height flex items-center justify-center p-[1em] w-screen mt-[-30px]">
                <div className="flex h-[80dvh] w-full transition-height flex-col items-center justify-center sm:w-[80%] bg-gray-500 bg-opacity-10 outline outline-1 outline-[#00ff7b71] sm:rounded-3xl rounded-2xl relative green_shadow">
                    <div className="absolute top-0 w-full h-[35px] bg-gray-500  bg-opacity-20 rounded-t-3xl p-2 pl-5 text-white text-opacity-40 justify-between flex">
                        <span>{"cmd > { ! }"}</span>

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

                    <div className={logoDis ? "hidden" : `${!isOverflowed ? "items-start" : ""} flex w-full h-full mb-20 align-top mt-12 px-6 overflow-y-scroll`} ref={convoHistoryRef}>
                        <span className="text-left w-full text-l font-normal">
                            {outputs.map((output) => {
                                return (
                                    <div key={output.id}>
                                        <div className="mt-3">{`encode@pdeu: ~ ${output.cmd}`}</div>
                                        <div className={`mt-1 ${output.isValidCmd ? "text-green-500" : "text-red-500"}`}>
                                            {output.output}
                                        </div>
                                    </div>
                                );
                            })}
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
                            onKeyDown={handleKeyDown}
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