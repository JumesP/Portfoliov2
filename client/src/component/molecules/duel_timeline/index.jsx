import React from "react";

import "./styles.scss";

const DuelTimeline = ({ leftEvents, rightEvents }) => {

	return (
		<div className="duelTimeline">
			<div className="leftTimeline">
				<h2>Educational</h2>
				{leftEvents.map((event, index) => (
					<div key={index} className="timeline-event">
						<div className="timeline-event-content">
							<h3 className="timeline-event-title">{event.title}</h3>
							<p className="timeline-event-date">{event.date}</p>
							<p className="timeline-event-description">{event.description}</p>
						</div>
					</div>
				))}
			</div>
			<div className="duelTimeline__divider"></div>
			<div className="rightTimeline">
				<h2>Professional</h2>
				{rightEvents.map((event, index) => (
					<div key={index} className="timeline-event">
						<div className="timeline-event-content">
							<h3 className="timeline-event-title">{event.title}</h3>
							<p className="timeline-event-date">{event.date}</p>
							<p className="timeline-event-description">{event.description}</p>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}

export default DuelTimeline;