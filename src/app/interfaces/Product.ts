export interface ProductCartProps {
    products: Product[];
}


export interface Product {
   id: number;
   attributes: ProductAttributes;
}

export interface ProductAttributes {
    Nome: string;
    Marcas: { marcas: string[] };
    pic: {
        data: {
            attributes: {
                formats: {
                    small: {
                        url: string; // URL da imagem no formato small
                    };
                };
        };
    };
};
    genre: string;
    Preco: number;
}


export interface CartProduct extends ProductAttributes {
    quantity?: number;
}

export interface CartProductExtendor extends Product{
    quantity: number;
}

export interface CartProductProps {
    cartProducts: ProductAttributes[];
}