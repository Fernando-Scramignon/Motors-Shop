import { ReactNode } from "react";
import { CommentProvider } from "./comment";
import { ProductProvider } from "./product";
import { UserProvider } from "./user";

interface IProvidersProps {
    children: ReactNode;
}

function Providers({ children }: IProvidersProps) {
    return (
        <UserProvider>
            <CommentProvider>
                <ProductProvider>{children}</ProductProvider>
            </CommentProvider>
        </UserProvider>
    );
}

export default Providers;
