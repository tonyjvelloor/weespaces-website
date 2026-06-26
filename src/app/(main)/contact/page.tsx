import { Metadata } from 'next';
import ContactClient from './ContactClient';

import { constructMetadata } from '@/utils/metadata';

export const metadata: Metadata = constructMetadata({
  title: "Contact Us | WeeSpaces",
  description: "Get in touch with WeeSpaces for premium coworking and managed offices.",
  canonicalPath: "/contact"
});

export default function ContactPage() {
  return <ContactClient />;
}
