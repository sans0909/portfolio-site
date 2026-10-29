import { SectionHeading } from "../components/common/SectionHeading";
import { RevealOnScroll } from "../components/common/RevealOnScroll";
import { ContactForm } from "../components/contact/ContactForm";
import { useDocumentTitle } from "../hooks/useDocumentTitle";

export function Contact() {
  useDocumentTitle("Contact");

  return (
    <section className="section container">
      <RevealOnScroll>
        <SectionHeading
          eyebrow="// CONTACT"
          title="Contact"
          description="ご連絡・お問い合わせはこちらから。"
          level={1}
        />
        <ContactForm />
      </RevealOnScroll>
    </section>
  );
}
