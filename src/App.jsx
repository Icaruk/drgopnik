import { Center, ColorSchemeProvider, Loader } from "@mantine/core";
import { lazy, Suspense, useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import RoutesGroup from "./routes";




function App() {
	
	const [colorScheme, setColorScheme] = useState('light');
	
	
	const [ready, setReady] = useState(false);
	const toggleColorScheme = (value) => setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));
	
	
	useEffect( () => {
		(async() => {
			
			/* if (mbxGlobal?.user?.token) {
				
				dame.baseUrl = process.env.REACT_APP_API_URL;
				dame.headers.Authorization = `Bearer ${mbxGlobal.user.token}`;
				
				await mbxGlobal.init();
			}; */
			
			setReady(true);
			
		})();
	}, []);	
	
	
	
	if (!ready) {
		return (
			<Center style={{
				height: "100vh",
			}}>
				<Loader
					variant="dots"
					size="xl"
				/>
			</Center>
		)
	}
	
	
	
	return (
		<div
			style={{ // css reset
				margin: 0,
				padding: 0,
			}}
		>
			<BrowserRouter>
				<Suspense
					fallback={
						<div
							style={{ width: "100vw", height: "100vh", fontSize: "3em" }}
							className="fdc jcc aic"
						>
							<span>Cargando...</span>
						</div>
					}
				>
					<ColorSchemeProvider
						colorScheme={colorScheme}
						toggleColorScheme={toggleColorScheme}
					>
						<RoutesGroup />
					</ColorSchemeProvider>
				</Suspense>
			</BrowserRouter>
		</div>
	)
}

export default App
