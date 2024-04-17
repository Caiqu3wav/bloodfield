'use client'
import Navbar from "../component/Navbar";
import Link from "next/link";
import axios from 'axios'
import { useState } from "react";

export default function CadPage() {
    const[name, setName] = useState("");
    const [marca, setMarca] = useState([]);
    const [categoria, setCategoria] = useState("");
    const [preco, setPreco] = useState("");
    const [foto, setFoto] = useState(null);
    const [error, setError] = useState("");

    const handleNomeChange = (e) => {
        setName(e.target.value);
    }

    const handleMarcaChange = (e) => {
      const marcas = e.target.value.split(',').map(marca => marca.trim());
      setMarca(marcas);
  }

    const handleCategoriaChange = (e) => {
      setCategoria(e.target.value);
  }
    
    const handlePrecoChange = (e) => {
        setPreco(e.target.value);
    }

    const handleFotoChange = (e) => {
     if (e.target.files.length > 0){
        setFoto(e.target.files[0]);
     }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('name', name);
        formData.append('marca', marca);
        formData.append('categoria', categoria);
        formData.append('preco', preco);
        formData.append('foto', foto);

        try {
            const response = await axios.post('http://localhost:8000/products', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            console.log(response.data);
        } catch (error) {
          setError("Erro no cadastro", error);
            console.error("Erro no cadastro", error);
        }
    };

  return (
    <div>
      <Navbar/>
      <div className='hero-container min-h-[500px] flex items-center justify-center'>
      <form className='bg-gray-400 w-[400px] gap-3 rounded-xl flex flex-col items-center justify-center
     h-[300px]' onSubmit={handleSubmit}>
      <h1 className='text-xl font-semibold text-black'>Cadastro Produto</h1>
      <div className='flex gap-2'>
      <label htmlFor="name">Nome:</label>
      <input className='text-black  rounded-lg'
        type="text" 
        id="name"
        name="name" 
        value={name}
        onChange={handleNomeChange}
        required 
      />
    </div>
    <div className='flex gap-2'>
      <label htmlFor="marca">Marca:</label>
      <input className='bg-gray-600 text-white  rounded-lg' 
      type="text" id="marca" 
      value={marca.join(',')} 
      name="marca" 
      onChange={handleMarcaChange} required />
    </div>
    <div className='flex gap-2'>
      <label htmlFor="marca">Categoria:</label>
      <input className='bg-gray-600 text-white  rounded-lg'
        type="text" 
        id="categoria" 
        value={categoria}
        name="categoria" 
        onChange={handleCategoriaChange}
        required 
      />
    </div>
    <div className='flex gap-2'>
      <label htmlFor="preço">Preço:</label>
      <input  className='bg-gray-600 text-white rounded-lg'
        type="number" 
        id="preço" 
        name="preço" 
        value={preco} 
        onChange={handlePrecoChange}
       required 
      />
    </div>
    <div className='flex gap-2'>
      <label htmlFor="foto">Foto:</label>
      <input  className='bg-gray-600 text-white rounded-lg'
        type="file" 
        id="foto" 
        name="foto"
        accept="image/*"
        onChange={handleFotoChange}
       required 
      />
    </div>
    <button className='px-3 py-1 rounded-xl bg-black text-white 
    hover:bg-red-600 hover:text-black transition-all duration-500' type="submit">Cadastrar produto</button>
    {error && <p>{error}</p>}
  </form>
      </div>
      
    </div>
  )
}
