import Image from "next/image"
import { useDispatch, useSelector } from "react-redux";
import { useProductData } from "../hooks/useProductData";
import { addToCart } from "../redux/cart.slice";
import { CartProductExtendor, CartProductProps } from "../interfaces/Product";
import { FaCartPlus } from "react-icons/fa";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/ReactToastify.css'; 

export default function ClotheCard() {
  const { data, loading, error } = useProductData('http://localhost:1337/api/products?populate=*');
  const cartItems = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  const handleClick = (product) => {
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

  if (loading) return (
  <div className="w-full h-full flex items-center justify-center">
  <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
  </div>)
  if (error) return (<p>Erro: {error.message}</p>);
  
  return (
    <>
    {data.data?.map((product) => (
    <div key={product.id} className="h-[420px] w-[240px] majortwo3.1:w-[200px] midtw:w-[155px] flex 
    midtw:h-[300px] flex-col items-center justify-center
     bg-black bg-opacity-75 rounded-2xl gap-2 mt-3 pt-3">
        <Image src={`http://localhost:1337${product.attributes.pic.data.attributes.formats.small.url}`} width={220} height={220} className="w-[220px] h-[220px] majortwo3.1:w-[180px]
        majortwo3.1:h-[180px] midtw:w-[140px] midtw:h-[140px] rounded-lg" alt={product.attributes.Nome}/>
       <h1 className="text-red-500 text-[20px] midtw:text-[14px] text-center">{product.attributes.Nome}</h1>
       <p className="text-[18px] midtw:15px text-white rounded-lg border-b-2 border-slate-400">{product.attributes.Marcas.marcas}</p>
       <p>R${product.attributes.Preco}</p>
       <button onClick={() => handleClick(product)} className="rounded-xl bg-slate-400 px-4 py-1 font-semibold
        hover:bg-red-600 hover:text-yellow-200 transition-all duration-1000"><FaCartPlus/></button>
            <ToastContainer containerId={product.id}/>
       </div>
  ))}
  </>
  )
}
