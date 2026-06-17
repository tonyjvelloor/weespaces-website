import { Metadata } from 'next';
import ScrollReveal from '@/components/ui/ScrollReveal';

export const metadata: Metadata = {
  title: 'Terms & Conditions | WeeSpaces',
  description: 'Terms and conditions for using WeeSpaces premium coworking and managed offices.',
};

export default function TermsPage() {
  return (
    <div className="pt-32 pb-32 min-h-screen">
      <div className="container mx-auto px-6 max-w-4xl">
        <ScrollReveal direction="up" className="mb-12">
          <div className="inline-flex items-center gap-2 bg-navy-light/80 border border-accent/30 text-accent text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-full mb-6">
            <span className="material-symbols-outlined text-[16px]">gavel</span>
            Legal
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Terms & Conditions</h1>
          <p className="text-white/70 text-lg">Last Updated: October 2026</p>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={0.1} className="glass p-8 md:p-12 rounded-3xl border border-white/10 text-white/80 space-y-8 leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">1. Agreement to Terms</h2>
            <p>These Terms and Conditions constitute a legally binding agreement made between you, whether personally or on behalf of an entity ("you") and WeeSpaces ("we," "us" or "our"), concerning your access to and use of our coworking spaces, virtual offices, and the https://weespaces.co.in website.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">2. Membership Rules</h2>
            <p className="mb-4">As a member of WeeSpaces, you agree to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Maintain a professional environment and respect other members.</li>
              <li>Not use the space for any illegal or unauthorized purpose.</li>
              <li>Keep the workspace clean and tidy.</li>
              <li>Not share your access keys or credentials with unauthorized individuals.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">3. Payments & Cancellations</h2>
            <p>All payments for memberships, day passes, and meeting room bookings are due upfront unless an enterprise agreement specifies otherwise. Cancellations must be made within the stipulated timeframe as outlined in your specific membership contract to be eligible for a refund.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">4. Limitation of Liability</h2>
            <p>WeeSpaces shall not be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the services.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">5. Contact Us</h2>
            <p>In order to resolve a complaint regarding the Services or to receive further information regarding use of the Services, please contact us at <a href="mailto:corporate@weespaces.co.in" className="text-accent hover:underline">corporate@weespaces.co.in</a>.</p>
          </section>
        </ScrollReveal>
      </div>
    </div>
  );
}
