import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import './App.scss';

import Layout from "./pages/Layout";
import Main from "./pages/Main";
import About from "./pages/About";
import Projects from "./pages/Projects";
import ComingSoon from "./pages/ComingSoon";

function App() {

	return (
		<ComingSoon />
	);

	// return (
	// 	<BrowserRouter>
	// 		<Routes>
	// 			<Route path="/" element={<Layout />}>
	// 				<Route index element={<Main />} />
	// 				<>
	// 					<Route path="/Main" element={<Main />} />
	// 					<Route path="/About" element={<About />} />
	// 					<Route path="/Projects" element={<Projects />} />
	// 				</>
	// 			</Route>
	// 		</Routes>
	// 	</BrowserRouter>
	// );
}

export default App;
