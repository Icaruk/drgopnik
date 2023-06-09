
import { Button, Center, PasswordInput, Stack, TextInput, Title } from "@mantine/core";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";



export default function HomeView() {
	
	const navigate = useNavigate();
	const [form, setForm] = useState({user: "", password: ""})
	const [error, setError] = useState("");
	
	
	const handleClick = () => {
		
		if (form.user === "rosamara" && form.password === "montonesdecamiones") {
			navigate("/camino");
		} else {
			setError("Usuario o contraseña incorrectos");
		}
		
	};
	
	return (
		
		<div
			className="main-homeview"
		>
			<Center>
				<Stack>
					<Title align="center" color="blue">Acceso</Title>
					
					<TextInput
						label="Usuario"
						placeholder="Tu usuario"
						onChange={(e) => {
							setForm({...form, user: e.target.value})
							setError("")
						}}
					/>
					<PasswordInput
						label="Contraseña"
						placeholder="Tu contraseña"
						onChange={(e) => {
							setForm({...form, password: e.target.value})
							setError("")
						}}
						error={error}
					/>
					<Button
						onClick={handleClick}
					>
						Acceder
					</Button>
				</Stack>
			</Center>
		</div>
		
	);
	
};


