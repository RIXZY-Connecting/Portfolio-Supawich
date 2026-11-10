// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  firstName: "Supawich",
  lastName: "Sriviboonruttana",
  nickname: "RYU",
  title: "Frontend Developer",
  bio: "Frontend Developer specializing in React, Next.js, and TypeScript. Accelerating delivery through AI-assisted workflows and experienced in collaborating with backend teams (Spring Boot, Supabase, PostgreSQL).",
  icons: [
    {
      name: "GitHub",
      image: "fa-github",
      url: "https://github.com/RIXZY-Connecting",
    },
    {
      name: "LinkedIn",
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/supawich-contact/",
    },
  ],
};

const about = {
  show: true,
  heading: "About Me",
  imageLink: new URL("./supawich_profile.webp", import.meta.url).href,
  message:
    "My name is Supawich (RYU). I graduated from King Mongkut's University of Technology North Bangkok with a degree in Electronic Computer Technology.\n\nI specialize primarily in Frontend Development, crafting high-performance, responsive web & mobile interfaces with React, Next.js, React Native, and TypeScript.\n\nI actively leverage AI-assisted tools to accelerate delivery, using my solid frontend foundation to architect solutions and engineer precise prompts. Combined with hands-on experience collaborating alongside backend teams (Spring Boot, Supabase, PostgreSQL), I ensure clean REST API integration and seamless full-cycle execution.",
  resume: null, // Temporarily disabled while updating
  transcript: new URL("./transcript.pdf", import.meta.url).href,
};

const repos = {
  show: true,
  heading: "GitHub Projects",
  gitHubUsername: "RIXZY-Connecting", 
  reposLength: 4,
  specificRepos: [],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get in Touch",
  message:
    "Currently open to Frontend Developer roles and exciting web projects! Ready to bring high-performance, intuitive user interfaces to life. Feel free to reach out directly via email.",
  email: "supawich.contact@gmail.com",
  location: "จันทบุรี, ประเทศไทย",
  socials: [
    {
      name: "LinkedIn",
      icon: "fab fa-linkedin",
      url: "https://www.linkedin.com/in/supawich-contact/",
      handle: "in/supawich-contact",
    },
    {
      name: "GitHub",
      icon: "fab fa-github",
      url: "https://github.com/RIXZY-Connecting",
      handle: "@RIXZY-Connecting",
    },
  ],
};

const education = {
  show: true,
  heading: "Education",
  data: [
    {
      institution: "King Mongkut's University of Technology North Bangkok",
      role: "Bachelor's Degree",
      department: "Electronics Computer Technology",
      companylogo: new URL('../assets/img/logo_kmutnb.png', import.meta.url).href,
      date: "2022 – 2026",
      gpa: "2.85",
    },
    {
      institution: "Chanthaburi Technical College",
      role: "High Vocational Certificate",
      department: "Computer Technology",
      companylogo: new URL('../assets/img/logo_technic.png', import.meta.url).href,
      date: "2020 – 2022",
      gpa: "3.69",
    },
    {
      institution: "Chanthaburi Technical College",
      role: "Vocational Certificate",
      department: "Computer Technical",
      companylogo: new URL('../assets/img/logo_technic.png', import.meta.url).href,
      date: "2017 – 2020",
      gpa: "3.62",
    },
  ]
};

const experiences = {
  show: true,
  heading: "Experience",
  data: [
    {
      role: "Frontend Developer",
      company: "Laconic Cloud ERP",
      companylogo: new URL('../assets/img/laconic_fed.png', import.meta.url).href,
      date: "May 2024 – Mar 2026",
      duration: "1 yr 11 mos",
      type: "Full-time · On-site",
      location: "Chanthaburi, Thailand",
      description: "Developed and maintained enterprise Cloud ERP frontends using JSP and React for internal projects like PMS and ERP (New TechStack). Designed and built responsive, user-friendly UIs and collaborated with the backend team on API integrations and Oracle PL/SQL database queries.",
    },
    {
      role: "IT Support & Network",
      company: "Chanthaburi Technical College",
      companylogo: new URL('../assets/img/logo_technic_Inf.png', import.meta.url).href,
      date: "June – July 2021",
      duration: "2 mos",
      description: "Administered local campus network infrastructure, configured hardware peripherals, and delivered fast technical support across departments.",
    },
    {
      role: "Computer Technician",
      company: "Advice IT Infinite Chanthaburi",
      companylogo: new URL('../assets/img/logo_advice_its.png', import.meta.url).href,
      date: "Sep 2018 – Mar 2019",
      duration: "7 mos",
      description: "Diagnosed PC system faults, assembled custom high-performance builds, and performed hardware/software repairs for retail clients.",
    },
  ]
};

