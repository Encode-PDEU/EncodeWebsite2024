import { Route, Routes } from "react-router-dom";
import Home from "@/pages/Home";
import Preloader from "./components/preloader";

export default function App() {
  return (
    <main className="bg-black h-screen">

      <Preloader />
      <Routes>
        <Route element={<Home />} path="/" />
      </Routes>
    </main>
  );
}
