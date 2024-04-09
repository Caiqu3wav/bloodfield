import { FaSearchengin } from "react-icons/fa6";
import { BiSolidLogInCircle } from "react-icons/bi";
import { TiShoppingCart } from "react-icons/ti";

export default function Navbar() {

    const navItems = [
        {
            title: "Masculino",
            href: "/",
        },
        {
            title: "Feminino",
            href: "/",
        },{
            title: "Home",
            href: "/",
        },{
            title: "Home",
            href: "/",
        },
    ]

  return (
    <header className="flex justify-between items-center bg-gradient-to-b from-black to-red-950">
        <img src="/img/bf-logo.png" className="w-[100px]" alt="" />
      <nav className="flex flex-col items-center justify-center gap-2"><div className="flex border-b-2 pb-2 border-blue-50">
        <input type="text" placeholder="O que você procura?" className="rounded-tl-xl w-[600px] text-black px-2 bg-gray-400
         h-[40px]" />
        <div className="rounded-br-xl bg-gray-400 flex items-center text-center px-2"><button type="submit">
          <FaSearchengin className="text-black text-2xl"/></button>
        </div></div>
      <ul className="flex gap-4">
        {navItems.map((items, i) => (
          <a key={i} href={items.href}><li>{items.title}</li></a> 
        ))}
        </ul>
      </nav>
      <div className="flex flex-col items-center justify-center gap-3 ">
      <button className="flex rounded-md mr-2 text-black u gap-1 items-center py-3 px-3 bg-gray-400">Login<BiSolidLogInCircle className="text-3xl"/></button>
      <button className="flex items-center justify-center bg-gray-400 rounded-full p-2">
      <TiShoppingCart className="text-xl"/>
      </button>
      </div>
    </header>
  )
}
