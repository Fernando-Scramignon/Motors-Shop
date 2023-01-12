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
                : "Verifique se o servidor está rodando"
        }`
    );

    setModalError(true);

    return undefined;
}

// Limits a string length
// If the string surpasses the limit, it becomes sliced and gets "..." at the end
export function limitString(text: string, limit: number) {
    if (limit <= 0 && limit > text.length) {
        throw new Error(
            "Limit must be greater than zero and lower than the text length"
        );
    }

    if (limit >= text.length) return text;

    const limitedText = text.slice(0, limit) + "...";
    return limitedText;
}
