import { virtualOfficePlans } from '@/data/pricing';

export default function VoPricingCards() {
  return (
    <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
      {virtualOfficePlans.map((plan) => (
        <div 
          key={plan.id} 
          className={`rounded-3xl p-8 relative flex flex-col ${
            plan.recommended 
              ? 'bg-navy text-white shadow-2xl scale-105 border-2 border-accent z-10' 
              : 'bg-white border border-gray-100 shadow-lg text-navy'
          }`}
        >
          {plan.recommended && (
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent text-navy text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full">
              Most Popular
            </div>
          )}
          
          <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
          <p className={`text-sm mb-8 ${plan.recommended ? 'text-white/70' : 'text-gray-500'}`}>
            Best for: {plan.bestFor}
          </p>
          
          <div className="mb-8">
            <span className="text-4xl font-bold">₹{plan.monthlyPrice.toLocaleString()}</span>
            <span className={`text-sm ${plan.recommended ? 'text-white/50' : 'text-gray-400'}`}>/month</span>
          </div>

          <div className="flex-grow">
            <ul className="space-y-4 mb-8">
              {plan.features.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm">
                  <span className={`material-symbols-outlined text-lg ${plan.recommended ? 'text-accent' : 'text-navy'}`}>
                    check_circle
                  </span>
                  <span className={plan.recommended ? 'text-white/90' : 'text-gray-600'}>
                    {feature}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <button 
            onClick={() => {
              const element = document.getElementById('lead-form');
              element?.scrollIntoView({ behavior: 'smooth' });
            }}
            className={`w-full py-4 rounded-full font-bold transition-colors ${
              plan.recommended 
                ? 'bg-accent text-navy hover:bg-white' 
                : 'bg-navy text-white hover:bg-accent hover:text-navy'
            }`}
          >
            Get Started
          </button>
        </div>
      ))}
    </div>
  );
}
