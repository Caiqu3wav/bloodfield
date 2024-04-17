import multer from 'multer';
import express from "express";
import productSchema from '../models/ProductModel.mjs';
import connectDB from '../db.mjs';
import mongoose from 'mongoose';
import fs from 'fs';

const router = express.Router();

const Product = mongoose.model('Product', productSchema);

const storage = multer.diskStorage({
      destination: function (req, file, cb) {
        cb(null, '../../public/uploads')
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname)
    }
});

const upload = multer({ storage: storage });

router.post('/', upload.single('foto'), async (req, res) => {
    const name = req.body.name;
    const marca = req.body.marca;
    const categoria = req.body.categoria;
    const preco = req.body.preco;
    const foto = req.file ? req.file.path : null;

    try {
        await connectDB();

        const newProduct = new Product({ name, marca, categoria, preco, foto });

        const savedProduct = await newProduct.save();

        if (foto && foto.path) {
            fs.renameSync(foto.path, `../../public/uploads/${savedProduct._id}-${foto.originalname}`);
            savedProduct.foto = `uploads/${savedProduct._id}-${foto.originalname}`;
            await savedProduct.save();
        }
        

        res.status(200).json(newProduct);
    } catch(error) {
        console.error("Erro ao cadastrar o produto", error);
        res.status(500).json({ message: "Erro ao cadastrar produto" })
    }
});

router.get('/', async (req, res) => {
    await connectDB();

    try {
        const products = await Product.find();

        res.json(products);
    } catch (error) {
        console.error("erro obtendo lista de produtos.", error);
        res.status(500).json({ message: "Erro ao obter a lista de produtos" });
    }
})


export default router;