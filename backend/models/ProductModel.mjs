import mongoose from 'mongoose';



const productSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        marca: {
            type: String,
            required: true,
        },
        categoria: {
            type: String,
            required: true,
        },
        preco: {
            type: Number,
        },
        foto: {
            type: String,
        }
    },
);

export default productSchema;