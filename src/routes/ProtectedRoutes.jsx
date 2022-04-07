import { useAuthentication } from "../context";
import React from "react";
import { Navigate } from "react-router-dom";

export const ProtectedRoutes = ({ authToPages }) => {
    const { authState: { loginStatus } } = useAuthentication();
    return (
        <>
            {loginStatus ? authToPages : <Navigate replace to="/Login" />}
        </>
    )
}
