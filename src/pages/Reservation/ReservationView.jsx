
import { Center, Select, Space, Stack, Text, Title } from "@mantine/core";
import { DatePicker } from "@mantine/dates";
import { useMediaQuery } from "@mantine/hooks";
import dayjs from "dayjs";
import React, { useState } from "react";
import { maxWidthMobile } from "../../constants";



export default function ReservationView() {
	
	const isMobile = useMediaQuery(`(max-width: ${maxWidthMobile}px)`);
	
	
	const [form, setForm] = useState({
		date: new Date(),
	});
	
	
	
	const getRelativeTimeString = (date) => {
		
		if (dayjs(date).isToday()) return "Hoy"
		if (dayjs(date).isTomorrow()) return "Mañana"
		
		const timeFrom = dayjs(form.date).fromNow(true)
		return `Dentro de ${timeFrom}`
		
	};
	
	
	return (
		
		<div
			className="main-ReservationView"
		>
			
			<Center>
				<Stack>
					
					<Title>Haz tu reserva</Title>
					<Space h="xs" />
					
					<Select
						label={<Text weight="600">1. Restaurante</Text>}
						placeholder="Elige uno"
						data={[
							{ value: 'bali', label: 'Voltereta Bali' },
							{ value: 'casa', label: 'Voltereta Bienvenido a casa' },
							{ value: 'manhattan', label: 'Voltereta Manhattan' },
							{ value: 'tokio', label: 'Voltereta Tokio' },
						]}
					/>
					
					<Select
						label={<Text weight="600">2. Mesa</Text>}
						placeholder="Elige uno"
						data={[
							{ value: 'terraza', label: 'Terraza' },
							{ value: 'interior', label: 'Interior' },
						]}
					/>
					
					<Stack spacing="xs">
						<DatePicker
							label={<Text weight="600">3. Fecha</Text>}
							dropdownType={isMobile ? 'modal' : 'popover'}
							defaultValue={form.date}
							onChange={ date => setForm({ ...form, date })}
							excludeDate={ _date => {
								const date = dayjs(_date);
								return date.isBefore(dayjs(), 'day');
							}}
							clearable={false}
						/>
						<Text color="dimmed" size="xs">{getRelativeTimeString(form.date)}</Text>
					</Stack>
					
					
					<DatePicker
						label={<Text weight="600">4. Hora</Text>}
						dropdownType={isMobile ? 'modal' : 'popover'}
						defaultValue={form.date}
						onChange={ date => setForm({ ...form, date })}
						excludeDate={ _date => {
							const date = dayjs(_date);
							return date.isBefore(dayjs(), 'day');
						}}
						clearable={false}
					/>
					
					
					
					
					
				</Stack>
			</Center>
			
			
		</div>
		
	);
	
};


