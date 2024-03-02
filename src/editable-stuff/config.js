// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#ecf0f1, #ff7f7f, #1B1A55, #535C91, #9290C3, #ff7f7f, #070F2B",
  firstName: "I'm",
  middleName: "Supawich",
  lastName: "Sriviboonruttana",
  message: " from King Mongkut's University of Technology North Bangkok in Electronic Computer Technology. ",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/RIXZY-Connecting",
    },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/supawich-sriviboonruttana-6858352b7/",
    },
  ],
};

// ABOUT SECTION
// If you want the About Section to show a profile picture you can fill the profilePictureLink either with:
//a) your Instagram username
//      i.e:profilePictureLink:"johnDoe123",
//b) a link to an hosted image
//      i.e:profilePictureLink:"www.picturesonline.com/johnDoeFancyAvatar.jpg",
//c) image in "editable-stuff" directory and use require("") to import here,
//      i.e: profilePictureLink: require("../editable-stuff/hashirshoaeb.png"),
//d) If you do not want any picture to be displayed, just leave it empty :)
//      i.e: profilePictureLink: "",
// For Resume either provide link to your resume or import from "editable-stuff" directory
//     i.e resume: require("../editable-stuff/resume.pdf"),
//         resume: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",

const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/supawich.png"),
  imageSize: 300,
  message:
    "My name is Supawich. I’m a Graduate of 2024 from King Mongkut's University of Technology North Bangkok at Thailand with a degree in Electronic Computer Technology. I'm Riw most passionate about giving back to the community, and my goal is to pursue this passion within the field of software engineering. In my free time I like working on open source projects.",
  resume: require("../editable-stuff/resume1fixsmall.pdf"),
  transcript: require("../editable-stuff/transcript.pdf"),
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: true,
  heading: "Recent Projects",
  gitHubUsername: "RIXZY-Connecting", //i.e."johnDoe12Gh"
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
      img: require("../editable-stuff/hashirshoaeb.png"), 
      label: "First slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
    { 
      img: require("../editable-stuff/hashirshoaeb.png"), 
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
    { name: "Python", value: 10 },
    { name: "SQL", value: 20 },
    { name: "Data Structures", value: 30 },
    { name: "C/C++", value: 40 },
    { name: "JavaScript", value: 50 },
    { name: "React", value: 60 },
    { name: "HTML/CSS", value: 70 },
    { name: "C#", value: 80 },
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
    "I'm currently looking for full-time Software Engineering or Machine Learning opportunities! If you know of any positions available, if you have any questions, or if you just want to say hi, please feel free to email me at",
  email: "riwkikung@hotmail.com",
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
      imageSize: 100,
    },
  ]
}


const experiences = {
  show: true,
  heading: "Experiences",
  data: [
    {
      role: 'Software Engineer',// Here Add Company Name
      companylogo: require('../assets/img/dell.png'),
      date: 'June 2018 – Present',
    },
    {
      role: 'Front-End Developer',
      companylogo: require('../assets/img/boeing.png'),
      date: 'May 2017 – May 2018',
    },
  ]
}

// Blog SECTION
// const blog = {
//   show: false,
// };

export { navBar, mainBody, about, repos, skills, leadership, getInTouch, education , experiences , };
