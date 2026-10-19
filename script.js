// ---------- Data (mirrors the original React components) ----------
const SKILL_GROUPS = [
  {
    "title": "Programming",
    "items": [
      "TypeScript",
      "JavaScript",
      "Python",
      "PHP",
      "C#",
      "Java",
      "C++",
      "SQL",
      "PL/SQL"
    ]
  },
  {
    "title": "Frontend",
    "items": [
      "React",
      "Next.js",
      "Vue 3",
      "HTML5",
      "CSS3",
      "Tailwind CSS"
    ]
  },
  {
    "title": "Backend",
    "items": [
      "NestJS",
      "Laravel",
      "Node.js",
      "ASP.NET Core MVC",
      "REST APIs",
      "JWT",
      "RBAC"
    ]
  },
  {
    "title": "Data & ORM",
    "items": [
      "PostgreSQL",
      "MySQL",
      "MongoDB",
      "Oracle Database",
      "SQL Server",
      "Prisma",
      "Eloquent"
    ]
  },
  {
    "title": "Tools & Platforms",
    "items": [
      "Git",
      "GitHub",
      "Git CLI",
      "Terminal",
      "Shell Commands",
      "Postman",
      "Docker",
      "Vercel",
      "Cloudflare"
    ]
  },
  {
    "title": "Operating Systems",
    "items": [
      "macOS (Unix-based)",
      "Windows 11"
    ]
  }
];
const PROFICIENCY = [
  ["Backend Development", 92],
  ["Database Design & SQL", 90],
  ["REST API Architecture", 88],
  ["Authentication & Security", 85],
  ["NLP & Machine Learning", 78],
];
const PROJECTS = [
{"title": "Expert HRMS (SHOCHOL)", "category": "Professional \u00b7 Ongoing Development", "stack": ["Laravel 12", "Vue 3", "TypeScript", "MySQL", "Docker", "Cloudflare"], "desc": "Independently developing a multi-tenant HRMS with isolated tenant databases, subdomain-based workspaces, and role-based authorization. Implementing employee management, attendance, leave approvals, payroll, income-tax processing, audit logs, and secure PDF documents.", "highlights": ["Multi-tenant HRMS", "Isolated Tenant Databases", "Payroll & Income Tax", "Role-based Authorization"], "href": "https://shochol.xyz/", "linkLabel": "Live site"},
{"title": "Expert ATS", "category": "Professional \u00b7 Ongoing Development", "stack": ["Next.js 16", "React 19", "NestJS 12", "TypeScript", "PostgreSQL", "Prisma"], "desc": "Independently building a multi-tenant applicant tracking platform with organization workspaces, job publishing, recruitment pipelines, and permission-based access. Developing secure REST APIs, candidate profiles, resume processing, and consent-aware AI-assisted recruitment and shortlisting.", "highlights": ["Organization Workspaces", "Recruitment Pipelines", "Secure REST APIs", "Consent-aware AI"], "href": null, "linkLabel": "Private project"},
{"title": "Byte Innovations Corporate Website", "category": "Professional \u00b7 Live", "stack": ["Next.js 16", "React 19", "JavaScript", "MongoDB Atlas", "Nodemailer", "Vercel"], "desc": "Independently designed, developed, and deployed a responsive corporate website with services, portfolio showcases, and Google Analytics. Built dynamic MongoDB job listings, career applications with resume uploads, validated contact forms, and SMTP email notifications.", "highlights": ["Independent Delivery", "Career Portal", "Resume Uploads", "SMTP Notifications"], "href": "https://www.b-innovations.com/", "linkLabel": "Live site"},
{"title": "Expert POS", "category": "Professional \u00b7 Team Collaboration", "stack": ["Laravel", "PHP", "MySQL", "JavaScript"], "desc": "Contributed to selected development tasks and enhancements in a shared Laravel-based POS and business management application. Collaborated with team members on sales, inventory, purchasing, accounting, and multi-location operations.", "highlights": ["Team Collaboration", "Sales & Inventory", "Business Management", "Multi-location Operations"], "href": "https://expertpos.xyz/", "linkLabel": "Live site"},
  {
  title:"Solix Clothing Brand Full-Stack E-commerce Platform",
  category:"Full-Stack · E-commerce",
  stack:["NestJS","Next.js","React","TypeScript","PostgreSQL","JWT"],
  desc:"Full-stack e-commerce platform featuring a NestJS REST API and Next.js + React frontend. Implements JWT authentication, role-based access control, normalized PostgreSQL schema, complete cart-to-order lifecycle, and multi-method payment workflows.",
  highlights:[
    "Full-Stack Architecture",
    "JWT Authentication & RBAC",
    "PostgreSQL Database Design",
    "Cart, Order & Payment Workflow",
    "Admin Analytics Dashboard",
    "Production-Ready"
  ],
  href:"https://github.com/sadatnuman/Solix-Clothing-Brand.git"
},
  {
  title:"NewsArchive ASP.NET Core MVC System",
  category:"Backend · Web Application",
  stack:["ASP.NET Core MVC","C#","SQL Server","Entity Framework"],
  desc:"3-tier ASP.NET Core MVC news management system with Repository Pattern and Dependency Injection. Includes advanced search, analytics dashboard, trending algorithm, recommendations, and role-based authentication.",
  highlights:[
    "3-Tier Architecture (DAL/BLL/Presentation)",
    "Repository Pattern & DI",
    "Advanced Search & Filtering",
    "Trending & Recommendation Engine",
    "Analytics Dashboard",
    "RBAC Authentication"
  ],
  href:"https://github.com/sadatnuman/News-Archive-.Net-Core-MVC-3-tier-Architecture-.git"
},
  { title:"University Admission Management System", category:"Database · Enterprise", stack:["Oracle SQL","PL/SQL"],
    desc:"Comprehensive admission lifecycle database built in Oracle. Fully normalized schemas modeling applicants, departments, programs, evaluations, and payments — automated with stored procedures, packages, and triggers to maintain data integrity.",
    highlights:["Oracle SQL & PL/SQL","Fully Normalized Schema","Stored Procedures","Triggers & Packages","Relational Modeling","Enterprise-Grade Design"],
    href:"https://github.com/sadatnuman/University-Admission-Management-System-DBProject" },
  { title:"Meat Bazar – Supply Chain & E-commerce", category:"Full-Stack · Multi-Role", stack:["PHP","MySQL","JavaScript","HTML/CSS"],
    desc:"Multi-role digital supply chain platform serving customers, admins, distributors, and collectors. Full CRUD, inventory, and authentication built with PHP/MySQL — planned with Agile Scrum, UML, WBS, Gantt charts, and COCOMO estimation.",
    highlights:["Multi-role System","Full CRUD Operations","Inventory Management","Secure Authentication","Agile Scrum Process","Workflow Automation"],
    href:"https://github.com/sadatnuman/Meat-Bazar-Digital-Supply-Chain-E-commerce-System-" },
  { title:"AI Content Detection — BERT & RoBERTa", category:"NLP · Deep Learning", stack:["Python","BERT","RoBERTa","PyTorch"],
    desc:"Transformer-based NLP system for detecting AI-generated vs. human-written text. Built data preprocessing pipelines, tokenization, and fine-tuning workflows. Compared models across accuracy, precision, recall, and F1-score metrics.",
    highlights:["BERT & RoBERTa Models","NLP Pipeline","Transformer Fine-tuning","Evaluation Metrics","AI Detection","Model Comparison"],
    href:"https://github.com/sadatnuman/AI-Content-Detection-using-BERT-RoBERTa" },
  { title:"Fake News Detection — NLP & ML", category:"Machine Learning · NLP", stack:["Python","Scikit-learn","NLTK","TF-IDF"],
    desc:"Complete fake news classification pipeline trained on ~25,000 news articles. Text cleaning, TF-IDF vectorization, and Multinomial Naive Bayes classification with thorough feature engineering and accuracy evaluation.",
    highlights:["Full NLP Pipeline","TF-IDF Vectorization","Naive Bayes Classifier","25K Article Dataset","Feature Engineering","Scikit-learn"],
    href:"https://github.com/sadatnuman/Fake-News-Detection-using-NLP-MachineLearning" },
  { title:"Seaside City — 2D Animated Simulation", category:"Graphics · Simulation", stack:["C++","OpenGL","GLUT"],
    desc:"Real-time 2D city simulation with 25+ animated graphical objects — vehicles, ships, planes, clouds, wind turbines, and environmental effects. Modular rendering architecture for efficient real-time updates.",
    highlights:["OpenGL Programming","Real-time Animation","25+ Objects","Modular Rendering","Interactive Simulation","Computer Graphics"],
    href:"https://github.com/sadatnuman/Seaside-City-2D-Animated-Graphics-Simulation" },
  { title:"Let's Travel — Management System", category:"Desktop · Database", stack:["C#",".NET WinForms","SQL Server"],
    desc:"Desktop travel management application with SQL Server integration. Booking workflows, role-based authentication, and travel package management with separate admin and user dashboards.",
    highlights:["WinForms Desktop App","SQL Server Integration","Booking Workflows","Role-based Auth","Admin & User Roles","Full CRUD"],
    href:"https://github.com/sadatnuman/Let-s-Travel-Travel-Management-System" },
  { title:"Vidyasagar Book Store System", category:"Desktop · Java", stack:["Java","Swing"],
    desc:"GUI bookstore management application with login, registration, and CAPTCHA validation. Admin dashboard powered by JTable for visualizing books and users with full management features.",
    highlights:["Java Swing GUI","CAPTCHA Validation","Admin Dashboard","JTable Visualization","Authentication","OOP Architecture"],
    href:"https://github.com/sadatnuman/Vidyasagar-Book-Store-Management-System" },
];
const TIMELINE = [
  { school:"American International University-Bangladesh (AIUB)", degree:"BSc in Computer Science & Engineering", meta:"Final Year · Major: Software Engineering · CGPA 3.70 / 4.00", location:"Dhaka, Bangladesh", period:"2026" },
  { school:"Trust College, Uttara", degree:"Higher Secondary Certificate (Science)", meta:"GPA 5.00 / 5.00", location:"Dhaka, Bangladesh", period:"2021" },
  { school:"Pangsha Government George Model High School", degree:"Secondary School Certificate (Science)", meta:"GPA 4.61 / 5.00", location:"Pangsha, Bangladesh", period:"2019" },
];
const CERTS = [
  { icon:"i-award", title:"IT Essentials", org:"Cisco Networking Academy", year:"2022" },
  { icon:"i-users", title:"IEEE Student Member", org:"IEEE", year:"2025" },
  { icon:"i-users", title:"IEEE Computer Society Member", org:"IEEE Computer Society", year:"2025" },
];
const INTERESTS = ["Backend Development","Reinforcement Learning","AI & NLP","Database Systems","REST API Architecture","Software Engineering","Requirements Engineering","Technical Mentoring","Continuous Learning"];

