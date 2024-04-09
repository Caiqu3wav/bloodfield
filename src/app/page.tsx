import Navbar from "./component/Navbar";
import Hero from "./component/Hero";
import BottomHeader from "./component/BottomHeader";

export default function Home() {
  return (
    <main className="w-full ">
      <Navbar/>
      <BottomHeader/>
      <Hero/>
    </main>
  );
}
