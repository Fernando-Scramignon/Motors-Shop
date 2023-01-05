import { useState } from "react";
import {
    StyledComment,
    StyledCommentInput,
    StyledComments,
    StyledCommentsDiv,
    StyledForm,
    StyledSuggestions,
    StyledUsername,
} from "./style";

import { FieldValues, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

interface IUserComment {
    username: string;
}

interface IUserLogged {
    username: string;
}

interface IComments {
    comment: string;
    user: IUserComment;
}

interface ICommentsProps {
    comments: IComments[];
    user: IUserLogged; // Vai mudar para user_id
}

interface IDataComment {
    comment: string;
}

function Comments({ comments, user }: ICommentsProps) {
    // ADICIONAR AUTENTICAÇÃO

    const formSchema = yup.object().shape({
        comment: yup.string().required("Comentário obrigatório"),
    });

    const {
        register,
        handleSubmit,
        formState: { errors },
        setValue,
    } = useForm({
        resolver: yupResolver(formSchema),
    });

    function onSubmitFunction(data: FieldValues): void {
        setValue("comment", "");
        console.log(data);
    }

    function addSuggestion(suggestion: string): void {
        setValue("comment", suggestion);
    }

    function setInitialLetters(username: string): string {
        return username
            .split(" ")
            .slice(0, 2)
            .map((elem) => elem[0].toUpperCase())
            .join("");
    }

    function generateRandomColor(name: string): number {
        const randomNumber = Math.floor(
            name.length > 12 ? name.length % 12 : name.length
        );

        return randomNumber <= 0 ? 7 : randomNumber;
    }

    return (
        <StyledCommentsDiv>
            <StyledComments>
                <h6>Comentários</h6>
                <ul>
                    {comments?.map((comment) => (
                        <StyledComment>
                            <StyledUsername
                                background={`var(${
                                    "--random-" +
                                    generateRandomColor(comment.user.username)
                                })`}
                            >
                                <span>
                                    {setInitialLetters(comment.user.username)}
                                </span>
                                <p>{comment.user.username}</p>
                            </StyledUsername>
                            <p>{comment.comment}</p>
                        </StyledComment>
                    ))}
                </ul>
            </StyledComments>
            <StyledCommentInput>
                <StyledUsername background={"var(--brand-1)"}>
                    <span>{setInitialLetters(user.username)}</span>
                    <p>{user.username}</p>
                </StyledUsername>
                <StyledForm onSubmit={handleSubmit(onSubmitFunction)}>
                    <textarea
                        className="teste"
                        placeholder="Automóvel muito confortável, foi uma ótima experiência de compra..."
                        {...register("comment")}
                    />
                    <span>{errors.comment?.message as string}</span>
                    <button type="submit">Comentar</button>
                </StyledForm>
                <StyledSuggestions>
                    <p onClick={() => addSuggestion("Gostei Muito!")}>
                        Gostei muito!
                    </p>
                    <p onClick={() => addSuggestion("Incrível")}>Incrível</p>
                    <p
                        onClick={() =>
                            addSuggestion("Recomendarei para meus amigos!")
                        }
                    >
                        Recomendarei para meus amigos!
                    </p>
                </StyledSuggestions>
            </StyledCommentInput>
        </StyledCommentsDiv>
    );
}

export default Comments;
