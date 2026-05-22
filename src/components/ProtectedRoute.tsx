import { Navigate } from "react-router-dom";
import { isAdmin } from "../helper/auth";

type Props = {
    children: React.ReactNode;
};

export const ProtectedRoute = ({ children }: Props) => {

    if (!isAdmin()) {
        return <Navigate to="/" replace />;
    }

    return children;
};