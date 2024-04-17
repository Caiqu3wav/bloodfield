import Image from "next/image";
import bfLogo from "../../../public/img/bf-logo.png";
import {ClotheCard} from "./ClotheCard";
import productsLocal from "../api/productsLocal/index";


export default function CListHome() {
  return (
    <div className="min-h-[500px] flex flex-col items-center justify-center
     bg-gradient-to-b from-black to-red-800 pb-4">
      <Image src={bfLogo} className="w-[100px]" alt="bloodfield logo"/>
      <div className="mt-3 flex flex-col items-center justify-center bg-gradient-to-br from-black to-indigo-200
        bg-opacity-75 min-h-[500px] h-fit w-[95%] rounded-tr-2xl rounded-bl-2xl pb-3 majorfour1:w-full">
        <div className="w-full grid justify-items-center grid-cols-4 majortwo1-2:grid-cols-3
          midtwo4:grid-cols-2">
            {productsLocal.map(product => (
        <ClotheCard key={product.id} foto={product.foto} name={product.name}
              marca={product.marca} preco={product.preco} id={product.id} />
            ))}
        </div>
      </div>
    </div>
  )
}