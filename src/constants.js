// Skills Section Logo's
import htmlLogo from './assets/Tech/html.png';
import cssLogo from './assets/Tech/css.png';
import javascriptLogo from './assets/Tech/javascript.png';
import reactjsLogo from './assets/Tech/reactjs.png';
import reduxLogo from './assets/Tech/redux.png';
import tailwindcssLogo from './assets/Tech/tailwindcss.png';
import mongodbLogo from './assets/Tech/mongodb.png';
import javaLogo from './assets/Tech/java.png';
import pythonLogo from './assets/Tech/python.png';
import gitLogo from './assets/Tech/git.png';
import githubLogo from './assets/Tech/github.png';
import vscodeLogo from './assets/Tech/vscode.png';
import figmaLogo from './assets/Tech/figma.png';
import netlifyLogo from './assets/Tech/netlify.png';
import wordpressLogo from './assets/Tech/Wordpress.png';
import chatgptLogo from './assets/Tech/chatgpt.png';

// Experience Section Logo's
import nsicLogo from './assets/Company/NSIC.png';

// Education Section Logo's
import avnLogo from './assets/Education/AVN.png';
import rjgpLogo from './assets/Education/RJGP.png';

// Project Section Logo's
import restorLogo from './assets/Project/restor.png';
import myportfolioLogo from './assets/Project/myportfolio.png';


export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Redux', logo: reduxLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'MongoDB', logo: mongodbLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'Java', logo: javaLogo },
      { name: 'Python', logo: pythonLogo },
      { name: 'JavaScript', logo: javascriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Netlify', logo: netlifyLogo },
      { name: 'Figma', logo: figmaLogo },
      { name: 'ChatGPT', logo: chatgptLogo },
      { name: 'WordPress', logo: wordpressLogo },
    ],
  },
];

  export const experiences = [
    {
      id: 0,
      img: nsicLogo,
      role: "Internship",
      company: "National Small Incorporation",
      date: "August 2024 - September 2024",
      desc: "Developed dynamic and scalable applications using the Android Studio under the guidance of collage & NSIC, handling frontend development. Collaborated with 5 members to build responsive UI and optimize application performance in an agile environment.",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "Kotlin",
        "Android Studio",
      ],
    },
  ];
  
  export const education = [
    {
      id: 0,
      img: rjgpLogo,
      school: "Raja Jait Singh Government Polytechnic, Neemka",
      date: "Sept 2022 - July 2025",
      grade: "7.0 CGPA",
      desc: "I have completed my Diploma in Computer Science engineering from Raja jait singh government polytechnic, Neemka. During my time at RJGP, I gained a strong foundation in programming, software development, and computer science principles. I have studied courses such as Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, Web Development, and Software Engineering. I actively participated in various workshops and technical events, which enhanced my skills and knowledge. My experience at RJGP collage has been instrumental in shaping my technical abilities and professional growth.",
      degree: "Diploma in Computer Science Engineering - Diploma",
    },
    {
      id: 1,
      img: avnLogo,
      school: "AVN Sr. Sec. School, Faridabad",
      date: "Mar 2015 - Mar 2016",
      grade: "60%",
      desc: "I completed my Secondary education from AVN Sr. Sec. School, Sector 19 Faridabad, under the CBSE board, where I studied Science with Foundation of IT.",
      degree: "CBSE(X) - Foundation of IT",
    },
  ];
  
  export const projects = [
    {
      id: 1,
      title: "Restor",
      description:
        "A C2C-based web-platform designed for users to sell/purchase old items online as per their preferences. The platform offers comprehensive profile stats and detailed results, Helping users to sell/purchase old or new items and get the best offer direct from custumer",
      image: restorLogo,
      tags: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/arbaz-mr/Restor"
    },
    {
      id: 1,
      title: "Portfolio",
      description:
        "My personal Portfolio website to showcase my tech skills on varios paltfrom by website.",
      image: myportfolioLogo,
      tags: ["HTML", "CSS", "JavaScript", "React.Js", "Tailwind.CSS"],
      github: "https://github.com/arbaz-mr/Portfolio"
    }
  ];  