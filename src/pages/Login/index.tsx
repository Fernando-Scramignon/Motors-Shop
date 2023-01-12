import Button from "../../components/Button";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Input from "../../components/Input";
import {
    StyledLogin,
    StyledSuccessModal,
    StyledForgotPasswordModal,
} from "./style";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { UserContext } from "../../providers/user";
import FeedbackModal from "../../components/FeedbackModal";

interface IFormLoginInputs {
    email: string;
    password: string;
}

interface IFormModalInputs {
    emailInfo: string;
}

const loginSchema = yup.object({
    email: yup
        .string()
        .email("Coloque um email válido")
        .required("Campo obrigatório"),
    password: yup.string().required("Campo obrigatório"),
});

const modalSchema = yup.object({
    emailInfo: yup
        .string()
        .email("Coloque um email válido")
        .required("Campo obrigatório"),
});

function Login() {
    const [success, setSuccess] = useState<boolean>(false);
    const [forgotPasswordModal, setForgotPasswordModal] =
        useState<boolean>(false);
    const [emailSent, setEmailSent] = useState<boolean>(false);
    const navigate = useNavigate();
    const { login, setIsAuthenticated, forgotPassword } =
        useContext(UserContext);

    const loginForm = useForm<IFormLoginInputs>({
        mode: "onSubmit",
        reValidateMode: "onChange",
        shouldFocusError: false,
        shouldUnregister: false,
        resolver: yupResolver(loginSchema),
    });

    const modalForm = useForm<IFormModalInputs>({
        mode: "onSubmit",
        reValidateMode: "onChange",
        shouldFocusError: false,
        shouldUnregister: false,
        resolver: yupResolver(modalSchema),
    });

    function onSubmit(data: IFormLoginInputs) {
        login(data).then((res) => {
            if (res) {
                setSuccess(true);
                setIsAuthenticated(true);
            }
        });
    }

    function sendEmail(data: IFormModalInputs) {
        forgotPassword(data.emailInfo).then((res) => {
            if (res) {
                setEmailSent(true);
            }
        });
    }

    return (
        <StyledLogin>
            <Header />
            <form onSubmit={loginForm.handleSubmit(onSubmit)}>
                <h2>Login</h2>
                <Input
                    errors={loginForm.formState.errors}
                    label="Usuário"
                    name="email"
                    placeholder="Digitar email"
                    register={loginForm.register}
                    type="text"
                />
                <Input
                    errors={loginForm.formState.errors}
                    label="Senha"
                    name="password"
                    placeholder="Digitar senha"
                    register={loginForm.register}
                    type="password"
                />

                <button
                    className="form__button--forgotPassword"
                    type="button"
                    onClick={() => setForgotPasswordModal(true)}
                >
                    Esqueci minha senha
                </button>

                <Button
                    backgroundcolor="var(--brand-1)"
                    border="2px solid var(--brand-1)"
                    color="var(--grey-10)"
                    height="48px"
                    width="100%"
                    type="submit"
                    size="big"
                    hover={{
                        backgroundColorHover: "var(--brand-2)",
                        border: "2px solid var(--brand-1)",
                        colorHover: "var(--white-fixed)",
                    }}
                >
                    Entrar
                </Button>
                <span className="form__span--divider">
                    Ainda não possui uma conta?
                </span>
                <Button
                    backgroundcolor="transparent"
                    border="2px solid var(--grey-4)"
                    color="var(--grey-0)"
                    height="48px"
                    width="100%"
                    type="button"
                    size="big"
                    hover={{
                        backgroundColorHover: "var(--grey-1)",
                        border: "2px solid var(--grey-1)",
                        colorHover: "var(--grey-10)",
                    }}
                    onFunction={() => navigate("/register")}
                >
                    Cadastrar
                </Button>
            </form>
            <Footer />
            <FeedbackModal
                setState={setSuccess}
                state={success}
                title="Sucesso!"
                onClose={() => navigate("/")}
            >
                <StyledSuccessModal>
                    <h3 className="modalSuccess__h3--subtitle">
                        Login feito com sucesso!
                    </h3>

                    <p className="modalSuccess__p--description">
                        Agora você poderá ver seus negócios crescendo em grande
                        escala
                    </p>
                </StyledSuccessModal>
            </FeedbackModal>
            <FeedbackModal
                setState={setForgotPasswordModal}
                state={forgotPasswordModal}
                title="Esqueci minha senha"
                onClose={() => emailSent && navigate("/redefinePassword")}
            >
                <StyledForgotPasswordModal
                    as="form"
                    onSubmit={modalForm.handleSubmit(sendEmail)}
                >
                    {!emailSent ? (
                        <>
                            <Input
                                errors={modalForm.formState.errors}
                                label="Informe seu email:"
                                name="emailInfo"
                                placeholder="Digitar email"
                                register={modalForm.register}
                                type="text"
                            />

                            <Button
                                id="forgotPasswordModal__button--confirm"
                                backgroundcolor="var(--brand-1)"
                                border="0"
                                color="var(--grey-10)"
                                height="48px"
                                width="100%"
                                type="submit"
                                size="big"
                                hover={{
                                    backgroundColorHover: "var(--brand-2)",
                                    border: "0",
                                    colorHover: "var(--white-fixed)",
                                }}
                            >
                                Confirmar
                            </Button>
                        </>
                    ) : (
                        <span className="forgotPasswordModal__span--feedback">
                            Foi enviado um token para o email informado, acesse
                            a página de atualização de senha
                        </span>
                    )}
                </StyledForgotPasswordModal>
            </FeedbackModal>
        </StyledLogin>
    );
}

export default Login;
