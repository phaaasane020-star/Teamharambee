import { useState } from "react";
import { useFormSubmit } from "../utils/useFormSubmit";

const initial = { name: "", email: "", subject: "", message: "" };

async function fakeSubmit(data) {
  await new Promise((res) => setTimeout(res, 900));
  console.info("Contact form submitted:", data);
}

export default function ContactForm() {
  const [form, setForm] = useState(initial);
  const [errors, setErrors] = useState({});
  const { status, errorMessage, submit, reset } = useFormSubmit(fakeSubmit);

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Please enter your name.";
    if (!/^\S+@\S+\.\S+$/.test(form.email)) e.email = "Please enter a valid email address.";
    if (!form.subject.trim()) e.subject = "Please add a subject.";
    if (!form.message.trim()) e.message = "Please write a message.";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
    if (!validate()) return;
    submit(form);
  };

  if (status === "success") {
    return (
      <div role="status" className="rounded-2xl border border-gold/40 bg-gold-soft/40 p-6 text-center dark:bg-ink-soft">
        <p className="font-display text-lg text-ink dark:text-paper">Message sent successfully!</p>
        <p className="mt-2 text-sm text-slate dark:text-paper/70">
          Thank you for reaching out. Your message has been recorded.
        </p>
        <button
          type="button"
          onClick={() => {
            setForm(initial);
            reset();
          }}
          className="mt-4 rounded-full bg-ink px-5 py-2 text-sm font-semibold text-paper dark:bg-gold dark:text-ink cursor-pointer"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-4">
      <Field label="Name" error={errors.name}>
        <input
          className={inputClass(errors.name)}
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          aria-invalid={!!errors.name}
        />
      </Field>
      <Field label="Email" error={errors.email}>
        <input
          type="email"
          className={inputClass(errors.email)}
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          aria-invalid={!!errors.email}
        />
      </Field>
      <Field label="Subject" error={errors.subject}>
        <input
          className={inputClass(errors.subject)}
          value={form.subject}
          onChange={(e) => setForm({ ...form, subject: e.target.value })}
          aria-invalid={!!errors.subject}
        />
      </Field>
      <Field label="Message" error={errors.message}>
        <textarea
          rows={5}
          className={inputClass(errors.message)}
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          aria-invalid={!!errors.message}
        />
      </Field>

      {status === "error" && (
        <p role="alert" className="text-sm text-red-600 dark:text-red-400">
          {errorMessage}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full rounded-full bg-gold px-6 py-3 text-sm font-semibold text-ink transition-all hover:bg-gold-deep disabled:opacity-60 sm:w-auto cursor-pointer"
      >
        {status === "submitting" ? "Sending…" : "Send Message"}
      </button>
    </form>
  );
}

function inputClass(error) {
  return `w-full rounded-lg border bg-white px-4 py-2.5 text-sm text-ink outline-none transition-colors focus:border-gold dark:bg-ink-soft dark:text-paper ${
    error ? "border-red-400" : "border-mist dark:border-ink-soft"
  }`;
}

function Field({ label, error, children }) {
  return (
    <label className="block text-sm">
      <span className="mb-1 block font-medium text-ink dark:text-paper">{label}</span>
      {children}
      {error && <span className="mt-1 block text-xs text-red-600 dark:text-red-400">{error}</span>}
    </label>
  );
}

export { Field, inputClass };