'use client'
import { FaSearchengin } from "react-icons/fa6";
import { BiSolidLogInCircle } from "react-icons/bi";
import Link from "next/link";
import { SignOutBtn } from "./SignOutBtn";
import { useSession } from "next-auth/react";
import { useState, useEffect } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { useRouter } from "next/navigation";
import CartButton from "./CartButton";


export default function Navbar() {
  const { data: session } = useSession();
  const [isActive, setIsActive] = useState(false);
  const router = useRouter();
  
  const navItems = [
    {
        title: "Masculino",
        href: "/Men",
    },
    {
        title: "Feminino",
        href: "/Women",
    },{
        title: "Moletom",
        href: "/Men",
    },{
        title: "Camiseta",
        href: "/",
    },
    {
      title: "Calça",
      href: "/",
  },
];

    const toggleMenu = () => {
      setIsActive(!isActive);
  }

  useEffect(() => {
      const handleEscKeyPress = (e: any) => {
          if (e.keycode === 27 && isActive) {
              setIsActive(false);
          }
      };

      if (isActive) {
          document.body.style.setProperty("overflow", "hidden");
      }else {
          document.body.style.setProperty("overflow", "auto");
      }

      document.addEventListener("keydown", handleEscKeyPress);
      
      return () => {
          document.removeEventListener("keydown", handleEscKeyPress);
      };
  }, [isActive]);

  const handleLogo = () => {
    router.push("/")
  }

  return (
    <header className="flex justify-between items-center  bg-gradient-to-b from-black to-red-950">
        <img src="/img/bf-logo.png" className="w-[100px] midfour1:w-[70px] cursor-pointer" onClick={handleLogo} alt="" />
      <nav className="flex flex-col items-center justify-center gap-2"><form className="flex border-b-2 pb-2 border-blue-50">
        <input type="text" placeholder="O que você procura?" className="rounded-tl-xl w-[600px] majorthree:w-[300px] text-black
         midthree:w-[150px] px-2 bg-gray-400
         h-[40px]" />
        <div className="rounded-br-xl bg-gray-400 flex items-center text-center px-2"><button type="submit">
          <FaSearchengin className="text-black text-2xl"/></button>    
        </div></form>
      <ul className="flex gap-4 midthree:hidden">
        {navItems.map((items, i) => (
          <Link className="font-semibold uppercase no-underline" key={i} href={items.href}><li className="font-semibold no-underline">
            {items.title}</li></Link> 
        ))}
        </ul>
        <button aria-label="Open Menu" onClick={toggleMenu} className="btn-hamburguer text-gray-400 hidden midthree:block
         self-center">
                <GiHamburgerMenu size={60}/>
</button>
{isActive && (
        <div className="z-10 fixed inset-0 transition-opacity">
          <div
            onClick={() => setIsActive(false)}
            className="absolute inset-0 bg-black opacity-50"
          ></div>
        </div>
      )}

      <aside
        className={`transform top-0 left-0 w-64 lowtwo2:w-44 lowthreetwo:w-36 text-white bg-red-700
         bg-opacity-50 font-extrabold fixed h-full overflow-auto ease-in-out transition-all duration-300 z-[900] ${
          isActive ? "translate-x-0" : "-translate-x-full"
        }`}
      >
         
         {navItems.map(({ title, href }, i) => (
    <Link href={href} key={i}>
        <span className="flex items-center p-4 hover:bg-gray-600 hover:text-black">
          <span className="border-b-4 border-gray-500 text-white no-underline uppercase">{title}</span>
        </span>
    </Link>
  ))}
      </aside>
      </nav>
      <div className="flex flex-col items-center justify-center gap-3 ">
      {!session ? (
      <Link href="/signin" className="no-underline"><button className="flex justify-center rounded-md mr-2 text-black u gap-1 
      items-center
       w-[100px] midfour:w-[60px] py-2 bg-gray-400 transition-colors duration-500 hover:bg-red-600 midfour:text-[13px]">Login<BiSolidLogInCircle 
      className="text-3xl midfour1:text-lg"/></button></Link>) : (
        <div className="flex flex-col items-center justify-center gap-1">
        <p className="flex gap-[2px] midtwo2:text-12px">
          <span className="text-gray-500">Olá,</span>
          <span className="text-orange-500">
            {
                      //@ts-ignore
            session.user.name}</span></p>
      <SignOutBtn/>
      </div>
    )}
    <div className="flex divide-x rounded-full bg-black p-1">
            <CartButton />
        </div></div>
    </header>
  )
}
