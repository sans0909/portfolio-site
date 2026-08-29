import { SectionHeading } from "../components/common/SectionHeading";
import { RevealOnScroll } from "../components/common/RevealOnScroll";
import { ContactForm } from "../components/contact/ContactForm";

export function Contact() {
  return (
    <section className="section container">
      <RevealOnScroll>
        <SectionHeading
          eyebrow="// CONTACT"
          title="Contact"
          description="お仕事のご相談・お問い合わせはこちらから。"
        />
        <ContactForm />
      </RevealOnScroll>
    </section>
  );
}
