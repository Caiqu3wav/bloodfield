'use client'
import { FaSearchengin } from "react-icons/fa6";
import { BiSolidLogInCircle } from "react-icons/bi";
import { TiShoppingCart } from "react-icons/ti";
import CartControl from "./CartControl";
import Link from "next/link";
import { SignOutBtn } from "./SignOutBtn";
import { useSession } from "next-auth/react";

export default function Navbar() {
  const { data: session } = useSession();

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
      <nav className="flex flex-col items-center justify-center gap-2"><form className="flex border-b-2 pb-2 border-blue-50">
        <input type="text" placeholder="O que você procura?" className="rounded-tl-xl w-[600px] majorthree:w-[300px] text-black px-2 bg-gray-400
         h-[40px]" />
        <div className="rounded-br-xl bg-gray-400 flex items-center text-center px-2"><button type="submit">
          <FaSearchengin className="text-black text-2xl"/></button>    
        </div></form>
      <ul className="flex gap-4">
        {navItems.map((items, i) => (
          <a className="font-semibold uppercase no-underline" key={i} href={items.href}><li className="font-semibold">{items.title}</li></a> 
        ))}
        </ul>
      </nav>
      <div className="flex flex-col items-center justify-center gap-3 ">
      {!session ? (
      <Link href="/private" className="no-underline"><button className="flex rounded-md mr-2 text-black u gap-1 items-center py-3 px-3 bg-gray-400">Login<BiSolidLogInCircle 
      className="text-3xl"/></button></Link>) : (
      <SignOutBtn/>
    )}
      <CartControl/>
      </div>
    </header>
  )
}
