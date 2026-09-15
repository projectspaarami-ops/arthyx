import { Stage, Trainer, FaqItem, Testimonial, FeatureBlock, AudienceProfile } from '../types';

export const HERO_CONTENT = {
  headline: "Where Market Curiosity Meets Market Understanding.",
  supportingCopy: "At Arthyx, we believe learning financial markets is about more than knowing what to buy or sell. It is about understanding how markets work, simplifying complex concepts, recognising risk and developing the discipline to make more informed decisions.",
  primaryCta: "Start Your Learning Journey",
  secondaryCta: "Explore the Curriculum"
};

export const WHO_WE_ARE_CONTENT = {
  eyebrow: "Who We Are",
  heading: "Method over guesswork.",
  paragraphs: [
    "Financial markets can be overwhelming when approached through fragmented information, market noise and endless opinions. Arthyx takes a more structured approach—one that places understanding before action and process before prediction.",
    "We bring together experience-backed market education, practical frameworks and analytical thinking to help learners understand not only what happens in the market, but why it happens.",
    "The objective is not to follow someone else's conviction. It is to develop the knowledge, discipline and perspective to form your own."
  ],
  principles: [
    {
      number: "01",
      title: "Understand the fundamentals",
      description: "Build a strong foundation in how markets function before moving into strategies, analysis or advanced concepts."
    },
    {
      number: "02",
      title: "Learn through structure",
      description: "Progress through a carefully sequenced curriculum, supported by practical application, guided learning and meaningful doubt-solving."
    },
    {
      number: "03",
      title: "Develop independent judgement",
      description: "Move beyond market opinions and learn to evaluate opportunities, understand risk and approach decisions with greater clarity."
    }
  ]
};

export const SAGA_STAGES: Stage[] = [
  {
    id: "launchpad",
    number: "01",
    name: "Launchpad",
    subtitle: "Foundation of technical analysis",
    duration: "3 weeks",
    description: "Establish a strong market foundation, from understanding how markets work to reading price charts and developing the discipline required for structured analysis.",
    focus: ["Market Fundamentals", "Technical Analysis"],
    learningFormat: ["Live learning", "Recorded access"],
    highlights: [
      "Market participants, liquidity flow, and order execution mechanics",
      "Core chart types, timeframes, and trend identification principles",
      "Support, resistance, and price-action confirmation frameworks",
      "Risk assessment parameters and disciplined trade journaling"
    ],
    modules: [
      {
        title: "Market Anatomy & Mechanics",
        description: "Understanding auction theory, how buyers and sellers interact, and how price discovery operates in equity and index segments."
      },
      {
        title: "Chart Literacy & Price Action",
        description: "Moving past indicators: understanding raw price behaviour, structural swing highs and lows, and market phases."
      },
      {
        title: "Risk Parameters & Position Sizing",
        description: "Mathematical risk management, capital preservation guidelines, and setting stop-loss parameters with objective logic."
      }
    ]
  },
  {
    id: "velocity",
    number: "02",
    name: "Velocity",
    subtitle: "Advanced technical analysis and Elliott Wave",
    duration: "4 weeks",
    description: "Deepen your analytical perspective through advanced technical concepts, pattern recognition and Elliott Wave, moving from observing price to interpreting market behaviour.",
    focus: ["Advanced Technical Analysis", "Elliott Wave"],
    learningFormat: ["Guided learning", "Doubt-solving"],
    highlights: [
      "Elliott Wave impulse and corrective wave structures",
      "Fibonacci retracement and expansion confluence mapping",
      "Multi-timeframe fractal alignment and momentum divergence",
      "Recognising high-probability chart formations in live context"
    ],
    modules: [
      {
        title: "Wave Structures & Pattern Recognition",
        description: "Mastering the rules and guidelines of motive and corrective waves to anticipate market cycles and turning points."
      },
      {
        title: "Fibonacci Geometry & Confluence",
        description: "Harmonizing price extensions with structural levels to identify high-conviction decision zones."
      },
      {
        title: "Multi-Timeframe Synthesis",
        description: "Framing short-term execution inside higher-timeframe market direction to avoid low-probability chop."
      }
    ]
  },
  {
    id: "orbit",
    number: "03",
    name: "Orbit",
    subtitle: "Futures and options",
    duration: "4 weeks",
    description: "Explore the mechanics of derivatives, strategy concepts and risk considerations once your analytical foundation is firmly established.",
    focus: ["Futures", "Options", "Strategy", "Risk Awareness"],
    learningFormat: ["Practical market application"],
    highlights: [
      "Derivative pricing, open interest, and implied volatility dynamics",
      "Options Greeks (Delta, Theta, Vega, Gamma) decoded for retail participants",
      "Hedging models and multi-leg option strategy design",
      "Non-directional and directional risk asymmetry management"
    ],
    modules: [
      {
        title: "Derivative Mechanics & Contract Pricing",
        description: "How futures contracts behave, basis and rollover interpretation, and avoiding leverage traps."
      },
      {
        title: "Options Pricing, Greeks & Volatility",
        description: "Understanding time decay, volatility skew, and how options change value across changing market regimes."
      },
      {
        title: "Structured Option Strategies",
        description: "Designing defined-risk spreads, calendars, and hedges tailored for defined market expectations."
      }
    ]
  },
  {
    id: "cruise-control",
    number: "04",
    name: "Cruise Control",
    subtitle: "Practical application and review",
    duration: "2 weeks",
    description: "Bring your learning together through structured review, practical questioning and reflection on the reasoning behind market decisions.",
    focus: ["Application", "Analysis", "Review"],
    learningFormat: ["Guided Q&A", "Mentor support"],
    highlights: [
      "Live market simulation and structured decision walkthroughs",
      "Post-trade auditing: separating process quality from outcome bias",
      "Execution psychology: managing trade anxiety and FOMO",
      "Personalized trading blueprint formulation for long-term consistency"
    ],
    modules: [
      {
        title: "Trade Review & Execution Auditing",
        description: "Scrutinizing live trade logs to evaluate entry logic, risk discipline, and exit efficiency."
      },
      {
        title: "Behavioral Discipline & Emotional Control",
        description: "Eliminating impulsive decisions, revenge trading, and anchoring bias through systematic rules."
      },
      {
        title: "Individual Process Blueprint",
        description: "Formulating a tailored personal trading playbook aligned with individual capital, risk tolerance, and time availability."
      }
    ]
  }
];

