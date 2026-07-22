/**
 * Central content model for the portfolio (resume-driven).
 * Update this file to change copy across the site; section components import from here.
 *
 * Optional assets:
 * - Photo: `public/images/profile.jpg` → set `personal.profileImage` to `/images/profile.jpg`
 * - Nav logo (optional): e.g. `public/images/logo.jpg` → set `personal.brandLogo` to `/images/logo.jpg` (leave "" for the default dot)
 * - Resume PDF: place under `public/assets/` and link from the resume CTA when built
 */

export const personal = {
  name: "Yogith Ramanan",
  title: "Computer Science Graduate Student · Software Engineer · Cloud · Backend · AI/ML · DevOps",
  tagline:
    "Cloud-native systems, production-grade APIs, ML pipelines, and serverless architectures — engineered for reliability, scale, and real-world impact.",
  email: "yogithramana@gmail.com",
  phone: "773-550-1620",
  location: "Chicago, IL · USA",
  linkedIn: "https://www.linkedin.com/in/yogith-ramanan-2a8293208/",
  github: "https://github.com/YogithR",
  /** Optional: small logo next to your name in the header. Add e.g. `public/images/logo.png` and set to `/images/logo.png`. Use "" to keep the cyan dot. */
  brandLogo: "/images/logo.jpg",
  /** Replace with "/images/profile.jpg" after adding your photo to public/images/ */
  profileImage: "/images/profile.jpg",
  /**
   * PDF resume served from `public/assets/`. Add your file as e.g. `resume.pdf` and match the path here.
   * Until the file exists, the button will 404 — add `public/assets/resume.pdf` (or update this string).
   */
  resumePdfPath: "/assets/Yogith_Ramanan_Resume.pdf",
} as const;

/** Hero-only copy (website-friendly; grounded in resume — no invented roles). */
export const hero = {
  availability: "Open to internships & full-time opportunities",
  /** One-line value proposition under your name. */
  headline:
    "Cloud-native systems, production-grade APIs, ML pipelines, and serverless architectures — engineered for reliability, scale, and real-world impact.",
  /** Short intro for recruiters (2–3 sentences). */
  summary:
    "I'm an M.S. Computer Science candidate at DePaul University, specializing in software engineering, cloud engineering, backend development, full-stack development, machine learning, and DevOps. I've shipped production features, resolved critical incidents, and built AWS-native pipelines, REST APIs, and CI/CD workflows through internships and academic projects. My current focus is research on carbon-aware scheduling for multi-region AI inference. I'm driven by scalable architecture, observability, automated testing, reproducible workflows, and clear cross-functional communication.",
} as const;

/**
 * About section copy — portfolio tone, grounded in education and stated interests on your resume.
 * Optional accent image: set `accentImage` to your file under `public/images/`.
 */
export const about = {
  eyebrow: "Profile",
  title: "About me",
  description:
    "Education, technical focus, and the engineering mindset behind every project.",
  paragraphs: [
    "I'm pursuing an M.S. in Computer Science at DePaul University, building on my B.E. in Computer Science from Sri Krishna College of Engineering and Technology. My academic path reflects a strong foundation in software engineering, now extended with graduate-level work in cloud systems, backend architecture, applied machine learning, and DevOps pipelines.",
    "I'm motivated by roles where reliability, scalability, and clarity matter — designing and operating backend services and APIs, shipping cloud-native and serverless systems, and applying machine learning where it delivers measurable outcomes. I'm comfortable working across the full stack when needed, with particular interest in integration, observability, and systems that teams can test, monitor, and improve with confidence.",
    "My internship experience in product development support and full-stack delivery taught me how production issues surface for real users and how disciplined debugging, clear documentation, and proactive communication accelerate fixes. I bring a consistent bias toward automation, testing, and reproducible workflows — habits I've sharpened through coursework, hands-on projects, and research.",
  ],
  /** Small highlight cards — facts only, from your resume and stated focus areas. */
  stats: [
    {
      label: "Graduate study",
      value: "M.S. Computer Science",
      detail: "DePaul University · Chicago, IL · 2025–present",
    },
    {
      label: "Undergraduate",
      value: "B.E. Computer Science",
      detail: "Sri Krishna College of Engineering and Technology · 2020–2024",
    },
    {
      label: "Professional focus",
      value: "Software · Cloud · Backend · AI/ML",
      detail: "Full-stack delivery, cloud-native systems, applied ML & research",
    },
  ],
  /** Wide accent image (campus / college photo). File must live under `public/images/` (see path below). */
  accentImage: "/images/depaul-campus.jpg",
} as const;

