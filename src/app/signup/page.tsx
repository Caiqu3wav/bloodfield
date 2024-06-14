'use client'
import Navbar from "../component/Navbar";
import BottomHeader from "../component/BottomHeader";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import User, { UserDocument } from "@/models/User";
import { BiShowAlt } from "react-icons/bi";
import { BiHide } from "react-icons/bi";

export default function SignUpPage() {
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();
    const { data: session, status: sessionStatus } = useSession();
    const [showPassword, setShowPassword] = useState(false);

    useEffect(() => {
        if (sessionStatus === "authenticated") {
            router.replace("/");
        }
    }, [sessionStatus, router]);
 
    const isValidEmail = (email: string) => {
        const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
        return emailRegex.test(email);
    };

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        const name = e.target[0].value;
        const email = e.target[1].value;
        const password = e.target[2].value;
 
        if (!isValidEmail(email)) {
            setError("Email is invalid");
            return;
        }
 
        if (!password || password.length < 8) {
            setError("Senha inválida (deve ter + de 8 caracteres)");
            return;
        }

        setIsLoading(true);
 
        try {
            const res = await fetch("/api/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name,
                    email,
                    password,
                }),
            });
            if (res.status === 400) {
                setError("This email is already registered");
            }
            if (res.status === 200) {
                setError("");
                router.push("/signin");
            }
        } catch (error) {
            setError("Erro, tente novamente");
            console.log(error);
        } finally {
          setIsLoading(false);
        }
    };
 
    if (sessionStatus === "loading") {
        return <h1>Carregando...</h1>;
    }

    const togglePasswordVisibility = () => {
      setShowPassword(!showPassword);
    }

  return (
    sessionStatus !== "authenticated" && (
    <div className="flex flex-col h-[100vh]">
      <Navbar />
      <BottomHeader />
      <div className='hero-container h-[100vh] flex items-center justify-center'>
      {isLoading ? (
          <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
      ) : (
      <form className='bg-gray-400 w-[400px] gap-3 rounded-xl flex flex-col items-center justify-center
     h-[300px]' onSubmit={handleSubmit}>
      <h1 className='text-xl font-semibold text-black'>Cadastro</h1>
      <div className='flex gap-2'>
      <label htmlFor="name">Nome:</label>
      <input className='text-black  rounded-lg'
        type="name" 
        id="name" 
        name="name" 
        required 
      />
    </div>
    <div className='flex gap-2'>
      <label htmlFor="email">Email:</label>
      <input className='bg-gray-600 text-white  rounded-lg'
        type="email" 
        id="email" 
        name="email"
        required 
      />
    </div>
    <div className='flex gap-2'>
      <label htmlFor="password">Password:</label>
      <input  className='bg-gray-600 text-white rounded-lg'
        type={!showPassword ? "password" : "text"} 
        id="password" 
        name="password" 
        required 
      />
       <button 
        type="button" 
        onClick={togglePasswordVisibility}
        className='bg-gray-600 text-white rounded-lg px-2'
      >
        {showPassword ? <BiShowAlt/> : <BiHide/>}
      </button>
    </div>
    <button className='px-3 py-1 rounded-xl bg-black text-white 
    hover:bg-red-600 hover:text-black transition-all duration-500' type="submit">Sign Up</button>
    {error && <p>{error}</p>}
    <Link href="/signin"><p className="text-blue-500">Já tem uma conta? Entre</p></Link>
  </form>
  )}
      </div>
    </div>
    )
  );
}