export const WHY_ARTHYX_CONTENT = {
  eyebrow: "Why Arthyx",
  heading: "A more considered way to learn the market.",
  intro1: "The market does not need another stream of noise. It needs better understanding.",
  intro2: "Arthyx is designed around a deliberate learning philosophy—where concepts connect, application reinforces understanding and risk remains an integral part of the conversation.",
  principles: [
    {
      number: "01",
      title: "Sequential, not scattered",
      description: "Each stage builds on the previous one, creating a coherent progression from foundational concepts to advanced market application."
    },
    {
      number: "02",
      title: "Guided, not overwhelming",
      description: "Structured learning, practical discussions and mentorship create an environment where questions become part of the learning process."
    },
    {
      number: "03",
      title: "Risk-aware by design",
      description: "Understanding opportunity without understanding risk is incomplete. We place both within the same learning framework."
    },
    {
      number: "04",
      title: "Research-informed learning",
      description: "Go beyond conclusions. Explore the reasoning, frameworks and market context behind an analysis so the learning becomes a skill—not merely information."
    }
  ],
  ctaText: "More Reasons to Learn with Arthyx →"
};

export const STORIES_CONTENT = {
  eyebrow: "Stories",
  heading: "See how perspectives begin to change.",
  paragraphs: [
    "Every learner enters with a different question, a different level of familiarity and a different reason for exploring the markets.",
    "What connects them is the desire to move from uncertainty towards greater understanding."
  ],
  testimonials: [
    {
      id: "test-1",
      namePlaceholder: "Aditya Kulkarni",
      backgroundPlaceholder: "Software Engineer & Working Professional",
      stageCompleted: "SAGA Graduate (13 Weeks)",
      quote: "Before Arthyx, I was acting on advice from social channels without understanding why setups existed. The structured transition from Launchpad into Velocity made price movement logical rather than chaotic.",
      keyShift: "Shifted from reactive indicator chasing to structured chart reading and independent risk evaluation.",
      timeframe: "3 Months After Completion"
    },
    {
      id: "test-2",
      namePlaceholder: "Priya Deshmukh",
      backgroundPlaceholder: "Business Owner & First-Time Investor",
      stageCompleted: "SAGA Graduate (13 Weeks)",
      quote: "The emphasis on risk before returns was the biggest change in my mindset. Rather than asking how much a position could make, I learned to assess what was being risked and whether the reward justified it.",
      keyShift: "Developed clear capital allocation rules and eliminated guesswork before entering market positions.",
      timeframe: "Recent Cohort"
    },
    {
      id: "test-3",
      namePlaceholder: "Vikram Mehta",
      backgroundPlaceholder: "Finance Professional & Active Trader",
      stageCompleted: "SAGA Graduate (13 Weeks)",
      quote: "The deep dive into Elliott Wave and derivatives in Orbit was exceptional. What made it work was the Cruise Control review stage, where mentors dissected actual trade reasoning step by step.",
      keyShift: "Gained independent conviction in multi-timeframe analysis and defined-risk option strategies.",
      timeframe: "6 Months After Completion"
    },
    {
      id: "test-4",
      namePlaceholder: "Sunita Joshi",
      backgroundPlaceholder: "Corporate Professional & Swing Investor",
      stageCompleted: "SAGA Graduate (13 Weeks)",
      quote: "The small batch size and dedicated doubt solving made all the difference. Learning how to identify market regimes helped me avoid trades during low-probability choppy sessions.",
      keyShift: "Replaced anxiety and FOMO with a patient, rule-based execution checklist.",
      timeframe: "Recent Cohort"
    }
  ]
};

export const HOMEPAGE_FAQS: FaqItem[] = [
  {
    question: "Is Arthyx suitable for someone completely new to financial markets?",
    answer: "Yes. The SAGA journey is deliberately structured to start from first principles. Stage 01 (Launchpad) assumes no prior market background and focuses on how markets function, basic order mechanics, and core chart reading before advancing into technical analysis.",
    category: "general"
  },
  {
    question: "Do I need prior trading or investing experience?",
    answer: "No prior trading or investing experience is required. We take learners through a sequential path where foundational concepts are reinforced with guided practice before introducing complex analytical frameworks.",
    category: "general"
  },
  {
    question: "What is the SAGA journey?",
    answer: "SAGA is Arthyx's flagship 13-week structured market education programme. It spans four sequential stages: Launchpad (3 weeks), Velocity (4 weeks), Orbit (4 weeks), and Cruise Control (2 weeks), taking learners from market literacy to analytical independence.",
    category: "curriculum"
  },
  {
    question: "Can I join a later SAGA stage directly?",
    answer: "Because each stage intentionally builds on the frameworks taught in preceding modules, we generally advise learners to progress through the sequential journey. Prospective learners with verifiable prior experience can consult our mentors during the orientation phase.",
    category: "curriculum"
  },
  {
    question: "Does Arthyx provide stock tips or buy/sell calls?",
    answer: "No. Arthyx is strictly an educational institution. We do not provide stock tips, advisory buy/sell signals, or guaranteed returns. Our sole objective is to develop your independent market understanding and disciplined decision-making.",
    category: "general"
  },
  {
    question: "What is the ₹99 Eye-Opener?",
    answer: "The ₹99 Eye-Opener is an introductory, low-barrier orientation session designed to provide a clear, unhyped perspective on financial markets, how market dynamics truly function, and whether our structured curriculum fits your learning goals.",
    category: "format"
  }
];