export type SkillCategory = {
  title: string;
  items: string[];
};

/** Section chrome for the Skills block (copy only). */
export const skillsSection = {
  eyebrow: "Stack",
  title: "Technical skills",
  description:
    "Organized by category to match my resume - everything listed below appears there; nothing is trimmed for effect.",
} as const;

/**
 * Skill categories — titles match portfolio section labels; items are verbatim from the resume.
 */
export const skillCategories: SkillCategory[] = [
  {
    title: "Languages",
    items: ["Java", "Python", "SQL", "JavaScript", "Bash"],
  },
  {
    title: "Frontend / UI",
    items: ["React", "Vite", "HTML5", "CSS3", "Streamlit"],
  },
  {
    title: "Backend / APIs",
    items: ["FastAPI", "Flask", "Django", "Spring Boot", "Node.js", "REST APIs", "OpenAPI", "GraphQL"],
  },
  {
    title: "Cloud (AWS)",
    items: [
      "EC2",
      "S3",
      "Lambda",
      "RDS",
      "API Gateway",
      "CloudWatch",
      "SageMaker",
      "EKS",
      "IAM",
      "VPC",
      "Textract",
      "EventBridge",
      "AWS Batch",
    ],
  },
  {
    title: "DevOps / MLOps",
    items: [
      "Docker",
      "Docker Compose",
      "Kubernetes",
      "Terraform",
      "GitHub Actions",
      "CI/CD",
      "Jenkins",
      "MLflow",
      "Linux",
    ],
  },
  {
    title: "AI / ML",
    items: [
      "PyTorch",
      "TensorFlow",
      "scikit-learn",
      "XGBoost",
      "LightGBM",
      "CatBoost",
      "SHAP",
      "Optuna",
      "Bayesian Tuning",
      "Feature Engineering",
      "Transfer Learning",
      "GCN",
      "Multimodal AI",
      "Parallel Model Training",
    ],
  },
  {
    title: "Agentic AI",
    items: [
      "LangGraph",
      "LangChain",
      "Multi-Agent Orchestration",
      "RAG",
      "ChromaDB",
      "Groq API",
      "OpenAI API",
      "Prompt Engineering",
      "Chain-of-Thought Reasoning",
    ],
  },
  {
    title: "Data / Databases",
    items: ["PostgreSQL", "MySQL", "MongoDB", "DynamoDB", "ChromaDB", "Pandas", "NumPy", "Spark"],
  },
  {
    title: "Cheminformatics",
    items: ["RDKit", "SMILES", "Morgan Fingerprints", "Molecular Descriptors", "Drug Candidate Prioritization"],
  },
  {
    title: "Observability / Testing",
    items: ["Prometheus", "CloudWatch", "pytest", "JUnit", "Structured Logging", "Integration Testing"],
  },
  {
    title: "Principles",
    items: [
      "OOP",
      "SOLID",
      "Design Patterns",
      "Agile/Scrum",
      "System Design",
      "Microservices",
      "Distributed Systems",
    ],
  },
];

export type ExperienceRole = {
  company: string;
  role: string;
  location: string;
  start: string;
  end: string;
  /** Website-friendly lines derived from resume bullets (same scope, tightened wording). */
  highlights: readonly string[];
  /** Tags grounded in what each role explicitly involved (tools, scope, or stack). */
  tags: readonly string[];
};

export const experienceSection = {
  eyebrow: "Work",
  title: "Experience",
  description:
    "Hands-on experience delivering production-grade software, supporting live systems, and building end-to-end features under real-world constraints.",
} as const;

