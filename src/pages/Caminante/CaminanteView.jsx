
import { Button, Center, Group, PinInput, Stack, TextInput, Title } from "@mantine/core";
import { useState } from "react";
import { useNavigate } from "react-router-dom";



export default function CaminanteView() {
	const navigate = useNavigate();
	const [form, setForm] = useState({p1: "", p2: ""})
	const [error, setError] = useState(false);
	
	
	const handleClick = () => {
		
		if (form.p1 === "V3J9" && form.p2 === "J5") {
			navigate("/crisol");
		} else {
			setError(true);
		}
		
	};
	
	return (
		
		<div
			className="main-homeview"
		>
			<Center>
				<Stack>
					<Title align="center" color="blue">Capítulo 3: el caminante</Title>
					
					<Group>
						<PinInput
							length={4}
							onChange={(val) => {
								setForm({...form, p1: val})
							}}
							error={error}
						/>
						<span style={{fontWeight: "bold"}}>+</span>
						<PinInput
							length={2}
							onChange={(val) => {
								setForm({...form, p2: val})
							}}
							error={error}
						/>
						<span>Mirina, Grecia</span>
					</Group>
					
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


