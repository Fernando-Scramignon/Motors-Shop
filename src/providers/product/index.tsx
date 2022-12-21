import { createContext, ReactNode, useState } from "react";
import FeedbackModal from "../../components/FeedbackModal";

import api from "../../services/api";
import { IAxiosError } from "../../interfaces";
import { showErrors } from "../../utils";

export interface IProductCreateRequest {
    // title: string;
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

export interface IProduct extends IProductCreateRequest {
    id: string;
}

interface IProductContextProps {
    createProduct: (
        data: IProductCreateRequest
    ) => Promise<IProduct | undefined>;
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

    async function createProduct(data: IProductCreateRequest) {
        return await api
            .post("/products", data)
            .then((res) => res.data as IProduct)
            .catch((err: IAxiosError) =>
                showErrors(err, setError, setModalError)
            );
    }

    return (
        <ProductContext.Provider value={{ createProduct }}>
            {children}
            <FeedbackModal
                state={modalError}
                setState={setModalError}
                title="Erro"
            >
                <div>
                    <span className="modalError__span--subtitle">
                        Ocorreu um erro:
                    </span>
                    <span className="modalError__span--description">
                        {error}
                    </span>
                </div>
            </FeedbackModal>
        </ProductContext.Provider>
    );
};
