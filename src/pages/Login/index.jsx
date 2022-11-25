import { useState, useEffect } from "react";
import { Input } from "../../components";
import { Button, Container, Typography } from "@mui/material";


const Login = () => {
    
    const handleSubmit = async () => {
        
    }

    return (
        <Container>
            <Input text={"Nombre"}></Input>
            <Input text={"Email"}></Input>
            <Input text={"Password"}></Input>
            <Button size="large" 
                    variant="contained"
                    onClick={handleSubmit} 
                    >
                    Iniciar Sesion
            </Button>
        </Container>
    );
};

export default Login;