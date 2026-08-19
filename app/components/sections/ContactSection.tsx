"use client";

import { Mail, Phone, Send } from "lucide-react";
import { FormEvent, useState } from "react";
import { profile } from "../../data/portfolio";
import { GitHubIcon, LinkedInIcon } from "../icons/SocialIcons";
import { SectionHeading } from "../ui/SectionHeading";

export function ContactSection() {
  const [sent, setSent] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const subject = encodeURIComponent(`Portfolio inquiry from ${formData.get("name")}`);
    const body = encodeURIComponent(`${formData.get("message")}\n\nFrom: ${formData.get("email")}`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setSent(true);
    form.reset();
  }

  return (
    <section id="contact">
      <div className="wrap">
        <SectionHeading
          tag="// Get In Touch"
          title="Contact"
          copy="Have a project in mind or an opportunity to discuss? Send a message and I usually reply within a day."
        />
        <div className="contact-grid">
          <form className="reveal" onSubmit={handleSubmit}>
            <div className="form-row">
              <label htmlFor="cName">Name</label>
              <input id="cName" name="name" type="text" placeholder="Your name" required />
            </div>
            <div className="form-row">
              <label htmlFor="cEmail">Email</label>
              <input id="cEmail" name="email" type="email" placeholder="you@example.com" required />
            </div>
            <div className="form-row">
              <label htmlFor="cMsg">Message</label>
              <textarea id="cMsg" name="message" placeholder="Tell me about your project..." required />
            </div>
            <button type="submit" className="btn btn-primary">
              <Send size={17} />
              Send Message
            </button>
            {sent ? <p className="form-note">Your email client should open with the message ready.</p> : null}
          </form>

          <div className="contact-info reveal reveal-delay-1">
            <h3>Contact Details</h3>
            <a className="contact-row" href={`mailto:${profile.email}`}>
              <div className="ic"><Mail size={16} /></div>
              <div className="v"><strong>Email</strong>{profile.email}</div>
            </a>
            <a className="contact-row" href={profile.phoneHref}>
              <div className="ic"><Phone size={16} /></div>
              <div className="v"><strong>Phone</strong>{profile.phone}</div>
            </a>
            <div className="contact-row">
              <div className="ic"><LinkedInIcon /></div>
              <div className="v"><strong>LinkedIn</strong>LinkedIn profile</div>
            </div>
            <div className="contact-row">
              <div className="ic"><GitHubIcon /></div>
              <div className="v"><strong>GitHub</strong>GitHub profile</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
