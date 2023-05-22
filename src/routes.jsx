import React, { lazy } from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import GlobalLayout from "./layouts/GlobalLayout/GlobalLayout";

// import Guard from "./Guard";



const HomeView = lazy( () => import("@/pages/Home/HomeView"));
const ReservationView = lazy( () => import("@/pages/Reservation/ReservationView"));
const Agenda = lazy( () => import("@/pages/Agenda/Agenda"));



export default function RoutesGroup() {
	return (
		<Routes>
			
			<Route
				path="/" exact
				element={<HomeView />}
			/>
			
			<Route
				path="/reservation" exact
				element={<ReservationView />}
			/>
			
			
			<Route
				element={
					<GlobalLayout>
						<Outlet />
					</GlobalLayout>
				}
			>
				
				<Route
					path="/agenda" exact
					element={<Agenda />}
				/>
				
			</Route>
			
			
		</Routes>
	);
}