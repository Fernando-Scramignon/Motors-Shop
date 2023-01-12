import {
    createContext,
    Dispatch,
    ReactNode,
    SetStateAction,
    useState,
} from "react";

import api from "../../services/api";
import { IAxiosError } from "../../interfaces";
import { showErrors } from "../../utils";
import ErrorModal from "../../components/ErrorModal";
import { ISimpleProduct } from "../product";
import { AxiosResponse } from "axios";

export interface IAddressCreateRequest {
    cep: string;
    state: string;
    city: string;
    street: string;
    number: string;
    complement?: string;
}

export interface IAddress extends IAddressCreateRequest {
    id: string;
}

export interface IAddressUpdateRequest {
    cep?: string;
    state?: string;
    city?: string;
    street?: string;
    number?: string;
    complement?: string;
}

export interface IUserCreateRequest {
    name: string;
    email: string;
    password: string;
    cpf: string;
    phone: string;
    birthdate: Date;
    description: string;
    isAdvertiser: boolean;
    address: IAddressCreateRequest;
}

export interface IBaseUser {
    id: string;
    name: string;
    email: string;
    cpf: string;
    phone: string;
    birthdate: Date;
    description: string;
    isAdvertiser: boolean;
}

export interface ISimpleUser extends IBaseUser {
    address: IAddress;
}

export interface IFullUser extends ISimpleUser {
    products: ISimpleProduct[];
}

export interface IUserProfile {
    id: string;
    name: string;
    description: string;
    isAdvertiser: boolean;
    products: ISimpleProduct[];
}

export interface IUserUpdateRequest {
    name?: string;
    email?: string;
    cpf?: string;
    phone?: string;
    birthdate?: Date;
    description?: string;
    address?: IAddressUpdateRequest;
}

export interface ILogin {
    email: string;
    password: string;
}

export interface ILoginResponse {
    token: string;
    id: string;
}

interface IUserContextProps {
    createUser: (data: IUserCreateRequest) => Promise<ISimpleUser | undefined>;
    login: (data: ILogin) => Promise<ILoginResponse | undefined>;
    getLocalStorage: () => ILoginResponse | undefined;
    checkLocalStorage: (modal?: boolean) => ILoginResponse | undefined;
    getUserById: (
        user_id: string,
        modal?: boolean
    ) => Promise<IFullUser | undefined>;
    getUserProfileById: (user_id: string) => Promise<IUserProfile | undefined>;
    updateUser: (
        user_id: string,
        data: IUserUpdateRequest
    ) => Promise<ISimpleUser | undefined>;
    deleteUser: (user_id: string) => Promise<boolean | undefined>;
    isAuthenticated: boolean;
    setIsAuthenticated: Dispatch<SetStateAction<boolean>>;
    forgotPassword: (email: string) => Promise<boolean | undefined>;
    recoverPassword: (
        token: string,
        newPassword: string
    ) => Promise<{ message: string } | undefined>;
}
interface IUserProviderProps {
    children: ReactNode;
}

export const UserContext = createContext<IUserContextProps>(
    {} as IUserContextProps
);

export const UserProvider = ({ children }: IUserProviderProps) => {
    const [modalError, setModalError] = useState<boolean>(false);
    const [error, setError] = useState<string>("");
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(
        !!window.localStorage.getItem("user_token")
    );

    async function createUser(data: IUserCreateRequest) {
        return await api
            .post("/users", data)
            .then((res) => res.data as ISimpleUser)
            .catch((err: IAxiosError) =>
                showErrors(err, setError, setModalError)
            );
    }

    async function login(data: ILogin) {
        return await api
            .post("/users/login", data)
            .then((res) => {
                const body = res.data as ILoginResponse;
                window.localStorage.setItem("user_id", body.id);
                window.localStorage.setItem("user_token", body.token);
                return body;
            })
            .catch((err: IAxiosError) =>
                showErrors(err, setError, setModalError)
            );
    }

    function getLocalStorage() {
        const id = window.localStorage.getItem("user_id");
        const token = window.localStorage.getItem("user_token");

        return id && token ? ({ id, token } as ILoginResponse) : undefined;
    }

    function checkLocalStorage(modal: boolean = true) {
        if (getLocalStorage()) {
            return getLocalStorage();
        }

        if (modal) {
            setError("Usuário não identificado, por favor, faça o login");
            setModalError(true);
        }

        return undefined;
    }

    async function getUserById(user_id: string, modal: boolean = true) {
        const loginResponse = checkLocalStorage(modal);

        return loginResponse
            ? await api
                  .get(`/users/${user_id}`, {
                      headers: {
                          Authorization: `Bearer ${loginResponse.token}`,
                      },
                  })
                  .then((res) => res.data as IFullUser)
                  .catch((err: IAxiosError) =>
                      modal
                          ? showErrors(err, setError, setModalError)
                          : undefined
                  )
            : undefined;
    }

    async function getUserProfileById(user_id: string) {
        return await api
            .get(`/users/${user_id}/profile`)
            .then((res) => res.data as IUserProfile)
            .catch((err: IAxiosError) =>
                showErrors(err, setError, setModalError)
            );
    }

    async function updateUser(user_id: string, data: IUserUpdateRequest) {
        const loginResponse = checkLocalStorage();

        return loginResponse
            ? await api
                  .patch(`/users/${user_id}`, data, {
                      headers: {
                          Authorization: `Bearer ${loginResponse.token}`,
                      },
                  })
                  .then((res) => res.data as ISimpleUser)
                  .catch((err: IAxiosError) =>
                      showErrors(err, setError, setModalError)
                  )
            : undefined;
    }

    async function deleteUser(user_id: string) {
        const loginResponse = checkLocalStorage();

        return loginResponse
            ? await api
                  .delete(`/users/${user_id}`, {
                      headers: {
                          Authorization: `Bearer ${loginResponse.token}`,
                      },
                  })
                  .then(() => true)
                  .catch((err: IAxiosError) =>
                      showErrors(err, setError, setModalError)
                  )
            : undefined;
    }

    async function forgotPassword(email: string) {
        return await api
            .post("/users/forgot_password", { email })
            .then(() => true)
            .catch((err: IAxiosError) =>
                showErrors(err, setError, setModalError)
            );
    }

    async function recoverPassword(token: string, newPassword: string) {
        return await api
            .patch("/users/recover_password", { token, newPassword })
            .then((res) => res.data as { message: string })
            .catch((err: IAxiosError) =>
                showErrors(err, setError, setModalError)
            );
    }

    return (
        <UserContext.Provider
            value={{
                createUser,
                login,
                getLocalStorage,
                checkLocalStorage,
                getUserById,
                getUserProfileById,
                updateUser,
                deleteUser,
                setIsAuthenticated,
                isAuthenticated,
                forgotPassword,
                recoverPassword,
            }}
        >
            {children}
            <ErrorModal
                state={modalError}
                setState={setModalError}
                error={error}
            />
        </UserContext.Provider>
    );
};