export const SAGA_COURSE_FAQS: FaqItem[] = [
  {
    question: "How long is the SAGA journey?",
    answer: "The complete SAGA journey spans 13 weeks across four sequential stages: Launchpad (3 weeks), Velocity (4 weeks), Orbit (4 weeks), and Cruise Control (2 weeks)."
  },
  {
    question: "What are the four stages of SAGA?",
    answer: "The four stages are: 01 Launchpad (Foundation of technical analysis), 02 Velocity (Advanced technical analysis and Elliott Wave), 03 Orbit (Futures and options), and 04 Cruise Control (Practical application, trade review and mentorship)."
  },
  {
    question: "Do I need prior trading or investing experience?",
    answer: "No prior trading or investing experience is required. SAGA is engineered to build analytical confidence from the ground up, starting with core market mechanics before moving into advanced strategies."
  },
  {
    question: "Can I join directly at Velocity or Orbit?",
    answer: "Each stage in SAGA builds upon the analytical vocabulary and discipline established in preceding modules. To maintain pedagogical continuity and cohort quality, learners are encouraged to start at Launchpad. Direct entry may be considered on a case-by-case evaluation."
  },
  {
    question: "What will I learn across the SAGA journey?",
    answer: "You will master market structure, price action, trend mechanics, Elliott Wave theory, Fibonacci geometry, Futures & Options mechanics, option Greeks, structured derivative strategies, risk management, trade journaling, and behavioral discipline."
  },
  {
    question: "Are the sessions live?",
    answer: "Yes, SAGA features live interactive instructor-led online sessions where instructors walk through live concepts, answer queries in real-time, and discuss current market context."
  },
  {
    question: "Will I get access to session recordings?",
    answer: "Yes. Teaching-session recordings are planned to remain accessible for six months in your learner portal, subject to the final programme policy, allowing you to revise concepts at your own pace."
  },
  {
    question: "Does SAGA cover Futures & Options?",
    answer: "Yes. Stage 03 (Orbit) is entirely dedicated to the mechanics, Greeks, strategy design, and risk parameters of Futures & Options once your technical analysis foundation is firmly grounded."
  },
  {
    question: "Does Arthyx provide stock tips or trading calls?",
    answer: "Never. Arthyx does not issue buy/sell calls, stock recommendations, or return projections. Our purpose is to educate learners to form their own independent, disciplined market perspective."
  }
];

export const EXPERIENCE_BLOCKS: FeatureBlock[] = [
  {
    title: "Live interactive sessions",
    description: "Instructor-led online learning with space for discussion, questions and practical interpretation.",
    iconName: "Video"
  },
  {
    title: "Practical market learning",
    description: "Connect concepts with charts, patterns and relevant market situations rather than learning them in isolation.",
    iconName: "LineChart"
  },
  {
    title: "Focused doubt-solving",
    description: "Dedicated sessions provide space to clarify concepts and work through questions.",
    iconName: "HelpCircle"
  },
  {
    title: "Six-month recording access",
    description: "Teaching-session recordings are planned to remain accessible for six months, subject to the final programme policy.",
    iconName: "Clock"
  },
  {
    title: "LMS access",
    description: "Learners receive access to the digital learning environment and relevant programme resources.",
    iconName: "BookOpen"
  },
  {
    title: "Small-batch learning",
    description: "Intentionally managed batches allow for closer interaction and more focused learner support.",
    iconName: "Users"
  }
];

export const AUDIENCE_PROFILES: AudienceProfile[] = [
  {
    title: "First-time investors",
    description: "People who have entered the market but want to build a proper understanding before making decisions with greater confidence.",
    suitability: "Build strong foundational literacy and risk awareness without falling victim to market hype.",
    iconName: "Compass"
  },
  {
    title: "Working professionals",
    description: "People looking to develop financial-market knowledge through structured learning alongside their professional commitments.",
    suitability: "Evenings and weekend-friendly live learning with 6-month recording revision access.",
    iconName: "Briefcase"
  },
  {
    title: "Aspiring traders",
    description: "People who want to develop the knowledge and analytical foundation required to approach trading more independently.",
    suitability: "Deepen edge with wave theory, derivative structures, and disciplined execution audit.",
    iconName: "TrendingUp"
  },
  {
    title: "Existing market participants",
    description: "People with market exposure who want to bring greater structure to their analysis, risk awareness and decision-making.",
    suitability: "Unlearn fragmented habits and replace speculative impulses with a consistent framework.",
    iconName: "Layers"
  }
];

