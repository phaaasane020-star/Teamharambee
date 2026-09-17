import { useState } from "react";
import { useFormSubmit } from "../utils/useFormSubmit";
import { Field, inputClass } from "./ContactForm";

const initial = { name: "", email: "", programme: "", question: "", anonymous: false };

async function fakeSubmit(data) {
  await new Promise((res) => setTimeout(res, 900));
  console.info("Question ready to record (wire up a backend):", data);
}

export default function AskAsoahForm() {
  const [form, setForm] = useState(initial);
  const [errors, setErrors] = useState({});
  const { status, submit, reset, errorMessage } = useFormSubmit(fakeSubmit);

  const validate = () => {
    const e = {};
    if (!form.anonymous && !form.name.trim()) e.name = "Please enter your name, or choose anonymous.";
    if (!form.anonymous && !/^\S+@\S+\.\S+$/.test(form.email)) e.email = "Please enter a valid email address.";
    if (!form.question.trim()) e.question = "Please write your question.";
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
        <p className="font-display text-lg text-ink dark:text-paper">Question received successfully!</p>
        <p className="mt-2 text-sm text-slate dark:text-paper/70">
          Your question has been recorded.
        </p>
        <button
          type="button"
          onClick={() => { setForm(initial); reset(); }}
          className="mt-4 rounded-full bg-ink px-5 py-2 text-sm font-semibold text-paper dark:bg-gold dark:text-ink cursor-pointer"
        >
          Ask another question
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-4">
      <label className="flex items-center gap-2 text-sm">
        <input
          type="checkbox"
          checked={form.anonymous}
          onChange={(e) => setForm({ ...form, anonymous: e.target.checked })}
          className="h-4 w-4 accent-[--color-gold]"
        />
        Ask anonymously
      </label>

      {!form.anonymous && (
        <>
          <Field label="Name" error={errors.name}>
            <input className={inputClass(errors.name)} value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
          </Field>
          <Field label="Email" error={errors.email}>
            <input type="email" className={inputClass(errors.email)} value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
          </Field>
        </>
      )}

      <Field label="Programme (optional)">
        <input className={inputClass()} value={form.programme} onChange={(e) => setForm({ ...form, programme: e.target.value })} />
      </Field>

      <Field label="Your question" error={errors.question}>
        <textarea rows={4} className={inputClass(errors.question)} value={form.question} onChange={(e) => setForm({ ...form, question: e.target.value })} />
      </Field>

      {status === "error" && <p role="alert" className="text-sm text-red-600 dark:text-red-400">{errorMessage}</p>}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full rounded-full bg-gold px-6 py-3 text-sm font-semibold text-ink transition-all hover:bg-gold-deep disabled:opacity-60 sm:w-auto cursor-pointer"
      >
        {status === "submitting" ? "Submitting…" : "Submit Question"}
      </button>
    </form>
  );
}