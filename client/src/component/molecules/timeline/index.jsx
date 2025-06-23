import React from "react";

import "./styles.scss";

const Timeline = ({ events }) => {

	if (!events || events.length === 0) {
		events = [
			{
				title: "No Events",
				date: "N/A",
				description: "No events to display at this time."
			},
			{
				title: "No Events",
				date: "N/A",
				description: "No events to display at this time."
			},
			{
				title: "No Events",
				date: "N/A",
				description: "No events to display at this time."
			},
			{
				title: "No Events",
				date: "N/A",
				description: "No events to display at this time."
			}
		];
	}

	return (
		<div className="timeline">
			{events.map((event, index) => (
				<div key={index} className="timeline-event">
					<div className="timeline-event-content">
						<h3 className="timeline-event-title">{event.title}</h3>
						<p className="timeline-event-date">{event.date}</p>
						<p className="timeline-event-description">{event.description}</p>
					</div>
				</div>
			))}
		</div>
	);
}

export default Timeline;