export const TRAINERS: Trainer[] = [
  {
    id: "nikhil-kowale",
    name: "Nikhil Bal Kowale",
    role: "Co-Founder, Trainer & Director",
    badge: "Market Structure & Technical Analysis",
    experience: "21 Years Banking & Financial Services • 25+ Years Investing",
    bio: "Brings a unique combination of financial-services knowledge, institutional experience and regulatory awareness. With 8+ years of active trading across equities, indices, commodities and currencies, with a current focus on commodities and a swing-trading approach, Nikhil helps learners connect concepts with practical market situations while maintaining clarity, process discipline and risk awareness.",
    careerHistory: [
      "HDFC Bank",
      "ICICI Bank",
      "Edelweiss",
      "Aditya Birla Group"
    ],
    certifications: ["NISM Series VIII & XV", "JAIIB", "CAIIB"],
    expertise: [
      "Technical Analysis",
      "Price Action",
      "Elliott Wave",
      "Fundamental Analysis",
      "Risk Management"
    ],
    philosophy: "Clarify the concept. Understand the reasoning. Apply it with discipline.",
    approach: "Focuses on helping learners connect concepts with practical market situations while maintaining clarity, process discipline and risk awareness."
  },
  {
    id: "mandar-rege",
    name: "Mandar Satish Rege",
    role: "Co-Founder & Lead Trainer",
    badge: "Advanced Analysis & Elliott Wave",
    experience: "20+ Years Investing & Trading • 10,000+ Learners Trained",
    bio: "Mandar brings more than two decades of experience in investing and trading, along with extensive experience in technical analysis education. His market experience spans stocks, indices, commodities, currencies and crypto, with a particular focus on options selling through hedged F&O strategies and disciplined risk and exposure management.",
    certifications: ["NISM Series VIII & XV"],
    expertise: [
      "Technical Analysis",
      "Price Action",
      "Elliott Wave",
      "Futures & Options",
      "Risk Management",
      "Trading Psychology"
    ],
    philosophy: "Understand it. Put it into practice. Learn from the process.",
    approach: "Known for bringing sincerity, dynamism and humour into his sessions, Mandar simplifies complex market concepts through relatable, real-world examples."
  },
  {
    id: "siddhesh-nirmal",
    name: "Siddhesh Nirmal",
    role: "Co-Founder & Director | Principal Officer – Research & Advisory",
    badge: "Research, Derivatives & Risk Architecture",
    experience: "10+ Years Hands-On Experience • Swing Trading & Market Analysis",
    bio: "Siddhesh brings 10+ years of hands-on experience across commodities and financial markets, with a strong focus on swing trading, trading patterns and structured market analysis. His approach centres on identifying clearly defined market patterns and translating complex concepts into practical, easy-to-understand frameworks.",
    certifications: ["NISM Series VIII & XV"],
    expertise: [
      "Market Analysis",
      "Swing Trading",
      "Trading Patterns",
      "Price Behaviour",
      "Structured Decision-Making"
    ],
    philosophy: "Simplify the complex, understand the pattern and let discipline drive the decision.",
    approach: "Energetic and approachable, emphasizing the process behind a market decision rather than simply memorising a strategy."
  },
  {
    id: "tushar-kale",
    name: "Tushar Kale",
    role: "Co-Founder & Director",
    badge: "Strategic Educator & Execution Mentor",
    experience: "18+ Years Leadership Experience • 8+ Years Hands-On Trading",
    bio: "Before moving into financial markets, Tushar built an executive career in the pharmaceutical industry across marketing, market research, brand management, business development, and senior leadership with organisations including Sun Pharmaceutical Industries, Panacea Biotec, Alembic Pharmaceuticals and Medley Pharmaceuticals.",
    certifications: ["NISM Series VIII & XV"],
    expertise: [
      "Technical Analysis",
      "Elliott Wave",
      "Price Action",
      "Futures & Options",
      "Risk Management",
      "Trading Psychology",
      "Market Structure"
    ],
    philosophy: "Understand the reasoning. Build the process. Make your own informed decisions.",
    approach: "Focuses on helping learners understand the why behind a market movement or trading setup, rather than simply following what to do."
  }
];

export const TRAINER_SUPPORTING_LINE = {
  headline: "Different expertise. One learning philosophy.",
  subline: "Simplify the concept. Understand the reasoning. Apply it thoughtfully. Review. Improve."
};

export const ABOUT_US_CONTENT = {
  title: "About Arthyx Education",
  headline: "Making Financial-Market Education More Practical",
  introParagraphs: [
    "Financial markets are constantly changing. For learners, the challenge is not simply finding information. It is understanding what matters, how concepts connect, and how to approach markets with greater clarity.",
    "Arthyx Education was created to make financial-market learning more structured, practical and relevant. We bring together market experience, simplified learning and a progressive approach to help learners build their understanding step by step.",
    "Our education framework brings together experience-backed knowledge, practical application, risk awareness and disciplined thinking to make learning more meaningful beyond the classroom."
  ],
  whyArthyx: {
    heading: "Why Arthyx Education",
    body: "There is no shortage of financial-market content today. But access to information does not always lead to understanding.\n\nArthyx Education focuses on creating a clearer learning path—one that connects concepts with practical situations and develops a more informed approach to financial markets.\n\nOur framework brings together experience-backed knowledge, practical application, risk awareness and disciplined thinking to make learning more meaningful beyond the classroom."
  },
  whatWeBelieveIn: [
    {
      title: "Learning should be practical",
      description: "Financial-market concepts become more useful when their relevance can be understood in real situations. We focus on connecting knowledge with practical market contexts rather than treating concepts as isolated information."
    },
    {
      title: "Complexity should be simplified",
      description: "Financial markets involve complex ideas, but learning about them does not have to be unnecessarily complicated. We make concepts clearer and more structured while retaining the depth needed to understand them properly."
    },
    {
      title: "Risk awareness is essential",
      description: "Markets involve uncertainty. Understanding opportunities also means understanding the risks and limitations involved. Risk awareness is therefore an important part of meaningful market education."
    },
    {
      title: "Discipline matters",
      description: "Knowledge alone does not determine how someone approaches a market situation. A disciplined process and the ability to question assumptions are equally important to developing a thoughtful approach."
    },
    {
      title: "Decisions should be informed",
      description: "Our objective is not to tell learners what decisions to make. It is to help them build the understanding and perspective needed to evaluate market situations more thoughtfully."
    },
    {
      title: "Learning takes time",
      description: "There are no meaningful shortcuts to developing market understanding. We believe in progressive learning that allows knowledge to develop over time, with each stage building on the foundation created before it."
    }
  ],
  progressiveApproach: {
    title: "A Progressive Approach to Learning",
    description: "At Arthyx Education, learning is structured as a progression rather than a collection of disconnected topics.\n\nOur four-stage education framework — Launchpad, Velocity, Orbit and Cruise Control — reflects this approach. The detailed curriculum and focus areas are covered separately within the SAGA journey."
  },
  ourApproach: [
    {
      title: "Experience-backed",
      description: "Our learning is informed by practical understanding of financial markets, helping learners connect concepts with the realities of market participation."
    },
    {
      title: "Structured",
      description: "A clear learning progression helps learners understand what they are learning, why it matters and how it connects with what comes next."
    },
    {
      title: "Actionable",
      description: "We focus on knowledge that can be understood in context and applied to practical market situations."
    },
    {
      title: "Transparent",
      description: "We believe financial education should communicate clearly and responsibly, without creating unrealistic expectations."
    },
    {
      title: "Long-term",
      description: "The aim is to develop lasting market understanding rather than encourage dependence on shortcuts, predictions or quick answers."
    }
  ],
  commitment: {
    title: "Our Commitment",
    paragraphs: [
      "Arthyx Education is committed to creating financial-market learning experiences that are clear, practical, responsible and grounded in real-world understanding.",
      "As we continue to build and evolve, our focus remains on helping learners develop a stronger foundation, apply their knowledge effectively and approach the markets with greater awareness.",
      "Because financial-market education is not about finding shortcuts. It is about building the understanding to navigate the journey with greater clarity."
    ]
  }
};

