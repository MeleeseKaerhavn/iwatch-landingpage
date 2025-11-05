import Image from "next/image";
import NavBar from "./components/NavBar";
import HeroText from "./components/HeroText";
import HeroImage from "./components/HeroImage";
import ColorDots from "./components/ColorDots";
import VariantStrip from "./components/VariantStrip";

export default function Home() {
  return (
    <main className="page-grid grid grid-cols-12 grid-rows-[auto_1fr_auto] gap-6 min-h-screen p-6  bg-[#BAD0DD] rounded-[20px] max-w-[1200px] my-6 mx-auto">
     <header className="nav "> <NavBar/> </header>
     <section className="left"><HeroText /></section>
       <aside className="right"><HeroImage /></aside>
       <aside className="dots"><ColorDots /></aside> 
       <section className="variants"><VariantStrip /></section> 
    </main>
  );
}
