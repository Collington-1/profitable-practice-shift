export interface PricingPlan {
  id: 'pay_in_full' | 'two_payments' | 'three_payments';
  name: string;
  badge?: string;
  popular?: boolean;
  amountToday: number;
  totalAmount: number;
  savingsText?: string;
  scheduleDescription: string;
  instalments: {
    label: string;
    amount: number;
    dueDate: string;
  }[];
  features: string[];
  stripePriceIdPlaceholder: string;
}

export interface ShiftStep {
  number: string;
  title: string;
  shortSummary: string;
  clinicalReality: string;
  theShift: string;
  takeaways: string[];
  treatmentQuestions?: string[];
}

export interface JourneyWeek {
  weeks: string;
  stageNumber: string;
  name: string;
  theme: string;
  objective: string;
  deliverables: string[];
  focusPill: string;
}

export interface DeliverableItem {
  id: string;
  title: string;
  category: 'Diagnostic' | 'Clinical Systems' | 'Communication' | 'Growth & Strategy';
  description: string;
  iconType: string;
  badge?: string;
}

export interface FAQItem {
  category: 'Programme & Format' | 'Time & Fit' | 'Enrolment & Investment';
  question: string;
  answer: string;
}

export const PROGRAMME_DATA = {
  meta: {
    programmeName: "The Profitable Practice Accelerator™",
    methodologyName: "The Profitable Practice Shift™",
    founderName: "Dr Amy Traore-Shumbusho",
    founderTitle: "Orthodontics & Prosthodontics Background | Founder, Smile360 Dental Specialists",
    cohortStartDate: "First week of December 2026",
    cohortStartDateConfirmNotice: "TODO_CLIENT_CONFIRM: Exact cohort launch date subject to client confirmation before launch.",
    standardTuition: 3000,
    tagline: "Stronger practice economics — without simply working more hours or chasing more patients.",
    heroHeadline: "Your diary is full. Is your practice as profitable as it should be?",
    descriptor: "An eight-week implementation experience for established dentists ready to turn clinical excellence into measurable practice economics.",
  },

  bottlenecks: [
    {
      code: "A",
      title: "Clinical Value Gap",
      tagline: "Under-identifying comprehensive care",
      description: "We aren't consistently identifying or planning appropriate comprehensive care. Single-tooth procedures take precedence where comprehensive assessment would truly fit patient long-term health.",
      consequence: "High clinical skill delivers piecemeal dentistry while long-term patient value is lost."
    },
    {
      code: "B",
      title: "Communication Gap",
      tagline: "45 minutes examining, 5 minutes explaining",
      description: "Patients don't always understand the value and options in our plans. When patients hear a big fee without understanding the 'why' or alternatives, their reflex is 'Let me think about it.'",
      consequence: "Uncertainty is mistaken for cost objections, stalling worthy clinical recommendations."
    },
    {
      code: "C",
      title: "Patient Decision Gap",
      tagline: "Stalled between consultation and start",
      description: "Appropriate plans stall between presentation and treatment start. The treatment is accepted in principle, but nobody schedules it or follows up with clear accountability.",
      consequence: "Your pipeline leaks quietly, leaving chairs unfilled and treatment incomplete."
    },
    {
      code: "D",
      title: "Economic Visibility Gap",
      tagline: "Revenue in, but unknown clinical-hour margin",
      description: "We generate revenue but don't clearly understand profitability or clinical-time economics. A bigger fee doesn't mean a bigger profit when lab, materials, specialist time, and overhead are uncounted.",
      consequence: "You work longer hours while retained practice profit remains stagnant."
    }
  ],

  fiveShifts: [
    {
      number: "01",
      title: "DIAGNOSE",
      shortSummary: "Identify where value is being lost and establish the practice's economic bottleneck.",
      clinicalReality: "Dentist A & Dentist B both run 4 clinical days and are fully booked. Dentist A measures success solely by revenue in. Dentist B measures revenue per clinical hour, treatment mix, direct cost of delivery, and profit retained.",
      theShift: "Before optimizing chairs or seeing more patients, diagnose where economic value leaks out of your existing patient pipeline.",
      takeaways: [
        "Revenue per clinical hour vs gross practice revenue",
        "Contribution margin after direct delivery & lab costs",
        "Actual net operating profit per operatory day"
      ]
    },
    {
      number: "02",
      title: "ELEVATE",
      shortSummary: "Plan appropriate comprehensive care rather than isolated single-tooth fixes.",
      clinicalReality: "Experienced clinicians routinely notice restorative, occlusal, or aesthetic complexities, but get trapped presenting just the urgent symptom.",
      theShift: "Build structured clinical diagnostic workflows so comprehensive treatment is thoughtfully planned, documented, and presented with ethical clarity.",
      takeaways: [
        "Comprehensive assessment diagnostic protocol",
        "Staged restorative and interdisciplinary care planning",
        "Eliminating the reflex to under-prescribe out of assumed patient budget"
      ]
    },
    {
      number: "03",
      title: "COMMUNICATE",
      shortSummary: "Make diagnosis, options and investment clear; present treatment value confidently.",
      clinicalReality: "Spending 45 minutes examining and only 5 minutes explaining leaves patients confused, leading to 'Let me think about it.'",
      theShift: "Replace rushed chairside quotes with a structured five-question clinical conversation that helps patients make confident, informed health decisions.",
      takeaways: [
        "Shifting from 'selling dentistry' to facilitating informed healthcare decisions",
        "Co-discovering patient goals before presenting fees",
        "Clear presentation of multi-option restorative pathways"
      ],
      treatmentQuestions: [
        "1. What is the patient's concern?",
        "2. What is the diagnosis?",
        "3. What appropriate options exist?",
        "4. What are the benefits, risks and outcomes?",
        "5. What time, cost and commitment does each involve?"
      ]
    },
    {
      number: "04",
      title: "CONVERT",
      shortSummary: "Strengthen the presentation-to-start process and patient decision pathway.",
      clinicalReality: "Treatment accepted verbally often disappears because there is no defined scheduling workflow or follow-up protocol.",
      theShift: "Establish clear practice value-chain tracking from consultation to treatment start with defined team roles.",
      takeaways: [
        "Formal Acceptance-to-Start workflow",
        "Dignified, professional follow-up protocols",
        "Front-desk to clinical-chair seamless handover"
      ]
    },
    {
      number: "05",
      title: "OPTIMIZE",
      shortSummary: "Improve the economics of existing capacity and make better use of clinical time.",
      clinicalReality: "The knee-jerk reaction to feeling economically squeezed is adding another associate, another chair, or another weekend clinical day.",
      theShift: "Make your existing clinical hours dramatically more productive before expanding overhead or sacrificing personal life.",
      takeaways: [
        "Chair-time utilization & high-value block scheduling",
        "Delegation protocols that liberate the principal dentist",
        "90-Day implementation roadmap for sustainable margins"
      ]
    }
  ],

  journeyWeeks: [
    {
      weeks: "Weeks 1–2",
      stageNumber: "01",
      name: "DIAGNOSE",
      theme: "Economics Baseline & Priority Bottleneck",
      objective: "Establish your practice economics baseline, calculate true revenue per clinical hour, and pinpoint your primary leak.",
      deliverables: [
        "Practice Economics Scorecard™ completion",
        "Dental Value Leak Audit™ run-through",
        "Clinical capacity & overhead cost mapping"
      ],
      focusPill: "Discovery & Numbers"
    },
    {
      weeks: "Week 3",
      stageNumber: "02",
      name: "ELEVATE",
      theme: "Comprehensive Treatment-Planning Structure",
      objective: "Build a repeatable clinical assessment framework that surfaces comprehensive care ethically and systematically.",
      deliverables: [
        "Comprehensive Examination Protocol template",
        "Case-scoping & risk-benefit documentation",
        "Patient-centered treatment presentation structure"
      ],
      focusPill: "Clinical Systems"
    },
    {
      weeks: "Weeks 4–5",
      stageNumber: "03",
      name: "COMMUNICATE",
      theme: "Treatment & Value Communication Process",
      objective: "Master the 5-Question Treatment Conversation and build trust that turns clinical diagnoses into confident patient acceptance.",
      deliverables: [
        "The 5-Question Treatment Conversation Scripts & Guides",
        "Fee presentation & objection-navigation frameworks",
        "Visual treatment explainer tools"
      ],
      focusPill: "Patient Dialogue"
    },
    {
      weeks: "Week 6",
      stageNumber: "04",
      name: "CONVERT",
      theme: "Patient Decision & Follow-Up Workflow",
      objective: "Bridge the gap between verbal agreement and actual treatment start so cases don't fall into the scheduling void.",
      deliverables: [
        "Acceptance-to-Start Tracking Dashboard",
        "Front-of-house follow-up checklists & responsibilities",
        "Treatment coordinator alignment workflow"
      ],
      focusPill: "Workflow Execution"
    },
    {
      weeks: "Weeks 7–8",
      stageNumber: "05",
      name: "OPTIMIZE",
      theme: "Profitability Dashboard & 90-Day Plan",
      objective: "Lock in your practice operating profit, optimize clinical calendar economics, and establish your forward quarterly plan.",
      deliverables: [
        "Practice Profitability Dashboard configuration",
        "90-Day Practice Improvement Implementation Plan",
        "Principal clinical time protection roadmap"
      ],
      focusPill: "Long-term Scale"
    }
  ],

  deliverables: [
    {
      id: "coaching",
      title: "Eight Weeks of Structured Group Coaching",
      category: "Growth & Strategy",
      description: "Direct weekly implementation sessions with Dr Amy Traore-Shumbusho, examining real practice numbers, live case communication, and operational hurdles.",
      iconType: "Users",
      badge: "Core Programme"
    },
    {
      id: "methodology",
      title: "The Profitable Practice Shift™ Methodology",
      category: "Clinical Systems",
      description: "Complete proprietary 5-step framework connecting diagnostic clinical excellence directly to measurable practice economics.",
      iconType: "Compass",
      badge: "Proprietary IP"
    },
    {
      id: "scorecard",
      title: "Practice Economics Scorecard™",
      category: "Diagnostic",
      description: "A clear diagnostic instrument to quantify your actual revenue per clinical hour, direct delivery costs, and operatory profitability.",
      iconType: "LineChart",
      badge: "Diagnostic Tool"
    },
    {
      id: "audit",
      title: "Dental Value Leak Audit™",
      category: "Diagnostic",
      description: "Systematic audit tool identifying exactly which of the 4 bottlenecks (Clinical, Communication, Decision, or Visibility) is draining revenue.",
      iconType: "ShieldAlert",
      badge: "Audit System"
    },
    {
      id: "treatment_planning",
      title: "Comprehensive Treatment Planning Resources",
      category: "Clinical Systems",
      description: "Clinical diagnostic workflows and templates designed to transition your practice from single-tooth fixes to comprehensive patient care.",
      iconType: "FileText",
      badge: "Clinical Templates"
    },
    {
      id: "communication_tools",
      title: "Patient Value Communication Tools",
      category: "Communication",
      description: "Structured guides and conversation frameworks built around the 5 Essential Patient Questions to present high-investment plans with authority.",
      iconType: "MessageSquare",
      badge: "Communication System"
    },
    {
      id: "acceptance_tracking",
      title: "Acceptance-to-Start Tracking Resources",
      category: "Clinical Systems",
      description: "Operational tools and team checklists to close the gap between patient verbal acceptance and completed appointment scheduling.",
      iconType: "CheckCircle2",
      badge: "Workflow Tool"
    },
    {
      id: "capacity_tools",
      title: "Clinical Capacity Optimization Tools",
      category: "Growth & Strategy",
      description: "Schedules and templates to optimize chair-time productivity, refine appointment block architecture, and reduce principal clinical strain.",
      iconType: "Clock",
      badge: "Capacity System"
    },
    {
      id: "roadmap",
      title: "90-Day Practice Improvement Plan",
      category: "Growth & Strategy",
      description: "A tailored, step-by-step roadmap to sustain, measure, and scale economic gains well beyond the eight-week cohort.",
      iconType: "Award",
      badge: "Strategic Plan"
    },
    {
      id: "support",
      title: "Implementation Feedback & Support",
      category: "Growth & Strategy",
      description: "Structured feedback loops throughout the eight weeks so you never get stuck between knowing what to change and executing it.",
      iconType: "Sparkles",
      badge: "Direct Support"
    }
  ],

  valuePoints: [
    {
      title: "Greater Economic Visibility",
      description: "Know the true margin of every clinical hour, procedure, and operatory, replacing vague revenue impressions with precise financial reality.",
      icon: "Eye"
    },
    {
      title: "More Intentional Clinical Capacity",
      description: "Stop cramming diaries with low-margin fatigue; schedule clinical days around high-value procedures and restored work-life balance.",
      icon: "Clock"
    },
    {
      title: "Clearer Patient Communication",
      description: "Conduct consultations that eliminate hesitation, help patients grasp comprehensive care, and overcome fee resistance with ethical clarity.",
      icon: "MessageSquare"
    },
    {
      title: "More Consistent Workflows",
      description: "Build team-aligned protocols so case acceptance smoothly transitions into scheduled, completed treatment every single week.",
      icon: "Workflow"
    },
    {
      title: "Better-Informed Business Decisions",
      description: "Evaluate equipment, hiring, associate contracts, and chair expansions through proven financial metrics rather than guesswork.",
      icon: "Scale"
    },
    {
      title: "Sustainable Long-Term Profitability",
      description: "Establish a resilient practice economic model that increases retained profit without requiring more clinical hours from the owner.",
      icon: "TrendingUp"
    }
  ],

  pricingPlans: [
    {
      id: "pay_in_full",
      name: "Option 1 · Pay in Full",
      badge: "Best Value · Save $500",
      popular: true,
      amountToday: 2500,
      totalAmount: 2500,
      savingsText: "Save $500 compared to standard tuition",
      scheduleDescription: "Single payment of $2,500 processed today. Instant full programme access.",
      instalments: [
        { label: "Due Today", amount: 2500, dueDate: "Upon Enrolment" }
      ],
      features: [
        "Full access to the 8-week Accelerator programme",
        "Direct weekly group coaching with Dr Amy",
        "The Profitable Practice Shift™ Complete Methodology",
        "Practice Economics Scorecard™ & Leak Audit™",
        "Patient Value Communication & 5-Question Framework",
        "Acceptance-to-Start tracking protocols & templates",
        "90-Day Practice Improvement Plan & feedback loops",
        "Cohort launch: First week of December 2026"
      ],
      stripePriceIdPlaceholder: "price_pay_in_full_TODO_CLIENT"
    },
    {
      id: "two_payments",
      name: "Option 2 · Two Payments",
      badge: "Save $200",
      popular: false,
      amountToday: 1500,
      totalAmount: 2800,
      savingsText: "Save $200 compared to standard tuition",
      scheduleDescription: "$1,500 today, followed by $1,300 by November 20, 2026.",
      instalments: [
        { label: "Payment 1", amount: 1500, dueDate: "Today upon enrolment" },
        { label: "Payment 2", amount: 1300, dueDate: "November 20, 2026" }
      ],
      features: [
        "Full access to the same 8-week programme",
        "Equal access to all live group coaching calls",
        "Complete toolkit, diagnostic scorecards & audit systems",
        "Treatment-planning & patient communication templates",
        "90-Day Practice Improvement Plan",
        "Split investment across two structured instalments",
        "Cohort launch: First week of December 2026"
      ],
      stripePriceIdPlaceholder: "price_two_payments_TODO_CLIENT"
    },
    {
      id: "three_payments",
      name: "Option 3 · Three Payments",
      badge: "Standard Tuition",
      popular: false,
      amountToday: 1000,
      totalAmount: 3000,
      savingsText: "Standard tuition split across 3 equal instalments",
      scheduleDescription: "$1,000 today + $1,000 by Nov 20 + $1,000 by Dec 20, 2026.",
      instalments: [
        { label: "Payment 1", amount: 1000, dueDate: "Today upon enrolment" },
        { label: "Payment 2", amount: 1000, dueDate: "November 20, 2026" },
        { label: "Payment 3", amount: 1000, dueDate: "December 20, 2026" }
      ],
      features: [
        "Full access to the same 8-week programme",
        "Equal access to all coaching calls & recordings",
        "All diagnostic scorecards, audits, & templates",
        "Patient communication & case acceptance workflows",
        "90-Day Practice Improvement Plan",
        "Lowest initial investment to secure your seat",
        "Cohort launch: First week of December 2026"
      ],
      stripePriceIdPlaceholder: "price_three_payments_TODO_CLIENT"
    }
  ] as PricingPlan[],

  faqs: [
    {
      category: "Programme & Format",
      question: "Who is the programme for?",
      answer: "The Profitable Practice Accelerator™ is specifically designed for established dentists, dental specialists, and dental practice owners who have already built solid clinical competence and a full diary, but feel that their practice economics and retained profit do not reflect the depth of their skill or clinical hours."
    },
    {
      category: "Programme & Format",
      question: "Is this a clinical course?",
      answer: "No. This is not another clinical technique or CPD course. It is an implementation-focused business and operational accelerator designed to help established clinicians turn the clinical excellence they already deliver into sustainable practice economics."
    },
    {
      category: "Programme & Format",
      question: "How long does the programme run and what happens during the eight weeks?",
      answer: "The programme runs for eight structured weeks. Over these eight weeks, participants progress through the five shifts of the methodology: Weeks 1–2 diagnose your economic baseline and primary bottleneck; Week 3 establishes comprehensive treatment planning; Weeks 4–5 master patient value communication; Week 6 implements acceptance-to-start tracking; and Weeks 7–8 build your profitability dashboard and customized 90-day practice improvement plan."
    },
    {
      category: "Time & Fit",
      question: "How much time will implementation require?",
      answer: "The programme is built specifically for clinicians running busy practices. It does not introduce dozens of tasks at once; instead, it provides step-by-step priority actions. Dedicating 2 to 3 hours weekly to group sessions and focused practice implementation is sufficient to generate tangible operational changes."
    },
    {
      category: "Time & Fit",
      question: "What if I am already busy?",
      answer: "If your diary is already full, continuing on the same trajectory without addressing practice economics will simply compound exhaustion. At some point, practice owners must work on the practice, not only in it. The accelerator is designed to optimize existing capacity so you can achieve higher revenue per clinical hour without adding more days or patients."
    },
    {
      category: "Time & Fit",
      question: "Will it work for a practice like mine?",
      answer: "Yes, because the programme does not impose a rigid one-size-fits-all formula. It starts with an individualized diagnosis of your specific practice constraints, numbers, local market, and team structure. Results depend on your starting point and consistency of implementation."
    },
    {
      category: "Enrolment & Investment",
      question: "What support and tools are included?",
      answer: "Participants receive eight weeks of structured group coaching, direct implementation feedback from Dr Amy, the proprietary Practice Economics Scorecard™, the Dental Value Leak Audit™, comprehensive treatment planning frameworks, the 5-Question Patient Value Communication guides, acceptance tracking workflows, capacity optimization tools, and a 90-Day Practice Improvement Plan."
    },
    {
      category: "Enrolment & Investment",
      question: "What are the payment options and tuition?",
      answer: "Standard tuition is $3,000. All options grant complete access to the 8-week accelerator. Option 1 is Pay in Full at $2,500 (saving $500). Option 2 is Two Payments: $1,500 today + $1,300 by Nov 20, 2026 (total $2,800, saving $200). Option 3 is Three Payments: $1,000 today + $1,000 by Nov 20 + $1,000 by Dec 20, 2026 (total $3,000)."
    },
    {
      category: "Enrolment & Investment",
      question: "When does the cohort begin?",
      answer: "The cohort is scheduled to commence in the first week of December 2026 (subject to final client confirmation). Enrolment is currently open on a first-come basis to ensure personalized group interaction and direct feedback."
    }
  ] as FAQItem[]
};
