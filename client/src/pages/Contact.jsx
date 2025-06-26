import React, { useState } from "react";
import "../pages/styles/Contact.scss";

const Contact = () => {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		subject: "",
		message: ""
	});

	const [errors, setErrors] = useState({});
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [submitSuccess, setSubmitSuccess] = useState(false);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData({
			...formData,
			[name]: value
		});

		// Clear error when user types
		if (errors[name]) {
			setErrors({
				...errors,
				[name]: ""
			});
		}
	};

	const validateForm = () => {
		const newErrors = {};

		if (!formData.name.trim()) {
			newErrors.name = "Name is required";
		}

		if (!formData.email.trim()) {
			newErrors.email = "Email is required";
		} else if (!/\S+@\S+\.\S+/.test(formData.email)) {
			newErrors.email = "Email address is invalid";
		}

		if (!formData.subject.trim()) {
			newErrors.subject = "Subject is required";
		}

		if (!formData.message.trim()) {
			newErrors.message = "Message is required";
		}

		setErrors(newErrors);
		return Object.keys(newErrors).length === 0;
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		if (validateForm()) {
			setIsSubmitting(true);

			// Simulate form submission with timeout
			// In a real application, you would send this data to your backend
			try {
				await new Promise(resolve => setTimeout(resolve, 1500));
				setSubmitSuccess(true);
				setFormData({ name: "", email: "", subject: "", message: "" });
			} catch (error) {
				console.error("Error submitting form:", error);
				setErrors({ submit: "Failed to send message. Please try again." });
			} finally {
				setIsSubmitting(false);
			}
		}
	};

	return (
		<div className="contact-page">
			<h1>Get In Touch</h1>

			<p className="contact-intro">
				I'm always interested in hearing about new projects and opportunities.
				Whether you have a question or just want to say hi, I'll try my best to get back to you!
			</p>

			<div className="contact-methods">
				<div className="contact-method">
					<div className="icon">
						<i>✉️</i>
					</div>
					<div className="details">
						<h3>Email</h3>
						<a href="mailto:jamesg.price@icloud.com">jamesg.price@icloud.com</a>
					</div>
				</div>

				<div className="contact-method">
					<div className="icon">
						<i>🔗</i>
					</div>
					<div className="details">
						<h3>LinkedIn</h3>
						<a href="https://www.linkedin.com/in/jamesprice100/" target="_blank" rel="noopener noreferrer">
							https://www.linkedin.com/in/jamesprice100/
						</a>
					</div>
				</div>

				<div className="contact-method">
					<div className="icon">
						<i>📍</i>
					</div>
					<div className="details">
						<h3>Location</h3>
						<p>England, United Kingom</p>
					</div>
				</div>
			</div>

			{submitSuccess ? (
				<div className="success-message">
					<h3>Thank you for your message!</h3>
					<p>I'll get back to you as soon as possible.</p>
				</div>
			) : (
				<form className="contact-form" onSubmit={handleSubmit}>
					<div className="form-row">
						<div className="form-group">
							<label htmlFor="name">Your Name</label>
							<input
								type="text"
								id="name"
								name="name"
								value={formData.name}
								onChange={handleChange}
								placeholder="John Doe"
							/>
							{errors.name && <div className="error">{errors.name}</div>}
						</div>

						<div className="form-group">
							<label htmlFor="email">Your Email</label>
							<input
								type="email"
								id="email"
								name="email"
								value={formData.email}
								onChange={handleChange}
								placeholder="john@example.com"
							/>
							{errors.email && <div className="error">{errors.email}</div>}
						</div>
					</div>

					<div className="form-group">
						<label htmlFor="subject">Subject</label>
						<input
							type="text"
							id="subject"
							name="subject"
							value={formData.subject}
							onChange={handleChange}
							placeholder="What is this regarding?"
						/>
						{errors.subject && <div className="error">{errors.subject}</div>}
					</div>

					<div className="form-group">
						<label htmlFor="message">Your Message</label>
						<textarea
							id="message"
							name="message"
							value={formData.message}
							onChange={handleChange}
							placeholder="Hello, I'd like to talk about..."
						></textarea>
						{errors.message && <div className="error">{errors.message}</div>}
					</div>

					{errors.submit && <div className="error">{errors.submit}</div>}

					<button type="submit" disabled={isSubmitting}>
						{isSubmitting ? "Sending..." : "Send Message"}
						{isSubmitting && <span className="spinner"></span>}
					</button>
				</form>
			)}
		</div>
	);
};

export default Contact;