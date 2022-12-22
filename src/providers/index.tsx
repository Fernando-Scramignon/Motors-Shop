import { ReactNode } from "react";
import { ProductProvider } from "./product";

interface IProvidersProps {
    children: ReactNode;
}

function Providers({ children }: IProvidersProps) {
    return <ProductProvider>{children}</ProductProvider>;
}

export default Providers;
