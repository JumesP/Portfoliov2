import React from "react";
import Timeline from "../component/molecules/timeline";

import "./styles/About.scss";
import AboutMe from "../component/molecules/aboutme";
import DuelTimeline from "../component/molecules/duel_timeline";

// `
// important to include on this page:
// - [] image of me
// - [] short description of myself
// - [] timeline of my coding journey
// - [] education background
// - [] hobbies
// - [] fun facts
//
// could also include:
// - [] Personal statement - what drives me and my goals
// - [] Future goals
// - [] Testimonials or quotes from mentors or peers
// - [] Day in the life of a student developer
//
// `

// const timelineEvents = [ // newest to oldest
// 	{
// 		title: "Third Year University Student",
// 		date: "September 2024 - May 2025",
// 		description: "Learning "
// 	},
// 	{
// 		title: "Internship at Uniqodo",
// 		date: "June 2024 - December 2024",
// 		description: "Learning real-world software development practices and contributing to projects. With a focus on WCAG compliance and accessibility, React components, version control and production environments."
// 	},
// 	{
// 		title: "Second Year of University",
// 		date: "N/A",
// 		description: "No events to display at this time."
// 	},
// 	{
// 		title: "First Year of University",
// 		date: "N/A",
// 		description: "No events to display at this time."
// 	}
// ];

const educationalTimelineEvents = [ // newest to oldest
	{
		title: "Third Year University Student",
		date: "September 2024 - May 2025",
		description: "Learning "
	},
	{
		title: "Second Year of University",
		date: "N/A",
		description: "No events to display at this time."
	},
	{
		title: "First Year of University",
		date: "N/A",
		description: "No events to display at this time."
	}
];

const professionalTimelineEvents = [ // newest to oldestå
	{
		title: "Internship at Uniqodo",
		date: "June 2024 - December 2024",
		description: "Learning real-world software development practices and contributing to projects. With a focus on WCAG compliance and accessibility, React components, version control and production environments."
	}
];


const About = () => {
	return (
		<div className="about-container">
			<h1>About Page</h1>
			<p className="intro">
				Here you can explore my GitHub repositories and see what I've been working on.
				The data below is pulled directly from GitHub to show my latest activity.
			</p>
			<AboutMe />
			<DuelTimeline className="projects-container" leftEvents={educationalTimelineEvents} rightEvents={professionalTimelineEvents} />
		</div>
	);
};

export default About;
