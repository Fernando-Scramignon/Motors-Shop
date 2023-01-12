import { useEffect, useRef, useState } from "react";
import { StyledProductCardList } from "./style";
import { motion } from "framer-motion";
import ProductCardAuction from "../ProductCardAuction";

function ProductCardAuctionList() {
    const carousel: any = useRef();
    const [width, setWidth] = useState(0);
    const [productCardAuctionList, setProductCardAuctionList] = useState([
        1, 2, 3, 4, 5, 6,
    ]);
    useEffect(() => {
        setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth);
    }, [carousel.current]);

    return (
        <StyledProductCardList id="auction">
            <h5>Leilão</h5>
            <motion.ul
                ref={carousel}
                className="carousel"
                whileTap={{ cursor: "grabbing" }}
            >
                <motion.div
                    className="inner"
                    drag="x"
                    dragConstraints={{ right: 0, left: -width }}
                    whileDrag={{ pointerEvents: "none" }}
                >
                    {productCardAuctionList?.map((product) => (
                        <motion.li key={product}>
                            <ProductCardAuction />
                        </motion.li>
                    ))}
                </motion.div>
            </motion.ul>
        </StyledProductCardList>
    );
}

export default ProductCardAuctionList;
