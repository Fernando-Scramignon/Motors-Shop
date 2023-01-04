import FeedbackModal from "../FeedbackModal";
import Input from "../Input";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { FieldValues } from "react-hook-form/dist/types/fields";
import Button from "../Button";
import { StyledModalEditAddress } from "./style";

export interface IModalEditAddress {
    modalOpen: boolean;
    setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

function ModalEditAddress({ modalOpen, setModalOpen }: IModalEditAddress) {
    function MAX_MESSAGE(charNum: number): string {
        return `Campo precisa ter no máximo ${charNum} caracteres`;
    }
    const formSchema = yup.object().shape({
        cep: yup
            .string()
            .required("CEP é um campo obrigatório")
            .max(9, MAX_MESSAGE(9)),
        state: yup
            .string()
            .required("Estado é um campo obrigatório")
            .max(50, MAX_MESSAGE(50)),
        city: yup
            .string()
            .required("Cidade é um campo obrigatório")
            .max(50, MAX_MESSAGE(50)),
        street: yup
            .string()
            .required("Rua é um campo obrigatório")
            .max(100, MAX_MESSAGE(100)),
        number: yup
            .string()
            .required("Número é um campo obrigatório")
            .max(10, MAX_MESSAGE(10)),
        complement: yup.string().required("Complemento é um campo obrigatório"),
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

    async function EditAddress(data: FieldValues) {
        console.log(data);
    }

    console.log(errors);

    return (
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
                        placeholder="89888.888"
                        type=""
                        register={register}
                        errors={errors}
                    />
                    <div className="containerInputs">
                        <Input
                            label="Estado"
                            name="state"
                            placeholder="Paraná"
                            type=""
                            register={register}
                            errors={errors}
                        />
                        <Input
                            label="Cidade"
                            name="city"
                            placeholder="Curitiba"
                            type=""
                            register={register}
                            errors={errors}
                        />
                    </div>
                    <Input
                        label="Rua"
                        name="street"
                        placeholder="Rua do paraná"
                        type=""
                        register={register}
                        errors={errors}
                    />
                    <div className="containerInputs">
                        <Input
                            label="Número"
                            name="number"
                            placeholder="1029"
                            type=""
                            register={register}
                            errors={errors}
                        />
                        <Input
                            label="Complemento"
                            name="complement"
                            placeholder="Apart 12"
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
                                Criar anúncio
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
    );
}

export default ModalEditAddress;
