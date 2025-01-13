import Image from "next/image";
import Logo from '../../public/img/bf-logo.png'

export default function Home() {
  
  return (
    <main className="w-full flex items-center justify-center overflow-x-hidden min-h-[700px]"> 
      <div className="bg-gradient-to-b flex flex-col items-center justify-center from-black to-red-600 w-[40%] h-[400px] rounded-lg">
        <Image src={Logo} alt="bloodfield logo"/>
        <h1 className="text-5xl text-center font-bold">Site fora do ar por enquanto!</h1>
        <p>Entre em contato: <a href="https://caiques-portfolio.vercel.app" className="text-blue-500 underline">Site do Caique </a></p>
      </div>
    </main>
  );
}