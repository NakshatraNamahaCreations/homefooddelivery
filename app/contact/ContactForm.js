"use client";

import { useState } from "react";

const TOPICS = ["Order help", "Product question", "Bulk / gifting", "Partnership", "Something else"];
const SUPPORT_EMAIL = "hello@homeplate.in";

// There's no backend yet, so submitting opens the visitor's email app with the
// message pre-filled and addressed to the support inbox.
export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", topic: TOPICS[0], message: "" });
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    const v = name === "phone" ? value.replace(/\D/g, "").slice(0, 10) : value;
    setForm((f) => ({ ...f, [name]: v }));
    setErrors((er) => ({ ...er, [name]: undefined }));
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
    const e = {};
    if (!form.name.trim()) e.name = "Required";
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email)) e.email = "Enter a valid email";
    if (form.phone && form.phone.length !== 10) e.phone = "10 digits or leave empty";
    if (form.message.trim().length < 10) e.message = "Tell us a little more (10+ characters)";
    setErrors(e);
    if (Object.keys(e).length) return;

    const body = [
      form.message.trim(),
      "",
      `— ${form.name.trim()}`,
      form.email,
      form.phone ? `+91 ${form.phone}` : null,
    ].filter((l) => l !== null).join("\n");

    window.location.href =
      `mailto:${SUPPORT_EMAIL}?subject=${encodeURIComponent(`[${form.topic}] Message from ${form.name.trim()}`)}` +
      `&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  if (sent) {
    return (
      <div className="ct-sent">
        <div className="co-success-tick">✓</div>
        <h3>Almost there!</h3>
        <p>
          Your email app should have opened with your message ready — just hit send.
          If nothing opened, email us directly at <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>.
        </p>
        <button type="button" className="pg-btn-ghost" onClick={() => setSent(false)}>Edit message</button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      <div className="co-row">
        <div className="co-field">
          <label>Your name *</label>
          <input name="name" value={form.name} onChange={handleChange} autoComplete="name"
            className={`co-input ${errors.name ? "is-error" : ""}`} />
          {errors.name && <small className="co-err">{errors.name}</small>}
        </div>
        <div className="co-field">
          <label>Email *</label>
          <input name="email" type="email" value={form.email} onChange={handleChange} autoComplete="email"
            className={`co-input ${errors.email ? "is-error" : ""}`} />
          {errors.email && <small className="co-err">{errors.email}</small>}
        </div>
      </div>

      <div className="co-row">
        <div className="co-field">
          <label>Phone</label>
          <input name="phone" value={form.phone} onChange={handleChange} inputMode="numeric" placeholder="Optional"
            autoComplete="tel" className={`co-input ${errors.phone ? "is-error" : ""}`} />
          {errors.phone && <small className="co-err">{errors.phone}</small>}
        </div>
        <div className="co-field">
          <label>Topic</label>
          <select name="topic" value={form.topic} onChange={handleChange} className="co-input">
            {TOPICS.map((t) => <option key={t}>{t}</option>)}
          </select>
        </div>
      </div>

      <div className="co-field">
        <label>Message *</label>
        <textarea name="message" rows={5} value={form.message} onChange={handleChange}
          placeholder="How can we help?"
          className={`co-input ${errors.message ? "is-error" : ""}`} />
        {errors.message && <small className="co-err">{errors.message}</small>}
      </div>

      <button type="submit" className="co-submit">SEND MESSAGE</button>
    </form>
  );
}
