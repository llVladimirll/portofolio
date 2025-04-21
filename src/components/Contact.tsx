"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import type React from "react";

export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://formspree.io/f/manedveq", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formState.name,
          email: formState.email,
          message: formState.message,
        }),
      });

      if (!response.ok) throw new Error("Failed to send message");

      setIsSubmitted(true);
      setFormState({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-10 px-4 md:px-8 bg-elegant-accent">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center text-elegant-primary">
          Get In Touch
        </h2>
        {isSubmitted ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-elegant-secondary text-elegant-accent p-6 rounded-lg text-center"
          >
            <h3 className="text-2xl font-bold mb-2">Thank You!</h3>
            <p>
              Your message has been sent successfully. I&apos;ll get back to you
              soon!
            </p>
          </motion.div>
        ) : (
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium mb-2 text-elegant-primary"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formState.name}
                onChange={(e) =>
                  setFormState({ ...formState, name: e.target.value })
                }
                required
                className="w-full px-3 py-2 border border-elegant-secondary rounded-md bg-elegant-accent text-elegant-primary focus:outline-none focus:ring-2 focus:ring-elegant-secondary"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium mb-2 text-elegant-primary"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formState.email}
                onChange={(e) =>
                  setFormState({ ...formState, email: e.target.value })
                }
                required
                className="w-full px-3 py-2 border border-elegant-secondary rounded-md bg-elegant-accent text-elegant-primary focus:outline-none focus:ring-2 focus:ring-elegant-secondary"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium mb-2 text-elegant-primary"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                value={formState.message}
                onChange={(e) =>
                  setFormState({ ...formState, message: e.target.value })
                }
                required
                className="w-full px-3 py-2 border border-elegant-secondary rounded-md bg-elegant-accent text-elegant-primary focus:outline-none focus:ring-2 focus:ring-elegant-secondary"
              ></textarea>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-elegant-secondary text-elegant-accent font-bold py-3 px-4 rounded-md transition duration-300 hover:bg-elegant-primary disabled:opacity-50"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </motion.button>
          </motion.form>
        )}
      </div>
    </section>
  );
}