export const STORIES_PAGE_CONTENT = {
  title: "Stories of Change",
  headline: "Learning Experiences That Speak for Themselves",
  subheadline: "Every learner brings a different starting point and learning journey. Hear directly from the Arthyx learning community about their experiences, perspectives, and takeaways from their time with Arthyx Education.",
  studentStories: [
    {
      name: "Aditya Kulkarni",
      role: "Software Architect & Systems Engineer",
      location: "Pune, Maharashtra",
      journey: "Completed Launchpad → Velocity → Orbit → Cruise Control",
      quote: "Before joining Arthyx, my trades were dictated by scattered Telegram alerts and news headlines. In Launchpad and Velocity, I learned how to read price action directly from the charts. Today, I do not enter a position unless my defined risk parameters align mathematically.",
      transformation: "Shifted from impulsive indicator-chasing to disciplined execution based on structural swing levels."
    },
    {
      name: "Priya Deshmukh",
      role: "Founder, Specialty Retail & Investor",
      location: "Mumbai, Maharashtra",
      journey: "SAGA Graduate (13 Weeks Sequential)",
      quote: "What impressed me was the complete lack of false promises or get-rich-quick claims. The trainers constantly reiterated that capital protection is priority number one. That mental shift alone saved my capital from common beginner mistakes.",
      transformation: "Eliminated emotional trading and built a structured capital allocation matrix."
    },
    {
      name: "Vikram Mehta",
      role: "Corporate Finance Specialist",
      location: "Bengaluru, Karnataka",
      journey: "SAGA Graduate & Dedicated Mentee",
      quote: "The deep dive into Elliott Wave and derivatives in Orbit was exceptional. What made it work was the Cruise Control review stage, where mentors dissected actual trade reasoning step by step.",
      transformation: "Mastered defined-risk multi-leg options and multi-timeframe wave synchronization."
    },
    {
      name: "Suresh Patil",
      role: "Mechanical Engineer & Working Professional",
      location: "Nashik, Maharashtra",
      journey: "Launchpad to Cruise Control",
      quote: "The small batch size allowed me to ask all my basic questions without hesitation. Having 6 months of recording access meant I could review complex Fibonacci setups over the weekend.",
      transformation: "Developed patience and a personal trading playbook aligned with my professional routine."
    }
  ],
  videoTestimonials: [
    {
      id: "vid-1",
      title: "From Random Trades to a Written Trading Journal",
      participant: "Rahul Shinde",
      background: "IT Professional, Pune",
      duration: "4:15 min",
      previewThumbnail: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80",
      keyTakeaway: "How learning market structure and trade auditing eliminated revenge trading."
    },
    {
      id: "vid-2",
      title: "Managing Risk in Volatile Markets",
      participant: "Neha Sharma",
      background: "Doctor & Healthcare Professional, Mumbai",
      duration: "3:48 min",
      previewThumbnail: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80",
      keyTakeaway: "Structuring investment decisions with defined downside and zero indicator clutter."
    },
    {
      id: "vid-3",
      title: "Mastering Elliott Wave & Options Selling",
      participant: "Amit Verma",
      background: "Entrepreneur & Swing Trader, Thane",
      duration: "5:20 min",
      previewThumbnail: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80",
      keyTakeaway: "Transitioning from directional guesswork to hedged, non-directional option structures."
    }
  ]
};

export const INSIGHTS_PAGE_CONTENT = {
  title: "Blog and Insights",
  headline: "Ideas and Insights From the World of Markets",
  subheadline: "Fresh perspectives to deepen your understanding of financial markets.",
  articles: [
    {
      id: "market-structure-fundamentals",
      title: "Understanding Market Structure Before Taking Your First Trade",
      excerpt: "Why understanding swing highs, swing lows, and liquidity pools is the foundational prerequisite before deploying capital in financial markets.",
      category: "Price Action",
      readTime: "6 min read",
      date: "September 2026",
      content: [
        "Many aspiring market participants begin their journey by loading dozens of indicators onto their charts. Moving averages, oscillators, and momentum gauges create a visual illusion of control, yet fail to answer the primary question: where is the market currently trading in its structural cycle?",
        "Market structure is simply the chronological record of buying and selling pressure. By observing whether price is creating consistent higher highs and higher lows, or lower highs and lower lows, an analyst can objectively determine market bias without bias or guesswork.",
        "In Stage 01 (Launchpad), we strip away the noise and teach learners to view price action as auction theory in real time. Once you understand who is participating and where key liquidity rests, decision-making becomes grounded in logic."
      ]
    },
    {
      id: "risk-reward-asymmetry",
      title: "Why Capital Preservation Precedes Profit Generation",
      excerpt: "Examining the mathematical reality of drawdown and why managing your downside is the only genuine edge retail participants possess.",
      category: "Risk Management",
      readTime: "5 min read",
      date: "August 2026",
      content: [
        "A 50% loss in trading capital requires a 100% gain merely to break even. This immutable law of mathematics highlights why professional market operators treat capital preservation as their foremost objective.",
        "When entering a market position, the outcome of any single trade is essentially uncertain. However, the amount of capital committed and the predetermined exit point are completely under the participant's control.",
        "By enforcing strict position-sizing rules and adhering to risk-to-reward ratios that tilt probabilities in your favor, you insulate your portfolio against inevitable losing streaks."
      ]
    },
    {
      id: "demystifying-elliott-wave",
      title: "Demystifying Elliott Wave: Rhythm, Not Crystal Ball",
      excerpt: "How wave theory provides a structural roadmap of collective human psychology rather than a magical prediction tool.",
      category: "Market Psychology",
      readTime: "7 min read",
      date: "July 2026",
      content: [
        "Elliott Wave theory is frequently misunderstood as an attempt to predict exact price targets to the penny. In reality, Ralph Nelson Elliott identified that market price moves in recurring patterns driven by alternating phases of optimism and pessimism.",
        "By recognizing whether a market is in an impulsive trend phase or a corrective consolidation, traders gain clarity on when to be aggressive and when to remain patient on the sidelines.",
        "At Arthyx, we teach Elliott Wave alongside Fibonacci confluence to build probabilistic scenarios, always accompanied by clear invalidation levels."
      ]
    },
    {
      id: "options-mechanics-retail",
      title: "The Reality of Options: Beyond the Lottery Mentality",
      excerpt: "Why retail buyers consistently lose on naked call buying and how understanding implied volatility and theta changes the game.",
      category: "Derivatives",
      readTime: "8 min read",
      date: "June 2026",
      content: [
        "Derivatives exist primarily as hedging and risk-transfer instruments for institutional market participants. Yet, retail traders often treat out-of-the-money options as cheap lottery tickets.",
        "Understanding option Greeks—specifically Delta, Theta decay, and Vega volatility sensitivity—is critical before entering any options trade. Without this foundation, a trader can be right about market direction and still suffer a total loss due to time decay or volatility contraction.",
        "Stage 03 (Orbit) systematically deconstructs options pricing to help learners design defined-risk spreads and hedged strategies."
      ]
    }
  ]
};

