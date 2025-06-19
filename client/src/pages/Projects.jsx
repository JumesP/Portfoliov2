import React, { useState, useEffect } from "react";
import GithubStats from "../component/organisms/github_stats";
import RepoCard from "../component/molecules/repo-card";
import "./styles/Projects.scss";
import blob from "../images/blob/blob.svg";

const Projects = () => {
	const githubUsername = process.env.REACT_APP_GITHUB_USERNAME || "JumesP"; // Replace with your GitHub username
	const githubToken = process.env.REACT_APP_GITHUB_TOKEN; // DOESNT WORK

	console.log("GitHub Username:", githubUsername, "GitHub Token:", githubToken ? "Configured" : "Not Configured");
	const [repos, setRepos] = useState([]);
	const [filteredRepos, setFilteredRepos] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);
	const [activeFilter, setActiveFilter] = useState('all');
	const [languageFilters, setLanguageFilters] = useState([]);

	useEffect(() => {
		const fetchRepositories = async () => {
			if (!githubUsername) {
				setError("GitHub username not configured");
				setLoading(false);
				return;
			}

			try {
				// Prepare headers with token if available
				const headers = {};
				if (githubToken) {
					headers.Authorization = `token ${githubToken}`;
				}

				const response = await fetch(`https://api.github.com/users/${githubUsername}/repos?per_page=100&sort=pushed`, { headers });

				if (!response.ok) {
					throw new Error(`Failed to fetch repositories (${response.status})`);
				}

				const data = await response.json();

				// Filter out forks if needed
				const nonForkedRepos = data.filter(repo => !repo.fork);

				// Extract unique languages for filters
				const languages = [...new Set(nonForkedRepos.map(repo => repo.language).filter(Boolean))];

				setRepos(nonForkedRepos);
				setFilteredRepos(nonForkedRepos);
				setLanguageFilters(languages);
				setLoading(false);
			} catch (err) {
				setError(err.message);
				setLoading(false);
			}
		};

		fetchRepositories();
	}, [githubUsername, githubToken]);

	const handleFilterChange = (filter) => {
		setActiveFilter(filter);

		if (filter === 'all') {
			setFilteredRepos(repos);
		} else if (filter === 'popular') {
			// Sort by stars and get top 10
			const popular = [...repos].sort((a, b) => b.stargazers_count - a.stargazers_count).slice(0, 10);
			setFilteredRepos(popular);
		} else if (filter === 'recent') {
			// Sort by updated date
			const recent = [...repos].sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at));
			setFilteredRepos(recent);
		} else {
			// Filter by language
			const byLanguage = repos.filter(repo => repo.language === filter);
			setFilteredRepos(byLanguage);
		}
	};

	return (
		<div className="projects-container">
			<h1>My Projects</h1>
			<p className="intro">
				Here you can explore my GitHub repositories and see what I've been working on.
				The data below is pulled directly from GitHub to show my latest activity.
			</p>

			{/* Repository Cards Section */}
			<section className="repository-section">
				<h2>GitHub Repositories</h2>

				{loading ? (
					<div className="loading">Loading repositories...</div>
				) : error ? (
					<div className="error">{error}</div>
				) : (
					<>
						<div className="repo-filters">
							<button
								className={`filter-button ${activeFilter === 'all' ? 'active' : ''}`}
								onClick={() => handleFilterChange('all')}
							>
								All Repos
							</button>
							<button
								className={`filter-button ${activeFilter === 'popular' ? 'active' : ''}`}
								onClick={() => handleFilterChange('popular')}
							>
								Most Popular
							</button>
							<button
								className={`filter-button ${activeFilter === 'recent' ? 'active' : ''}`}
								onClick={() => handleFilterChange('recent')}
							>
								Recently Updated
							</button>

							{languageFilters.map(language => (
								<button
									key={language}
									className={`filter-button ${activeFilter === language ? 'active' : ''}`}
									onClick={() => handleFilterChange(language)}
								>
									{language}
								</button>
							))}
						</div>

						<div className="repo-grid">
							{filteredRepos.length > 0 ? (
								filteredRepos.map(repo => (
									<RepoCard key={repo.id} repo={repo} />
								))
							) : (
								<p>No repositories found matching the current filter.</p>
							)}
						</div>
					</>
				)}
			</section>

			{/* GitHub Stats Component */}
			<section className="stats-section">
				<h2>GitHub Analytics</h2>
				<GithubStats username={githubUsername} token={githubToken} />
			</section>
		</div>
	);
};

export default Projects;
