/**
 * Central content model for the portfolio (resume-driven).
 * Update this file to change copy across the site; section components import from here.
 *
 * Optional assets:
 * - Photo: `public/images/profile.jpg` → set `personal.profileImage` to `/images/profile.jpg`
 * - Resume PDF: place under `public/assets/` and link from the resume CTA when built
 */

export const personal = {
  name: "Yogith Ramanan",
  title: "Computer Science Graduate Student · Full-Stack & ML Engineer",
  tagline:
    "I build reliable cloud systems, ML pipelines, and polished interfaces—with a focus on performance, observability, and sustainable AI infrastructure.",
  email: "yogithramana@gmail.com",
  phone: "773-550-1620",
  location: "Chicago, IL · USA",
  linkedIn: "https://www.linkedin.com/in/yogith-ramanan-2a8293208/",
  github: "https://github.com/YogithR",
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
    "Cloud systems, ML pipelines, and interfaces engineered for production—not demos.",
  /** Short intro for recruiters (2–3 sentences). */
  summary:
    "M.S. Computer Science candidate at DePaul University, with a B.E. from Sri Krishna College of Engineering and Technology. I’ve delivered full-stack features and production UI support as an intern at GURU IT Services, built data-backed web components at Gateway Software Solution, and more recently focused on AWS-native pipelines, reproducible ML, and research on carbon-aware scheduling for multi-region inference—with an emphasis on observability, testing, and clear cross-functional communication.",
} as const;

/**
 * About section copy — portfolio tone, grounded in education and stated interests on your resume.
 * Optional accent image: set `accentImage` to your file under `public/images/`.
 */
