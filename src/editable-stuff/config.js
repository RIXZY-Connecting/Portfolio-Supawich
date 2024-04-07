// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  //gradientColors: "#ecf0f1, #ff7f7f, #1B1A55, #535C91, #9290C3, #ff7f7f, #070F2B",
    gradientColors: "#2B2741, #ff7f7f, #1B1A55, #9290C3, #1B1A55, #535C91, #2B2741",
  
  firstName: "I'm Supawich",
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
    "My name is Supawich. You can call me RYU. I’m a Graduate of 2024 from King Mongkut's University of Technology North Bangkok at Thailand with a degree in Electronic Computer Technology. most passionate about giving back to the community, and my goal is to pursue this passion within the field of software engineering and graphic design. In my free time  I like take a picture and learn more skills.",
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
    "I'm currently looking for Internship Web Developer or Full-stack Developer opportunities! If you know of any positions available, if you have any questions, or if you just want to say hi, please feel free to email me at",
  email: "supawich.contact@gmail.com",
  phone: "+66 930355882",
};


const education = {
  show: true,
  heading: "Educations",
  data: [
    {
      role: 'Chanthaburi Technical Collage',// Here Add Company Name
      companylogo: require('../assets/img/logo_technic.png'),
      level:'High Vocational',
      department:'Technology Computer',
      date: '2020 – 2022',
      gpa: '3.69',
    },
    {
      role: 'Chanthaburi Technical Collage',// Here Add Company Name
      companylogo: require('../assets/img/logo_technic.png'),
      level:' Vocational',
      department:'Technic Computer',
      date: '2017 – 2020',
      gpa: '3.62',
    },
    {
      role: 'King Mongkuts University of Technology North Bangkok',
      companylogo: require('../assets/img/logo_kmutnb.png'),
      date: '2022 – Present',
      level:'Bachelor',
      department:'Electronics Computer Technology',
      gpa: '3.12',
      imageSize: 50,
    },
  ]
}


const experiences = {
  show: true,
  heading: "Experiences",
  data: [
    {
      role: 'IT Support & Network Maintenance 🔧',
      location:'  ( Chanthaburi Technical Collage )',
      companylogo: require('../assets/img/logo_technic_Inf.png'),
      date: '[ June - July | 2021 ]',
    },
    {
      role: 'Technician 🔧',
      location:' ( Advice IT Infinite Chanthaburi ) ',
      companylogo: require('../assets/img/logo_advice_its.png'),
      date: '[ Sep - March | 2018 - 2019 ]',
    },
    {
      role: 'Front End Deverloper 💻',
      location: ' ( Laconic Technology Co., Ltd. ) ',
      companylogo: require('../assets/img/laconic_fed.png'),
      date: '[ May - Aug | 2024 ]',
    },
  ]
}
const ryuprojects = {
  show: true,
  heading: "My Project",
  data: [
    {
     img :  require('../assets/img/ReactPortfolioProject.png'),
     name:'My Website Portfolio (2024)',
     info: 'This project is part of the subject SELECTED TOPIC IN COMPUTER in class, Learn about React.js , Github desktop, Node.js and Mongodb.', 
     url: "https://www.linkedin.com/in/supawich-contact/",
    },
    {
      img :  require('../assets/img/vb2018.png'),
      name:'Program Exam for students grade 3 using VB.Net (2018)',
      info: 'This project using for testing grade 3 students with program. The program has questions and  choose from and a score is summed up when completed ', 
      url: "https://www.linkedin.com/in/supawich-contact/",
     },

  ]
}
const ryuskills = {
  show: true,
  heading: "Skills",
  data: [
    {
     img :  require('../assets/img/skills/react.png'),
     text:'React',
    },
    {
      img :  require('../assets/img/skills/javascript.png'),
      text:'JavaScript',
     },
     {
      img :  require('../assets/img/skills/bootstrap.png'),
      text:'Bootstrap',
     },
     {
       img :  require('../assets/img/skills/css.png'),
       text:'CSS',
      },
      {
        img :  require('../assets/img/skills/html.png'),
        text:'HTML',
       },
       {
        img :  require('../assets/img/skills/java.png'),
        text:'JAVA',
       },
       {
        img :  require('../assets/img/skills/php.png'),
        text:'PHP',
       },
       {
        img :  require('../assets/img/skills/PS.png'),
        text:'PhotoShop',
       },
  ]
}
const ryuprojectsnumber = ryuprojects.data.length;


// Blog SECTION
// const blog = {
//   show: false,
// };
export { navBar, mainBody, about, repos, skills, leadership, getInTouch, education , experiences , ryuprojects, ryuskills , ryuprojectsnumber };
