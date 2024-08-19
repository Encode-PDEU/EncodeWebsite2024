export default function Quote() {
    return (
        <section section className="h-fit min-h-[100vh] justify-center w-full flex flex-col items-center z-[1] font-bold sm:text-[4vw] text-[7vw]" >

            <img src="https://i.ibb.co/bFJ46nW/IMG-4313.jpg" alt="IMG-4313"
                className="w-screen object-cover h-[80vh] absolute z-[1] opacity-30 select-none" />
            <div className="z-[2] w-full flex flex-col sm:gap-0 gap-5">
                <span className="text-center">We're Architects of Change,</span>
                <span className="text-center font-normal sm:text-[3vw] text-[5vw]">Building a community that actually creates an impact.</span>
            </div>
        </section>
    )
}