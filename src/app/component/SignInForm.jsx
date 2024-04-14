'use client'
import { useState } from 'react';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';

export default function SignInForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const router = useRouter();
  
    const handleSubmit = (e) => {
      e.preventDefault();
      signIn('credentials', {
        redirect: false,
        email,
        password,
      }).then((result) => {
        if (result.error) {
            const errorMessage = ("Erro no login:", result.error) 
            setError(errorMessage)
        } else {
            router.push('/');
          }
      }).catch((error) => {
        console.log('Erro de login:', error);
      });
    };
  
    const handleEmailChange = (e) => {
      setEmail(e.target.value);
    };
  
    const handlePasswordChange = (e) => {
      setPassword(e.target.value);
    };

  return (
    <form className='bg-gray-400 w-[400px] gap-2 rounded-xl flex flex-col items-center justify-center
     h-[300px]' onSubmit={handleSubmit}>
    <div className='flex gap-2'>
      <label htmlFor="email">Email:</label>
      <input className='bg-gray-600 text-white  rounded-lg'
        type="email" 
        id="email" 
        name="email" 
        value={email} 
        onChange={handleEmailChange} 
        required 
      />
    </div>
    <div className='flex gap-2'>
      <label htmlFor="password">Password:</label>
      <input  className='bg-gray-600 text-white rounded-lg'
        type="password" 
        id="password" 
        name="password" 
        value={password} 
        onChange={handlePasswordChange} 
        required 
      />
    </div>
    <button className='px-3 py-1 rounded-xl bg-black text-white 
    hover:bg-red-600 hover:text-black transition-all duration-500' type="submit">Sign In</button>
    {error && <p>{error}</p>}
  </form>
  );
}