const ryuprojects = {
  show: true,
  heading: "Featured Projects",
  data: [
    {
      img: new URL('../assets/img/chp-rolling.webp', import.meta.url).href,
      name: "CHP Rolling Engineering",
      badge: "งานจริง",
      badgeType: "commercial",
      tag: "Next.js · TypeScript · Tailwind CSS · Cloudflare",
      orientation: "landscape",
      featured: true,
      info: "เว็บไซต์นำเสนอธุรกิจ (B2B) สำหรับบริษัทผู้ผลิตลูกกลิ้งอุตสาหกรรม เผยแพร่และใช้งานจริงบน Production",
      highlights: [
        "โครงสร้างระบบ — สร้างด้วย Next.js และ Static Export บน Cloudflare Edge ความเร็ว LCP ~172ms",
        "การจัดการเนื้อหา — เชื่อมต่อ Contentful CMS รองรับระบบ 2 ภาษา (ไทยและอังกฤษ)",
        "ประสิทธิภาพ — คะแนนการทดสอบ Lighthouse Desktop 98 พร้อม Accessibility และ SEO เต็ม 100"
      ],
      url: "https://chprolling.com",
    },
    {
      img: new URL('../assets/img/ProjectGraduate.PNG', import.meta.url).href,
      name: "GRPlan",
      badge: "โปรเจกต์จบ",
      tag: "React Native · Spring Boot · PostgreSQL",
      orientation: "portrait",
      featured: true,
      info: "แอปพลิเคชันจัดการปฏิทินและบันทึกข้อความสำหรับการทำงานร่วมกันเป็นกลุ่ม (รับผิดชอบการพัฒนาฝั่ง Frontend ด้วย React Native)",
      highlights: [
        "บทบาทการทำงาน — รับผิดชอบพัฒนาฝั่ง Frontend (React Native) ทั้งระบบ ออกแบบ UI/UX และวางโครงสร้างการจัดการ State",
        "การเชื่อมต่อระบบ — ประสานงานเชื่อมต่อ REST APIs ร่วมกับผู้พัฒนาฝั่ง Backend (Spring Boot, Supabase และ PostgreSQL)",
        "ฟังก์ชันหลัก — ปฏิทินนัดหมายแบบกลุ่ม, บันทึกข้อความพร้อมแนบรูปภาพและตำแหน่งสถานที่ และระบบแจ้งเตือนล่วงหน้า"
      ],
      url: "https://github.com/RIXZY-Connecting",
    },
    {
      img: new URL('../assets/img/ReactPortfolioProject.webp', import.meta.url).href,
      name: "Portfolio Website (2024)",
      tag: "React · Node.js · MongoDB",
      orientation: "landscape",
      info: "เว็บไซต์พอร์ตโฟลิโอแสดงผลงาน พัฒนาด้วย React และ SCSS รองรับการแสดงผลทุกขนาดหน้าจอและระบบสลับภาษา",
      url: "https://github.com/RIXZY-Connecting",
    },
    {
      img: new URL('../assets/img/vb2018.webp', import.meta.url).href,
      name: "Student Examination System",
      tag: "VB.Net · Desktop App",
      orientation: "landscape",
      info: "โปรแกรมแบบทดสอบสำหรับนักเรียนระดับชั้น ป.3 พัฒนาด้วย VB.Net มีระบบสุ่มข้อสอบและตรวจคำนวณคะแนนอัตโนมัติ",
      url: "https://www.linkedin.com/in/supawich-contact/",
    },
  ]
};

