import { SetStateAction, useContext, useEffect, useRef, useState } from "react";
import {
    StyledButtonDeleteComment,
    StyledComment,
    StyledCommentInput,
    StyledComments,
    StyledCommentsDiv,
    StyledDeleteModalComment,
    StyledForm,
    StyledSuggestions,
    StyledUsername,
} from "./style";

import { FieldValues, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { CommentContext, ICommentCreateRequest } from "../../providers/comment";
import { useParams } from "react-router-dom";

import buttonComment from "../../assets/Ellipse 3.png";
import { AiFillEdit } from "react-icons/ai";
import { BsTrash } from "react-icons/bs";
import { UserContext } from "../../providers/user";
import FeedbackModal from "../FeedbackModal";

interface IUserComment {
    name: string;
    id: string;
}

interface IUserLogged {
    username: string;
}

interface IComments {
    id: string;
    comment: string;
    user: IUserComment;
    created_at: Date | string;
}

interface ICommentsProps {
    comments: IComments[];
    user: IUserLogged;
    commentValidation: boolean;
    setCommentValidation: (e: boolean) => void;
}

interface IDataComment {
    comment: string;
}

function Comments({
    comments,
    user,
    commentValidation,
    setCommentValidation,
}: ICommentsProps) {
    // ADICIONAR AUTENTICAÇÃO

    const { createComment } = useContext(CommentContext);
    const { id } = useParams();
    const userLoggedId = localStorage.getItem("user_id");
    const [userLoggedName, setUserLoggedName] =
        useState<string>("Usuário logado");
    const { getUserProfileById, isAuthenticated } = useContext(UserContext);
    const { updateComment, deleteComment } = useContext(CommentContext);
    const [editComment, setEditComment] = useState(false);
    const [removeComment, setRemoveComment] = useState(false);
    const [commentId, setCommentId] = useState("");

    useEffect(() => {
        getUserProfileById(userLoggedId!).then((res) =>
            setUserLoggedName(res!.name)
        );
    }, []);

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
        createComment(data as ICommentCreateRequest, id!).then((_) => {
            setCommentValidation(!commentValidation);
            setValue("comment", "");
        });
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

    function generateTimeComment(comment: string | Date): string {
        const time = new Date(comment).getTime();
        const actual = new Date().getTime();

        const year = Math.round((actual - time) / 3.154e10);
        const month = Math.round((actual - time) / 2.628e9);
        const day = Math.round((actual - time) / 8.64e7);
        const hour = Math.round((actual - time) / 3.6e6);
        const minute = Math.round((actual - time) / 60000);
        const second = Math.round((actual - time) / 1000);

        if (year > 0) {
            return year == 1 ? `há ${year} ano` : `há ${year} anos`;
        } else if (month > 0) {
            return month == 1 ? `há ${month} mês` : `há ${month} meses`;
        } else if (day > 0) {
            return day == 1 ? `há ${day} dia` : `há ${day} dias`;
        } else if (hour > 0) {
            return hour == 1 ? `há ${hour} hora` : `há ${hour} horas`;
        } else if (minute > 0) {
            return minute == 1 ? `há ${minute} minuto` : `há ${minute} minutos`;
        } else if (second > 0) {
            return second == 1
                ? `há ${second} segundo`
                : `há ${second} segundos`;
        }

        return "há 0 segundo";
    }

    const editCommentValue: any = useRef();

    function editCommentSubmit(): void {
        updateComment(commentId, {
            comment: editCommentValue.current.value,
        }).then((res) => {
            setEditComment(false);
            setCommentValidation(!commentValidation);
        });
    }

    function deleteCommentSubmit(confirmation: string): void {
        if (confirmation == "Confirmar") {
            deleteComment(commentId).then((res) => {
                setRemoveComment(false);
                setCommentValidation(!commentValidation);
            });
        }

        setRemoveComment(false);
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
                                    generateRandomColor(comment.user.name)
                                })`}
                            >
                                <span>
                                    {setInitialLetters(comment.user.name)}
                                </span>
                                <p>{comment.user.name}</p>

                                <img
                                    className="pointComment"
                                    src={buttonComment}
                                />

                                <p className="timeComment">
                                    {generateTimeComment(comment.created_at)}
                                </p>

                                {userLoggedId == comment.user.id && (
                                    <>
                                        <img
                                            className="pointComment"
                                            src={buttonComment}
                                        />
                                        <AiFillEdit
                                            color="var(--grey-2)"
                                            cursor="pointer"
                                            onClick={() => {
                                                setCommentId(comment.id);
                                                setEditComment(true);
                                            }}
                                        />
                                        <BsTrash
                                            color="red"
                                            cursor="pointer"
                                            onClick={() => {
                                                setCommentId(comment.id);
                                                setRemoveComment(true);
                                            }}
                                        />
                                    </>
                                )}
                            </StyledUsername>
                            <p>{comment.comment}</p>
                        </StyledComment>
                    ))}
                </ul>
            </StyledComments>
            <StyledCommentInput>
                <StyledUsername background={"var(--brand-1)"}>
                    <span>{setInitialLetters(userLoggedName)}</span>
                    <p>{userLoggedName}</p>
                </StyledUsername>
                <StyledForm onSubmit={handleSubmit(onSubmitFunction)}>
                    <textarea
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
            <FeedbackModal
                setState={setEditComment}
                state={editComment}
                title="Editar comentário"
            >
                <StyledForm widthButton="50px">
                    <textarea
                        placeholder="Digite seu comentário"
                        ref={editCommentValue}
                    />
                    <button type="button" onClick={editCommentSubmit}>
                        +
                    </button>
                </StyledForm>
            </FeedbackModal>
            <FeedbackModal
                setState={setRemoveComment}
                state={removeComment}
                title="Deletar comentário"
            >
                <StyledDeleteModalComment>
                    <p>Tem certeza que deseja remover este anúncio?</p>
                    <div>
                        <StyledButtonDeleteComment
                            backgroundColor="var(--grey-6)"
                            border="var(--grey-6)"
                            color="var(--grey-2)"
                            backgroundColorHover="yellowgreen"
                            borderHover="yellowgreen"
                            colorHover="white"
                            onClick={() => deleteCommentSubmit("Cancelar")}
                        >
                            Cancelar
                        </StyledButtonDeleteComment>
                        <StyledButtonDeleteComment
                            backgroundColor="var(--alert-2)"
                            border="var(--alert-2)"
                            color="var(--alert-1)"
                            backgroundColorHover="red"
                            borderHover="red"
                            colorHover="var(--alert-3)"
                            onClick={() => deleteCommentSubmit("Confirmar")}
                        >
                            Sim, deletar comentário
                        </StyledButtonDeleteComment>
                    </div>
                </StyledDeleteModalComment>
            </FeedbackModal>
        </StyledCommentsDiv>
    );
}

export default Comments;
