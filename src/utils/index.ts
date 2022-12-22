import { IAxiosError } from "../interfaces";

// This function renders errors coming from the request
export function showErrors(
    err: IAxiosError,
    setError: React.Dispatch<React.SetStateAction<string>>,
    setModalError: React.Dispatch<React.SetStateAction<boolean>>
) {
    setError(
        `${
            err?.response
                ? err.response?.data?.message
                : "check if the server is running"
        }`
    );

    setModalError(true);

    return undefined;
}
