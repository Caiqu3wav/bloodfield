'use client'
import { useState, useEffect } from 'react';
import { signIn, useSession } from "next-auth/react";
import { useRouter } from 'next/navigation';
import Link from 'next/link'

export default function SignInForm() {
  const router = useRouter();
  const [error, setError] = useState("");
   const { data: session, status: sessionStatus } = useSession();

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
      const email = e.target[0].value;
      const password = e.target[1].value;

      if (!isValidEmail(email)) {
          setError("Email is invalid");
          return;
      }

      if (!password || password.length < 8) {
          setError("Password is invalid");
          return;
      }

      const res = await signIn("credentials", {
          redirect: false,
          email,
          password,
      });

      if (res?.error) {
          setError("Invalid email or password");
          if (res?.url) router.replace("/");
      } else {
          setError("");
      }
  };

  if (sessionStatus === "loading") {
    return <h1>Carregando...</h1>;
}


  return (
    sessionStatus !== "authenticated" && (
    <form className='bg-gray-400 w-[400px] gap-2 rounded-xl flex flex-col items-center justify-center
     h-[300px]' onSubmit={handleSubmit}>
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
        type="password" 
        id="password" 
        name="password" 
        required 
      />
    </div>
    <button className='px-3 py-1 rounded-xl bg-black text-white 
    hover:bg-red-600 hover:text-black transition-all duration-500' type="submit">Sign In</button>
    <Link href="/signup"><p className="text-blue-500">Não tem uma conta? Cadastre-se</p></Link>
    {error && <p className='text-red-500'>{error}</p>}
  </form>
    )
   )
}
