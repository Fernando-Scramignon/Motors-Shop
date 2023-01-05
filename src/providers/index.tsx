import { ReactNode } from "react";
import { ProductProvider } from "./product";
import { UserProvider } from "./user";

interface IProvidersProps {
    children: ReactNode;
}

function Providers({ children }: IProvidersProps) {
    return (
        <UserProvider>
            <ProductProvider>{children}</ProductProvider>;
        </UserProvider>
    );
}

export default Providers;
