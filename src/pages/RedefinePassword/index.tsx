import Button from "../../components/Button";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Input from "../../components/Input";
import { StyledRedefinePassword, StyledSuccessModal } from "./style";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { UserContext } from "../../providers/user";
import FeedbackModal from "../../components/FeedbackModal";

interface IFormRedefinePasswordInputs {
    token: string;
    password: string;
    confirmPassword: string;
}

const redefinePasswordSchema = yup.object({
    token: yup.string().required("Campo obrigatório"),
    password: yup.string().required("Campo obrigatório"),
    confirmPassword: yup
        .string()
        .oneOf([yup.ref("password")], "As senha devem ser iguais")
        .required("Campo obrigatório"),
});

function RedefinePassword() {
    const [success, setSuccess] = useState<boolean>(false);
    const navigate = useNavigate();
    const { recoverPassword } = useContext(UserContext);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<IFormRedefinePasswordInputs>({
        mode: "onSubmit",
        reValidateMode: "onChange",
        shouldFocusError: false,
        shouldUnregister: false,
        resolver: yupResolver(redefinePasswordSchema),
    });

    function onSubmit({ token, password }: IFormRedefinePasswordInputs) {
        recoverPassword(token, password).then((res) => {
            if (res) {
                setSuccess(true);
            }
        });
    }

    return (
        <StyledRedefinePassword>
            <Header />
            <form onSubmit={handleSubmit(onSubmit)}>
                <h2>Redefinir senha</h2>
                <Input
                    errors={errors}
                    label="Token"
                    name="token"
                    placeholder="Insira o token"
                    register={register}
                    type="text"
                />
                <Input
                    errors={errors}
                    label="Senha"
                    name="password"
                    placeholder="Insira a nova senha"
                    register={register}
                    type="text"
                />
                <Input
                    errors={errors}
                    label="Confirmação de senha"
                    name="confirmPassword"
                    placeholder="Insira novamente a nova senha"
                    register={register}
                    type="text"
                />
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
                    Redefinir senha
                </Button>
            </form>
            <Footer />
            <FeedbackModal
                setState={setSuccess}
                state={success}
                title="Sucesso!"
                onClose={() => navigate("/login")}
            >
                <StyledSuccessModal>
                    <h3 className="modalSuccess__h3--subtitle">
                        Senha redefinida com sucesso!
                    </h3>

                    <p className="modalSuccess__p--description">
                        Agora você poderá ter acesso a sua conta novamente
                    </p>
                </StyledSuccessModal>
            </FeedbackModal>
        </StyledRedefinePassword>
    );
}

export default RedefinePassword;
