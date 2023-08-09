import Container from "../components/Container";
import ContactInfo from "./ContactInfo";

export default function Contact() {
  return (
    <Container>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-white rounded-lg p-2">
        <ContactInfo />
        <div className="">something</div>
      </div>
    </Container>
  );
}