export const RESEARCH_PAGE_CONTENT = {
  title: "Research Services",
  headline: "Explore Arthyx Research Services",
  body1: "Arthyx Education focuses on structured learning and education around financial markets.",
  body2: "For information about Arthyx's research services and related offerings, please visit the dedicated research website.",
  body3: "The research website provides the relevant information, services, and disclosures related to the research offering.",
  ctaText: "Explore Research Services",
  notice: "Note: Educational offerings provided on this website are strictly for informational and educational purposes. Research and advisory offerings are governed separately under their respective regulatory frameworks and terms."
};

export const DISCLAIMER_PAGE_CONTENT = {
  title: "Disclaimer",
  lastUpdated: "September 2026",
  intro: "The information provided on the Arthyx Education website, including its courses, learning resources, articles, videos, webinars, and other educational materials, is intended for general educational and informational purposes only.",
  sections: [
    {
      title: "Educational Purpose Only",
      content: [
        "Arthyx Education is designed to help learners develop a structured understanding of financial markets, market concepts, research, risk awareness, and related topics.",
        "The information and educational content provided through this website and its courses should not be considered personalised investment advice, financial advice, a recommendation to buy, sell, or hold any security, or an offer or solicitation to invest in any financial product or security.",
        "Learners are responsible for evaluating information based on their own circumstances, objectives, financial position, risk tolerance, and investment experience before making any financial or investment decision."
      ]
    },
    {
      title: "No Assurance of Returns",
      content: [
        "Financial markets involve risk, and past performance is not indicative of future results. No information, educational material, example, discussion, strategy, or market observation provided by Arthyx Education should be understood as a guarantee or assurance of returns, profits, or any particular investment outcome.",
        "Market conditions can change, and actual results may differ from examples, illustrations, expectations, or historical observations discussed in educational materials."
      ]
    },
    {
      title: "Research and Advisory Services",
      content: [
        "Where research or advisory services are offered separately by Arthyx or an associated entity, such services may be subject to applicable regulatory requirements, registrations, disclosures, agreements, and terms.",
        "Any research or advisory service should be considered separately from the general educational content available through Arthyx Education. Applicable regulatory information and disclosures will be provided wherever required."
      ]
    },
    {
      title: "Accuracy of Information",
      content: [
        "Arthyx Education aims to provide information that is relevant and useful for learning. However, financial-market information, data, examples, and market conditions can change over time.",
        "Arthyx Education does not guarantee that all information available on the website will always be complete, current, accurate, or suitable for every individual or purpose."
      ]
    },
    {
      title: "Learner Responsibility",
      content: [
        "Any decision to invest, trade, participate in financial markets, or use financial information remains solely the responsibility of the individual.",
        "Before making any investment decision, users should conduct their own evaluation and, where appropriate, seek advice from a suitably qualified and appropriately registered professional."
      ]
    },
    {
      title: "Third-Party Information and Links",
      content: [
        "The website may refer to or link to third-party websites, resources, platforms, or information for additional context or convenience. Arthyx Education does not control third-party websites and is not responsible for their content, availability, accuracy, or policies."
      ]
    },
    {
      title: "Acceptance of This Disclaimer",
      content: [
        "By accessing or using the Arthyx Education website and its educational content, you acknowledge that you have read and understood this Disclaimer and agree to use the information provided at your own discretion and responsibility."
      ]
    }
  ],
  contact: {
    email: "arthyx.marketing@gmail.com",
    address: "Registered Office, Mumbai, Maharashtra, India"
  }
};

