import FeedbackModal from "../FeedbackModal";
import Input from "../Input";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { FieldValues } from "react-hook-form/dist/types/fields";
import Button from "../Button";
import { StyledModalEditUser } from "./style";
import TextArea from "../TextArea";

export interface IModalEditUser {
    modalOpen: boolean;
    setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

function ModalEditUser({ modalOpen, setModalOpen }: IModalEditUser) {
    function MAX_MESSAGE(charNum: number): string {
        return `Campo precisa ter no máximo ${charNum} caracteres`;
    }

    const formSchema = yup.object().shape({
        name: yup
            .string()
            .required("Nome é um campo obrigatório")
            .max(100, MAX_MESSAGE(100)),
        email: yup
            .string()
            .email("O campo email deve conter um email")
            .required("Email é um campo obrigatório")
            .max(100, MAX_MESSAGE(100)),
        cpf: yup
            .string()
            .required("CPF é um campo obrigatório")
            .max(14, MAX_MESSAGE(14)),
        phone: yup
            .string()
            .required("Celular é um campo obrigatório")
            .max(14, MAX_MESSAGE(14)),
        birthdate: yup
            .date()
            .typeError("O campo data de nascimento deve conter uma data válida")
            .required("Data de nascimento é um campo obrigatório"),
        description: yup
            .string()
            .required("Descrição é um campo obrigatório")
            .max(300, MAX_MESSAGE(300)),
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
            Object.values(watch()).every((value) => value !== "")
        );
    }

    async function EditUser(data: FieldValues) {
        console.log(data);
    }

    console.log(errors);
    console.log(watch());

    return (
        <FeedbackModal
            state={modalOpen}
            setState={setModalOpen}
            title="Editar perfil"
            onClose={() => {
                reset();
            }}
        >
            <StyledModalEditUser>
                <form onSubmit={handleSubmit(EditUser)}>
                    <h4>Infomações pessoais</h4>
                    <Input
                        label="Nome"
                        name="name"
                        placeholder="Digitar nome"
                        register={register}
                        errors={errors}
                        type=""
                    />

                    <Input
                        label="Email"
                        name="email"
                        placeholder="Digitar email"
                        register={register}
                        errors={errors}
                        type=""
                    />

                    <Input
                        label="CPF"
                        name="cpf"
                        placeholder="Digitar cpf"
                        register={register}
                        errors={errors}
                        type=""
                    />

                    <Input
                        label="Celular"
                        name="phone"
                        placeholder="Digitar celular"
                        register={register}
                        errors={errors}
                        type=""
                    />

                    <Input
                        label="Data de nascimento"
                        name="birthdate"
                        placeholder="Digitar data de nascimento"
                        register={register}
                        errors={errors}
                        type=""
                    />

                    <TextArea
                        label="Descrição"
                        width=""
                        height="60px"
                        placeholder="Digitar descrição"
                        name="description"
                        register={register}
                        errors={errors}
                    />
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
                                Criar anúncio
                            </Button>
                        ) : (
                            <button className="disableButton" disabled>
                                Salvar alterações
                            </button>
                        )}
                    </div>
                </form>
            </StyledModalEditUser>
        </FeedbackModal>
    );
}

export default ModalEditUser;
