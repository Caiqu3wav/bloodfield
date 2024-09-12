'use client'
import { TiShoppingCart } from "react-icons/ti"
import { motion } from "framer-motion";
import {menuSlide} from '../styles/anim';
import { RiCloseCircleFill } from 'react-icons/ri';
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { useState, useEffect } from "react";
import { incrementQuantity, decrementQuantity, removeFromCart } from "../redux/cart.slice";
import { CartProductExtendor } from "../interfaces/Product";
import { useProductData } from "../hooks/useProductData";
import styles from "../styles/style.module.scss";
import {loadStripe} from '@stripe/stripe-js';

interface Props {
    onClose: () => void;
}

export default function CartNav({ onClose }: Props) {
    const [cartProducts, setCartProduct] = useState<CartProductExtendor[]>([]);
    const cartItems = useSelector((state: RootState) => state.cart)
    const { data, loading } = useProductData('http://localhost:1337/api/products?populate=*');

    const dispatch = useDispatch();

    //@ts-ignore
    const productsData = data?.data;

    const incrementQuantityAction = (productId: number) => {
        dispatch(incrementQuantity(productId));
    }

    const decrementQuantityAction = (productId: number) => {
        dispatch(decrementQuantity(productId));
    }
    
    const removeAllAction = (productId: number) => {
        dispatch(removeFromCart(productId));
    }

    useEffect(() => {
        if (productsData && cartItems.length > 0) {
            const productsInCart = cartItems.map((item) => {
                const product = productsData.find((p: any) => p.id === item.id);
                return product ? { ...product, quantity: item.quantity || 0 } : null;
            }).filter(Boolean) as CartProductExtendor[];

            setCartProduct(productsInCart);
        }
    }, [productsData, cartItems]);

    const totalPrice = cartProducts.reduce((acc, product) => {
        const quantity = product.quantity !== undefined ? product.quantity: 0;
        const productPrice = Number(product.attributes.Preco) * quantity;
        if (quantity > 0){
            return acc + productPrice
        } return acc
    }, 0);

    const handleBuy = async () => {
        const stripe = await loadStripe("pk_test_51OFpSGAMXpQY86xgdKUQSEqOzR6fdib2XsE5TlaomuwQmWOnBLoHjHSmJCKGeivRAY9dSMlpcd2z28YrgGu5Qw8W005Q7Z9mur");

        const body = {
            products: cartItems
        }

        const headers = {
            "Content-Type":"application/json"
        }

    }

    return (
        <motion.div
        variants={menuSlide}
        initial="initial"
        animate="enter"
        exit="exit"
        className={styles.menu}>
            <div className={styles.body}>
            <div className={styles.nav}>

<div className={styles.header}>
  <p>Carrinho de Compras</p>
    <button onClick={onClose} className="text-4xl"><RiCloseCircleFill/></button>
</div>

{productsData && cartItems.length === 0 ? (
  <h1>Seu carrinho está vazio.</h1>
) : (
  <>
  <div className="flex flex-col gap-4">
    {cartProducts.map((product) => (
      <div key={product.id} className="flex text-sm text-black w-[350px] h-[123px] px-2 bg-white items-center justify-between rounded-xl">
          <img src={`http://localhost:1337${product.attributes.pic.data.attributes.formats.small.url}`} className="w-[190px] h-[120px]" alt="" />
      <p className="text-sm text-black font-semibold">{product.attributes.Nome}</p>
      <div className="flex flex-col text-black">
      <p className="text-black">Qnt.</p>
      <div className="flex"><button onClick={() => decrementQuantityAction(product.id)} className="rounded-l-[20px] px-1 items-center border-solid rounded-r-lg border-2">-</button>
      <div className="px-1 border-solid border-2">{product.quantity}</div>
      <button onClick={() => incrementQuantityAction(product.id)} className="flex px-1 items-center border-solid rounded-r-lg border-2">+</button>
      </div>
      </div>
      <div className="flex flex-col">
      <p className="text-black font-semibold">R${product.quantity !== undefined ? (Number(product.attributes.Preco) * product.quantity).toFixed(2) : 0}</p>
      <button onClick={() => removeAllAction(product.id)} className="py-0 px-2 bg-black text-white mt-11 rounded-lg">X</button>
      </div>
      </div>
    ))}
  </div>
  </>
)
}
{cartItems.length > 0 && (
<p>Total: R${totalPrice.toFixed(2)}</p>
)}
</div>

<div className={styles.footer}>
<button>Finalizar compra</button>
</div>
            </div>
        </motion.div>
    )

}