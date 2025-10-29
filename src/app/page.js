import Image from "next/image";
import NavBar from "./components/NavBar";
import HeroText from "./components/HeroText";
import HeroImage from "./components/HeroImage";
import ColorDots from "./components/ColorDots";
import VariantStrip from "./components/VariantStrip";

export default function Home() {
  return (
    <main className="page-grid">
     <header className="nav"> <NavBar/> </header>
     <section className="left"><HeroText /></section>
       <aside className="right"><HeroImage /></aside>
       <aside className="dots"><ColorDots /></aside> 
      {/* <section className="variants"><VariantStrip /></section>   */}
    </main>
  );
}
