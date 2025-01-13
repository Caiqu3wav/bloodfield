import Image from "next/image";
import Logo from '../../public/img/bf-logo.png'

export default function Home() {
  
  return (
    <main className="w-full flex items-center justify-center overflow-x-hidden min-h-[700px]"> 
      <div className="bg-gradient-to-b flex flex-col items-center justify-center from-black to-red-600 w-[60%] h-[400px] majorfour2:w-[90%] rounded-lg">
        <Image src={Logo} alt="bloodfield logo"/>
        <h1 className="text-5xl midtwo4:text-2xl text-center font-bold">Site fora do ar por enquanto!</h1>
        <p className="text-lg midtwo4:text-sm text-center">(Atualização de produtos e ajustes no sistema, Em breve estará disponível)</p>
        <p>Entre em contato: <a href="https://caiques-portfolio.vercel.app" className="text-blue-500 underline">Site do Caique </a></p>
      </div>
    </main>
  );
}