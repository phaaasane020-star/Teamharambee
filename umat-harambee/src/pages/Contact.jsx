import React, { useState } from 'react';

export default function ContactForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        // Simulate local submission delay without hitting a backend server
        await new Promise((res) => setTimeout(res, 800));

        setLoading(false);
        setSubmitted(true);
    };

    if (submitted) {
        return (
            <div className="text-center py-8">
                <h3 className="text-xl font-bold text-[#FFD700] mb-2">Message sent successfully!</h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-6">
                    Thank you for reaching out. We have received your message.
                </p>
                <button
                    type="button"
                    onClick={() => {
                        setSubmitted(false);
                        setName('');
                        setEmail('');
                        setMessage('');
                    }}
                    className="px-5 py-2.5 rounded-full bg-[#FFD700] text-black font-semibold hover:opacity-90 transition-opacity cursor-pointer"
                >
                    Send another message
                </button>
            </div>
        );
    }

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-6">
                <div>
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-paper mb-3">Get in Touch</h2>
                    <p className="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed">
                        Reach out with questions, ideas or feedback — through the form, or directly on WhatsApp.
                    </p>
                </div>
                <div className="flex flex-wrap gap-3">
                    <a
                        href="https://chat.whatsapp.com/D4GYf4xkmPNFEduWtd6Mi8?s=sw&p=i&mlu=4"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-full border border-gray-300 dark:border-gold/40 px-5 py-2.5 text-sm font-semibold text-gray-800 dark:text-paper transition-colors hover:border-[#FFD700] hover:text-[#FFD700] cursor-pointer"
                    >
                        💬 Chat on WhatsApp
                    </a>
                    <a
                        href="https://www.tiktok.com/@harambee02"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-full border border-gray-300 dark:border-gold/40 px-5 py-2.5 text-sm font-semibold text-gray-800 dark:text-paper transition-colors hover:border-[#FFD700] hover:text-[#FFD700] cursor-pointer"
                    >
                        🎵 Follow on TikTok
                    </a>
                </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 bg-white dark:bg-neutral-900/50 p-6 rounded-2xl border border-gray-200 dark:border-neutral-800 shadow-sm dark:shadow-none">
                <div>
                    <label className="block text-sm font-medium mb-1 text-gray-700 dark:text-paper">Your Name</label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        className="w-full px-4 py-2 rounded-lg bg-neutral-100 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 text-gray-900 dark:text-paper focus:outline-none focus:border-[#FFD700]"
                        placeholder="Enter your name"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium mb-1 text-gray-700 dark:text-paper">Email Address</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="w-full px-4 py-2 rounded-lg bg-neutral-100 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 text-gray-900 dark:text-paper focus:outline-none focus:border-[#FFD700]"
                        placeholder="name@example.com"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium mb-1 text-gray-700 dark:text-paper">Message</label>
                    <textarea
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                        rows={4}
                        className="w-full px-4 py-2 rounded-lg bg-neutral-100 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 text-gray-900 dark:text-paper focus:outline-none focus:border-[#FFD700]"
                        placeholder="How can Team Harambee help you?"
                    />
                </div>
                <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-3 rounded-lg bg-[#FFD700] text-black font-bold hover:opacity-90 transition-opacity cursor-pointer disabled:opacity-60"
                >
                    {loading ? 'Sending...' : 'Send Message'}
                </button>
            </form>
        </div>
    );
}
