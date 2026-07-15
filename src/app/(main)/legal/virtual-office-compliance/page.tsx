import { Metadata } from 'next';
import { constructMetadata } from '@/utils/metadata';
import ScrollReveal from '@/components/ui/ScrollReveal';
import Link from 'next/link';

export const metadata: Metadata = constructMetadata({
  title: 'Virtual Office Compliance Policy | WeeSpaces',
  description: 'Learn about WeeSpaces\' role as a commercial workspace provider and the compliance documentation we provide for your independent regulatory registrations.',
  canonicalPath: '/legal/virtual-office-compliance',
});

export default function VirtualOfficeCompliancePage() {
  return (
    <div className="bg-white min-h-screen pt-32 pb-24">
      <div className="max-w-4xl mx-auto px-6">
        <ScrollReveal>
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-black text-navy mb-6">Virtual Office Compliance Policy</h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              This policy outlines WeeSpaces&apos; role as a commercial real estate and workspace provider, detailing the services we provide and the responsibilities of our customers regarding government registrations.
            </p>
          </div>

          <div className="prose prose-lg max-w-none text-gray-600 prose-headings:text-navy prose-a:text-accent hover:prose-a:text-accent-light">
            <h2>1. Our Role as a Commercial Workspace Provider</h2>
            <p>
              WeeSpaces is a provider of premium physical and virtual workspaces. <strong>We are not a government entity, nor are we an authorized agent for government services.</strong> We do not provide, process, or file applications for GST compliance, Ministry of Corporate Affairs (MCA) incorporation, or any other government or regulatory approvals.
            </p>

            <h2>2. What WeeSpaces Provides</h2>
            <p>
              When you subscribe to a Virtual Office plan with WeeSpaces, we provide commercial real estate services and supporting documentation that you may use for your business needs. This includes:
            </p>
            <ul>
              <li>A premium commercial business address in Kerala or Tamil Nadu.</li>
              <li>A legally binding commercial Rental Agreement for the virtual workspace.</li>
              <li>A No Objection Certificate (NOC) from the property owner permitting the use of the address (where applicable and included in the plan).</li>
              <li>Copies of the latest utility bills for the premises.</li>
              <li>Mail and package handling services (subject to plan inclusions).</li>
              <li>Physical workspace access and meeting room credits (subject to plan inclusions).</li>
            </ul>

            <h2>3. Customer Responsibilities</h2>
            <p>
              Customers remain solely responsible for understanding and complying with all local, state, and federal laws and regulations pertaining to their business. Specifically:
            </p>
            <ul>
              <li><strong>Independent Filing:</strong> Customers must independently file their own applications for GST, company incorporation, or other regulatory requirements using their own tax consultants or chartered accountants.</li>
              <li><strong>Accuracy of Information:</strong> Customers are responsible for the accuracy of the information they submit to any government authority.</li>
              <li><strong>Acceptance by Authorities:</strong> While WeeSpaces provides standard commercial documentation (Rental Agreement, NOC, Utility Bills), the acceptance of these documents for the purpose of obtaining a GST number or incorporating a company is entirely at the discretion of the relevant assessing authority (e.g., GST officer or Registrar of Companies). WeeSpaces does not guarantee the approval of any government application.</li>
            </ul>

            <h2>4. Regulatory Considerations and Physical Verification</h2>
            <p>
              Under certain regulations (such as the CGST Act), government officials may conduct physical verifications of registered business addresses. WeeSpaces supports these compliance requirements by:
            </p>
            <ul>
              <li>Maintaining physical office premises during standard business hours.</li>
              <li>Assisting visiting officers by verifying that your business is a registered virtual office tenant.</li>
              <li>Presenting your company name board (if opted for in your plan).</li>
              <li>Maintaining necessary visitor and attendance registers as per local laws.</li>
            </ul>
            <p>
              However, the customer must ensure they meet all other statutory requirements for maintaining a Principal Place of Business (PPOB) or Additional Place of Business (APOB).
            </p>

            <h2>5. Disclaimer of Liability</h2>
            <p>
              WeeSpaces shall not be held liable for the rejection, delay, or cancellation of any government registration, license, or permit applied for by the customer. Our obligations are strictly limited to providing the commercial workspace and related documentation as outlined in the Virtual Office agreement.
            </p>

            <h2>6. Contact Us</h2>
            <p>
              If you have any questions regarding the documentation we provide or our Virtual Office services, please contact our support team at <a href="mailto:hello@weespaces.in">hello@weespaces.in</a>.
            </p>
          </div>

          <div className="mt-16 pt-8 border-t border-gray-100 flex justify-between items-center">
             <Link href="/virtual-office" className="text-accent font-bold hover:underline flex items-center gap-2">
                &larr; Back to Virtual Office
             </Link>
             <p className="text-sm text-gray-400">Last updated: July 2026</p>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}
