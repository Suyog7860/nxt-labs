"use client";

import { ArrowUpRight } from "lucide-react";
import { useState, type FormEvent } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState("");
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.reportValidity()) return;
    const values = new FormData(form);
    const subject = `Project inquiry from ${values.get("name")}`;
    const body = [`Name: ${values.get("name")}`, `Email: ${values.get("email")}`, `Phone: ${values.get("phone") || "Not provided"}`, `Company / Business: ${values.get("company") || "Not provided"}`, `Service Required: ${values.get("service")}`, "", "Project details:", `${values.get("message")}`].join("\n");
    window.location.href = `mailto:nxtlabs.trio@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setStatus("Your email app should open with these details. The inquiry is not sent until you send it from that app.");
  }
  return <form className="contact-form" onSubmit={handleSubmit}>
    <div className="form-field"><label htmlFor="name">Name <span aria-hidden="true">*</span></label><input id="name" name="name" autoComplete="name" placeholder="Your name" required maxLength={100} /></div>
    <div className="form-field"><label htmlFor="email">Email <span aria-hidden="true">*</span></label><input id="email" name="email" type="email" autoComplete="email" placeholder="you@company.com" required maxLength={254} /></div>
    <div className="form-field"><label htmlFor="phone">Phone</label><input id="phone" name="phone" type="tel" autoComplete="tel" placeholder="Optional" maxLength={32} /></div>
    <div className="form-field"><label htmlFor="company">Company / Business</label><input id="company" name="company" autoComplete="organization" placeholder="Optional" maxLength={120} /></div>
    <div className="form-field form-field-full"><label htmlFor="service">Service required <span aria-hidden="true">*</span></label><select id="service" name="service" defaultValue="" required><option value="" disabled>Select a service</option><option>Website development</option><option>Web application</option><option>Custom software solutions</option><option>UI/UX development</option><option>Not sure yet</option></select></div>
    <div className="form-field form-field-full"><label htmlFor="message">Tell us about your project <span aria-hidden="true">*</span></label><textarea id="message" name="message" placeholder="What would you like to build?" required minLength={10} maxLength={3000} /></div>
    <button className="form-submit" type="submit">Send project inquiry <ArrowUpRight aria-hidden="true" /></button>
    <p className="form-note">This form opens your email app with a prepared message. Nothing is submitted to a server or sent until you send it from that app.</p>
    <p className="form-status" role="status" aria-live="polite">{status}</p>
  </form>;
}