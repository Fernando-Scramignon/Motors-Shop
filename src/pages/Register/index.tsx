import {
    ResgisterPage,
    RegisterForm,
    InputsDiv,
    UserInfo,
    AddressInfo,
    TypeInfo,
    PasswordDiv,
    StyledSuccessModal,
} from "./style";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Input from "../../components/Input";
import Button from "../../components/Button";
import FeedbackModal from "../../components/FeedbackModal";

import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import { useForm } from "react-hook-form";
import { useState, useContext } from "react";

import { useNavigate } from "react-router-dom";

import { IUserCreateRequest, UserContext } from "../../providers/user";

interface IRegisterInputs {
    name: string;
}

const schema = yup.object({
    name: yup
        .string()
        .max(100, "Limite de 100 caracteres")
        .required("Campo obrigatório"),
    email: yup
        .string()
        .max(100, "Limite de 100 caracteres")
        .required("Campo obrigatório"),
    cpf: yup
        .string()
        .max(14, "Limite de 14 caracteres")
        .required("Campo obrigatório"),
    phone: yup
        .string()
        .max(14, "Limite de 14 caracteres")
        .required("Campo obrigatório"),
    birthdate: yup.date().required("Campo obrigatório"),
    description: yup
        .string()
        .max(300, "Limite de 300 caracteres")
        .required("Campo obrigatório"),
    cep: yup
        .string()
        .max(10, "Limite de 10 caracteres")
        .required("Campo obrigatório"),
    state: yup
        .string()
        .max(50, "Limite de 50 caracteres")
        .required("Campo obrigatório"),
    city: yup
        .string()
        .max(50, "Limite de 50 caracteres")
        .required("Campo obirgatório"),
    street: yup
        .string()
        .max(100, "Limite de 100 caracteres")
        .required("Campo obrigatório"),
    number: yup
        .string()
        .max(10, "Limite de 10 caracteres")
        .required("Campo obrigatório"),
    complement: yup
        .string()
        .max(200, "Limite de 200 caracteres")
        .required("Campo obrigatório"),
    password: yup
        .string()
        .max(30, "Limite de 30 caracteres")
        .required("Campo obrigatório"),
    passwordConfirmation: yup
        .string()
        .oneOf([yup.ref("password"), null], "Senhas precisam ser iguais"),
});

