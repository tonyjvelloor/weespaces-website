import type { Metadata } from "next";
import { faqs } from "@/data/faqs";

export const metadata: Metadata = {
  title: "Coworking Space FAQs | WeeSpaces Kerala & Coimbatore",
  description: "Find answers to all your questions about our premium coworking spaces, private cabins, virtual offices, billing, and amenities.",
  keywords: ["Coworking FAQ Kerala", "Virtual office queries Coimbatore", "Private cabin booking rules", "WeeSpaces support", "Shared office amenities"],
};

export default function FAQLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Generate FAQ Schema for SEO server-side
  const flatFaqs = faqs.flatMap(category => category.questions);
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": flatFaqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      {children}
    </>
  );
}
