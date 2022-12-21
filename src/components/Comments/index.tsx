import { useEffect, useState } from "react";
import {
    StyledComment,
    StyledCommentInput,
    StyledComments,
    StyledCommentsDiv,
    StyledUsername,
} from "./style";

interface IUserComment {
    username: string;
}

interface IComments {
    comment: string;
    user: IUserComment;
}

interface ICommentsProps {
    comments: IComments[];
}

function Comments({ comments }: ICommentsProps) {
    // Adicionar dependencia futuramente, provavelmente o product
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
            <StyledCommentInput></StyledCommentInput>
        </StyledCommentsDiv>
    );
}

export default Comments;
