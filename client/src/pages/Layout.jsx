import { Outlet, Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import "./styles/Layout.scss";

const Layout = () => {
	return (
		<>
			<nav>
				<ul>
					<li>
						<Link to="/projects">Projects</Link>
					</li>
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link to="/about">About</Link>
					</li>
				</ul>
			</nav>
			<Outlet />
		</>
	);
};

export default Layout;