// ---------- Helpers ----------
const $ = (s, r=document) => r.querySelector(s);
const $$ = (s, r=document) => Array.from(r.querySelectorAll(s));
const el = (html) => { const t = document.createElement("template"); t.innerHTML = html.trim(); return t.content.firstElementChild; };

// Brand marks from Devicon; generic concepts intentionally remain text-only.
const SKILL_LOGOS = {
  "JWT": "jsonwebtokens",
  "TypeScript": "typescript",
  "JavaScript": "javascript",
  "Python": "python",
  "PHP": "php",
  "C#": "csharp",
  "Java": "java",
  "C++": "cplusplus",
  "React": "react",
  "Next.js": "nextjs",
  "Vue 3": "vuejs",
  "HTML5": "html5",
  "CSS3": "css3",
  "Tailwind CSS": "tailwindcss",
  "NestJS": "nestjs",
  "Laravel": "laravel",
  "Node.js": "nodejs",
  "ASP.NET Core MVC": "dotnetcore",
  "PostgreSQL": "postgresql",
  "MySQL": "mysql",
  "MongoDB": "mongodb",
  "Oracle Database": "oracle",
  "SQL Server": "microsoftsqlserver",
  "Prisma": "prisma",
  "Git": "git",
  "GitHub": "github",
  "Git CLI": "git",
  "Postman": "postman",
  "Docker": "docker",
  "Vercel": "vercel",
  "Cloudflare": "cloudflare",
  "macOS (Unix-based)": "apple",
  "Windows 11": "windows11"
};

