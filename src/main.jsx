import { MantineProvider } from '@mantine/core';
import { ModalsProvider } from '@mantine/modals';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "./config";
import { mantineTheme } from './config';


ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<MantineProvider
			theme={mantineTheme}
		>
			<ModalsProvider>
				<App />
			</ModalsProvider>
		</MantineProvider>
	</React.StrictMode>
)
