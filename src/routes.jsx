import { lazy } from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import GlobalLayout from "./layouts/GlobalLayout/GlobalLayout";


const HomeView = lazy( () => import("@/pages/Home/HomeView"));
const CaminoView = lazy( () => import("@/pages/Camino/CaminoView"));
const CaminanteView = lazy( () => import("@/pages/Caminante/CaminanteView"));
const CrisolView = lazy( () => import("@/pages/Crisol/CrisolView"));


export default function RoutesGroup() {
	return (
		<Routes>
			
			<Route
				path="/" exact
				element={<HomeView />}
			/>
			
			<Route
				path="/camino" exact
				element={<CaminoView />}
			/>
			<Route
				path="/caminante" exact
				element={<CaminanteView />}
			/>
			<Route
				path="/crisol" exact
				element={<CrisolView />}
			/>
			
			
			<Route
				element={
					<GlobalLayout>
						<Outlet />
					</GlobalLayout>
				}
			>
				
				{/* <Route
					path="/agenda" exact
					element={<Agenda />}
				/> */}
				
			</Route>
			
			
		</Routes>
	);
}