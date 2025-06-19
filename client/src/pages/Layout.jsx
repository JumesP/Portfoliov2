import { Outlet, Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import "./styles/Layout.scss";

const Layout = () => {
	return (
		<>
			<nav>
				<ul>
					<li>
						<Link to="/about">About</Link>
					</li>
					<li>
						<Link to="/projects">Projects</Link>
					</li>
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link to="/technologies">Technologies</Link>
					</li>
					<li>
						<Link to="/contact">Contact</Link>
					</li>
				</ul>
			</nav>
			<Outlet />
		</>
	);
};

export default Layout;
