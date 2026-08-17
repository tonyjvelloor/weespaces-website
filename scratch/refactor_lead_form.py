import re

with open('src/components/LeadForm.tsx', 'r') as f:
    content = f.read()

# 1. Add defaultRequirement to props
content = content.replace(
    "export default function LeadForm({ branch = \"\", source: defaultSource, hidePricing, pageType = 'unknown', pageSlug = 'unknown' }: { branch?: string, source?: string, hidePricing?: boolean, pageType?: string, pageSlug?: string }) {",
    "export default function LeadForm({ branch = \"\", source: defaultSource, hidePricing, pageType = 'unknown', pageSlug = 'unknown', defaultRequirement = '' }: { branch?: string, source?: string, hidePricing?: boolean, pageType?: string, pageSlug?: string, defaultRequirement?: string }) {"
)

# 2. Update initial state and step variables
old_state = """  const [step, setStep] = useState(1);
  const hasStartedRef = useRef(false);

  useEffect(() => {
    track.form('view', { pageType, pageSlug, city: branch });
  }, [pageType, pageSlug, branch]);

  const [formDataState, setFormDataState] = useState({
    requirement: '',
    teamSize: '',
    location: branch || '',
    budget: '',
    timeline: '',
    name: '',
    phone: ''
  });"""

new_state = """  const [stepIndex, setStepIndex] = useState(0);
  const hasStartedRef = useRef(false);

  useEffect(() => {
    track.form('view', { pageType, pageSlug, city: branch });
  }, [pageType, pageSlug, branch]);

  const [formDataState, setFormDataState] = useState({
    requirement: defaultRequirement,
    teamSize: '',
    location: branch || '',
    voPlan: '',
    budget: '',
    timeline: '',
    name: '',
    phone: ''
  });

  const allSteps = [
    { id: 'requirement', title: 'What do you need?', condition: () => true },
    { id: 'teamSize', title: 'How big is your team?', condition: (data: any) => !['Virtual Office', 'Meeting Room'].includes(data.requirement) },
    { id: 'location', title: 'Which city?', condition: () => true },
    { id: 'voPlan', title: 'What do you need it for?', condition: (data: any) => data.requirement === 'Virtual Office' },
    { id: 'budget', title: 'Budget Expectation (Per Seat)', condition: (data: any) => !['Virtual Office', 'Meeting Room'].includes(data.requirement) },
    { id: 'timeline', title: 'When do you need it?', condition: (data: any) => !['Virtual Office'].includes(data.requirement) },
    { id: 'contact', title: 'Your contact details', condition: () => true }
  ];

  const activeSteps = allSteps.filter(s => s.condition(formDataState));
  const currentStep = activeSteps[stepIndex] || activeSteps[0];
  const totalSteps = activeSteps.length;"""

content = content.replace(old_state, new_state)

# 3. Update handleNextStep
old_handle_next = """  const handleNextStep = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (!hasStartedRef.current) {
      hasStartedRef.current = true;
      track.form('start', { pageType, pageSlug, city: formDataState.location });
    }

    if (step === 1 && !formDataState.requirement) {
      setFormStatus({ message: 'Please select your requirement', type: 'error' });
      return;
    }
    if (step === 2 && !formDataState.teamSize) {
      setFormStatus({ message: 'Please select your team size', type: 'error' });
      return;
    }
    if (step === 3 && !formDataState.location) {
      setFormStatus({ message: 'Please select a location', type: 'error' });
      return;
    }
    if (step === 4 && !formDataState.budget) {
      setFormStatus({ message: 'Please select your budget expectation', type: 'error' });
      return;
    }
    if (step === 5 && !formDataState.timeline) {
      setFormStatus({ message: 'Please select your timeline', type: 'error' });
      return;
    }
    setFormStatus({ message: '', type: null });
    setStep(step + 1);
  };"""

new_handle_next = """  const handleNextStep = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (!hasStartedRef.current) {
      hasStartedRef.current = true;
      track.form('start', { pageType, pageSlug, city: formDataState.location });
    }

    if (currentStep.id === 'requirement' && !formDataState.requirement) {
      setFormStatus({ message: 'Please select your requirement', type: 'error' });
      return;
    }
    if (currentStep.id === 'teamSize' && !formDataState.teamSize) {
      setFormStatus({ message: 'Please select your team size', type: 'error' });
      return;
    }
    if (currentStep.id === 'location' && !formDataState.location) {
      setFormStatus({ message: 'Please select a location', type: 'error' });
      return;
    }
    if (currentStep.id === 'voPlan' && !formDataState.voPlan) {
      setFormStatus({ message: 'Please select your plan', type: 'error' });
      return;
    }
    if (currentStep.id === 'budget' && !formDataState.budget) {
      setFormStatus({ message: 'Please select your budget expectation', type: 'error' });
      return;
    }
    if (currentStep.id === 'timeline' && !formDataState.timeline) {
      setFormStatus({ message: 'Please select your timeline', type: 'error' });
      return;
    }
    setFormStatus({ message: '', type: null });
    setStepIndex(stepIndex + 1);
  };"""

