import React from "react";
import GithubStats from "../component/organisms/github_stats";
import RepositoryList from "../component/organisms/repository-list";
import "./styles/Projects.scss";
import blob from "../images/blob/blob.svg";

const Projects = () => {
	const githubUsername = process.env.REACT_APP_GITHUB_USERNAME || "JumesP";
	const githubToken = process.env.REACT_APP_GITHUB_TOKEN;

	console.log("GitHub Username:", githubUsername, "GitHub Token:", githubToken ? "Configured" : "Not Configured");

	return (
		<div className="projects-container">
			<h1>My Projects</h1>
			<p className="intro">
				Here you can explore my GitHub repositories and see what I've been working on.
				The data below is pulled directly from GitHub to show my latest activity.
			</p>

			{/* GitHub Stats Component */}
			{/*<section className="stats-section">*/}
			{/*	<h2>GitHub Analytics</h2>*/}
				<GithubStats username={githubUsername} token={githubToken} />
			{/*</section>*/}

			{/* Repository List Component */}
			{/*<section className="repository-section">*/}
			{/*	<h2>GitHub Repositories</h2>*/}
				<RepositoryList githubUsername={githubUsername} githubToken={githubToken} />
			{/*</section>*/}

		</div>
	);
};

export default Projects;
