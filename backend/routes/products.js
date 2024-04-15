const router = require('express').Router();
import multer from 'multer';
import express from "express";

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public/uploads')
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname)
    }
});

const upload = multer({ storage: storage });

router.post('/', upload.single('foto'), (req, res) => {
    const nome = req.body.nome;
    const marca = req.body.marca;
    const preco = req.body.preco;
    const fotoUrl = req.file.path;

    res.status(200).json({ message: 'Cadastrado com sucesso!' });
})

module.exports = router;