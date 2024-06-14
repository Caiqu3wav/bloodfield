import Navbar from "./component/Navbar";
import Hero from "./component/Hero";
import BottomHeader from "./component/BottomHeader";
import CListHome from "./component/CListHome";

export default function Home() {
  return (
    <main className="w-full overflow-x-hidden">
      <Navbar/>
      <BottomHeader/>
      <Hero/>
      <CListHome/>
    </main>
  );
}
