import ClientOnly from "../components/ClientOnly";
import Container from "../components/Container";
import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";

export default function Contact() {
  return (
    <Container>
      <div className="flex flex-col md:flex-row bg-white rounded-lg p-2">
        <ClientOnly>
          <ContactInfo />
          <ContactForm />
        </ClientOnly>
      </div>
    </Container>
  );
}
