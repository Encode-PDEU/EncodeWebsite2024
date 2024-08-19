export default function Footer() {
    return (
        <div className="flex items-center justify-center flex-col overflow-hidden">
            <hr style={{ borderColor: "#00ff7b" }} className="w-full mb-6" />

            <div className="flex w-full justify-between px-[3em] pb-[2em] items-start">
                <div className="flex flex-col justify-end items-start">
                    <span className="text-foreground-400 mb-4 z-[1]">
                        STAY CONNECTED
                    </span>

                    <a className="z-[1] cursor-pointer" href="https://www.instagram.com/encode_pdeu/">INSTAGRAM</a>
                    <a className="z-[1] cursor-pointer" href="https://twitter.com/Encode_PDEU">TWITTER</a>
                    <a className="z-[1] cursor-pointer" href="https://www.linkedin.com/company/encode-pdpu/">LINKEDIN</a>
                </div>

                <div className="flex flex-col justify-end items-end ">
                    <span className="text-foreground-400 mb-4 z-[1]">
                        PAGES
                    </span>

                    <span className="z-[1] cursor-pointer">HOME</span>
                    <span className="z-[1] cursor-pointer">ABOUT</span>
                    <span className="z-[1] cursor-pointer">TEAM</span>
                    <span className="z-[1] cursor-pointer">CONTACT</span>
                </div>
            </div>

            <span className="text-sm text-foreground-400 sm:mb-[-1vw]">Built by the 2024 Web Team at Encode</span>
            <div className="flex justify-betweeen items-center w-full flex-col">
                {/* 
                <div className="flex flex-row justify-around w-full text-[2vw] text-[#00ff7b] leading-none">
                    <span className="coolvetica">THE</span>
                    <span className="coolvetica">COMPUTER</span>
                    <span className="coolvetica">SCIENCE</span>
                    <span className="coolvetica">CLUB</span>
                    <span className="coolvetica">OF</span>
                    <span className="coolvetica">PDEU</span>
                </div> */}
                <span className="font-bold leading-none sm:mb-[-3vw] text-[20vw] z-[1]">ENCODE</span>
            </div>
        </div >
    )
}