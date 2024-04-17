import Image from "next/image"

interface Clothe {
  id: any,
  name: string,
  foto: string,
  marca: any,
  preco: number
}

export const ClotheCard =({ id, name, foto, marca, preco }: Clothe) => {
  return (
    <div className="h-[380px] w-[240px] majortwo3.1:w-[200px] midtw:w-[155px] flex 
    midtw:h-[300px] flex-col items-center justify-center
     bg-black bg-opacity-75 rounded-2xl gap-2 mt-3 pt-3">
      <img src={foto} className="w-[220px] h-[220px] majortwo3.1:w-[180px]
       majortwo3.1:h-[180px] midtw:w-[140px] midtw:h-[140px] rounded-lg" alt="clothe image"/>
      <h1 className="text-red-500 text-[20px] midtw:text-[14px] text-center">{name}</h1>
      <p className="text-[16px] midtw:18px text-white">{marca}</p>
      <p>{preco}</p>
    </div>
  )
}
