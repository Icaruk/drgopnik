
import { Button, Center, Group, PinInput, Stack, Text, Title } from "@mantine/core";
import { useNavigate } from "react-router-dom";



export default function CrisolView() {
	const navigate = useNavigate();
	
	const handleClick = () => {
		
		if (form.p1 === "V3J9" && form.p2 === "J5") {
			navigate("/caminante");
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
					<Title align="center" color="blue">Capítulo 4: el crisol de cristal</Title>
					
					<Stack align="center">
						<Text>U2FsdGVkX195aShF/8cxBPG/FW7zqmPGcqa7CTeLAS34y6Zlpv92BwwCmPFAKAM3qzTIGTl2lTfP4j7CJnJXavh9vTVYlmOU8Z+mxXvhMGdXxkaIA0zDBQAwN9ic7qUd4yecMzfFo+ksy3CqneEHtQ==</Text>
						<Text>U2FsdGVkX1+S8FT1WWJboh5hgRwZtOt2s3CFW7xk+po=</Text>
						<Text>U2FsdGVkX1/b+l9subHNH/PQlNYtC5Oc4smxI3JJ4vWUEdPXvBlKm324KqLiinqY</Text>
					</Stack>
					
				</Stack>
			</Center>
		</div>
		
	);
	
};


