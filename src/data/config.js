// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  firstName: "Supawich",
  lastName: "Sriviboonruttana",
  nickname: "RYU",
  title: "Front-End Developer & UI Enthusiast",
  bio: "Graduate of King Mongkut's University of Technology North Bangkok (KMUTNB) with a degree in Electronic Computer Technology. Passionate about crafting high-performance, aesthetically refined web experiences with modern frontend technologies.",
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
    "My name is Supawich (RYU). I graduated from King Mongkut's University of Technology North Bangkok with a degree in Electronic Computer Technology.\n\nI am deeply passionate about web development, modern user interfaces, graphic design, and video editing. When I'm not coding, I enjoy photography and learning emerging technologies.",
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
    "Currently looking for Frontend Developer / Full-stack Developer roles and exciting projects! Feel free to reach out directly via email or phone.",
  email: "supawich.contact@gmail.com",
  phone: "+66 930355882",
  location: "Bangkok, Thailand",
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
      location: "Bangkok, Thailand",
      description: "Developed and maintained enterprise Cloud ERP frontend with JSP and Oracle PL/SQL, and utilized React to develop internal projects such as PMS and ERP (New TechStack). Designed and built responsive UIs and collaborated on-site with the backend team.",
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
      img: new URL('../assets/img/ProjectGraduate.PNG', import.meta.url).href,
      name: "GRPlan",
      badge: "โปรเจกต์จบ (Capstone Project)",
      tag: "React Native · Spring Boot · PostgreSQL",
      orientation: "portrait",
      featured: true,
      info: "แอปพลิเคชันบนสมาร์ตโฟนที่ผสานระบบปฏิทินและบันทึกย่อเข้าด้วยกันแบบ All-in-one เพื่อแก้ไขปัญหาการสลับแอปและเพิ่มประสิทธิภาพการจัดการเวลา พัฒนาด้วย React Native, Spring Boot และ PostgreSQL รองรับการทำงานร่วมกันเป็นกลุ่ม",
      highlights: [
        "ระบบบันทึกย่อ (Notes): แทรกรูปภาพ เพิ่มพิกัดสถานที่ และตั้งเวลาแจ้งเตือนล่วงหน้า",
        "ระบบปฏิทินกิจกรรม (Events): ดูตารางแบบรายวัน/สัปดาห์/เดือน/ปี พร้อมตั้งค่าการทำซ้ำ",
        "ระบบกลุ่ม (Collaboration): สร้างกลุ่ม เพิ่มสมาชิก และแชร์ตารางนัดหมายร่วมกัน"
      ],
      url: "https://github.com/RIXZY-Connecting",
    },
    {
      img: new URL('../assets/img/ReactPortfolioProject.webp', import.meta.url).href,
      name: "Portfolio Website (2024)",
      tag: "React · Node.js · MongoDB",
      orientation: "landscape",
      info: "เว็บไซต์พอร์ตโฟลิโอสำหรับรวบรวมและแสดงผลงาน พัฒนาด้วย React และ SCSS รองรับการแสดงผลทุกหน้าจอและระบบสลับภาษา",
      url: "https://github.com/RIXZY-Connecting",
    },
    {
      img: new URL('../assets/img/vb2018.webp', import.meta.url).href,
      name: "Student Examination System",
      tag: "VB.Net · Desktop App",
      orientation: "landscape",
      info: "โปรแกรมทำแบบทดสอบสำหรับนักเรียนชั้น ป.3 มีระบบสุ่มข้อสอบ ตรวจคำนวณคะแนนอัตโนมัติ และบันทึกผลการสอบ",
      url: "https://www.linkedin.com/in/supawich-contact/",
    },
  ]
};

const ryuskills = {
  show: true,
  heading: "Technical Skills",
  categories: [
    {
      id: "devTools",
      label: "Dev & AI Tools",
      icon: "fas fa-tools",
      data: [
        { img: new URL('../assets/img/skills/vscode.webp', import.meta.url).href, text: "VS Code" },
        { img: new URL('../assets/img/skills/antigravity.webp', import.meta.url).href, text: "Antigravity IDE" },
        { img: new URL('../assets/img/skills/claude.webp', import.meta.url).href, text: "Claude" },
        { img: new URL('../assets/img/skills/agycli.webp', import.meta.url).href, text: "Antigravity CLI" },
        { img: new URL('../assets/img/skills/git.webp', import.meta.url).href, text: "Git" },
        { img: new URL('../assets/img/skills/gitdesktop.webp', import.meta.url).href, text: "Git Desktop" },
        { img: new URL('../assets/img/skills/postman.webp', import.meta.url).href, text: "Postman" },
        { img: new URL('../assets/img/skills/figma.webp', import.meta.url).href, text: "Figma" },
      ],
    },
    {
      id: "techStack",
      label: "Tech Stack",
      icon: "fas fa-layer-group",
      data: [
        { img: new URL('../assets/img/skills/react.webp', import.meta.url).href, text: "React" },
        { img: new URL('../assets/img/skills/javascript.webp', import.meta.url).href, text: "JavaScript" },
        { img: new URL('../assets/img/skills/typescript.webp', import.meta.url).href, text: "TypeScript" },
        { img: new URL('../assets/img/skills/html.webp', import.meta.url).href, text: "HTML5" },
        { img: new URL('../assets/img/skills/css.webp', import.meta.url).href, text: "CSS3" },
        { img: new URL('../assets/img/skills/nextjs.webp', import.meta.url).href, text: "Next.js" },
        { img: new URL('../assets/img/skills/tailwind.webp', import.meta.url).href, text: "Tailwind CSS" },
        // { img: new URL('../assets/img/skills/framer.webp', import.meta.url).href, text: "Framer Motion" },
      ],
    },
    {
      id: "creativeMedia",
      label: "Design & Media",
      icon: "fas fa-film",
      data: [
        { img: new URL('../assets/img/skills/photoshop.webp', import.meta.url).href, text: "Photoshop" },
        // { img: new URL('../assets/img/skills/premiere.webp', import.meta.url).href, text: "Premiere Pro" },
        // { img: new URL('../assets/img/skills/aftereffects.webp', import.meta.url).href, text: "After Effects" },
        { img: new URL('../assets/img/skills/lightroom.webp', import.meta.url).href, text: "Lightroom" },
        { img: new URL('../assets/img/skills/illustrator.webp', import.meta.url).href, text: "Illustrator" },
        { img: new URL('../assets/img/skills/capcut.webp', import.meta.url).href, text: "CapCut" },
        { img: new URL('../assets/img/skills/canva.webp', import.meta.url).href, text: "Canva" },
        // { img: new URL('../assets/img/skills/davinci.webp', import.meta.url).href, text: "DaVinci" },
        { img: new URL('../assets/img/skills/vegas.webp', import.meta.url).href, text: "Sony Vegas" },
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
