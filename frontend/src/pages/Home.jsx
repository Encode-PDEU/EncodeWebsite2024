import { Input } from "@nextui-org/input";
import { Button } from "@nextui-org/button";
import { SentIcon } from "../components/icons"
import Team from "../components/Home/Team";

export default function Home() {
    return <div className="flex p-[3em] min-h-screen flex-col">

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
                    <div className="rounded-full bg-gray-500 bg-opacity-20 outline-1 outline-gray-600 outline w-[23px] h-[23px] flex items-center justify-center">
                        X
                    </div>
                </div>
            </div>

            <span className="text-center w-full text-7xl">Welcome to Encode</span>
            <span className="text-center w-full text-2xl minecraft font-normal text-foreground-500">The Computer Science Club of PDEU</span>


            <div className="absolute bottom-5 w-[98%] flex items-center gap-2">
                <Input className="minecraft! font-normal"
                    size="lg"
                    isClearable
                    color={"success"}
                    variant="bordered"
                    startContent={<span className="mr-5 text-success">{">"}</span>}
                    placeholder="Enter 'help' for list of all commands"
                />

                <Button
                    isIconOnly
                    size="lg"
                    color={"success"}
                    variant="shadow"
                >
                    <SentIcon />
                </Button>
            </div>

        </div>

        <Team />
    </div>
}