const ryuskills = {
  show: true,
  heading: "Technical Skills",
  categories: [
    {
      id: "techStack",
      label: "Frontend & Backend",
      icon: "fas fa-layer-group",
      data: [
        { img: new URL('../assets/img/skills/react.webp', import.meta.url).href, text: "React" },
        { img: new URL('../assets/img/skills/nextjs.webp', import.meta.url).href, text: "Next.js" },
        { img: new URL('../assets/img/skills/typescript.webp', import.meta.url).href, text: "TypeScript" },
        { img: new URL('../assets/img/skills/javascript.webp', import.meta.url).href, text: "JavaScript" },
        { img: new URL('../assets/img/skills/tailwind.webp', import.meta.url).href, text: "Tailwind CSS" },
        // { img: new URL('../assets/img/skills/framer.webp', import.meta.url).href, text: "Framer Motion" },
        { img: new URL('../assets/img/skills/html.webp', import.meta.url).href, text: "HTML5" },
        { img: new URL('../assets/img/skills/css.webp', import.meta.url).href, text: "CSS3" },
        // { icon: "code-branch", text: "Node.js", color: "#68A063" },
        { icon: "bolt", text: "Spring Boot", color: "#6DB33F" },
        { icon: "bolt", text: "Supabase", color: "#3ECF8E" },
        { icon: "code", text: "PostgreSQL", color: "#336791" },
        { img: new URL('../assets/img/skills/mongodb.webp', import.meta.url).href, text: "MongoDB" },
        { icon: "code", text: "Oracle PL/SQL", color: "#F80000" },
      ],
    },
    {
      id: "devTools",
      label: "Dev & Workflow Tools",
      icon: "fas fa-tools",
      data: [
        { img: new URL('../assets/img/skills/vscode.webp', import.meta.url).href, text: "VS Code" },
        { img: new URL('../assets/img/skills/git.webp', import.meta.url).href, text: "Git" },
        { img: new URL('../assets/img/skills/gitdesktop.webp', import.meta.url).href, text: "Git Desktop" },
        { img: new URL('../assets/img/skills/postman.webp', import.meta.url).href, text: "Postman" },
        { img: new URL('../assets/img/skills/claude.webp', import.meta.url).href, text: "Claude" },
        { img: new URL('../assets/img/skills/antigravity.webp', import.meta.url).href, text: "Antigravity IDE" },
        { img: new URL('../assets/img/skills/agycli.webp', import.meta.url).href, text: "Antigravity CLI" },
      ],
    },
    {
      id: "creativeMedia",
      label: "UI/UX & Creative Media",
      icon: "fas fa-film",
      data: [
        { img: new URL('../assets/img/skills/figma.webp', import.meta.url).href, text: "Figma (UI/UX)" },
        { img: new URL('../assets/img/skills/photoshop.webp', import.meta.url).href, text: "Photoshop" },
        { img: new URL('../assets/img/skills/illustrator.webp', import.meta.url).href, text: "Illustrator" },
        { img: new URL('../assets/img/skills/lightroom.webp', import.meta.url).href, text: "Lightroom" },
        { img: new URL('../assets/img/skills/canva.webp', import.meta.url).href, text: "Canva" },
        { img: new URL('../assets/img/skills/capcut.webp', import.meta.url).href, text: "CapCut" },
        { img: new URL('../assets/img/skills/vegas.webp', import.meta.url).href, text: "Sony Vegas" },
        { img: new URL('../assets/img/skills/premiere.webp', import.meta.url).href, text: "Premiere Pro" },
        { img: new URL('../assets/img/skills/aftereffects.webp', import.meta.url).href, text: "After Effects" },
      ],
    },
  ],
};


export { 
  navBar, 
  mainBody, 
  about, 
  repos, 
  getInTouch, 
  education, 
  experiences, 
  ryuprojects, 
  ryuskills 
};
