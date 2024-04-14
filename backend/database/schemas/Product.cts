import mongoose, { Document, Schema } from "mongoose";
import normalize from 'normalize-mongoose';
import mongoosePaginate from "mongoose-paginate-v2"

export interface IProduct {
    id: any;
    title: string;
    description?: string;
    photo?: string;
    photos?: string[];
    brand: string;
    price: number;
}

export interface IProductDocument extends Document {
    description: string;
    title: string;
    photo?: string;
  photos?: string[];
  brand: string;
  price: number;
  }

  const ProductSchema = new Schema<IProductDocument>(
    {
        title: {
            type: String,
            required: true,
        },
        description: String,
        photo: String,
        photos: [String],
        brand: {
            type: String,
            required: true,
        },
        price: {
            type: Number,
            required: true
        }
    }
  ); 

  ProductSchema.plugin(normalize);
  ProductSchema.plugin(mongoosePaginate);

  const model = mongoose.model<IProductDocument>('Product', ProductSchema);

  export default model;