export const experience: readonly ExperienceRole[] = [
  {
    company: "GURU Information Technology Services",
    role: "Product Development and Support Engineer Intern",
    location: "Chennai, Tamil Nadu, India",
    start: "January 2024",
    end: "June 2024",
    highlights: [
      "Supported product stability for customer-facing applications by resolving UI defects and production incidents across HTML, CSS, and JavaScript — reducing user-reported issues and improving end-user experience for enterprise clients.",
      "Accelerated incident resolution through log analysis, targeted patches, and documented remediation — minimizing repeat occurrences and reducing mean time to recovery (MTTR) across production systems.",
      "Authored detailed defect reports and validation summaries using structured debugging workflows; collaborated cross-functionally with engineering teams to enforce quality gates and improve deployment readiness end-to-end.",
    ],
    tags: ["HTML / CSS / JavaScript", "Log analysis", "MTTR", "Cross-functional collaboration"],
  },
  {
    company: "Gateway Software Solution",
    role: "Full Stack Intern",
    location: "Coimbatore, Tamil Nadu, India",
    start: "July 2022",
    end: "September 2022",
    highlights: [
      "Contributed to full-stack product delivery for a software consultancy, building interactive dashboards and data-driven interfaces that translated backend data into actionable business insights for end users.",
      "Maintained front-end, back-end, and database layers in parallel — reducing regressions across releases and ensuring consistent feature delivery against evolving client requirements.",
      "Applied GitHub-based version control workflows for branching, code review, and team collaboration; enforced deployment readiness standards that improved review efficiency and reduced integration conflicts.",
    ],
    tags: ["Full-stack", "Dashboards", "GitHub workflows", "Client delivery"],
  },
];

export const educationSection = {
  eyebrow: "Academics",
  title: "Education",
  description: "Formal training that underpins software, systems, cloud, AI/ML, and DevOps work.",
} as const;

export const education = [
  {
    school: "DePaul University",
    location: "Chicago, IL, USA",
    degree: "Master of Science in Computer Science",
    start: "January 2025",
    end: "Present",
  },
  {
    school: "Sri Krishna College of Engineering and Technology",
    location: "Coimbatore, Tamil Nadu, India",
    degree: "Bachelor of Engineering in Computer Science",
    start: "July 2020",
    end: "May 2024",
  },
] as const;

/** Snapshot lines for the resume CTA — complementary to other sections, not a repeat of long-form About copy. */
export const resumeQuickHighlights = [
  {
    label: "Graduate study",
    headline: "M.S. in Computer Science",
    supporting: "DePaul University · 2025–present · Chicago, IL",
  },
  {
    label: "Internships",
    headline: "Two software engineering internships",
    supporting: "Product development & support (GURU IT) · full-stack delivery (Gateway Software)",
  },
  {
    label: "Build & ship",
    headline: "Cloud, backend, and applied ML projects",
    supporting: "AWS serverless pipelines, APIs, SDK work, and multimodal ML platforms",
  },
  {
    label: "Research",
    headline: "Simulation-driven, sustainability-aware systems",
    supporting: "Carbon-aware multi-region inference routing — evaluation & decision frameworks",
  },
] as const;

export const resumeCtaSection = {
  eyebrow: "Resume",
  title: "Quick highlights & download",
  description:
    "At-a-glance signals for recruiters; explore projects and experience above for depth.",
} as const;

export const contactSection = {
  eyebrow: "Reach out",
  title: "Contact",
  description:
    "I’m actively seeking internships and full-time opportunities in Software Engineering, SDE, Cloud/DevOps, Backend Development, and AI/ML roles. I’m especially interested in building scalable systems, cloud-native platforms, reliable backend services, automation pipelines, and applied machine learning solutions that create real-world impact.",
  /** Short CTA line under the heading (recruiter-oriented). */
  opportunityLine:
    "If you’re hiring or want to discuss a project, reach me by email or the form—LinkedIn works too.",
} as const;

export const featuredResearchSection = {
  eyebrow: "Research",
  title: "Featured research",
  description:
    "Research in cloud-scale AI inference, carbon-aware scheduling, and simulation-driven evaluation for sustainable infrastructure.",
} as const;

