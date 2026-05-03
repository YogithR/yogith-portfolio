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
    "M.S. Computer Science candidate at DePaul University, specializing in cloud engineering, backend development, full-stack delivery, machine learning, and DevOps. Yogith has shipped production features, resolved critical incidents, and built scalable cloud-native pipelines on AWS — with hands-on experience across internships, academic projects, and research in carbon-aware AI scheduling. His work is defined by scalable architecture, observability, automated testing, reproducible experimentation, and clear cross-functional communication.",
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
    "Yogith Ramanan is pursuing a Master of Science in Computer Science at DePaul University (January 2025–present), building on a Bachelor of Engineering in Computer Science from Sri Krishna College of Engineering and Technology (July 2020–May 2024). His academic path reflects a strong foundation in software engineering, now extended with graduate-level work in cloud systems, backend architecture, applied machine learning, and DevOps pipelines.",
    "He is driven by roles that demand reliability, scalability, and precision — designing and operating backend services and APIs, deploying cloud-native and serverless systems, and applying machine learning where it delivers measurable outcomes. He is equally comfortable working across the full stack when a project requires it, with a focus on integration, observability, and systems that teams can test, monitor, and improve with confidence.",
    "His internship experience in product development support and full-stack delivery reinforced how production issues surface for real users and how disciplined debugging, clear documentation, and proactive communication accelerate resolution. He brings a consistent bias toward automation, testing, and reproducible workflows — habits sharpened through coursework, hands-on projects, and research.",
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
      "Diagnosed and resolved customer-facing UI issues across HTML, CSS, and JavaScript — reproducing defects, isolating root causes, and validating fixes end-to-end before deployment.",
      "Triaged and responded to production incidents under time pressure, reproducing issues, identifying causes, and coordinating with engineering teams to deploy resolutions, minimizing user impact and downtime.",
      "Authored clear defect reports and technical documentation that accelerated resolution cycles and enabled non-engineering teams to understand and communicate fixes to stakeholders.",
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
      "Built and iterated on web components that surfaced backend data as interactive dashboards and customer-facing screens, improving data accessibility and user workflow efficiency.",
      "Worked across frontend, backend, and database layers as requirements evolved, prioritizing stability, minimizing regressions, and ensuring consistent delivery.",
      "Followed GitHub-based branching, code review, and merge workflows to keep changes traceable, well-documented, and ready for confident deployment.",
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
  tags: ["Python", "Cloud systems", "Simulation", "Sustainability"] as const,
  /** Short overview (2 sentences). */
  summary:
    "This research explores how AI inference workloads can be routed across global cloud regions when both carbon intensity and latency constraints must be simultaneously optimized. The work involved building a discrete-event simulator using real-world workload traces, designing adaptive hybrid routing policies, and benchmarking them against static geographic and carbon-only baselines to identify strategies that reduce carbon impact without violating service-level objectives (SLOs).",
  /** Tight outcome statements; each maps to detailed resume bullets. */
  outcomes: [
    "Constrained Hybrid routing policy — 54.8-point reduction in carbon intensity while meeting latency SLOs",
    "Adaptive Hybrid controller — dynamically selects the best-performing policy based on real-time conditions",
    "Pareto analysis across policies — trade-off characterization between carbon savings, latency, and cost",
    "Simulation framework grounded in real AWS pricing, carbon intensity data, and network latency metrics",
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
    id: "drug-prioritization",
    name: "Cloud-Native Multimodal AI Platform for Drug Candidate Prioritization",
    period: "February 2026 – April 2026",
    summary:
      "End-to-end pipeline for drug candidate scoring, combining molecular structure features with multimodal learning. Built a FastAPI backend serving the trained model with containerized deployment via Docker, enabling scalable inference for chemistry and biotech workflows.",
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
      "Designed and implemented a Java SDK for agent-to-agent messaging, featuring strongly typed contracts, streaming response handling, and task lifecycle management — enabling structural interoperability between autonomous AI agents.",
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
      "Streamlit-powered food recognition app using MobileNetV2 on the Food-101 dataset for calorie estimation and nutritional tracking. Deployed as an interactive web application with real-time image classification.",
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
      "Event-driven document processing pipeline on AWS using S3 triggers, Lambda functions, and Amazon Textract for asynchronous text extraction with idempotent processing and DynamoDB-backed state management. REST API with API-key authentication, latency monitoring, and error tracking via CloudWatch.",
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
