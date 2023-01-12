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
    created_at: Date | string;
    user: IBaseUser;
}

export interface ICommentUpdateRequest {
    comment?: string;
}

interface ICommentContextProps {
    createComment: (
        data: ICommentCreateRequest,
        product_id: string
    ) => Promise<IComment | undefined>;
    updateComment: (
        comment_id: string,
        data: ICommentUpdateRequest
    ) => Promise<IComment | undefined>;
    deleteComment: (comment_id: string) => Promise<boolean | undefined>;
}
interface ICommentProviderProps {
    children: ReactNode;
}

export const CommentContext = createContext<ICommentContextProps>(
    {} as ICommentContextProps
);

export const CommentProvider = ({ children }: ICommentProviderProps) => {
    const [modalError, setModalError] = useState<boolean>(false);
    const [error, setError] = useState<string>("");
    const { checkLocalStorage } = useContext(UserContext);

    async function createComment(
        data: ICommentCreateRequest,
        product_id: string
    ) {
        const loginResponse = checkLocalStorage();

        return loginResponse
            ? await api
                  .post(`/comments/${product_id}`, data, {
                      headers: {
                          Authorization: `Bearer ${loginResponse.token}`,
                      },
                  })
                  .then((res) => res.data as IComment)
                  .catch((err: IAxiosError) =>
                      showErrors(err, setError, setModalError)
                  )
            : undefined;
    }

    async function updateComment(
        comment_id: string,
        data: ICommentUpdateRequest
    ) {
        const loginResponse = checkLocalStorage();

        return loginResponse
            ? await api
                  .patch(`/comments/${comment_id}`, data, {
                      headers: {
                          Authorization: `Bearer ${loginResponse.token}`,
                      },
                  })
                  .then((res) => res.data as IComment)
                  .catch((err: IAxiosError) =>
                      showErrors(err, setError, setModalError)
                  )
            : undefined;
    }

    async function deleteComment(comment_id: string) {
        const loginResponse = checkLocalStorage();

        return loginResponse
            ? await api
                  .delete(`/comments/${comment_id}`, {
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

    return (
        <CommentContext.Provider
            value={{ createComment, updateComment, deleteComment }}
        >
            {children}
            <ErrorModal
                state={modalError}
                setState={setModalError}
                error={error}
            />
        </CommentContext.Provider>
    );
};