/** Carbon-aware scheduling study — website copy derived from resume bullets (metrics and claims preserved). */
export const featuredResearch = {
  projectTitle: "Carbon-Aware Scheduling for Multi-Region AI Inference",
  period: "January 2026 – March 2026",
  tags: ["Python", "Cloud Systems", "Simulation"] as const,
  /** Short overview (2 sentences). */
  summary:
    "Research on routing AI inference workloads across global cloud regions when both carbon intensity and latency constraints must be optimized simultaneously. Built a discrete-event simulator on real-world traces, evaluated hybrid routing policies against static baselines, and produced an enterprise decision framework for sustainable multi-region deployment.",
  /** Tight outcome statements; each maps to detailed resume bullets. */
  outcomes: [
    "Discrete-event simulation evaluating 8 routing policies across 5 AWS regions and 3 AI workloads (BERT-base, BERT-large, ResNet-50) — 33,600 requests over 7 days with real carbon intensity and latency data.",
    "Constrained Hybrid policy: 54.8% per-request carbon cost reduction with only 24.8 ms average latency overhead and 0% SLO violations — deployable in cloud load balancers.",
    "Adaptive Hybrid controller using closed-loop P95 latency feedback — 29.7% carbon reduction at 4.53% SLO violation rate without manual parameter tuning.",
    "Enterprise decision framework mapping 5 deployment scenarios (strict SLO through batch async) with Pareto trade-off analysis across all 8 policy configurations.",
  ],
  /**
   * Optional links for the research card.
   * - `paper`: path under `public/` (e.g. `/assets/carbon-scheduling-paper.pdf`) or any https PDF URL.
   * - `repository`: public repo for the simulation / code. Do not reuse another project’s repo URL.
   */
  links: {
    paper: "/assets/carbon-aware-paper.pdf",
    repository: "https://github.com/venomez-viper/Carbon-Aware-Scheduling-for-Multi-Region-AI-Inference",
  },
} as const;

export type ProjectEntry = {
  id: string;
  name: string;
  period: string;
  /** Short portfolio summary (rewritten from resume bullets). */
  summary: string;
  /** Stack and tools explicitly reflected in the project description. */
  tech: readonly string[];
  /** Tight highlight lines (no invented metrics). */
  highlights: readonly string[];
  /** Image under `public/` — swap for real screenshots when available. */
  imageSrc: string;
  /** Larger featured layout on wide screens. */
  featured?: boolean;
  /** Optional public links — omit both until you have real URLs (no fake links). */
  links?: { demo?: string; repository?: string };
};

export const projectsSection = {
  eyebrow: "Builds",
  title: "Projects",
  description:
    "Selected projects demonstrating cloud engineering, applied machine learning, full-stack development, and production-ready system design.",
} as const;

