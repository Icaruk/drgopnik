import { MantineProvider } from '@mantine/core';
import { ModalsProvider } from '@mantine/modals';
import { NotificationsProvider } from '@mantine/notifications';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { mantineTheme } from './config';
import "./config"


ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<MantineProvider
			theme={mantineTheme}
		>
			<NotificationsProvider>
				<ModalsProvider>
					<App />
				</ModalsProvider>
			</NotificationsProvider>
		</MantineProvider>
	</React.StrictMode>
)
