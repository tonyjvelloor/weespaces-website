import { Metadata } from 'next';
import ScrollReveal from '@/components/ui/ScrollReveal';

import { constructMetadata } from '@/utils/metadata';

export const metadata: Metadata = constructMetadata({
  title: "Privacy Policy | WeeSpaces",
  description: "Privacy policy and data handling guidelines for WeeSpaces.",
  canonicalPath: "/privacy-policy"
});

export default function PrivacyPolicyPage() {
  return (
    <div className="pt-32 pb-32 min-h-screen">
      <div className="container mx-auto px-6 max-w-4xl">
        <ScrollReveal direction="up" className="mb-12">
          <div className="inline-flex items-center gap-2 bg-navy-light/80 border border-accent/30 text-accent text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-full mb-6">
            <span className="material-symbols-outlined text-[16px]">shield</span>
            Legal
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Privacy Policy</h1>
          <p className="text-white/70 text-lg">Last Updated: October 2026</p>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={0.1} className="glass p-8 md:p-12 rounded-3xl border border-white/10 text-white/80 space-y-8 leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">1. Introduction</h2>
            <p>Welcome to WeeSpaces. We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website (regardless of where you visit it from) and tell you about your privacy rights and how the law protects you.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">2. Data We Collect</h2>
            <p className="mb-4">We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Identity Data</strong> includes first name, last name, username or similar identifier.</li>
              <li><strong>Contact Data</strong> includes billing address, email address and telephone numbers.</li>
              <li><strong>Technical Data</strong> includes internet protocol (IP) address, browser type and version, time zone setting and location.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">3. How We Use Your Data</h2>
            <p>We will only use your personal data when the law allows us to. Most commonly, we will use your personal data to process your workspace booking, to manage our relationship with you, and to improve our website, products/services, marketing or customer relationships.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">4. Contact Us</h2>
            <p>If you have any questions about this privacy policy or our privacy practices, please contact us at <a href="mailto:corporate@weespaces.in" className="text-accent hover:underline">corporate@weespaces.in</a>.</p>
          </section>
        </ScrollReveal>
      </div>
    </div>
  );
}
