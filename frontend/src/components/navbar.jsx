import { Button } from "@nextui-org/button";
import React, { forwardRef, useEffect, useRef, useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { Cancel01Icon, Menu01Icon } from "../components/icons";
import logo from "../encode_logo.png";

const NavbarMenu = forwardRef(({ toggleMenuOpen, setToggleMenuOpen, ...props }, ref) => {

    const navigate = useNavigate();
    // setToggleMenuOpen((prev) => !prev)

    return (
        <>
            <div className="flex fixed top-0 left-0 w-full flex-col p-[1em] items-center justify-around gap-3 bg-black h-[40vh] py-[50px] transition-all z-[1] border-b-1 border-[#00ff7b] duration-500" ref={ref} props={props}>

                <span className="text-2xl" onClick={() => {
                    setToggleMenuOpen((prev) => !prev)
                    navigate("/")
                }}>
                    Home
                </span>

                <span className="text-2xl" onClick={() => {
                    setToggleMenuOpen((prev) => !prev)
                    navigate("team")
                }}>
                    Team
                </span>

                <span className="text-2xl" onClick={() => {
                    setToggleMenuOpen((prev) => !prev)
                    navigate("about")
                }}>
                    About
                </span>


                <span className="text-2xl" onClick={() => {
                    setToggleMenuOpen((prev) => !prev)
                    navigate("gallery")
                }}>
                    Gallery
                </span>

            </div>

            <div
                className={`w-screen h-[100dvh] fixed bg-black left-0 top-0 backdrop-blur-3xl transition-all duration-500 ${toggleMenuOpen ? " bg-opacity-0 invisible" : " bg-opacity-70 visible"}`}
                onClick={() => setToggleMenuOpen((prev) => !prev)}
            ></div>
        </>
    )
});

export default function Navbar() {
    const menuRef = useRef(null);

    const [toggleMenuOpen, setToggleMenuOpen] = useState(true)

    useEffect(() => {
        if (menuRef.current) menuRef.current.style.top = toggleMenuOpen ? `-${menuRef.current.clientHeight + 10}px` : "0px"
    }, [toggleMenuOpen]);

    return (
        <div className="w-full flex top-0 fixed p-[1em] justify-between items-center backdrop-blur-2xl z-10 bg-black bg-opacity-40">
            <div className="flex items-center gap-3 justify-between">
                <img src={logo} height={"35px"} width={"35px"} className="object-scale-down mt-[-2px]" />
                <Link to="/">
                    <span className=" text-2xl cursor-pointer hover:underline transition-all  minecraft" >
                        Encode
                    </span>
                </Link>
            </div>
            <div className="gap-3 items-center sm:flex hidden">
                <span className="text-4xl text-foreground-300">[</span>
                <Link to="/">
                    <Button className="quote-button" radius="none" variant="light" color="success">
                        home
                    </Button>
                </Link>
                <Link to="about">
                    <Button className="quote-button" radius="none" variant="light" color="success">
                        about
                    </Button>
                </Link>
                <Link to="team">
                    <Button className="quote-button" radius="none" variant="light" color="success">
                        team
                    </Button>
                </Link>
                <Link to="gallery">
                    <Button className="quote-button" radius="none" variant="light" color="success">
                        gallery
                    </Button>
                </Link>
                <Button className="quote-button" radius="none" variant="light" color="success">
                    contact
                </Button>

                <span className="text-4xl text-foreground-300">]</span>
            </div>

            <div className="sm:hidden flex">

                <div onClick={() => setToggleMenuOpen((prev) => !prev)} className="z-[10]">
                    {toggleMenuOpen ?
                        <Menu01Icon color="white" width={27} height={27} />
                        :
                        <Cancel01Icon color="white" width={27} height={27} />
                    }
                </div>

                <NavbarMenu ref={menuRef} toggleMenuOpen={toggleMenuOpen} setToggleMenuOpen={setToggleMenuOpen} />
            </div>
        </div>
    );
}