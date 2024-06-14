import { Product } from "@/app/interfaces/Product";

import express from 'express';
import stripe from 'stripe';
const app = express();

app.use(express.json());

/*
app.post('/create-checkout-session', async (req: Request, res: Response) => {
    const { products } = req.body;

    const lineItems = products.map((product: Product) => ({
        price_data: {
            currency: 'usd',
            product_data: {
                name: product.name,
            },
            unit_amount: product.preco * 100,
        },
        quantity: product.quantity,
    }));

    const session = await stripe.Checkout.SessionsResource})
    */