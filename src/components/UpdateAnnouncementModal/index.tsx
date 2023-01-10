import Button from "../Button";
import Input from "../Input";
import TextArea from "../TextArea";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {
    StyledConfirmDeleteModal,
    StyledModalUpdate,
    StyledSuccessModal,
} from "./style";
import closeIcon from "../../assets/x_modal.png";
import { useContext, useEffect, useState } from "react";
import { ProductContext, IFullProduct } from "../../providers/product";
import FeedbackModal from "../FeedbackModal";
import { FieldValues } from "react-hook-form/dist/types/fields";

interface IUpdateAnnouncementModalProps {
    modalOpen: boolean;
    setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
    product_id: string;
}

function isValidUrl(url: string) {
    try {
        if (url == undefined || url == "") {
            return true;
        }
        new URL(url);
    } catch (e) {
        return false;
    }
    return true;
}

function UpdateAnnouncementModal({
    modalOpen,
    setModalOpen,
    product_id,
}: IUpdateAnnouncementModalProps) {
    const [vehicle_type, setVehicle_type] = useState("Carro");
    const [announcement_type, setAnnouncement_type] = useState("Venda");
    const [published, setPublished] = useState<boolean>(false);
    const [isDesktop, setIsDesktop] = useState(window.innerWidth > 668);
    const [successUpdate, setSuccessUpdate] = useState(false);
    const [successDelete, setSuccessDelete] = useState(false);
    const [confirmDelete, setConfirmDelete] = useState(false);
    const [urlsCounts, setUrlsCounts] = useState<number[]>([]);
    const { updateProduct, deleteProduct, getProductById, generateChange } =
        useContext(ProductContext);
    const [product, setProduct] = useState<IFullProduct>({} as IFullProduct);

    function handleResize() {
        if (window.innerWidth >= 426) {
            return setIsDesktop(true);
        }
        return setIsDesktop(false);
    }

    useEffect(() => {
        window.addEventListener("resize", handleResize);
    });

    useEffect(() => {
        modalOpen &&
            getProductById(product_id).then((res) => {
                if (res) {
                    setProduct(res);
                    setAnnouncement_type(res.announcement_type);
                    setVehicle_type(res.vehicle_type);
                    setPublished(res.published);
                }
            });
    }, [modalOpen]);

    const formSchema = yup.object().shape({
        title: yup.string().notRequired(),
        year: yup
            .number()
            .typeError("O campo Ano deve conter apenas números")
            .positive("O campo Ano deve conter apenas números positivos")
            .integer("O campo Ano deve conter apenas números inteiros")
            .nullable()
            .transform((_, val) => (val !== "" ? Number(val) : null)),
        km: yup
            .number()
            .typeError("O campo Quilometragem deve conter apenas números")
            .nullable()
            .positive(
                "O campo Quilometragem deve conter apenas números positivos"
            )
            .transform((_, val) => (val !== "" ? Number(val) : null)),
        price: yup
            .number()
            .typeError("O campo Preço deve conter apenas números")
            .positive("O campo Preço deve conter apenas números positivos")
            .integer("O campo Preço deve conter apenas números inteiros")
            .nullable()
            .transform((_, val) => (val !== "" ? Number(val) : null)),
        description: yup.string().notRequired(),
        cover_image: yup
            .string()
            .test("is-url-valid", "A URL não é válida", (value) =>
                isValidUrl(value as string)
            )
            .notRequired(),
        images: yup
            .string()
            .test("is-url-valid", "A URL não é válida", (value) =>
                isValidUrl(value as string)
            )
            .notRequired(),
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
        reset,
        watch,
    } = useForm({
        resolver: yupResolver(formSchema),
    });

    function buttonIsAble() {
        return (
            Object.keys(errors).length == 0 &&
            JSON.stringify(watch()) !== "{}" &&
            (Object.values(watch()).some((value) => value !== "") ||
                product.announcement_type !== announcement_type ||
                product.published !== published ||
                product.vehicle_type !== vehicle_type)
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
            return img != undefined && img !== "";
        });

        const fieldValues = {
            title: data.title,
            year: data.year,
            km: data.km,
            price: data.price * 100,
            description: data.description,
            vehicle_type: vehicle_type,
            announcement_type: announcement_type,
            published: published,
            cover_image: data.cover_image,
            images: data.images,
        };

        const requestData = Object.entries(fieldValues).reduce(
            (acc, value) =>
                value[1] !== "" && value[1] !== null && value[1].length !== 0
                    ? { ...acc, [value[0]]: value[1] }
                    : acc,
            {}
        );

        setModalOpen(false);

        await updateProduct(product_id, requestData).then((res) => {
            if (res) {
                setSuccessUpdate(true);
                setUrlsCounts([]);
                reset();
                generateChange();
            }
        });
    }

    function deleteAd() {
        setConfirmDelete(false);

        deleteProduct(product_id).then((res) => {
            if (res) {
                setSuccessDelete(true);
            }
        });
    }

    return (
        <>
            <FeedbackModal
                state={confirmDelete}
                setState={setConfirmDelete}
                title="Excluir anúncio"
            >
                <StyledConfirmDeleteModal>
                    <h3 className="modalConfirmDelete__h3--subtitle">
                        Tem certeza que deseja remover este anúncio?
                    </h3>

                    <p className="modalConfirmDelete__p--description">
                        Essa ação não pode ser desfeita. Isso excluirá
                        permanentemente seu anúncio e removerá esses dados de
                        nossos servidores.
                    </p>

                    <div className="modalConfirmDelete__div--container">
                        <Button
                            backgroundcolor="var(--grey-6)"
                            width="26.7%"
                            height="48px"
                            type="button"
                            border="none"
                            color="var(--grey-2)"
                            hover={{
                                backgroundColorHover: "var(--grey-5)",
                                colorHover: "var(--grey-2)",
                                border: "none",
                            }}
                            size={isDesktop ? "big" : "small"}
                            onFunction={() => {
                                setConfirmDelete(false);
                            }}
                        >
                            Cancelar
                        </Button>
                        <Button
                            backgroundcolor="var(--alert-3)"
                            width="44.8%"
                            height="48px"
                            type="button"
                            border="none"
                            color="var(--alert-1)"
                            hover={{
                                backgroundColorHover: "var(--alert-2)",
                                colorHover: "var(--alert-1)",
                                border: "none",
                            }}
                            size={isDesktop ? "big" : "small"}
                            onFunction={() => deleteAd()}
                        >
                            Sim, excluir anúncio
                        </Button>
                    </div>
                </StyledConfirmDeleteModal>
            </FeedbackModal>
            <FeedbackModal
                state={successDelete}
                setState={setSuccessDelete}
                title="Sucesso!"
                onClose={() => generateChange()}
            >
                <StyledSuccessModal>
                    <h3 className="modalSuccess__h3--subtitle">
                        Seu anúncio foi excluído com sucesso!
                    </h3>

                    <p className="modalSuccess__p--description">
                        Agora você poderá fazer novos anúncios e ver seus
                        negócios crescendo em grande escala
                    </p>
                </StyledSuccessModal>
            </FeedbackModal>
            <FeedbackModal
                state={successUpdate}
                setState={setSuccessUpdate}
                title="Sucesso!"
            >
                <StyledSuccessModal>
                    <h3 className="modalSuccess__h3--subtitle">
                        Seu anúncio foi atualizado com sucesso!
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
                title="Editar anúncio"
                closeIconMarginRight="0px"
                bodyPaddingRight="30px"
            >
                <StyledModalUpdate>
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
                            placeholder={product.title ? product.title : "..."}
                            type="text"
                            register={register}
                            errors={errors}
                        />
                        <div className="updateProductModal__div--numbersContainer">
                            <Input
                                label="Ano"
                                name="year"
                                placeholder={
                                    product.year
                                        ? product.year.toString()
                                        : "..."
                                }
                                type="text"
                                register={register}
                                errors={errors}
                                width={isDesktop ? "100%" : "48%"}
                            />
                            <Input
                                label="Quilometragem"
                                name="km"
                                placeholder={
                                    product.km ? product.km.toString() : "..."
                                }
                                type="text"
                                register={register}
                                errors={errors}
                                width={isDesktop ? "100%" : "48%"}
                            />
                            <Input
                                label="Preço"
                                name="price"
                                placeholder={
                                    product.price
                                        ? (product.price / 100).toLocaleString(
                                              "pt-br",
                                              {
                                                  style: "currency",
                                                  currency: "BRL",
                                              }
                                          )
                                        : "..."
                                }
                                type="text"
                                register={register}
                                errors={errors}
                            />
                        </div>

                        <TextArea
                            label="Descrição"
                            width=""
                            height="50px"
                            placeholder={
                                product.description
                                    ? product.description
                                    : "..."
                            }
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
                        <h4 className="published">Publicado</h4>
                        <div className="containerButtons">
                            <Button
                                backgroundcolor={
                                    published
                                        ? "var(--brand-1)"
                                        : "var(--white-fixed)"
                                }
                                width="100%"
                                height="48px"
                                type="button"
                                border={
                                    published
                                        ? "none"
                                        : "1.5px solid var(--grey-4)"
                                }
                                color={
                                    published
                                        ? "var(--white-fixed)"
                                        : "var(--grey-0)"
                                }
                                hover={{
                                    backgroundColorHover: published
                                        ? "var(--brand-2)"
                                        : "var(--grey-1)",
                                    colorHover: published
                                        ? "var(--white-fixed)"
                                        : "var(--grey-10)",
                                    border: "none",
                                }}
                                size="big"
                                onFunction={() => {
                                    setPublished(true);
                                }}
                            >
                                Sim
                            </Button>
                            <Button
                                backgroundcolor={
                                    !published
                                        ? "var(--brand-1)"
                                        : "var(--white-fixed)"
                                }
                                width="100%"
                                height="48px"
                                type="button"
                                border={
                                    !published
                                        ? "none"
                                        : "1.5px solid var(--grey-4)"
                                }
                                color={
                                    !published
                                        ? "var(--white-fixed)"
                                        : "var(--grey-0)"
                                }
                                hover={{
                                    backgroundColorHover: !published
                                        ? "var(--brand-2)"
                                        : "var(--grey-1)",
                                    colorHover: !published
                                        ? "var(--white-fixed)"
                                        : "var(--grey-10)",
                                    border: "none",
                                }}
                                size="big"
                                onFunction={() => {
                                    setPublished(false);
                                }}
                            >
                                Não
                            </Button>
                        </div>

                        <Input
                            label="Imagem da Capa"
                            name="cover_image"
                            placeholder={
                                product.cover_image
                                    ? product.cover_image
                                    : "..."
                            }
                            type="text"
                            register={register}
                            errors={errors}
                        />

                        <Input
                            label="1º Imagem da galeria"
                            name="images"
                            placeholder={
                                product.images
                                    ? product.images[0].url
                                    : "Inserir URL da imagem"
                            }
                            type="text"
                            register={register}
                            errors={errors}
                        />

                        {urlsCounts.map((_, index) => {
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
                                        placeholder={
                                            product.images &&
                                            product.images[index + 1]
                                                ? product.images[index + 1].url
                                                : "Inserir URL da imagem"
                                        }
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
                                width={isDesktop ? "56%" : "50%"}
                                height="48px"
                                type="button"
                                border="none"
                                color="var(--grey-2)"
                                hover={{
                                    backgroundColorHover: "var(--grey-5)",
                                    colorHover: "var(--grey-2)",
                                    border: "none",
                                }}
                                size={isDesktop ? "big" : "small"}
                                onFunction={() => {
                                    setModalOpen(false);
                                    setConfirmDelete(true);
                                    setUrlsCounts([]);
                                    reset();
                                }}
                            >
                                Excluir anúncio
                            </Button>
                            {buttonIsAble() ? (
                                <Button
                                    backgroundcolor="var(--brand-1)"
                                    width={isDesktop ? "41%" : "50%"}
                                    height="48px"
                                    type="submit"
                                    border="none"
                                    color="var(--white-fixed)"
                                    hover={{
                                        backgroundColorHover: "var(--brand-2)",
                                        colorHover: "var(--white-fixed)",
                                        border: "none",
                                    }}
                                    size={isDesktop ? "big" : "small"}
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
                </StyledModalUpdate>
            </FeedbackModal>
        </>
    );
}

export default UpdateAnnouncementModal;
