import CartIcon from "./CartIcon";


export default function CartControl(props: any) {
  return (
    <button onClick={props.handle} className="relative bg-transparent">
      <CartIcon/>
    </button>
  )
}