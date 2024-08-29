import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Gallery from "../components/Home/Gallery";
import Quote from "../components/Home/Quote";
import Team from "../components/Home/Team";
import UpcomingEvents from "../components/Home/UpcomingEvents";
import { SentIcon, TerminalIcon, QuoteDownIcon, Album01Icon, GlobeIcon, UserGroupIcon, Calendar01Icon } from "../components/icons";
import linkedin from "../images/linkedin.webp"
import instagram from "../images/instagram.webp"
import twitter from "../images/twitter.webp"
import Map from "../components/Home/Map"
import Encode from "../components/Home/Encode"

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

        window.scrollTo(0, 0);

        let hasHappenedOnce = false;
        const observer = new IntersectionObserver(
            ([entry]) => {
                setTimeout(() => {
                    setWelcomeTextVisible(entry.isIntersecting);
                    hasHappenedOnce = true;
                }, (!hasHappenedOnce && !preloaderEnded) ? 2100 : 0);
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
        switch (cmd.toLowerCase()) {
            case "help":
                output = (
                    <>
                        List of available commands:<br /><br />
                        <span className="font-bold">help</span> - Display this help message<br />
                        <span className="font-bold">clear | cls</span> - Clear Screen <br />

                        <br /><span className="font-bold">------- Information -------</span><br />
                        <span className="font-bold">encode</span> - Who are we? <br />
                        <span className="font-bold">join</span> - How to join Encode? <br />
                        <span className="font-bold">socials</span> - Where can I follow Encode? <br />

                        <br /><span className="font-bold">------- Navigation -------</span><br />
                        <span className="font-bold">home</span> - Go to the Home page (You are already at home page) <br />
                        <span className="font-bold">about</span> - Go to the About page <br />
                        <span className="font-bold">team</span> - Go to the Team page <br />

                        <br /><span className="font-bold">------- Presentations -------</span><br />
                        <span className="font-bold">welcome1</span> - View Room 007 PPT <br />
                        <span className="font-bold">welcome2</span> - View Room 008 PPT <br />

                        <br /><span className="font-bold">------- Projects -------</span><br />
                        <span className="font-bold">ai/ml</span> - View AI/ML Team's Projects <br />
                        <span className="font-bold">app</span> - View App Dev Team's Projects <br />
                        <span className="font-bold">web</span> - View Web Dev Team's Projects <br />
                        <span className="font-bold">game</span> - View Game Dev Team's Projects <br />
                        <span className="font-bold">cloud</span> - View Cloud and Devops Team's Projects <br />

                        {/* <span className="font-bold">gallery</span> - Go to the Gallery page <br /> */}
                        {/* <span className="font-bold">contact</span> - Go to the Contact page <br /> */}

                        {/* <br /><span className="font-bold">------- Other -------</span><br /> */}
                        {/* coming soon <br /> */}
                        <br />

                        <br /> <br />
                    </>
                );
                break;
            case "socials":
                output = (
                    <div className="flex h-fit gap-2 flex-col">

                        <a className="flex gap-3 items-center hover:underline decoration-white cursor-pointer"
                            href="https://www.linkedin.com/company/encode-pdpu/" target="_blank">
                            <img src={linkedin} alt="LinkedIn Logo" width={"30px"} height={"30px"} />
                            <span className="text-xl text-white">LinkedIn</span>
                        </a>

                        <a className="flex gap-3 items-center hover:underline decoration-white"
                            href="https://www.instagram.com/encode_pdeu/" target="_blank">
                            <img src={instagram} alt="Instagram Logo" width={"30px"} height={"30px"} />
                            <span className="text-xl text-white">Instagram</span>
                        </a>

                        <a className="flex gap-3 items-center hover:underline decoration-white"
                            href="https://twitter.com/Encode_PDEU" target="_blank">
                            <img src={twitter} alt="Twitter Logo" width={"30px"} height={"30px"} className="invert" />
                            <span className="text-xl text-white">Twitter</span>
                        </a>
                    </div>
                );
                break;
            case "welcome1":
                window.open("https://www.canva.com/design/DAGOmla9Xlc/IgdX_mCaruQhxiZofktxGg/edit?utm_content=DAGOmla9Xlc&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton", "_blank");
                output = "Redirecting to the Welcome Presentation...";
                break;
            case "welcome2":
                window.open("https://www.canva.com/design/DAGOfe1J5M0/nEnUgLCU4nFIWbguP3vRAA/edit?utm_content=DAGOfe1J5M0&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton", "_blank");
                output = "Redirecting to the Welcome Presentation...";
                break;
            case "ai/ml":
                window.open("https://drive.google.com/drive/folders/1yDYtO62pFz0mjq3lGj2jv7c2PRslYWBz", "_blank");
                output = "Redirecting to the Welcome Presentation...";
                break;
            case "app":
                window.open("https://drive.google.com/drive/folders/14OTBlJgOcHY0rjYjtlIjzjBYQJynOXaK", "_blank");
                output = "Redirecting to the Welcome Presentation...";
                break;
            case "cloud":
                window.open("https://drive.google.com/drive/folders/1VIEm8LzFoCXJdX347NeZVtTrSd_MKw24", "_blank");
                output = "Redirecting to the Welcome Presentation...";
                break;
            case "game":
                window.open("https://drive.google.com/drive/folders/13_N-bAfOIA7eEpVlDTV-eakH7CFZ9Kqp", "_blank");
                output = "Redirecting to the Welcome Presentation...";
                break;
            case "web":
                window.open("https://drive.google.com/drive/folders/1--DpsXy7ipfSX_XmAQbY5l4Q01bKZMj9", "_blank");
                output = "Redirecting to the Welcome Presentation...";
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
            case "encode":
                output = <Encode scrollContainerRef={convoHistoryRef} />;
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

        if (cmd === "clear" || cmd === "cls") {
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

            <div className="h-[50rem] absolute w-full dark:bg-black bg-white dark:bg-grid-[#00ff7b]/[0.2] bg-grid-black/[0.2] top-0 z-[-1] flex items-center justify-center">
                <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]">
                </div>
            </div>

            <div className="min-h-[100vh] transition-height flex items-center justify-center p-[1em] w-screen mt-[-30px]">
                <div className="flex h-[80dvh] w-full transition-height flex-col items-center justify-center sm:w-[90%] bg-gray-900 bg-opacity-5 backdrop-blur-[6px] outline outline-1 outline-gray-600 sm:rounded-none rounded-none relative green_shadow z-[1]">
                    <div className="absolute top-0 w-full h-[30px] bg-gray-500 bg-opacity-20 rounded-t-none p-2  text-white text-opacity-40 justify-between flex">

                        <div className="flex gap-2">
                            <TerminalIcon color="#00ff7b90" />
                            <span>{"cmd > { ! }"}</span>
                        </div>

                        <div className="flex items-center gap-2">
                            <div className="rounded-none bg-gray-500 bg-opacity-20 outline-1 outline-gray-600 outline w-[23px] h-[23px] flex items-center justify-center">
                                -
                            </div>
                            <div className="rounded-none bg-gray-500 bg-opacity-20 outline-1 outline-gray-600 outline w-[23px] h-[23px] flex items-center justify-center">
                                ▢
                            </div>
                            <div className="rounded-none bg-gray-500 bg-opacity-20 outline-1 outline-gray-600 outline w-[23px] h-[23px] flex items-center justify-center">
                                X
                            </div>
                        </div>
                    </div>

                    <div className={logoDis ? "flex flex-col sm:gap-0 gap-2" : "hidden"} ref={welcomeTextRef}>
                        <div className="overflow-hidden flex">
                            <span className={`text-center w-full sm:text-7xl text-3xl transition-all bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-400 duration-500 font-bold ${welcomeTextVisible ? "transformVisible" : "transformInvisible"}`}>
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
                        className="absolute bottom-3 sm:w-[98%] w-[95%] flex items-center gap-2"
                        action=""
                        onSubmit={handleSubmit}
                    >
                        <Input
                            className="minecraft! font-normal"
                            size="lg"
                            isClearable
                            onChange={handleChange}
                            value={cmd}
                            radius="none"
                            color={"success"}
                            variant="bordered"
                            startContent={<span className="mr-5 text-success">{">"}</span>}
                            placeholder="Enter 'help' for list of all commands"
                            onKeyDown={handleKeyDown}
                        />
                        <Button isIconOnly
                            size="lg"
                            radius="none"
                            color={"success"} variant="shadow" onClick={handleSubmit}>
                            <SentIcon />
                        </Button>
                    </form>
                </div>
            </div>

            <UpcomingEvents />
            <Team />
            <Map />
            <Gallery />
            <Quote />

            {/* <div className="fixed left-0 top-0 h-screen flex p-[2em] items-center">

                <div className="bg-[rgba(0,255,123,0.3)] w-[4px] h-[60%] rounded-full flex flex-col justify-around items-center relative overflow-visible">

                    <div className="rounded-full w-[30px] h-[30px] bg-[#055c2f91] flex items-center justify-center outline outline-1 outline-[#00ff7b] backdrop-blur-sm">
                        <TerminalIcon color="#00ff7b" width="20px" height="20px" />
                    </div>

                    <div className="rounded-full w-[30px] h-[30px] bg-[#055c2f91] flex items-center justify-center outline outline-1 outline-[#00ff7b]  backdrop-blur-sm">
                        <Calendar01Icon color="#00ff7b" width="20px" height="20px" />
                    </div>

                    <div className="rounded-full w-[30px] h-[30px] bg-[#055c2f91] flex items-center justify-center outline outline-1 outline-[#00ff7b]  backdrop-blur-sm">
                        <UserGroupIcon color="#00ff7b" width="20px" height="20px" />
                    </div>

                    <div className="rounded-full w-[30px] h-[30px] bg-[#055c2f91] flex items-center justify-center outline outline-1 outline-[#00ff7b]  backdrop-blur-sm">
                        <GlobeIcon color="#00ff7b" width="20px" height="20px" />
                    </div>

                    <div className="rounded-full w-[30px] h-[30px] bg-[#055c2f91] flex items-center justify-center outline outline-1 outline-[#00ff7b]  backdrop-blur-sm">
                        <Album01Icon color="#00ff7b" width="20px" height="20px" />
                    </div>

                    <div className="rounded-full w-[30px] h-[30px] bg-[#055c2f91] flex items-center justify-center outline outline-1 outline-[#00ff7b]  backdrop-blur-sm">
                        <QuoteDownIcon color="#00ff7b" width="20px" height="20px" />
                    </div>

                </div>

            </div> */}
        </div>
    );
}