export const PRIVACY_PAGE_CONTENT = {
  title: "Privacy Policy",
  lastUpdated: "September 2026",
  intro: "Arthyx Education respects your privacy and is committed to handling personal information responsibly. This Privacy Policy explains how we may collect, use, store, and protect personal information when you visit or use the Arthyx Education website, enrol in our courses, submit an enquiry, or interact with our services.",
  sections: [
    {
      title: "Information We May Collect",
      content: [
        "Depending on how you interact with our website and services, we may collect information that you voluntarily provide, such as:",
        "• Name",
        "• Email address",
        "• Mobile or contact number",
        "• Information submitted through enquiry, registration, or course enrolment forms",
        "• Information required to provide or manage our educational services",
        "• Other information you choose to provide when communicating with us",
        "We may also collect limited technical or usage information associated with your interaction with the website, where applicable."
      ]
    },
    {
      title: "How We Use Your Information",
      content: [
        "Information collected through the website may be used for purposes such as:",
        "• Responding to enquiries and requests",
        "• Processing and managing course enrolments",
        "• Providing access to educational services and resources",
        "• Communicating with learners regarding courses, services, or relevant updates",
        "• Improving our website, learning experience, and services",
        "• Maintaining website security and functionality",
        "• Meeting applicable legal or regulatory requirements",
        "We will use personal information for the purposes for which it is collected or for other purposes permitted by applicable law."
      ]
    },
    {
      title: "Communication and Marketing",
      content: [
        "Where required, we will seek appropriate consent before using personal information for promotional or marketing communications.",
        "You may request to stop receiving marketing communications from us by using the available unsubscribe option or by contacting us through the details provided below."
      ]
    },
    {
      title: "Cookies and Similar Technologies",
      content: [
        "The Arthyx Education website may use cookies or similar technologies to support website functionality, understand website usage, and improve the user experience.",
        "Where applicable, users may manage certain cookie preferences through their browser or available website controls."
      ]
    },
    {
      title: "Sharing of Information",
      content: [
        "Arthyx Education may share personal information with service providers or other parties where reasonably necessary to operate the website, provide educational services, process transactions, communicate with users, maintain technical systems, or comply with applicable legal requirements.",
        "We do not intend to use or disclose personal information for purposes unrelated to the purpose for which it was collected, except where permitted or required by applicable law."
      ]
    },
    {
      title: "Data Security",
      content: [
        "Arthyx Education takes reasonable measures to protect personal information against unauthorised access, misuse, alteration, disclosure, or loss.",
        "However, no method of transmitting or storing information electronically can be guaranteed to be completely secure."
      ]
    },
    {
      title: "Data Retention",
      content: [
        "Personal information will be retained only for as long as reasonably necessary for the purposes for which it was collected, to provide relevant services, meet business requirements, or comply with applicable legal obligations.",
        "Specific retention periods may vary depending on the type and purpose of the information."
      ]
    },
    {
      title: "Your Rights",
      content: [
        "Subject to applicable law, you may have rights relating to your personal information, including the ability to request access to, correction of, or other action concerning your personal information, or to withdraw consent where applicable.",
        "Requests relating to personal information may be submitted using the contact details provided below."
      ]
    },
    {
      title: "Children's Privacy",
      content: [
        "The Arthyx Education website and courses are intended for individuals who are legally able to use the services and enter into applicable agreements. We do not knowingly seek to collect personal information from individuals where such collection is prohibited by applicable law."
      ]
    },
    {
      title: "Changes to This Privacy Policy",
      content: [
        "Arthyx Education may update this Privacy Policy from time to time to reflect changes in its services, practices, or applicable legal requirements.",
        "The updated version will be published on this page with the revised “Last Updated” date."
      ]
    }
  ],
  contact: {
    email: "arthyx.marketing@gmail.com",
    address: "Registered Office, Mumbai, Maharashtra, India"
  }
};

export const REFUND_POLICY_CONTENT = {
  title: "Refund Policy",
  lastUpdated: "September 2026",
  intro: "At Arthyx Education, we aim to provide learners with clear information about our courses, educational offerings, and applicable fees before enrolment. This Refund Policy explains the general approach to refunds for paid educational services offered through the Arthyx Education website.",
  sections: [
    {
      title: "Course and Service Fees",
      content: [
        "The applicable fee for a course, webinar, programme, or other paid offering will be communicated to the learner before enrolment or payment.",
        "By completing a payment, the learner acknowledges the applicable course or service details and the terms presented at the time of enrolment."
      ]
    },
    {
      title: "Refund Eligibility",
      content: [
        "Refund eligibility will depend on the specific course, programme, webinar, or service purchased and the refund terms communicated at the time of enrolment.",
        "Where a particular offering has specific refund or cancellation conditions, those conditions will apply to that offering.",
        "If no separate refund terms have been communicated for a particular offering, learners may contact Arthyx Education to request clarification regarding the applicable refund process."
      ]
    },
    {
      title: "Requesting a Refund",
      content: [
        "Refund requests should be submitted through the official contact details provided by Arthyx Education and should include the relevant enrolment or transaction details required to identify the purchase.",
        "Arthyx Education will review refund requests based on the applicable terms of the purchased offering."
      ]
    },
    {
      title: "Processing of Approved Refunds",
      content: [
        "Where a refund is approved, the refund will be processed through the applicable payment method or payment process, subject to the applicable payment service conditions and processing timelines.",
        "Any refund amount, where applicable, will be determined according to the terms applicable to the relevant offering."
      ]
    },
    {
      title: "Changes or Cancellation by Arthyx Education",
      content: [
        "If Arthyx Education cancels or materially changes a paid offering, the applicable options, including any refund that may be available, will be communicated to affected learners in accordance with the terms applicable to that offering."
      ]
    },
    {
      title: "No Automatic Refund",
      content: [
        "Payment for a course or educational service does not automatically create a right to a refund unless a refund is available under the applicable terms of the offering or is otherwise required under applicable law."
      ]
    },
    {
      title: "Policy Updates",
      content: [
        "Arthyx Education may update this Refund Policy from time to time. The updated version will be published on this page with the revised “Last Updated” date."
      ]
    }
  ],
  contact: {
    email: "arthyx.marketing@gmail.com",
    address: "Registered Office, Mumbai, Maharashtra, India"
  }
};

