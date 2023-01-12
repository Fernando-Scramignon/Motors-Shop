import FeedbackModal from "../FeedbackModal";
import Input from "../Input";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { FieldValues } from "react-hook-form/dist/types/fields";
import Button from "../Button";
import { StyledModalEditAddress } from "./style";
import { useContext, useEffect, useState } from "react";
import { StyledSuccessModal } from "../CreateAnnouncementModal/style";
import { ProductContext } from "../../providers/product";
import { IFullUser, UserContext } from "../../providers/user";

export interface IModalEditAddress {
    modalOpen: boolean;
    setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

function ModalEditAddress({ modalOpen, setModalOpen }: IModalEditAddress) {
    const { generateChange, change } = useContext(ProductContext);
    const { updateUser, getUserById } = useContext(UserContext);

    const [sucess, setSucess] = useState(false);
    const [userInfo, setUserInfo] = useState({} as IFullUser);

    const id = localStorage.getItem("user_id");
    useEffect(() => {
        getUserById(id!).then((resp) => setUserInfo(resp!));
    }, [change]);

    function MAX_MESSAGE(charNum: number): string {
        return `Campo precisa ter no máximo ${charNum} caracteres`;
    }
    const formSchema = yup.object().shape({
        cep: yup
            .string()
            .max(9, MAX_MESSAGE(9))
            .nullable()
            .transform((_, val) => (val !== "" ? val : null))
            .matches(/^[0-9]+$/, "Esse campo deve conter apenas números"),
        state: yup
            .string()
            .max(50, MAX_MESSAGE(50))
            .nullable()
            .transform((_, val) => (val !== "" ? val : null)),
        city: yup
            .string()
            .max(50, MAX_MESSAGE(50))
            .nullable()
            .transform((_, val) => (val !== "" ? val : null)),
        street: yup
            .string()
            .max(100, MAX_MESSAGE(100))
            .nullable()
            .transform((_, val) => (val !== "" ? val : null)),
        number: yup
            .string()
            .max(10, MAX_MESSAGE(10))
            .nullable()
            .transform((_, val) => (val !== "" ? val : null))
            .matches(/^[0-9]+$/, "Esse campo deve conter apenas números"),
        complement: yup
            .string()
            .nullable()
            .transform((_, val) => (val !== "" ? val : null)),
    });

    const {
        register,
        handleSubmit,
        formState: { errors },
        watch,
        reset,
    } = useForm({
        resolver: yupResolver(formSchema),
    });
    function buttonIsAble() {
        return (
            Object.keys(errors).length == 0 &&
            JSON.stringify(watch()) !== "{}" &&
            Object.values(watch()).find((element) =>
                element !== "" ? true : false
            )
        );
    }

    async function EditAddress(data: FieldValues) {
        const requestData = Object.entries(data).reduce(
            (acc, value) =>
                value[1] !== " " && value[1] !== "" && value[1] !== null
                    ? { ...acc, [value[0]]: value[1] }
                    : acc,
            {}
        );
        setModalOpen(false);
        await updateUser(id!, { address: requestData }).then((resp) => {
            if (resp) {
                setSucess(true);
                reset();
                generateChange();
            }
        });
    }

    return (
        <>
            <FeedbackModal state={sucess} setState={setSucess} title="Sucesso!">
                <StyledSuccessModal>
                    <h3 className="modalSuccess__h3--subtitle">
                        Endereço editado com sucesso!
                    </h3>

                    <p className="modalSuccess__p--description">
                        Suas novas informações foram salvas
                    </p>
                </StyledSuccessModal>
            </FeedbackModal>

            <FeedbackModal
                state={modalOpen}
                setState={setModalOpen}
                title={"Editar endereço"}
                onClose={() => {
                    reset();
                }}
            >
                <StyledModalEditAddress>
                    <h4>Informações de endereço</h4>
                    <form onSubmit={handleSubmit(EditAddress)}>
                        <Input
                            label="CEP"
                            name="cep"
                            placeholder={userInfo?.address?.cep}
                            type=""
                            register={register}
                            errors={errors}
                        />
                        <div className="containerInputs">
                            <Input
                                label="Estado"
                                name="state"
                                placeholder={userInfo?.address?.state}
                                type=""
                                register={register}
                                errors={errors}
                            />
                            <Input
                                label="Cidade"
                                name="city"
                                placeholder={userInfo?.address?.city}
                                type=""
                                register={register}
                                errors={errors}
                            />
                        </div>
                        <Input
                            label="Rua"
                            name="street"
                            placeholder={userInfo?.address?.street}
                            type=""
                            register={register}
                            errors={errors}
                        />
                        <div className="containerInputs">
                            <Input
                                label="Número"
                                name="number"
                                placeholder={userInfo?.address?.number}
                                type=""
                                register={register}
                                errors={errors}
                            />
                            <Input
                                label="Complemento"
                                name="complement"
                                placeholder={
                                    userInfo?.address?.complement
                                        ? userInfo.address.complement
                                        : "Complemento"
                                }
                                type=""
                                register={register}
                                errors={errors}
                            />
                        </div>
                        <div className="containerButtonsFinal">
                            <Button
                                backgroundcolor="var(--grey-6)"
                                width="126px"
                                height="48px"
                                type="button"
                                border="none"
                                color="var(--grey-2)"
                                hover={{
                                    backgroundColorHover: "var(--grey-5)",
                                    colorHover: "var(--grey-2)",
                                    border: "none",
                                }}
                                size="big"
                                onFunction={() => {
                                    setModalOpen(false);

                                    reset();
                                }}
                            >
                                Cancelar
                            </Button>
                            {buttonIsAble() ? (
                                <Button
                                    backgroundcolor="var(--brand-1)"
                                    width="193px"
                                    height="48px"
                                    type="submit"
                                    border="none"
                                    color="var(--white-fixed)"
                                    hover={{
                                        backgroundColorHover: "var(--brand-2)",
                                        colorHover: "var(--white-fixed)",
                                        border: "none",
                                    }}
                                    size="big"
                                >
                                    Salvar alterações
                                </Button>
                            ) : (
                                <button className="disableButton" disabled>
                                    Salvar alterações
                                </button>
                            )}
                        </div>
                    </form>
                </StyledModalEditAddress>
            </FeedbackModal>
        </>
    );
}

export default ModalEditAddress;
