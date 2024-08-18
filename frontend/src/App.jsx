import { Route, Routes } from "react-router-dom";
import Home from "@/pages/Home";
import Preloader from "./components/preloader";
import { useEffect, useState } from "react";
import Navbar from "./components/navbar";

export default function App() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [delayedPosition, setDelayedPosition] = useState({ x: 0, y: 0 });
  const [isMouseDown, setIsMouseDown] = useState(false);

  const handleMouseMove = (event) => {
    setPosition({ x: event.clientX, y: event.clientY });
    setTimeout(() => {
      setDelayedPosition({ x: event.clientX, y: event.clientY });
    }, 80);
  };


  const handleMouseDown = () => {
    setIsMouseDown(true);
  };

  const handleMouseUp = () => {
    setIsMouseDown(false);
  };


  return (
    <main className="dark bg-black min-h-screen text-foreground overflow-x-hidden"
      onMouseMove={handleMouseMove}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
    >

      <div className={`absolute rounded-full ${isMouseDown ? "cursorscale" : ""} h-[15px] w-[15px]
       bg-[#00ff7b] duration-75 transition-transform	`}
        style={{
          left: position.x,
          top: position.y,
          transform: 'translate(-50%, -50%)',
        }}      >
      </div>

      <div className={`absolute rounded-full h-[30vw] w-[30vw] bg-[#00ff7b] bg-opacity-10 blur-3xl`}
        style={{
          left: delayedPosition.x,
          top: delayedPosition.y,
          transform: 'translate(-50%, -50%)',
        }} >
      </div>

      <div className={`absolute rounded-full h-[7vw] w-[7vw] bg-[#00ff7b] bg-opacity-50 blur-3xl`}
        style={{
          left: delayedPosition.x + 40,
          top: delayedPosition.y - 40,
          transform: 'translate(-50%, -50%)',
        }} >
      </div>

      <div className={`absolute rounded-full h-[70vw] w-[70vw] bg-[#00ff7b] bg-opacity-5 blur-3xl`}
        style={{
          left: delayedPosition.x,
          top: delayedPosition.y,
          transform: 'translate(-50%, -50%)',
        }} >
      </div>

      <Navbar />
      <Preloader />
      <Routes>
        <Route element={<Home />} path="/" />
      </Routes>
    </main>
  );
}