// ---------- Render: Skills ----------
const skillsRoot = $("#skill-groups");
SKILL_GROUPS.forEach(g => {
  const items = g.items.map(i => `<span class="skill-chip rounded-lg border border-border bg-surface px-3 py-1.5 text-sm text-foreground transition-all hover:border-primary/50 hover:bg-primary/10 hover:text-primary cursor-default">${SKILL_LOGOS[i] ? `<span class="skill-logo"><img src="assets/skills/${SKILL_LOGOS[i]}.svg" alt="" width="24" height="24" loading="lazy" /></span>` : ""}<span>${i}</span></span>`).join("");
  skillsRoot.appendChild(el(`
    <div class="reveal glass rounded-2xl p-5">
      <div class="mb-3 flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-primary">
        <span class="h-1.5 w-1.5 rounded-full bg-primary"></span> ${g.title}
      </div>
      <div class="flex flex-wrap gap-2">${items}</div>
    </div>`));
});

// ---------- Render: Proficiency ----------
const profRoot = $("#proficiency");
PROFICIENCY.forEach(([label, val]) => {
  profRoot.appendChild(el(`
    <div>
      <div class="mb-2 flex justify-between text-sm">
        <span class="text-foreground">${label}</span>
        <span class="font-mono text-primary">${val}%</span>
      </div>
      <div class="h-1.5 overflow-hidden rounded-full bg-surface-elevated">
        <div class="prof-bar h-full bg-gradient-primary" data-val="${val}" style="width:0%"></div>
      </div>
    </div>`));
});

