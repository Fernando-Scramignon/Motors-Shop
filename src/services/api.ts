// import { IProductCard } from "../components/ProductCardList";
import { IFullProduct } from "../providers/product";

import axios, { Axios } from "axios";
const API_PORT = import.meta.env.VITE_API_PORT;

const api: Axios = axios.create({
    baseURL:
        process.env.NODE_ENV == "production"
            ? "https://motors-shop-api.onrender.com"
            : `http://localhost:${API_PORT}`,
});

export class APIRequests {
    static api: Axios = api;

    static async getProducts(): Promise<Array<IFullProduct>> {
        const products: Array<IFullProduct> = await this.api.get("/products");
        return products;
    }
}

export default api;
