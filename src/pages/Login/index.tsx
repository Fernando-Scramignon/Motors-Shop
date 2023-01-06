import Button from "../../components/Button";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Input from "../../components/Input";
import { StyledLogin, StyledSuccessModal } from "./style";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { UserContext } from "../../providers/user";
import FeedbackModal from "../../components/FeedbackModal";

interface IFormInputs {
    email: string;
    password: string;
}

const schema = yup.object({
    email: yup
        .string()
        .email("Coloque um email válido")
        .required("Campo obrigatório"),
    password: yup.string().required("Campo obrigatório"),
});

function Login() {
    const [success, setSuccess] = useState<boolean>(false);
    const navigate = useNavigate();
    const { login, setIsAuthenticated } = useContext(UserContext);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<IFormInputs>({
        mode: "onSubmit",
        reValidateMode: "onChange",
        shouldFocusError: false,
        shouldUnregister: false,
        resolver: yupResolver(schema),
    });

    function onSubmit(data: IFormInputs) {
        login(data).then((res) => {
            if (res) {
                setSuccess(true);
                setIsAuthenticated(true);
            }
        });
    }

    return (
        <StyledLogin>
            <Header />
            <form onSubmit={handleSubmit(onSubmit)}>
                <h2>Login</h2>
                <Input
                    errors={errors}
                    label="Usuário"
                    name="email"
                    placeholder="Digitar email"
                    register={register}
                    type="text"
                />
                <Input
                    errors={errors}
                    label="Senha"
                    name="password"
                    placeholder="Digitar senha"
                    register={register}
                    type="text"
                />
                <a>Esqueci minha senha</a>
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
        </StyledLogin>
    );
}

export default Login;
