import { useState } from "react";
import { contactPage } from "../data/content";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
    enquiryType: "General",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Frontend-only demo form — no backend connected
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-charcoal border border-graphite p-8 lg:p-12 text-center">
        <div className="w-14 h-14 mx-auto mb-6 border border-champagne rounded-full flex items-center justify-center">
          <span className="text-champagne text-2xl">✓</span>
        </div>
        <h3 className="font-display text-3xl text-warm-white mb-3">Thank You</h3>
        <p className="text-warm-white/60 leading-relaxed max-w-md mx-auto">
          Your enquiry has been received. This is a demo form — no message was actually sent.
          Once contact details are verified, Bayissa will respond directly.
        </p>
        <button
          onClick={() => {
            setSubmitted(false);
            setForm({ name: "", phone: "", email: "", message: "", enquiryType: "General" });
          }}
          className="btn-ghost mt-6 text-[0.7rem] mx-auto"
        >
          <span className="text-champagne">←</span>
          Send Another
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block eyebrow mb-2.5">
            Name <span className="text-champagne">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={form.name}
            onChange={handleChange}
            className="w-full bg-transparent border-b border-graphite py-3 text-warm-white placeholder:text-muted-dark focus:border-champagne focus:outline-none transition-colors duration-300"
            placeholder="Your full name"
          />
        </div>
        <div>
          <label htmlFor="phone" className="block eyebrow mb-2.5">
            Phone
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            className="w-full bg-transparent border-b border-graphite py-3 text-warm-white placeholder:text-muted-dark focus:border-champagne focus:outline-none transition-colors duration-300"
            placeholder="Your phone number"
          />
        </div>
      </div>

      <div>
        <label htmlFor="email" className="block eyebrow mb-2.5">
          Email <span className="text-champagne">*</span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          value={form.email}
          onChange={handleChange}
          className="w-full bg-transparent border-b border-graphite py-3 text-warm-white placeholder:text-muted-dark focus:border-champagne focus:outline-none transition-colors duration-300"
          placeholder="you@example.com"
        />
      </div>

      <div>
        <label htmlFor="enquiryType" className="block eyebrow mb-2.5">
          Enquiry Type
        </label>
        <select
          id="enquiryType"
          name="enquiryType"
          value={form.enquiryType}
          onChange={handleChange}
          className="w-full bg-transparent border-b border-graphite py-3 text-warm-white focus:border-champagne focus:outline-none transition-colors duration-300 appearance-none cursor-pointer"
        >
          <option value="General" className="bg-charcoal">General</option>
          <option value="Stay" className="bg-charcoal">Stay</option>
          <option value="Dining" className="bg-charcoal">Dining</option>
          <option value="Events" className="bg-charcoal">Events</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block eyebrow mb-2.5">
          Message <span className="text-champagne">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={4}
          value={form.message}
          onChange={handleChange}
          className="w-full bg-transparent border-b border-graphite py-3 text-warm-white placeholder:text-muted-dark focus:border-champagne focus:outline-none transition-colors duration-300 resize-none"
          placeholder="Tell us about your enquiry..."
        />
      </div>

      <div className="pt-2">
        <button type="submit" className="btn-primary w-full sm:w-auto">
          Send Enquiry
        </button>
      </div>

      <p className="text-xs text-muted-dark italic pt-2">
        {contactPage.formNote}
      </p>
    </form>
  );
}
