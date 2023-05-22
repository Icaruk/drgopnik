import React from 'react';
import { GitPullRequest, AlertCircle, Messages, Database, Calendar, BuildingStore, Book, Users } from 'tabler-icons-react';
import { ThemeIcon, UnstyledButton, Group, Text } from '@mantine/core';



function MainLink({ icon, color, label }) {
	return (
		<UnstyledButton
			sx={(theme) => ({
				display: 'block',
				width: '100%',
				padding: theme.spacing.xs,
				borderRadius: theme.radius.sm,
				color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,

				'&:hover': {
					backgroundColor:
						theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
				},
			})}
		>
			<Group>
				<ThemeIcon color={color} variant="light">
					{icon}
				</ThemeIcon>

				<Text size="sm">{label}</Text>
			</Group>
		</UnstyledButton>
	);
}

const data = [
	{ icon: <Calendar size={16} />, color: 'blue', label: 'Agenda' },
	{ icon: <BuildingStore size={16} />, color: 'orange', label: 'Negocios' },
	{ icon: <Book size={16} />, color: 'green', label: 'Reservas' },
	{ icon: <Users size={16} />, color: 'violet', label: 'Clientes' },
];

export default function MainLinks() {
	const links = data.map((link) => <MainLink {...link} key={link.label} />);
	return <div>{links}</div>;
}