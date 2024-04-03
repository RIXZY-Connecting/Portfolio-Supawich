// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  //gradientColors: "#ecf0f1, #ff7f7f, #1B1A55, #535C91, #9290C3, #ff7f7f, #070F2B",
    gradientColors: "#2B2741, #ff7f7f, #1B1A55, #9290C3, #1B1A55, #535C91, #2B2741",
  
  firstName: "Hello ,I'm Supawich",
  middleName: "Sriviboonruttana",
  lastName: "",
  message: "WELCOME TO MY PORTFOLIO WEBSITE.",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/RIXZY-Connecting",
    },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/supawich-contact/",
    },
  ],
};

const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/supawich_profile.png"),
  imageSize: 300,
  message:
    "My name is Supawich. I’m a Graduate of 2024 from King Mongkut's University of Technology North Bangkok at Thailand with a degree in Electronic Computer Technology. most passionate about giving back to the community, and my goal is to pursue this passion within the field of software engineering and graphic design. In my free time  I like take a picture and learn more skills.",
  resume: require("../editable-stuff/resume.pdf"),
  transcript: require("../editable-stuff/transcript.pdf"),
};

const repos = {
  show: true,
  heading: "Github Projects",
  gitHubUsername: "RIXZY-Connecting", 
  reposLength: 4,
  specificRepos: [],
};

// Leadership SECTION
const leadership = {
  show: false,
  heading: "Leadership",
  message:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus arcu bibendum at varius. Libero justo laoreet sit amet cursus sit amet. Imperdiet dui accumsan sit amet nulla facilisi morbi. At auctor urna nunc id. Iaculis urna id volutpat lacus laoreet non curabitur gravida. Et magnis dis parturient montes nascetur ridiculus mus mauris. In nisl nisi scelerisque eu ultrices vitae auctor. Mattis nunc sed blandit libero volutpat sed cras ornare. Pulvinar neque laoreet suspendisse interdum consectetur libero.",
  images: [
    { 
      img: require("../editable-stuff/supawich.png"), 
      label: "First slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
    { 
      img: require("../editable-stuff/supawich.png"), 
      label: "Second slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
  ],
  imageSize: {
    width:"615",
    height:"450"
  }
};

// SKILLS SECTION
const skills = {
  show: false,
  heading: "Skills",
  hardSkills: [
    { name: "Python", value: 1 },
    { name: "SQL", value: 20 },
    { name: "Data Structures", value: 10 },
    { name: "C/C++", value: 10 },
    { name: "JavaScript", value: 50 },
    { name: "React", value: 50 },
    { name: "HTML/CSS", value: 50 },
    { name: "C#", value: 10 },
  ],
  softSkills: [
    { name: "Goal-Oriented", value: 0 },
    { name: "Collaboration", value: 0 },
    { name: "Positivity", value: 0 },
    { name: "Adaptability", value: 0 },
    { name: "Problem Solving", value: 0 },
    { name: "Empathy", value: 0 },
    { name: "Organization", value: 0 },
    { name: "Creativity", value: 0 },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Contact",
  message:
    "I'm currently looking for Intership Web Developer or Full-stack Developer opportunities! If you know of any positions available, if you have any questions, or if you just want to say hi, please feel free to email me at",
   email: "supawich.contact@gmail.com",
};

const education = {
  show: true,
  heading: "Educations",
  data: [
    {
      role: 'Chanthaburi Technical Collage',// Here Add Company Name
      companylogo: require('../assets/img/logo_technic.png'),
      date: '2020 – 2022',
    },
    {
      role: 'King Mongkut`s University of Technology North Bangkok',
      companylogo: require('../assets/img/logo_kmutnb.png'),
      date: '2022 – 2024',
      imageSize: 50,
    },
  ]
}


const experiences = {
  show: true,
  heading: "Experiences",
  data: [
    {
      role: 'IT Support & Network Maintenance ( Chanthaburi Technical Collage ) 🔧',// Here Add Company Name 
      companylogo: require('../assets/img/logo_technic_Inf.png'),
      date: '[ June - July | 2021 ]',
    },
    {
      role: 'Technician ( Advice IT Infinite Chanthaburi ) 🔧',
      companylogo: require('../assets/img/logo_advice_its.png'),
      date: '[ Sep - March | 2018-2019 ]',
    },
    {
      role: 'Front End Deverloper ( Laconic Technology Co., Ltd. ) ',
      companylogo: require('../assets/img/laconic_fed.png'),
      date: '[ May - Aug | 2024 ]',
    },
  ]
}

// Blog SECTION
// const blog = {
//   show: false,
// };

export { navBar, mainBody, about, repos, skills, leadership, getInTouch, education , experiences , };
