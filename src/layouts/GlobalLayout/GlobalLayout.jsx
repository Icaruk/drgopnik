
import { AppShell, Box, Navbar, ScrollArea } from "@mantine/core";
import React from "react";
import Brand from "./partials/Brand";
import MainLinks from "./partials/MainLinks";
import User from "./partials/User";



export default function GlobalLayout({
	children,
}) {
	
	
	return (
		<AppShell
			navbar={
				<Navbar
					p="xs"
					width={{
						sm: 250,
						lg: 350,
						base: 75,
					}}
				>
				
				<Navbar.Section mt="xs">
					<Brand />
				</Navbar.Section>
				
				<Navbar.Section grow component={ScrollArea} mx="-xs" px="xs">
					<Box py="md">
						<MainLinks />
					</Box>
				</Navbar.Section>
				
				<Navbar.Section>
					<User />
				</Navbar.Section>
				
				</Navbar>
			}
		>
			{children}
		</AppShell>

	);

};


