import { useEffect, useState } from "react";
import {
    StyledComment,
    StyledCommentInput,
    StyledComments,
    StyledCommentsDiv,
    StyledForm,
    StyledUsername,
} from "./style";
import TextArea from "../TextArea/index";

import { useForm } from "react-hook-form";
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
    // O TEXT AREA JA ESTÁ FEITO

    const formSchema = yup.object().shape({
        comment: yup.string().required("Comentário obrigatório"),
    });

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(formSchema),
    });

    /* function onSubmitFunction(data: IDataComment): SubmitHandler<FieldValues> {
        console.log(data);
    } */

    function setInitialLetters(username: string) {
        return username
            .split(" ")
            .slice(0, 2)
            .map((elem) => elem[0].toUpperCase())
            .join("");
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
                                    Math.floor(Math.random() * 12 + 1)
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
                <StyledUsername
                    background={`var(${
                        "--random-" + Math.floor(Math.random() * 12 + 1)
                    })`}
                >
                    <span>{setInitialLetters(user.username)}</span>
                    <p>{user.username}</p>
                </StyledUsername>
                {/* <StyledForm onSubmit={handleSubmit(onSubmitFunction)}>
                    <TextArea
                        label=""
                        errors={errors}
                        register={register}
                        name="comment"
                        placeholder="Automóvel muito confortável, foi uma ótima experiência de compra..."
                        height="128px"
                        // width é variavel
                        width="284px"
                    />
                    <label>
                        <input
                            type="tel"
                            placeholder="Digite aqui seu número"
                            {...register("comment")}
                        />
                    </label>
                    <button type="submit">Comentar</button>
                </StyledForm> */}
            </StyledCommentInput>
        </StyledCommentsDiv>
    );
}

export default Comments;
