// ---------- Data (mirrors the original React components) ----------
const SKILL_GROUPS = [
  { title: "Languages", items: ["C++", "Java", "C#", "JavaScript", "TypeScript", "Python"] },
  { title: "Backend & Web", items: ["NestJS", "REST APIs", ".NET Core MVC", "Next.js", "PHP", "ES6", "HTML", "CSS"] },
  { title: "Databases", items: ["PostgreSQL", "Oracle SQL", "MySQL", "SQL Server", "MongoDB", "PL/SQL"] },
  { title: "Tools", items: ["Git", "GitHub", "Postman", "OpenGL", "MATLAB", "Figma", "Cisco Packet Tracer"] },
  { title: "Core CS", items: ["OOP", "DSA", "DBMS", "Networks", "Backend Architecture", "JWT Auth", "RBAC", "SDLC"] },
];
const PROFICIENCY = [
  ["Backend Development", 92],
  ["Database Design & SQL", 90],
  ["REST API Architecture", 88],
  ["Authentication & Security", 85],
  ["NLP & Machine Learning", 78],
];
const PROJECTS = [
  { title:"Solix Clothing Brand Backend API", category:"Backend · E-commerce", stack:["NestJS","TypeScript","PostgreSQL","JWT"],
    desc:"Production-ready RESTful backend for an e-commerce clothing platform. Modular architecture with JWT authentication and role-based access control. Normalized PostgreSQL schemas covering users, products, orders, payments, and cart workflows.",
    highlights:["RESTful API Architecture","JWT Auth & RBAC","PostgreSQL Schema Design","Modular NestJS Structure","Order & Payment Flows","Production-Ready"],
    href:"https://github.com/sadatnuman/Solix-Clothing-Brand-Backend-API-System" },
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
  { school:"American International University-Bangladesh (AIUB)", degree:"BSc in Computer Science & Engineering", meta:"Final Semester · CGPA 3.71 / 4.00", location:"Dhaka, Bangladesh", period:"Present" },
  { school:"Trust College, Uttara", degree:"Higher Secondary Certificate (Science)", meta:"GPA 5.00 / 5.00", location:"Dhaka, Bangladesh", period:"2021" },
  { school:"Pangsha Government George Model High School", degree:"Secondary School Certificate (Science)", meta:"GPA 4.61 / 5.00", location:"Pangsha, Bangladesh", period:"2019" },
];
const CERTS = [
  { icon:"i-award", title:"IT Essentials", org:"Cisco Networking Academy", year:"2022" },
  { icon:"i-users", title:"IEEE Student Member", org:"IEEE", year:"2025" },
  { icon:"i-users", title:"IEEE Computer Society Member", org:"IEEE Computer Society", year:"2025" },
];
const INTERESTS = ["Backend Development","Reinforcement Learning","AI & NLP","Database Systems","REST API Architecture","Software Engineering","Technical Mentoring","Continuous Learning"];

// ---------- Helpers ----------
const $ = (s, r=document) => r.querySelector(s);
const $$ = (s, r=document) => Array.from(r.querySelectorAll(s));
const el = (html) => { const t = document.createElement("template"); t.innerHTML = html.trim(); return t.content.firstElementChild; };

// ---------- Render: Skills ----------
const skillsRoot = $("#skill-groups");
SKILL_GROUPS.forEach(g => {
  const items = g.items.map(i => `<span class="rounded-lg border border-border bg-surface px-3 py-1.5 text-sm text-foreground transition-all hover:border-primary/50 hover:bg-primary/10 hover:text-primary cursor-default">${i}</span>`).join("");
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
const projRoot = $("#projects-grid");
PROJECTS.forEach(p => {
  const highlights = p.highlights.slice(0,4).map(h=>`<span class="rounded-md bg-primary/10 px-2 py-1 text-[11px] font-medium text-primary">${h}</span>`).join("");
  const stack = p.stack.map(s=>`<span class="rounded border border-border px-2 py-0.5 text-[11px] text-muted-foreground">${s}</span>`).join("");
  projRoot.appendChild(el(`
    <a href="${p.href}" target="_blank" rel="noreferrer" class="reveal group relative flex flex-col overflow-hidden rounded-2xl glass p-6 transition-all hover:-translate-y-1.5 hover:border-primary/50">
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
          <svg class="h-4 w-4"><use href="#i-github"/></svg> Source
        </span>
      </div>
    </a>`));
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
  const roles = ["Backend Engineer","Database Administrator","REST API Developer","NestJS Developer","Problem Solver"];
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

// ---------- Contact form -> mailto ----------
(function(){
  const form = $("#contact-form");
  const label = $("#send-label");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const f = new FormData(form);
    const subject = encodeURIComponent(String(f.get("subject") || "Hello Numan"));
    const body = encodeURIComponent(`From: ${f.get("name")} <${f.get("email")}>\n\n${f.get("message")}`);
    window.location.href = `mailto:nazmussadatnuman92@gmail.com?subject=${subject}&body=${body}`;
    label.textContent = "Opening your email...";
  });
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