function Register() {
    const [isAdvertiser, setIsAdvertiser] = useState<boolean>(false);
    const [isSuccessModalOpen, setIsSuccessModalOpen] =
        useState<boolean>(false);
    const navigate = useNavigate();

    const { createUser } = useContext(UserContext);

    async function onSubmit(data: any): Promise<void> {
        data.isAdvertiser = isAdvertiser;
        const userData: IUserCreateRequest = data;

        const response = await createUser(userData);

        if (response) setIsSuccessModalOpen(true);
    }

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<IRegisterInputs>({
        mode: "onSubmit",
        reValidateMode: "onChange",
        shouldFocusError: false,
        shouldUnregister: false,
        resolver: yupResolver(schema),
    });

    return (
        <ResgisterPage>
            <Header />
            <RegisterForm onSubmit={handleSubmit((data) => onSubmit(data))}>
                <h1>Cadastro</h1>
                <InputsDiv>
                    <h2>Informações pessoais</h2>
                    <UserInfo>
                        <Input
                            label="Nome"
                            name="name"
                            placeholder="Ex: Samuel Leão"
                            type="text"
                            errors={errors}
                            register={register}
                        />
                        <Input
                            label="Email"
                            name="email"
                            placeholder="Ex: samuel@kenzie.com.br"
                            type="text"
                            errors={errors}
                            register={register}
                        />
                        <Input
                            label="CPF"
                            name="cpf"
                            placeholder="000.000.000-00"
                            type="text"
                            errors={errors}
                            register={register}
                        />
                        <Input
                            label="Celular"
                            name="phone"
                            placeholder="(DDD) 90000-0000"
                            type="text"
                            errors={errors}
                            register={register}
                        />
                        <Input
                            label="Data de nascimento"
                            name="birthdate"
                            placeholder="00/00/0000"
                            type="date"
                            errors={errors}
                            register={register}
                        />
                        <Input
                            label="Descrição"
                            name="description"
                            placeholder="Digitar descrição"
                            type="text"
                            errors={errors}
                            register={register}
                        />
                    </UserInfo>

                    <AddressInfo>
                        <h2>Informações de endereço</h2>
                        <Input
                            label="CEP"
                            name="cep"
                            placeholder="00000.000"
                            type="text"
                            errors={errors}
                            register={register}
                        />
                        <Input
                            label="Estado"
                            name="state"
                            placeholder="Digitar estado"
                            type="text"
                            errors={errors}
                            register={register}
                        />
                        <Input
                            label="Cidade"
                            name="city"
                            placeholder="Digitar cidade"
                            type="text"
                            errors={errors}
                            register={register}
                        />
                        <div className="sideBySideDiv">
                            <Input
                                label="Rua"
                                name="street"
                                placeholder="Digitar rua"
                                type="text"
                                errors={errors}
                                register={register}
                            />
                            <Input
                                label="Número"
                                name="number"
                                placeholder="Digitar número"
                                type="text"
                                errors={errors}
                                register={register}
                            />
                        </div>
                        <Input
                            label="Complemento"
                            name="complement"
                            placeholder="Digitar complemento"
                            type="text"
                            errors={errors}
                            register={register}
                        />
                    </AddressInfo>
                    <TypeInfo>
                        <h2>Tipo de conta</h2>
                        <div className="sideBySideDiv">
                            <Button
                                onFunction={() => setIsAdvertiser(false)}
                                size="small"
                                type="button"
                                height="fit-content"
                                width="100%"
                                backgroundcolor={
                                    !isAdvertiser
                                        ? "var(--brand-1)"
                                        : "transparent"
                                }
                                border={
                                    !isAdvertiser
                                        ? "2px solid var(--brand-1)"
                                        : "2px solid var(--grey-6)"
                                }
                                color={
                                    !isAdvertiser ? "white" : "var(--grey-0)"
                                }
                                hover={{
                                    backgroundColorHover: "var(--grey-1)",
                                    colorHover: "var(--grey-10)",
                                    border: "2px solid var(--grey-1)",
                                }}
                            >
                                Comprador
                            </Button>
                            <Button
                                onFunction={() => setIsAdvertiser(true)}
                                size="small"
                                type="button"
                                height="fit-content"
                                width="100%"
                                backgroundcolor={
                                    isAdvertiser
                                        ? "var(--brand-1)"
                                        : "transparent"
                                }
                                border={
                                    isAdvertiser
                                        ? "2px solid var(--brand-1)"
                                        : "2px solid var(--grey-6)"
                                }
                                color={isAdvertiser ? "white" : "var(--grey-0)"}
                                hover={{
                                    backgroundColorHover: "var(--grey-1)",
                                    colorHover: "var(--grey-10)",
                                    border: "2px solid var(--grey-1)",
                                }}
                            >
                                Anunciante
                            </Button>
                        </div>
                    </TypeInfo>
                    <PasswordDiv>
                        <Input
                            label="Senha"
                            name="password"
                            placeholder="Digitar senha"
                            type="password"
                            errors={errors}
                            register={register}
                        />
                        <Input
                            label="Confirmar senha"
                            name="passwordConfirmation"
                            placeholder="Digitar senha"
                            type="password"
                            errors={errors}
                            register={register}
                        />
                    </PasswordDiv>

                    <input
                        id="register-form-input"
                        type="submit"
                        value="Finalizar cadastro"
                    />
                </InputsDiv>
            </RegisterForm>
            <Footer />
            <FeedbackModal
                setState={setIsSuccessModalOpen}
                state={isSuccessModalOpen}
                title="Sucesso!"
                onClose={() => navigate("/")}
            >
                <StyledSuccessModal>
                    <h3 className="modalSuccess__h3--subtitle">
                        Sua conta foi criada com sucesso
                    </h3>

                    <p className="modalSuccess__p--description">
                        Agora você poderá ver seus negócios crescendo em grande
                        escala
                    </p>

                    <Button
                        size="small"
                        type="button"
                        height="fit-content"
                        width="150px"
                        backgroundcolor="var(--brand-1)"
                        border="2px solid var(--brand-1)"
                        color="white"
                        hover={{
                            backgroundColorHover: "var(--brand-4)",
                            colorHover: "var(--brand-1)",
                            border: "2px solid var(--brand-4)",
                        }}
                        onFunction={() => navigate("/login")}
                    >
                        Ir para login
                    </Button>
                </StyledSuccessModal>
            </FeedbackModal>
        </ResgisterPage>
    );
}

export default Register;
