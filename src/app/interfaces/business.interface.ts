export interface BusinessDataInterface {
    title: string;
    image?: string;
    instagram?: string;
    facebook?: string;
    whatsapp?: string;
    tags?: string[];
    products?: ProductInterface[];
}

export interface ProductInterface {
    name: string;
    img: string;
}