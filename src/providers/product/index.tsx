import { createContext, ReactNode, useContext, useState } from "react";

import api from "../../services/api";
import { IAxiosError } from "../../interfaces";
import { showErrors } from "../../utils";
import ErrorModal from "../../components/ErrorModal";
import { IBaseUser, UserContext } from "../user";

export interface ICommentCreateRequest {
    comment: string;
}

export interface IComment {
    id: string;
    comment: string;
    created_at: Date;
    user: IBaseUser;
}

export interface IProductCreateRequest {
    title: string;
    year: number;
    km: number;
    price: number;
    description: string;
    vehicle_type: string;
    announcement_type: string;
    published: boolean;
    cover_image: string;
    images: string[];
}

export interface ISimpleProduct {
    id: string;
    title: string;
    year: number;
    km: number;
    price: number;
    description: string;
    vehicle_type: string;
    announcement_type: string;
    published: boolean;
    cover_image: string;
    images: {
        id: string;
        url: string;
    };
    user: undefined;
}

export interface IFullProduct {
    id: string;
    title: string;
    year: number;
    km: number;
    price: number;
    description: string;
    vehicle_type: string;
    announcement_type: string;
    published: boolean;
    cover_image: string;
    images: {
        id: string;
        url: string;
    };
    comments: IComment[];
    user: IBaseUser;
}

export interface IProductUpdateRequest {
    title?: string;
    year?: number;
    km?: number;
    price?: number;
    description?: string;
    vehicle_type?: string;
    announcement_type?: string;
    published?: boolean;
    cover_image?: string;
    images?: string[];
}

interface IProductContextProps {
    createProduct: (
        data: IProductCreateRequest
    ) => Promise<ISimpleProduct | undefined>;
    listProducts: () => Promise<IFullProduct[] | undefined>;
    getProductById: (product_id: string) => Promise<IFullProduct | undefined>;
    updateProduct: (
        product_id: string,
        data: IProductUpdateRequest
    ) => Promise<ISimpleProduct | undefined>;
    deleteProduct: (product_id: string) => Promise<boolean | undefined>;
}
interface IProductProviderProps {
    children: ReactNode;
}

export const ProductContext = createContext<IProductContextProps>(
    {} as IProductContextProps
);

export const ProductProvider = ({ children }: IProductProviderProps) => {
    const [modalError, setModalError] = useState<boolean>(false);
    const [error, setError] = useState<string>("");
    const { checkLocalStorage } = useContext(UserContext);

    async function createProduct(data: IProductCreateRequest) {
        const loginResponse = checkLocalStorage();

        return loginResponse
            ? await api
                  .post("/products", data, {
                      headers: {
                          Authorization: `Bearer ${loginResponse.token}`,
                      },
                  })
                  .then((res) => res.data as ISimpleProduct)
                  .catch((err: IAxiosError) =>
                      showErrors(err, setError, setModalError)
                  )
            : undefined;
    }

    async function listProducts() {
        return await api
            .get("/products")
            .then((res) => res.data as IFullProduct[])
            .catch((err: IAxiosError) =>
                showErrors(err, setError, setModalError)
            );
    }

    async function getProductById(product_id: string) {
        return await api
            .get(`/products/${product_id}`)
            .then((res) => res.data as IFullProduct)
            .catch((err: IAxiosError) =>
                showErrors(err, setError, setModalError)
            );
    }

    async function updateProduct(
        product_id: string,
        data: IProductUpdateRequest
    ) {
        return await api
            .patch(`/products/${product_id}`, data)
            .then((res) => res.data as ISimpleProduct)
            .catch((err: IAxiosError) =>
                showErrors(err, setError, setModalError)
            );
    }

    async function deleteProduct(product_id: string) {
        return await api
            .delete(`/products/${product_id}`)
            .then(() => true)
            .catch((err: IAxiosError) =>
                showErrors(err, setError, setModalError)
            );
    }

    return (
        <ProductContext.Provider
            value={{
                createProduct,
                listProducts,
                getProductById,
                updateProduct,
                deleteProduct,
            }}
        >
            {children}
            <ErrorModal
                state={modalError}
                setState={setModalError}
                error={error}
            />
        </ProductContext.Provider>
    );
};
