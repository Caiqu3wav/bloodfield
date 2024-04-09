import "../fonts.css";

export default function Hero() {
  return (
    <div className="hero-container min-h-[500px] flex">
      <div className="w-[500px] min-h-[300px] flex flex-col items-center rounded-xl bg-black mt-[70px] ml-[100px] bg-opacity-80">
        <img src="/img/bloodygif.gif" className="w-[130px]" alt="" />
        <h1 className="darumadrop-one-regular text-2xl text-red-600 ">BloodField <span className="text-gray-400">Store</span></h1>
        <p className="px-2">Loja de moda estrangeira high fashion, StreetWear, e moda alternativa. <br /> Em nosso espaço, celebramos o estilo high 
        fashion, streetwear e design clothes, onde cada peça conta uma história única e desafia os limites convencionais. Explore nossa
         seleção cuidadosamente curada de roupas que destacam a individualidade e a criatividade, exaltando o espírito ousado e 
         inovador de uma geração que redefine constantemente o conceito de moda.</p>
      </div>
    </div>
  )
}
