import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import './global.scss';
import blob from "./images/blob/blob.svg";

import Layout from "./pages/Layout";
import Main from "./pages/Main";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Technologies from "./pages/Technologies";
import Contact from "./pages/Contact";
import ComingSoon from "./pages/ComingSoon";
import LinkBox from "./component/molecules/link-box";

function App() {

	// return (
	// 	<ComingSoon />
	// );

	return (
		<BrowserRouter>
			{/* Global blob background */}
			<div className="global-blob-background">
				<div className="global-blob">
					<img src={blob} alt="Decorative blob" />
				</div>
				<div className="global-blob">
					<img src={blob} alt="Decorative blob" />
				</div>
			</div>

			<LinkBox />
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<Main />} />
					<>
						<Route path="/Main" element={<Main />} />
						<Route path="/About" element={<About />} />
						<Route path="/Projects" element={<Projects />} />
						<Route path="/Technologies" element={<Technologies />} />
						<Route path="/Contact" element={<Contact />} />
					</>
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
