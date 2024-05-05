'use client'
import { TiShoppingCart } from "react-icons/ti";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { useState } from "react";
import {AnimatePresence} from 'framer-motion';
import CartNav from "./CartNav";

export default function CartButton() {
  const [isActive, setIsActive]  = useState(false);

  const cart = useSelector((state: RootState) => state.cart);

  const getItemsCount = () => {
    return cart.reduce((accumulator, item) => accumulator + item.quantity, 0)
  }
  
  return (
    <>
<button onClick={() => setIsActive(!isActive)} className="flex flex-col text-gray-400 text-xl">
      <TiShoppingCart/>
      <span className="absolute py-0 px-2 ml-[14px] mt-2 bg-red-600 rounded-full">{getItemsCount()}</span>
      </button>
      <span className="absolute py-0 px-2 ml-[14px] mt-2 bg-red-600 rounded-full">
      <AnimatePresence mode="wait">
      {isActive && <CartNav onClose={() => setIsActive(!isActive)}/>}
      </AnimatePresence>
      </span>
      </>
  )
}