// ---------- Render: Projects ----------
PROJECTS.forEach(p => {
  const projRoot = $(p.category.startsWith("Professional") ? "#professional-projects-grid" : "#projects-grid");
  const highlights = p.highlights.slice(0,4).map(h=>`<span class="rounded-md bg-primary/10 px-2 py-1 text-[11px] font-medium text-primary">${h}</span>`).join("");
  const stack = p.stack.map(s=>`<span class="rounded border border-border px-2 py-0.5 text-[11px] text-muted-foreground">${s}</span>`).join("");
  projRoot.appendChild(el(`
    <${p.href ? 'a' : 'article'} ${p.href ? `href="${p.href}" target="_blank" rel="noreferrer"` : ''} class="reveal group relative flex flex-col overflow-hidden rounded-2xl glass p-6 transition-all hover:-translate-y-1.5 hover:border-primary/50">
      <div class="pointer-events-none absolute -top-24 -right-24 h-48 w-48 rounded-full bg-primary/0 blur-3xl transition-all duration-500 group-hover:bg-primary/30"></div>
      <div class="relative flex items-start justify-between gap-3">
        <div>
          <div class="text-xs font-mono uppercase tracking-wider text-primary">${p.category}</div>
          <h3 class="mt-2 font-display text-xl font-bold leading-tight text-foreground transition-colors group-hover:text-primary">${p.title}</h3>
        </div>
        <div class="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-border bg-surface text-muted-foreground transition-all group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground">
          <svg class="h-5 w-5 transition-transform group-hover:rotate-12"><use href="#i-arrowup"/></svg>
        </div>
      </div>
      <p class="relative mt-4 text-sm leading-relaxed text-muted-foreground">${p.desc}</p>
      <div class="relative mt-5 flex flex-wrap gap-1.5">${highlights}</div>
      <div class="relative mt-5 flex items-center justify-between border-t border-border pt-4">
        <div class="flex flex-wrap gap-1.5">${stack}</div>
        <span class="flex items-center gap-1.5 text-xs text-muted-foreground transition-colors group-hover:text-primary">
          <svg class="h-4 w-4"><use href="#${p.linkLabel === 'Live site' ? 'i-arrowup' : p.href ? 'i-github' : 'i-code2'}"/></svg> ${p.linkLabel || 'Source'}
        </span>
      </div>
    </${p.href ? 'a' : 'article'}>`));
});

// ---------- Render: Timeline ----------
const tlRoot = $("#timeline");
TIMELINE.forEach(t => {
  tlRoot.appendChild(el(`
    <div class="reveal relative pl-14">
      <div class="absolute left-0 top-1 flex h-11 w-11 items-center justify-center rounded-xl border border-primary/40 bg-surface text-primary glow-blue">
        <svg class="h-5 w-5"><use href="#i-grad"/></svg>
      </div>
      <div class="glass rounded-2xl p-5">
        <div class="flex flex-wrap items-start justify-between gap-2">
          <h3 class="font-display text-lg font-semibold">${t.school}</h3>
          <span class="rounded-full border border-primary/30 bg-primary/10 px-3 py-0.5 text-xs font-mono text-primary">${t.period}</span>
        </div>
        <div class="mt-1 text-sm text-foreground">${t.degree}</div>
        <div class="mt-2 flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
          <span>${t.meta}</span>
          <span class="h-1 w-1 rounded-full bg-muted-foreground"></span>
          <span>${t.location}</span>
        </div>
      </div>
    </div>`));
});

// ---------- Render: Certs ----------
const certRoot = $("#certs");
CERTS.forEach(c => {
  certRoot.appendChild(el(`
    <div class="reveal group glass flex items-center gap-4 rounded-2xl p-4 transition-all hover:border-primary/40">
      <div class="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
        <svg class="h-5 w-5"><use href="#${c.icon}"/></svg>
      </div>
      <div class="min-w-0 flex-1">
        <div class="font-medium text-foreground">${c.title}</div>
        <div class="text-xs text-muted-foreground">${c.org} · ${c.year}</div>
      </div>
    </div>`));
});

