import { Metadata } from 'next';
import ContactClient from './ContactClient';

export const metadata: Metadata = {
  title: "Contact Us | WeeSpaces",
  description: "Get in touch with WeeSpaces for premium coworking and managed offices.",
  alternates: {
    canonical: 'https://www.weespaces.in/contact/'
  }
};

export default function ContactPage() {
  return <ContactClient />;
}
