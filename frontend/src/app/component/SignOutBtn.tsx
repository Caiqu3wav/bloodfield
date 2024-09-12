import { signOut } from "next-auth/react";
import { FaSignOutAlt } from "react-icons/fa";

export const SignOutBtn = () => {
    return(
        <button className="flex rounded-md mr-2 text-black u gap-1 items-center
         py-3 px-3 bg-gray-400" onClick={() => signOut()}>Sair <FaSignOutAlt/></button>
    )
}