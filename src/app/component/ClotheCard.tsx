'use client'
import Image from "next/image"
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/cart.slice";
import { CartProductExtendor, CartProductProps } from "../interfaces/Product";
import { FaCartPlus } from "react-icons/fa";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/ReactToastify.css'; 
import { Product } from "../interfaces/Product";

interface ClotheCardProps {
  product: Product;
}

export const ClotheCard =({ product }: ClotheCardProps) => {
  //@ts-ignore
  const cartItems = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  const handleClick = (product: Product) => {
    try{
      dispatch(addToCart(product));
      toast.success("Produto adicionado ao carrinho!", {
        position: "top-center",
autoClose: 5000,
hideProgressBar: false,
closeOnClick: true,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "light",
      });
    } catch (err) {
      toast.error("Erro ao adicionar ao carrinho", {
        position: "top-center",
autoClose: 5000,
hideProgressBar: false,
closeOnClick: true,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "light",
      });
      console.error("Erro ao adicionar ao carrinho:", err);
    }
  }  
  
  
  return (
    <div className="h-[380px] w-[240px] majortwo3.1:w-[200px] midtw:w-[155px] flex 
    midtw:h-[300px] flex-col items-center justify-center
     bg-black bg-opacity-75 rounded-2xl gap-2 mt-3 pt-3">
      <div className="overflow-hidden flex items-center justify-center w-[227px] h-[227px] rounded-lg">
      <img src={product.foto} className="w-[220px] h-[220px] majortwo3.1:w-[180px]
       majortwo3.1:h-[180px] midtw:w-[140px] midtw:h-[140px] rounded-lg transition-transform
        duration-300 transform-gpu scale-100 hover:scale-110" alt="clothe image"/>
        </div>
      <h1 className="text-red-500 text-[20px] midtw:text-[14px] text-center">{product.name}</h1>
      <p className="text-[16px] midtw:18px text-white">{product.marca}</p>
      <p>R${product.preco}</p>
      <button onClick={() => handleClick(product)} className="rounded-xl bg-slate-400 px-4 py-1 font-semibold
        hover:bg-red-600 hover:text-yellow-200 transition-all duration-1000"><FaCartPlus/></button>
            <ToastContainer containerId={product.id}/>
    </div>
  )
}