// ---------- Render: Interests ----------
const intRoot = $("#interests");
INTERESTS.forEach(i => intRoot.appendChild(el(`<span class="rounded-md bg-surface px-2.5 py-1 text-xs text-muted-foreground">${i}</span>`)));

// ---------- Footer year ----------
$("#year").textContent = new Date().getFullYear();

// ---------- Typing animation ----------
(function(){
  const roles = ["Software Engineer","Full-Stack Developer","SaaS Developer","Backend Developer","Database Administrator","REST API Developer","NestJS Developer","Problem Solver"];
  const target = $("#typed");
  let i=0, len=0, del=false;
  function step(){
    const word = roles[i];
    if(!del){
      len++; target.textContent = word.slice(0,len);
      if(len===word.length){ del=true; return setTimeout(step,1500); }
    } else {
      len--; target.textContent = word.slice(0,len);
      if(len===0){ del=false; i=(i+1)%roles.length; }
    }
    setTimeout(step, del?50:90);
  }
  step();
})();

// ---------- Navbar scroll + active link ----------
(function(){
  const header = $("#navbar");
  const nav = $("#nav-inner");
  const links = $$("#nav-links a");
  const sectionIds = ["home","about","skills","projects","education","contact"];
  function onScroll(){
    const scrolled = window.scrollY > 20;
    header.classList.toggle("py-3", scrolled);
    header.classList.toggle("py-5", !scrolled);
    nav.classList.toggle("glass", scrolled);
    const y = window.scrollY + 120;
    let active = "home";
    for(const id of sectionIds){
      const s = document.getElementById(id);
      if(s && s.offsetTop <= y && s.offsetTop + s.offsetHeight > y) active = id;
    }
    links.forEach(a => {
      const isA = a.dataset.nav === active;
      a.classList.toggle("text-primary", isA);
      a.classList.toggle("text-muted-foreground", !isA);
      let u = a.querySelector(".nav-underline");
      if(isA && !u){
        u = document.createElement("span");
        u.className = "nav-underline absolute inset-x-3 -bottom-px h-px bg-gradient-primary";
        a.appendChild(u);
      } else if(!isA && u){ u.remove(); }
    });
  }
  window.addEventListener("scroll", onScroll, { passive:true });
  onScroll();
})();

// ---------- Mobile menu ----------
(function(){
  const btn = $("#menu-btn");
  const menu = $("#mobile-menu");
  const icon = $("#menu-icon");
  const opened = `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>`;
  const closed = `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>`;
  let open = false;
  function set(o){ open=o; menu.classList.toggle("hidden", !o); icon.innerHTML = o?opened:closed; }
  btn.addEventListener("click", () => set(!open));
  menu.querySelectorAll("a").forEach(a => a.addEventListener("click", () => set(false)));
})();

// ---------- Reveal-on-scroll + proficiency bar fill ----------
(function(){
  const io = new IntersectionObserver((entries) => {
    entries.forEach(en => {
      if(en.isIntersecting){
        en.target.classList.add("is-visible");
        en.target.querySelectorAll(".prof-bar").forEach(b => b.style.width = b.dataset.val + "%");
        io.unobserve(en.target);
      }
    });
  }, { threshold:0.12, rootMargin:"-40px" });
  document.querySelectorAll(".reveal, .glass").forEach(n => io.observe(n));
  // proficiency bars sit inside a glass card; ensure they fill on view
  const profCard = document.querySelector("#proficiency");
  if(profCard){
    const io2 = new IntersectionObserver(es => es.forEach(e => { if(e.isIntersecting){ profCard.querySelectorAll(".prof-bar").forEach(b=>b.style.width=b.dataset.val+"%"); io2.disconnect(); } }), { threshold:0.2 });
    io2.observe(profCard);
  }
})();

// ---------- In-page CV preview ----------
(function () {
  const dialog = document.getElementById("cv-preview");
  const trigger = document.getElementById("preview-cv");
  const frame = document.getElementById("cv-preview-frame");
  trigger.addEventListener("click", () => {
    if (!frame.getAttribute("src")) frame.src = frame.dataset.src;
    dialog.showModal();
    document.documentElement.classList.add("cv-preview-open");
    document.getElementById("close-cv").focus();
  });
  document.getElementById("close-cv").addEventListener("click", () => dialog.close());
  dialog.addEventListener("click", (event) => {
    const bounds = dialog.getBoundingClientRect();
    if (event.target === dialog && (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom)) dialog.close();
  });
  dialog.addEventListener("close", () => {
    document.documentElement.classList.remove("cv-preview-open");
    trigger.focus();
  });
})();
