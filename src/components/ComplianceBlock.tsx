import { ShieldAlert, CheckCircle2, AlertCircle } from 'lucide-react';
import Link from 'next/link';

export default function ComplianceBlock() {
  return (
    <div className="bg-white border border-gray-200 rounded-3xl p-8 shadow-sm">
      <div className="flex items-start gap-4">
        <div className="bg-accent/10 p-3 rounded-xl shrink-0">
          <ShieldAlert className="w-8 h-8 text-accent" />
        </div>
        <div>
          <h3 className="text-2xl font-bold text-navy mb-4">How WeeSpaces Supports Your Registration</h3>
          
          <div className="grid md:grid-cols-2 gap-8 mb-6">
            <div>
              <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600" />
                What We Provide
              </h4>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-accent"></span> A commercial business address</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-accent"></span> A commercial rental agreement</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-accent"></span> No Objection Certificate (where applicable)</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-accent"></span> Latest utility bills of the premises</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                <AlertCircle className="w-5 h-5 text-amber-500" />
                Important Notice
              </h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                Customers remain fully responsible for completing and filing their own GST, MCA, or other regulatory applications. WeeSpaces does not provide government services or process applications on your behalf. Acceptance of the documentation provided depends entirely on the relevant assessing authority and applicable local regulations.
              </p>
            </div>
          </div>
          
          <div className="border-t border-gray-100 pt-4 mt-2">
             <Link href="/legal/virtual-office-compliance" className="text-accent font-bold hover:underline text-sm flex items-center gap-1">
                Read our full Virtual Office Compliance Policy &rarr;
             </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
