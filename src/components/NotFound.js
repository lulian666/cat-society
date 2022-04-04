import { useNavigate } from "react-router";
import React from "react";

export default function NotFound(){
    const navigate = useNavigate();
    React.useEffect(
        () => {
            setTimeout(() => {
                navigate("/posts");
            }, 1000)
        }
        ,[navigate])
    return (
        <h1>Not Found</h1>
    )
}
