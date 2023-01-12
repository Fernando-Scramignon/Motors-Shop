import { AxiosError, AxiosResponse } from "axios";

export interface IAxiosResponse extends AxiosResponse {
    data: {
        code: number;
        message: string[];
        status: string;
    };
}

export class IAxiosError extends AxiosError {
    constructor(response?: IAxiosResponse) {
        super();
    }
    declare response?: IAxiosResponse;
}

export interface IUser {
    id: string;
    email: string;
    password?: string;
    name: string;
    cpf: string;
    phone: string;
    birthdate: Date;
    description: string;
    isAdvertise: boolean;
}
