import StyledBackgroundPicture from "./style";

export interface IProfilePictureProps {
    name: string;
    widthAndHeight: string;
    fontSize: string;
    backgroundColor?: string;
}

function UserProfilePicture({
    name,
    widthAndHeight,
    fontSize,
    backgroundColor,
}: IProfilePictureProps) {
    function RandonNumber(max: number) {
        return Math.floor(Math.random() * max);
    }

    const names = name.split(" ");

    const firstNameLetter = names[0].charAt(0);

    let secondNameLetter = "";

    if (names[1]) {
        secondNameLetter = names[1].charAt(0);
    }

    return (
        <StyledBackgroundPicture
            fontSize={fontSize}
            widthAndHeight={widthAndHeight}
            backgroundColor={
                backgroundColor
                    ? backgroundColor
                    : `--random-${RandonNumber(12)}`
            }
        >
            <p>{firstNameLetter + secondNameLetter}</p>
        </StyledBackgroundPicture>
    );
}

export default UserProfilePicture;