export const about = {
  eyebrow: "Profile",
  title: "About me",
  description:
    "Education, focus areas, and how I approach software, cloud, and applied machine learning in a professional setting.",
  paragraphs: [
    "I’m pursuing an M.S. in Computer Science at DePaul University (January 2025–present), building on a B.E. in Computer Science from Sri Krishna College of Engineering and Technology (July 2020–May 2024). That path reflects how I think about the field: a solid undergraduate base in software engineering, now extended with graduate work that emphasizes rigorous systems thinking, scalability, and responsible use of AI.",
    "I’m motivated by roles where reliability and clarity matter—designing and operating backend services and APIs, shipping cloud-native and serverless systems, and applying machine learning when it’s tied to measurable outcomes and sound evaluation. I’m comfortable working across the stack when a project requires it, with particular interest in integration, observability, and interfaces that teams can test, monitor, and improve over time.",
    "My internships in product development/support and full-stack delivery reinforced how production issues show up for users and how clear communication accelerates fixes. I carry that into technical work: disciplined debugging, documentation others can act on, and a bias toward automation, testing, and reproducible experimentation—habits I continue to sharpen through coursework, hands-on projects, and research.",
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
  /** Wide accent image — replace with e.g. `/images/about-accent.jpg` after adding the file. */
  accentImage: "/images/about-accent-placeholder.svg",
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
    "Organized by category to match my résumé—everything listed below appears there; nothing is trimmed for effect.",
} as const;

/**
 * Skill categories — titles match portfolio section labels; items are verbatim from the résumé.
 */
export const skillCategories: SkillCategory[] = [
  {
    title: "Programming Languages",
    items: ["Java", "Python", "SQL", "JavaScript"],
  },
  {
    title: "Frontend / UI",
    items: ["React", "HTML5", "CSS", "Streamlit"],
  },
  {
    title: "Backend / Integration",
    items: [
      "REST APIs",
      "FastAPI",
      "OpenAPI",
      "Uvicorn",
      "Flask",
      "Django",
      "Spring Boot",
      "Node.js",
      "Data Integration",
      "Real-Time Data Processing",
      "JUnit",
      "Maven",
    ],
  },
  {
    title: "Cloud / DevOps",
    items: [
      "AWS (EC2, S3, RDS, Lambda, API Gateway, CloudWatch, AWS Batch, VPC, SageMaker, EKS)",
      "Docker",
      "Docker Compose",
      "Kubernetes",
      "Terraform",
      "Git",
      "GitHub Actions",
      "CI/CD",
      "Jenkins",
      "Linux",
      "MLflow",
      "pytest",
    ],
  },
  {
    title: "Platforms / Tools",
    items: [
      "Databricks",
      "VS Code",
      "PyCharm",
      "Eclipse",
      "IntelliJ IDEA",
      "Jupyter Notebook",
      "MySQL Workbench",
      "Google Colab",
      "YAML",
    ],
  },
  {
    title: "Databases",
    items: ["PostgreSQL", "MySQL", "Oracle", "MongoDB", "SQL Server", "DynamoDB"],
  },
  {
    title: "Software Engineering Principles",
    items: [
      "Data Structures and Algorithms",
      "OOP",
      "SDLC",
      "Agile/Scrum",
      "SOLID Principles",
      "Design Patterns",
      "Unit Testing",
      "Integration Testing",
      "Debugging",
      "Production Support",
      "Incident Investigation",
      "API Security",
      "Cloud Security Fundamentals",
      "Reproducible ML",
      "Ranking / Decision Support",
    ],
  },
  {
    title: "AI / ML",
    items: [
      "Machine Learning",
      "Deep Learning",
      "Multimodal AI",
      "Graph Neural Networks (GCN)",
      "TensorFlow",
      "PyTorch",
      "scikit-learn",
      "NumPy",
      "Pandas",
      "Feature Engineering",
      "Model Evaluation",
      "Experiment Tracking",
      "Data Preprocessing",
    ],
  },
  {
    title: "Biotech / Cheminformatics",
    items: [
      "RDKit",
      "SMILES",
      "Molecular Descriptors",
      "Morgan Fingerprints",
      "Drug Candidate Prioritization",
      "Molecular Property Prediction",
    ],
  },
  {
    title: "Visualization",
    items: ["Tableau", "Power BI", "Plotly", "Matplotlib", "Excel"],
  },
];

export type ExperienceRole = {
  company: string;
  role: string;
  location: string;
  start: string;
  end: string;
  /** Website-friendly lines derived from résumé bullets (same scope, tightened wording). */
  highlights: readonly string[];
  /** Tags grounded in what each role explicitly involved (tools, scope, or stack). */
  tags: readonly string[];
};

export const experienceSection = {
  eyebrow: "Work",
  title: "Experience",
  description:
    "Internships focused on production-minded delivery—debugging real user-facing issues, shipping fixes, and collaborating across functions.",
} as const;

export const experience: readonly ExperienceRole[] = [
  {
    company: "GURU Information Technology Services",
    role: "Product Development and Support Engineer Intern",
    location: "Chennai, Tamil Nadu, India",
    start: "January 2024",
    end: "June 2024",
    highlights: [
      "Diagnosed and resolved customer-facing UI problems across HTML, CSS, and JavaScript—reproducing defects, isolating root causes, and validating fixes end-to-end before they reached users again.",
      "Triaged production incidents using log analysis, implemented patches, and documented remediation so repeat failures were less likely.",
      "Wrote clear defect reports and validation summaries that helped engineering prioritize fixes and kept communication tight around live issues.",
    ],
    tags: ["HTML / CSS / JavaScript", "Production support", "Incident response", "Cross-functional communication"],
  },
  {
    company: "Gateway Software Solution",
    role: "Full Stack Intern",
    location: "Coimbatore, Tamil Nadu, India",
    start: "July 2022",
    end: "September 2022",
    highlights: [
      "Built and refined web components that surfaced backend data as interactive dashboards and customer-facing screens.",
      "Worked across front-end, back-end, and database layers as requirements changed, prioritizing stability and fewer regressions.",
      "Followed GitHub-based branching and review practices so changes stayed traceable and easier to ship with confidence.",
    ],
    tags: ["Full-stack", "Dashboards", "GitHub workflows"],
  },
];

export const educationSection = {
  eyebrow: "Academics",
  title: "Education",
  description: "Formal training that underpins my software, systems, and ML work.",
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

/** Snapshot lines for the résumé CTA — complementary to other sections, not a repeat of long-form About copy. */
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
  eyebrow: "Résumé",
  title: "Quick highlights & download",
  description:
    "At-a-glance signals for recruiters; explore projects and experience above for depth.",
} as const;

export const contactSection = {
  eyebrow: "Reach out",
  title: "Contact",
  description:
    "Open to internships and full-time roles in software engineering—especially teams working on cloud systems, reliable backends, and applied ML.",
  /** Short CTA line under the heading (recruiter-oriented). */
  opportunityLine:
    "If you’re hiring or want to discuss a project, reach me by email or the form—LinkedIn works too.",
} as const;

export const featuredResearchSection = {
  eyebrow: "Research",
  title: "Featured research",
  description:
    "A focused highlight from recent work—simulation-driven routing for lower carbon without sacrificing latency SLOs.",
} as const;

/** Carbon-aware scheduling study — website copy derived from résumé bullets (metrics and claims preserved). */
export const featuredResearch = {
  projectTitle: "Carbon-Aware Scheduling for Multi-Region AI Inference",
  period: "January 2026 – March 2026",
  tags: ["Python", "Cloud systems", "Simulation", "Sustainability"] as const,
  /** Short overview (2 sentences). */
  summary:
    "This project asks how to route inference requests across global regions when both electricity carbon intensity and network latency matter. I built a discrete-event simulator on real traces, then designed and evaluated hybrid routing policies—including constrained and adaptive controllers—against strong static baselines and prior carbon-aware systems.",
  /** Tight outcome statements; each maps to detailed résumé bullets. */
  outcomes: [
    "Python discrete-event simulation comparing 8 request-routing policies across 5 AWS regions and 3 model workloads (BERT-base, BERT-large, ResNet-50), replaying 33,600 requests over 7 days with measured carbon-intensity and latency data.",
    "Constrained Hybrid policy: 54.8-point carbon-intensity reduction vs static baselines with zero SLO violations and 62.3 ms average latency—demonstrating carbon savings without breaking service objectives.",
    "Adaptive Hybrid controller: closed-loop feedback on per-workload P95 latency headroom to adjust routing weights dynamically, removing hand-tuned parameters.",
    "Pareto analysis plus a five-scenario deployment framework (strict through batch-async SLOs), benchmarked against CASPER, Google CICS, and Microsoft-style carbon-aware computing references.",
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
  /** Short portfolio summary (rewritten from résumé bullets). */
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
    "Selected engineering work spanning SDK design, applied ML, AWS serverless systems, and multimodal decision support—summarized for quick scanning.",
} as const;

export const projects: readonly ProjectEntry[] = [
  {
    id: "drug-prioritization",
    name: "Cloud-Native Multimodal AI Platform for Drug Candidate Prioritization",
    period: "February 2026 – April 2026",
    summary:
      "End-to-end pipeline for drug-like candidates: reproducible ingestion from SMILES and metadata through RDKit features, multimodal model comparison, and a transparent ranking layer for prioritization—with a production-style API and CI.",
    tech: [
      "Python",
      "RDKit",
      "PyTorch",
      "scikit-learn",
      "MLflow",
      "FastAPI",
      "Docker Compose",
      "GitHub Actions",
      "Prometheus",
      "pytest",
    ],
    highlights: [
      "YAML-driven training workflows with structured evaluation across classical, tree-based fusion, and GCN-style graph–tabular fusion models.",
      "Deterministic ranking with descriptor penalties, confidence, tie-breaks, and reason codes for explainable decision support.",
      "Containerized FastAPI service (predict / rank / batch-rank), Docker Compose packaging, automated tests, and metrics-ready instrumentation.",
    ],
    imageSrc: "/images/projects/drug-prioritization.jpg",
    featured: true,
    links: {
      repository: "https://github.com/YogithR/Cloud-Native-Multimodal-Drug-Prioritization-",
    },
  },
  {
    id: "a2a-sdk",
    name: "A2A Java SDK — Agent-to-Agent Communication Platform",
    period: "January 2025 – June 2025",
    summary:
      "Java SDK for agent-to-agent messaging with typed contracts, streaming responses, and logging aimed at traceable integrations in distributed agent systems.",
    tech: ["Java", "Maven", "JUnit", "Streaming APIs", "Structured logging"],
    highlights: [
      "Typed request/response models with metadata for extensible agent protocols.",
      "Streaming handlers and structured logs to support observability across calls.",
      "Payload validation, edge-case handling, and consistent error semantics for integrators.",
    ],
    imageSrc: "/images/projects/a2a-sdk.jpg",
    links: {
      repository: "https://github.com/YogithR/a2aproject-a2a-java",
    },
  },
  {
    id: "food-calorie",
    name: "Food Calorie Tracker",
    period: "August 2025 – October 2025",
    summary:
      "Streamlit app around a transfer-learned vision model on Food-101, with input hygiene, faster CPU inference, and workflows for human review and prediction history.",
    tech: ["Python", "TensorFlow", "MobileNetV2", "Streamlit", "Food-101"],
    highlights: [
      "Transfer learning with MobileNetV2 plus filtering to reduce non-food traffic.",
      "Caching and preprocessing tuned for responsive CPU inference.",
      "Human-in-the-loop corrections, logging, and exportable prediction history.",
    ],
    imageSrc: "/images/projects/food-calorie.jpg",
    links: {
      demo: "https://food-calorie-tracker-aqkncnfrudkuqhwqebgzqw.streamlit.app/",
      repository: "https://github.com/YogithR/Food-Calorie-Tracker",
    },
  },
  {
    id: "serverless-docs",
    name: "Serverless Document Processing System (AWS)",
    period: "December 2025 – January 2026",
    summary:
      "Event-driven document ingestion and text extraction on AWS, with idempotent state, authenticated APIs, and operational visibility suitable for production-style workloads.",
    tech: [
      "AWS Lambda",
      "S3",
      "Textract",
      "DynamoDB",
      "API Gateway",
      "CloudWatch",
      "IAM",
    ],
    highlights: [
      "Asynchronous Textract with DynamoDB-backed idempotent processing.",
      "REST retrieval with API-key auth; latency and error signals in CloudWatch.",
      "Strict HTTP semantics, input validation, and least-privilege IAM across services.",
    ],
    imageSrc: "/images/projects/serverless-docs.jpg",
    links: {
      repository: "https://github.com/YogithR/Serverless-Document-Processing-Pipeline-AWS-",
    },
  },
];
