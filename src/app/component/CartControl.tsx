import { useLocalStorage } from "../hooks/useLocalStorage"
import CartIcon from "./CartIcon"

export default function CartControl() {
    const { value } = useLocalStorage('cart-items', [])
  return (
    <button className="relative bg-transparent">
      <CartIcon/>
      {value.length > 0 && <span className="w-[17x] flex items-center text-center h-[17px] bg-red-500
      absolute right-[-10px] top-[50%] p-1 rounded-full text-[13px] font-bold">{value.length}</span>}
    </button>
  )
}