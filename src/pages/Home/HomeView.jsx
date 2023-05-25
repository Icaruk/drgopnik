
import { Center, PasswordInput, Stack, TextInput, Title } from "@mantine/core";
import React, { useState } from "react";



export default function HomeView() {
	
	
	const [form, setForm] = useState({user: "", password: ""})
	
	
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
						onChange={(e) => setForm({...form, user: e.target.value})}
					/>
					<PasswordInput
						label="Contraseña"
						placeholder="Tu contraseña"
						onChange={(e) => setForm({...form, password: e.target.value})}
					/>
				</Stack>
			</Center>
		</div>
		
	);
	
};


