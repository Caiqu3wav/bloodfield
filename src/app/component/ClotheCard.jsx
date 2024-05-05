import Image from "next/image"
import { useDispatch } from "react-redux";
import { useProductData } from "../hooks/useProductData";
import { addToCart } from "../redux/cart.slice";
import { CartProductExtendor, CartProductProps } from "../interfaces/Product";


export default function ClotheCard() {
  const { data, loading, error } = useProductData('http://localhost:1337/api/products?populate=*');

  const dispatch = useDispatch();

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
       <button onClick={() => dispatch(addToCart(product))} className="rounded-lg bg-slate-400 px-2 font-semibold hover:bg-red-600 hover:text-yellow-200 transition-all duration-1000">Comprar</button>
       </div>
  ))}
  </>
  )
}
