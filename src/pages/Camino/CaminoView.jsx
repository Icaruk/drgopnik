
import { Button, Center, PasswordInput, Stack, TextInput, Title } from "@mantine/core";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";



export default function CaminoView() {
	const navigate = useNavigate();
	const [form, setForm] = useState({coords: ""})
	const [error, setError] = useState("");
	
	
	const handleClick = () => {
		
		if (form.coords === "39.87328, 25.05741") {
			navigate("/caminante");
		} else {
			setError("Coordenadas inválidas");
		}
		
	};
	
	return (
		
		<div
			className="main-homeview"
		>
			<Center>
				<Stack>
					<Title align="center" color="blue">Capítulo 2: el camino</Title>
					
					<TextInput
						label="Coordenadas"
						placeholder="Latitud y longitud"
						onChange={(e) => {
							setForm({...form, coords: e.target.value})
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