export const TERMS_CONTENT = {
  title: "Terms & Conditions",
  lastUpdated: "September 2026",
  intro: "Welcome to Arthyx Education. These Terms & Conditions govern your access to and use of the Arthyx Education website, educational content, courses, webinars, learning resources, and related services.\n\nBy accessing the website or enrolling in an Arthyx Education offering, you agree to comply with these Terms & Conditions. If you do not agree with these terms, please do not use the website or its services.",
  sections: [
    {
      title: "About Arthyx Education",
      content: [
        "Arthyx Education provides educational content and structured learning programmes focused on financial markets and related areas of market understanding, research, discipline, risk awareness, and informed decision-making.",
        "The educational services provided through the website are intended to support learning and knowledge development."
      ]
    },
    {
      title: "Educational Content and Financial Decisions",
      content: [
        "Information provided through Arthyx Education is for educational and informational purposes.",
        "The content should not be interpreted as personalised investment advice, financial advice, or a recommendation to buy, sell, or hold any security or financial product.",
        "Financial-market participation involves risk. Learners are responsible for their own financial and investment decisions and should consider their individual circumstances before acting on any information.",
        "Where research or advisory services are separately provided, such services may be governed by additional terms, disclosures, agreements, and applicable regulatory requirements."
      ]
    },
    {
      title: "Course Enrolment and Access",
      content: [
        "Course enrolment is subject to the applicable course details and payment terms presented at the time of registration.",
        "Access to course materials or other educational resources may be subject to the applicable access conditions of the relevant offering.",
        "Learners are responsible for providing accurate information required for registration and for maintaining the confidentiality of any account credentials or access information provided to them."
      ]
    },
    {
      title: "Acceptable Use",
      content: [
        "Users agree to use the website and educational services only for lawful purposes. Users must not:",
        "• Use the website in a manner that violates applicable laws or regulations.",
        "• Attempt to gain unauthorised access to the website, systems, accounts, or restricted content.",
        "• Copy, reproduce, distribute, sell, or commercially exploit Arthyx Education's educational materials without prior permission.",
        "• Share paid course access or account credentials with others where such sharing is not permitted.",
        "• Interfere with the operation, security, or availability of the website or services."
      ]
    },
    {
      title: "Intellectual Property",
      content: [
        "Unless otherwise stated, the website, course materials, written content, graphics, videos, presentations, branding, logos, and other materials made available by Arthyx Education are owned by or used with permission by Arthyx Education and are protected by applicable intellectual property laws.",
        "Access to educational content does not transfer ownership or intellectual property rights to the learner.",
        "Unless expressly permitted, users may not reproduce, republish, distribute, modify, record, upload, transmit, sell, or commercially exploit Arthyx Education content."
      ]
    },
    {
      title: "Third-Party Services and Links",
      content: [
        "The website may contain links to or integrations with third-party websites, platforms, payment services, communication tools, or other services.",
        "Arthyx Education does not control third-party services and is not responsible for their availability, content, security, privacy practices, or terms.",
        "Users should review the applicable terms and policies of third-party services before using them."
      ]
    },
    {
      title: "Website Availability",
      content: [
        "Arthyx Education aims to keep its website and services available and functional. However, uninterrupted availability cannot be guaranteed.",
        "Access may occasionally be affected by maintenance, technical issues, updates, security requirements, third-party service interruptions, or circumstances beyond our reasonable control."
      ]
    },
    {
      title: "Limitation of Liability",
      content: [
        "To the extent permitted by applicable law, Arthyx Education shall not be responsible for losses or damages arising from reliance on educational information, market information, or learning materials provided through the website, or from decisions made by users based on such information.",
        "Nothing in these Terms & Conditions is intended to exclude or limit any liability that cannot legally be excluded or limited under applicable law."
      ]
    },
    {
      title: "Changes to Services and Terms",
      content: [
        "Arthyx Education may update, modify, suspend, or discontinue parts of the website, educational content, courses, or services from time to time.",
        "These Terms & Conditions may also be updated to reflect changes in the services, business practices, or applicable legal requirements.",
        "The updated version will be published on this page with the revised “Last Updated” date."
      ]
    },
    {
      title: "Governing Law",
      content: [
        "These Terms & Conditions shall be governed by the laws applicable in India, subject to applicable legal requirements.",
        "Any disputes arising in connection with the website or services shall be subject to the jurisdiction of the appropriate courts, as applicable."
      ]
    }
  ],
  contact: {
    email: "arthyx.marketing@gmail.com",
    address: "Registered Office, Mumbai, Maharashtra, India"
  }
};

export const CONTACT_PAGE_CONTENT = {
  title: "Contact Us",
  headline: "Let's Start Your Learning Journey",
  subheadline: "Whether you are beginning to explore financial markets or looking to build on your existing understanding, the right questions can be a useful starting point.",
  intro: "If you would like to know more about Arthyx Education, our learning approach, courses, or upcoming sessions, get in touch with our team.",
  helpHeading: "We Are Here to Help",
  helpText: "Have a question about our courses or want to understand which learning path may be relevant to you? Share your enquiry with us, and our team will get back to you with the relevant information.",
  info: {
    email: "arthyx.marketing@gmail.com",
    phone: "+91 98200 12345",
    address: "Arthyx Education, Registered Office, Mumbai, Maharashtra, India",
    workingHours: "Monday to Saturday, 9:30 AM – 6:30 PM IST"
  },
  ctaBox: {
    headline: "Take the Next Step in Your Learning Journey",
    body: "If you are ready to understand the Arthyx learning approach and explore where to begin, you can also take part in an introductory session or upcoming webinar.",
    ctaText: "Explore the Introductory Session"
  }
};

export const FOOTER_CONTENT = {
  brand: "Arthyx",
  tagline: "Where Market Curiosity Meets Market Understanding.",
  description: "Experience-backed financial-market education designed to simplify complexity, strengthen analytical thinking and encourage disciplined, informed decision-making.",
  quickLinks: [
    { label: "Home", page: "home" },
    { label: "About Arthyx", page: "about" },
    { label: "SAGA Course", page: "saga" },
    { label: "Stories of Change", page: "stories" },
    { label: "Blog & Insights", page: "insights" },
    { label: "Research Services", page: "research" },
    { label: "Contact Us", page: "contact" },
    { label: "FAQs", page: "home", section: "faq" }
  ],
  learningJourney: [
    { label: "Launchpad (Stage 01)", page: "saga", stageId: "launchpad" },
    { label: "Velocity (Stage 02)", page: "saga", stageId: "velocity" },
    { label: "Orbit (Stage 03)", page: "saga", stageId: "orbit" },
    { label: "Cruise Control (Stage 04)", page: "saga", stageId: "cruise-control" }
  ],
  explore: [
    { label: "Eye-Opener Orientation (₹99)", action: "openReservation" },
    { label: "Market Insights", page: "insights" },
    { label: "Research & Advisory", page: "research" }
  ],
  legalLinks: [
    { label: "Disclaimer", page: "disclaimer" },
    { label: "Privacy Policy", page: "privacy" },
    { label: "Refund Policy", page: "refund" },
    { label: "Terms & Conditions", page: "terms" }
  ],
  connect: [
    { label: "WhatsApp Assistance", href: "https://wa.me/" },
    { label: "Email: arthyx.marketing@gmail.com", href: "mailto:arthyx.marketing@gmail.com" }
  ],
  copyright: "© 2026 Arthyx. All rights reserved.",
  disclaimer: "Educational content is intended for learning and informational purposes and should not be construed as investment advice or a recommendation to buy or sell any financial instrument."
};
