import Button from "../Button";
import Input from "../Input";
import TextArea from "../TextArea";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { StyledModalCreate, StyledSuccessModal } from "./style";
import closeIcon from "../../assets/x_modal.png";
import { useContext, useEffect, useState } from "react";
import { ProductContext } from "../../providers/product";
import FeedbackModal from "../FeedbackModal";
import { FieldValues } from "react-hook-form/dist/types/fields";

export interface IProductRequest {
    title: string;
    year: number;
    km: number;
    price: number;
    description: string;
    vehicle_type: string;
    announcement_type: string;
    published: boolean;
    cover_image: string;
    images: string[];
}

interface IModalCreateAnnouncement {
    modalOpen: boolean;
    setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

function isValidUrl(url: string) {
    try {
        if (url == undefined) {
            return true;
        }
        new URL(url);
    } catch (e) {
        return false;
    }
    return true;
}

function ModalCreateAnnouncement({
    modalOpen,
    setModalOpen,
}: IModalCreateAnnouncement) {
    const [vehicle_type, setVehicle_type] = useState("Carro");
    const [announcement_type, setAnnouncement_type] = useState("Venda");
    const [isDesktop, setIsDesktop] = useState(window.innerWidth > 668);
    const [sucess, setSucess] = useState(false);
    const [urlsCounts, setUrlsCounts] = useState<number[]>([]);
    const { createProduct, generateChange } = useContext(ProductContext);

    function handleResize() {
        if (window.innerWidth >= 425) {
            return setIsDesktop(true);
        }
        return setIsDesktop(false);
    }

    useEffect(() => {
        window.addEventListener("resize", handleResize);
    });

    const formSchema = yup.object().shape({
        title: yup.string().required("Título é um campo obrigatório"),
        year: yup
            .number()
            .typeError("O campo Ano deve conter apenas números")
            .required("Ano é um campo obrigatório")
            .positive("O campo Ano deve conter apenas números positivos")
            .integer("O campo Ano deve conter apenas números inteiros"),
        km: yup
            .number()
            .typeError("O campo Quilometragem deve conter apenas números")
            .required("Quilometragem é um campo obrigatório")
            .positive(
                "O campo Quilometragem deve conter apenas números positivos"
            ),
        price: yup
            .number()
            .typeError("O campo Preço deve conter apenas números")
            .required("Preço é um campo obrigatório")
            .positive("O campo Preço deve conter apenas números positivos")
            .integer("O campo Preço deve conter apenas números inteiros"),
        description: yup.string().required("Descrição é um campo obrigatório"),
        cover_image: yup
            .string()
            .required("Imagem da Capa é um campo obrigatório")
            .test("is-url-valid", "A URL não é válida", (value) =>
                isValidUrl(value as string)
            ),
        images: yup
            .string()
            .required("1º Imagem da galeria é um campo obrigatório")
            .test("is-url-valid", "A URL não é válida", (value) =>
                isValidUrl(value as string)
            ),
        images0: yup
            .string()
            .test("is-url-valid", "A URL não é válida", (value) =>
                isValidUrl(value as string)
            )
            .notRequired(),
        images1: yup
            .string()
            .test("is-url-valid", "A URL não é válida", (value) =>
                isValidUrl(value as string)
            )
            .notRequired(),
        images2: yup
            .string()
            .test("is-url-valid", "A URL não é válida", (value) =>
                isValidUrl(value as string)
            )
            .notRequired(),
        images3: yup
            .string()
            .test("is-url-valid", "A URL não é válida", (value) =>
                isValidUrl(value as string)
            )
            .notRequired(),
        images4: yup
            .string()
            .test("is-url-valid", "A URL não é válida", (value) =>
                isValidUrl(value as string)
            )
            .notRequired(),
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

    async function registerProduct(data: FieldValues) {
        data.images = [
            data.images,
            data.images0,
            data.images1,
            data.images2,
            data.images3,
            data.images4,
        ].filter((img: string | undefined) => {
            return img != undefined;
        });

        const RequestData = {
            title: data.title,
            year: data.year,
            km: data.km,
            price: data.price * 100,
            description: data.description,
            vehicle_type: vehicle_type,
            announcement_type: announcement_type,
            published: false,
            cover_image: data.cover_image,
            images: data.images,
        };

        setModalOpen(false);

        await createProduct(RequestData).then((res) => {
            if (res) {
                setSucess(true);
                setUrlsCounts([]);
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
                        Seu anúncio foi criado com sucesso!
                    </h3>

                    <p className="modalSuccess__p--description">
                        Agora você poderá ver seus negócios crescendo em grande
                        escala
                    </p>
                </StyledSuccessModal>
            </FeedbackModal>
            <FeedbackModal
                state={modalOpen}
                setState={setModalOpen}
                onClose={() => {
                    setUrlsCounts([]);
                    reset();
                }}
                title="Criar anuncio"
                closeIconMarginRight="0px"
                bodyPaddingRight="30px"
            >
                <StyledModalCreate>
                    <h4>Tipo de Anuncio</h4>
                    <div className="containerButtons">
                        <Button
                            backgroundcolor={
                                announcement_type === "Venda"
                                    ? "var(--brand-1)"
                                    : "var(--white-fixed)"
                            }
                            width="100%"
                            height="48px"
                            type="button"
                            border={
                                announcement_type === "Venda"
                                    ? "none"
                                    : "1.5px solid var(--grey-4)"
                            }
                            color={
                                announcement_type === "Venda"
                                    ? "var(--white-fixed)"
                                    : "var(--grey-0)"
                            }
                            hover={{
                                backgroundColorHover:
                                    announcement_type === "Venda"
                                        ? "var(--brand-2)"
                                        : "var(--grey-1)",
                                colorHover:
                                    announcement_type === "Venda"
                                        ? "var(--white-fixed)"
                                        : "var(--grey-10)",
                                border: "none",
                            }}
                            size="big"
                            onFunction={() => {
                                setAnnouncement_type("Venda");
                            }}
                        >
                            Venda
                        </Button>
                        <Button
                            backgroundcolor={
                                announcement_type === "Leilão"
                                    ? "var(--brand-1)"
                                    : "var(--white-fixed)"
                            }
                            width="100%"
                            height="48px"
                            type="button"
                            border={
                                announcement_type === "Leilão"
                                    ? "none"
                                    : "1.5px solid var(--grey-4)"
                            }
                            color={
                                announcement_type === "Leilão"
                                    ? "var(--white-fixed)"
                                    : "var(--grey-0)"
                            }
                            hover={{
                                backgroundColorHover:
                                    announcement_type === "Leilão"
                                        ? "var(--brand-2)"
                                        : "var(--grey-1)",
                                colorHover:
                                    announcement_type === "Leilão"
                                        ? "var(--white-fixed)"
                                        : "var(--grey-10)",
                                border: "none",
                            }}
                            size="big"
                            onFunction={() => {
                                setAnnouncement_type("Leilão");
                            }}
                        >
                            Leilão
                        </Button>
                    </div>
                    <h4>Informação do veículo</h4>
                    <form id="Forms" onSubmit={handleSubmit(registerProduct)}>
                        <Input
                            label="Título"
                            name="title"
                            placeholder="Digitar título"
                            type="text"
                            register={register}
                            errors={errors}
                        />
                        <div className="createProductModal__div--numbersContainer">
                            <Input
                                label="Ano"
                                name="year"
                                placeholder="Digitar ano"
                                type="number"
                                register={register}
                                errors={errors}
                                width={isDesktop ? "100%" : "48%"}
                            />
                            <Input
                                label="Quilometragem"
                                name="km"
                                placeholder="0"
                                type="number"
                                register={register}
                                errors={errors}
                                width={isDesktop ? "100%" : "48%"}
                            />
                            <Input
                                label="Preço"
                                name="price"
                                placeholder="Digitar preço"
                                type="text"
                                register={register}
                                errors={errors}
                            />
                        </div>

                        <TextArea
                            label="Descrição"
                            width=""
                            height="50px"
                            placeholder="Digitar descrição"
                            name="description"
                            register={register}
                            errors={errors}
                        />
                        <h4 className="veicleType" id="veichleTypeId">
                            Tipo de veículo
                        </h4>
                        <div className="containerButtons" id="CarOrMotorbike">
                            <Button
                                backgroundcolor={
                                    vehicle_type === "Carro"
                                        ? "var(--brand-1)"
                                        : "var(--white-fixed)"
                                }
                                width="100%"
                                height="48px"
                                type="button"
                                border={
                                    vehicle_type === "Carro"
                                        ? "none"
                                        : "1.5px solid var(--grey-4)"
                                }
                                color={
                                    vehicle_type === "Carro"
                                        ? "var(--white-fixed)"
                                        : "var(--grey-0)"
                                }
                                hover={{
                                    backgroundColorHover:
                                        vehicle_type === "Carro"
                                            ? "var(--brand-2)"
                                            : "var(--grey-1)",
                                    colorHover:
                                        vehicle_type === "Carro"
                                            ? "var(--white-fixed)"
                                            : "var(--grey-10)",
                                    border: "none",
                                }}
                                size="big"
                                onFunction={() => {
                                    setVehicle_type("Carro");
                                }}
                            >
                                Carro
                            </Button>
                            <Button
                                backgroundcolor={
                                    vehicle_type === "Moto"
                                        ? "var(--brand-1)"
                                        : "var(--white-fixed)"
                                }
                                width="100%"
                                height="48px"
                                type="button"
                                border={
                                    vehicle_type === "Moto"
                                        ? "none"
                                        : "1.5px solid var(--grey-4)"
                                }
                                color={
                                    vehicle_type === "Moto"
                                        ? "var(--white-fixed)"
                                        : "var(--grey-0)"
                                }
                                hover={{
                                    backgroundColorHover:
                                        vehicle_type === "Moto"
                                            ? "var(--brand-2)"
                                            : "var(--grey-1)",
                                    colorHover:
                                        vehicle_type === "Moto"
                                            ? "var(--white-fixed)"
                                            : "var(--grey-10)",
                                    border: "none",
                                }}
                                size="big"
                                onFunction={() => {
                                    setVehicle_type("Moto");
                                }}
                            >
                                Moto
                            </Button>
                        </div>

                        <Input
                            label="Imagem da Capa"
                            name="cover_image"
                            placeholder="Inserir URL da imagem"
                            type="text"
                            register={register}
                            errors={errors}
                        />

                        <Input
                            label="1º Imagem da galeria"
                            name="images"
                            placeholder="Inserir URL da imagem"
                            type="text"
                            register={register}
                            errors={errors}
                        />

                        {urlsCounts.map((element, index) => {
                            return (
                                <>
                                    {index ==
                                    urlsCounts[urlsCounts.length - 1] ? (
                                        <button
                                            type="button"
                                            key={index + 1}
                                            className="buttonDeleteInput"
                                            onClick={(e) => {
                                                setUrlsCounts(
                                                    urlsCounts.filter(
                                                        (elementFilter) =>
                                                            elementFilter !==
                                                            index
                                                    )
                                                );
                                            }}
                                        >
                                            {" "}
                                            <img
                                                className="DeleteInput"
                                                src={closeIcon}
                                            />{" "}
                                        </button>
                                    ) : (
                                        false
                                    )}

                                    <Input
                                        key={index}
                                        label={`${
                                            index + 2
                                        }º Imagem da galeria`}
                                        name={`images${index}`}
                                        placeholder="Inserir URL da imagem"
                                        type="text"
                                        register={register}
                                        errors={errors}
                                    />
                                </>
                            );
                        })}

                        {urlsCounts.length < 5 ? (
                            <Button
                                backgroundcolor="var(--brand-4)"
                                width={isDesktop ? "" : "100%"}
                                height="48px"
                                type="button"
                                border="none"
                                color="var(--brand-1)"
                                hover={{
                                    backgroundColorHover: "",
                                    colorHover: "",
                                    border: "",
                                }}
                                id={"AddFieldImg"}
                                size="small"
                                onFunction={() => {
                                    urlsCounts.length === 0
                                        ? setUrlsCounts([
                                              ...urlsCounts,
                                              urlsCounts.length,
                                          ])
                                        : setUrlsCounts([
                                              ...urlsCounts,
                                              urlsCounts.length,
                                          ]);
                                }}
                            >
                                Adicionar Campo para imagem da galeria
                            </Button>
                        ) : (
                            <button className="disableButtonImage" disabled>
                                Adicionar Campo para imagem da galeria
                            </button>
                        )}
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
                                    setUrlsCounts([]);
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
                                    Criar anúncio
                                </button>
                            )}
                        </div>
                    </form>
                </StyledModalCreate>
            </FeedbackModal>
        </>
    );
}

export default ModalCreateAnnouncement;