content = content.replace(old_handle_next, new_handle_next)

# 4. Update handleBackStep
content = content.replace(
    "  const handleBackStep = () => {\n    setStep(step - 1);\n  };",
    "  const handleBackStep = () => {\n    setStepIndex(stepIndex - 1);\n  };"
)

# 5. Remove stepTitles
content = re.sub(r'  const stepTitles = \[\n(?:.*\n)*?  \];\n', '', content)

# 6. Add voPlans
vo_plans = """  const voPlans = [
    { label: 'Business Address', value: 'Business Address' },
    { label: 'GST Registration', value: 'GST Registration' },
    { label: 'Company Incorporation', value: 'Company Incorporation' },
    { label: 'Mail Handling / Forwarding', value: 'Mail Handling' },
  ];
"""
content = content.replace("  const requirements = [", vo_plans + "\n  const requirements = [")

# 7. Update Progress Bar and Header
old_progress = """          <div className="flex justify-between items-center mb-2">
            <span className="text-xs font-bold uppercase tracking-wider text-white/50">Step {step} of 6</span>
            <span className="text-xs font-bold text-accent">{Math.round((step / 6) * 100)}%</span>
          </div>
          <div className="w-full bg-white/10 rounded-full h-1.5">
            <div className="bg-accent h-1.5 rounded-full transition-all duration-300" style={{ width: `${(step / 6) * 100}%` }}></div>
          </div>
        </div>

        <h4 className="text-lg font-semibold mb-4 text-white">{stepTitles[step - 1]}</h4>"""

new_progress = """          <div className="flex justify-between items-center mb-2">
            <span className="text-xs font-bold uppercase tracking-wider text-white/50">Step {stepIndex + 1} of {totalSteps}</span>
            <span className="text-xs font-bold text-accent">{Math.round(((stepIndex + 1) / totalSteps) * 100)}%</span>
          </div>
          <div className="w-full bg-white/10 rounded-full h-1.5">
            <div className="bg-accent h-1.5 rounded-full transition-all duration-300" style={{ width: `${((stepIndex + 1) / totalSteps) * 100}%` }}></div>
          </div>
        </div>

        <h4 className="text-lg font-semibold mb-4 text-white">{currentStep.title}</h4>"""

content = content.replace(old_progress, new_progress)

# 8. Update UI rendering logic to use currentStep.id
content = content.replace("{step === 1 && (", "{currentStep.id === 'requirement' && (")
content = content.replace("{step === 2 && (", "{currentStep.id === 'teamSize' && (")
content = content.replace("{step === 3 && (", "{currentStep.id === 'location' && (")
content = content.replace("{step === 4 && (", "{currentStep.id === 'budget' && (")
content = content.replace("{step === 5 && (", "{currentStep.id === 'timeline' && (")
content = content.replace("{step === 6 && (", "{currentStep.id === 'contact' && (")

# Add voPlan step block
old_budget = "{currentStep.id === 'budget' && ("
vo_plan_ui = """          {currentStep.id === 'voPlan' && (
            <div className="grid grid-cols-1 gap-3">
              {voPlans.map(({ label, value }) => (
                <button
                  key={value}
                  type="button"
                  onClick={() => setFormDataState({ ...formDataState, voPlan: value })}
                  className={`p-4 rounded-xl border text-center transition-all ${formDataState.voPlan === value ? 'border-accent bg-accent/10 text-accent font-bold' : 'border-white/10 bg-navy-dark/30 text-white/70 hover:border-white/30 hover:bg-navy-dark/50'}`}
                >
                  {label}
                </button>
              ))}
            </div>
          )}

          {currentStep.id === 'budget' && ("""
content = content.replace(old_budget, vo_plan_ui)

# Update Next/Back button logic
content = content.replace("{step > 1 && (", "{stepIndex > 0 && (")
content = content.replace("{step < 6 ? (", "{stepIndex < totalSteps - 1 ? (")

with open('src/components/LeadForm.tsx', 'w') as f:
    f.write(content)
print("Done")