export const projects: readonly ProjectEntry[] = [
  {
    id: "agentmind",
    name: "AgentMind — Autonomous Multi-Agent AutoML System",
    period: "April 2026 – June 2026",
    summary:
      "Free open-source AutoML platform targeting the $1.1B+ market as an alternative to DataRobot ($2,500/month) — enabling business analysts and enterprises to obtain a trained, optimized ML model in under 60 seconds with no data science expertise required.",
    tech: [
      "LangGraph",
      "FastAPI",
      "React",
      "Groq",
      "ChromaDB",
      "Vite",
      "scikit-learn",
      "XGBoost",
      "LightGBM",
      "CatBoost",
      "Optuna",
      "SHAP",
      "Vercel",
      "Render",
    ],
    highlights: [
      "88.5% accuracy on heart disease prediction and 85.3% on a 145,460-row weather dataset — compressing days of model selection into under 60 seconds with full SHAP explainability.",
      "Parallel ML pipeline training 5 models simultaneously (Random Forest, XGBoost, LightGBM, CatBoost, Logistic Regression) via ThreadPoolExecutor with Optuna Bayesian tuning.",
      "Full-stack React + Vite frontend with FastAPI backend — deployed live on Vercel and Render with CI/CD auto-deploy on every GitHub push.",
    ],
    imageSrc: "/images/projects/agentmind.jpg",
    featured: true,
    links: {
      demo: "https://agent-mind-ucf3.vercel.app",
      repository: "https://github.com/YogithR/AgentMind",
    },
  },
  {
    id: "drug-prioritization",
    name: "Multimodal AI Platform for Drug Candidate Prioritization",
    period: "January 2026 – March 2026",
    summary:
      "ML-driven drug candidate screening platform addressing pharmaceutical R&D bottlenecks where discovery costs exceed $2.5B per approved compound — offering reproducible, cost-effective prioritization as an alternative to manual assay workflows.",
    tech: [
      "PyTorch",
      "FastAPI",
      "Docker",
      "MLflow",
      "RDKit",
      "scikit-learn",
      "GitHub Actions",
      "Prometheus",
      "pytest",
    ],
    highlights: [
      "Graph-tabular fusion model outperformed logistic regression baseline and Random Forest fusion across ROC-AUC, PR-AUC, F1, and rank correlation — demonstrating that molecular graph structure improves prioritization quality.",
      "Deterministic candidate ranking with rule-based descriptor penalties, confidence scoring, and reason codes for auditable decision support.",
      "Containerized FastAPI service with /predict, /rank, /batch-rank endpoints, pytest + GitHub Actions CI, Docker Compose packaging, and Prometheus-compatible /metrics instrumentation.",
    ],
    imageSrc: "/images/projects/drug-prioritization.jpg",
    links: {
      repository: "https://github.com/YogithR/Cloud-Native-Multimodal-Drug-Prioritization-",
    },
  },
  {
    id: "serverless-docs",
    name: "Serverless Document Processing System",
    period: "September 2025 – October 2025",
    summary:
      "Fully serverless, event-driven document digitization pipeline on AWS — replacing manual OCR workflows with zero-ops processing that scales from 1 to millions of files without dedicated infrastructure overhead.",
    tech: [
      "AWS Lambda",
      "S3",
      "Textract",
      "DynamoDB",
      "API Gateway",
      "CloudWatch",
      "IAM",
      "EventBridge",
    ],
    highlights: [
      "End-to-end processing from S3 upload to structured text extraction and queryable API — automatic scaling with pay-per-use Lambda pricing and near-zero operational cost.",
      "RESTful API Gateway endpoints with API-key authentication, least-privilege IAM controls, and structured 4xx/5xx lifecycle handling.",
      "DynamoDB schema for document metadata lifecycle (UPLOADED → PROCESSED) with CloudWatch metrics for latency, failure observability, and full end-to-end traceability.",
    ],
    imageSrc: "/images/projects/serverless-docs.jpg",
    links: {
      repository: "https://github.com/YogithR/Serverless-Document-Processing-Pipeline-AWS-",
    },
  },
  {
    id: "food-calorie",
    name: "MealSnap AI — Image-Based Food Calorie & Nutrition Tracker",
    period: "June 2025 – August 2025",
    summary:
      "Production ML app targeting the $220B+ digital health and nutrition market — deployed as a live public web app with real-time food recognition, calorie estimation, and nutritional tracking for consumer wellness use cases.",
    tech: ["TensorFlow", "MobileNetV2", "Streamlit", "Python", "Food-101", "USDA FoodData Central"],
    highlights: [
      "85.3% top-1 and 96.2% top-3 accuracy on 101 food classes at under 250 ms CPU inference latency.",
      "Multi-signal OOD detection system (confidence threshold, entropy, top-3 spread) achieving 95%+ non-food rejection for reliable daily nutrition decisions.",
      "Human-in-the-loop correction workflow with portion-aware nutrition scaling (USDA FoodData Central, 124 foods) and meal history CSV export — optimized via @st.cache resource model caching and deployed on Streamlit Community Cloud.",
    ],
    imageSrc: "/images/projects/food-calorie.jpg",
    links: {
      demo: "https://food-calorie-tracker-aqkncnfrudkuqhwqebgzqw.streamlit.app/",
      repository: "https://github.com/YogithR/Food-Calorie-Tracker",
    },
  },
  {
    id: "a2a-sdk",
    name: "A2A Java SDK — Agent-to-Agent Communication Platform",
    period: "January 2025 – March 2025",
    summary:
      "Strongly typed Java SDK for enterprise agentic AI architectures — reducing integration time for multi-agent systems by providing reusable client abstractions that replace ad-hoc HTTP wiring with standardized, observable inter-agent communication.",
    tech: ["Java", "Spring Boot", "REST APIs", "Maven", "JUnit"],
    highlights: [
      "Strongly typed, reusable SDK replacing ad-hoc HTTP wiring — cutting boilerplate, enforcing consistent error contracts, and enabling traceable inter-agent calls with zero additional instrumentation.",
      "Rigorous payload validation, edge-case handling, and standardized error handling following SOLID principles.",
      "Packaged with Maven, enforced unit testing with JUnit, and consistent API design patterns for drop-in usability across multi-agent orchestration frameworks.",
    ],
    imageSrc: "/images/projects/a2a-sdk.jpg",
    links: {
      repository: "https://github.com/YogithR/a2aproject-a2a-java",
    },
  },
];
