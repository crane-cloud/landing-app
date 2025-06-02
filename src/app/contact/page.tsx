"use client";
import ContactForm from "@/components/common/contact/ContactForm";
import ContactSection from "@/components/common/contact/ContactSection";
import FAQ from "@/components/common/FAQ";

export default function Contact() {
  return (
    <div>
      <ContactForm />
      <FAQ />
      <ContactSection />
    </div>
  );
}
