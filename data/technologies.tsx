import {
    DiHtml5,
    DiCss3,
    DiJsBadge,
    DiMysql,
    DiMsqlServer,
    DiReact,
    DiLaravel,
    DiGithub,
    DiPython,
    DiFirebase,
    DiPostgresql,
    DiMongodb, 
    DiAngularSimple, 
    DiJava,
    DiNodejs,
    DiAws,
    DiCss3Full,
    DiJqueryLogo,
    DiBootstrap,
    DiSqllite
} from 'react-icons/di';
import {
    FaPhp,
    FaGitSquare,
    FaFigma,
    FaSass,
    FaJenkins,
    FaDocker,
    FaNpm,
    FaAccessibleIcon,
    FaTerminal,
    FaDatabase
} from "react-icons/fa";
import {
    SiTypescript,
    SiExpress,
    SiSpringboot,
    SiVuedotjs,
    SiTailwindcss,
    SiJest,
    SiRedux,
    SiKubernetes,
    SiGraphql,
    SiWebpack,
    SiJira,
    SiSwagger,
    SiAngular,
    SiReactivex,
    SiVercel,
    SiFirebase,
    SiVite,
    SiReact,
    SiNuxtdotjs,
    SiJsonwebtokens,
    SiReactrouter,
    SiSocketdotio,
    SiThreedotjs,
    SiFramer,
    SiApachejmeter,
    SiComposer,
    SiContentful,
    SiPhpmyadmin,
    SiEmberdotjs,
    SiGitlab,
    SiGithubactions,
    SiMicrosoftexcel,
    SiMicrosoftpowerpoint,
    SiMicrosoftoffice,
    SiFigma
} from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";

export type SkillLevel = 'Basic' | 'Intermediate' | 'Advanced';

export interface Technology {
    id: string;
    name: string;
    icon: JSX.Element;
    desc: `${SkillLevel} Skills`;
    category: 'frontend' | 'backend' | 'database' | 'devops' | 'tools';
    color?: string;
}

export const technologies: Technology[] = [
    // Frontend Technologies
    {
        id: "html",
        name: "HTML5",
        icon: <DiHtml5 />,
        desc: "Advanced Skills",
        category: 'frontend',
        color: '#E44D26'
    },
    {
        id: "responsive",
        name: "Responsive Design",
        icon: <DiCss3 />,
        desc: "Advanced Skills",
        category: 'frontend',
        color: '#1572B6'
    },
    {
        id: "css",
        name: "CSS3",
        icon: <DiCss3 />,
        desc: "Advanced Skills",
        category: 'frontend',
        color: '#1572B6'
    },
    {
        id: "sass",
        name: "Sass",
        icon: <FaSass />,
        desc: "Advanced Skills",
        category: 'frontend',
        color: '#CC6699'
    },
    {
        id: "js",
        name: "JavaScript",
        icon: <DiJsBadge />,
        desc: "Advanced Skills",
        category: 'frontend',
        color: '#F0DB4F'
    },
    {
        id: "typescript",
        name: "TypeScript",
        icon: <SiTypescript />,
        desc: "Intermediate Skills",
        category: 'frontend',
        color: '#3178C6'
    },
    {
        id: "react",
        name: "React",
        icon: <DiReact />,
        desc: "Advanced Skills",
        category: 'frontend',
        color: '#61DAFB'
    },
    {
        id: "redux",
        name: "Redux",
        icon: <SiRedux />,
        desc: "Intermediate Skills",
        category: 'frontend',
        color: '#764ABC'
    },
    {
        id: "nextjs",
        name: "Next.js",
        icon: <TbBrandNextjs />,
        desc: "Advanced Skills", // Updated based on multiple Next.js projects
        category: 'frontend',
        color: '#000000'
    },
    {
        id: "vue",
        name: "Vue.js",
        icon: <SiVuedotjs />,
        desc: "Basic Skills",
        category: 'frontend',
        color: '#4FC08D'
    },
    {
        id: "angular",
        name: "Angular",
        icon: <DiAngularSimple />,
        desc: "Intermediate Skills",
        category: 'frontend',
        color: '#DD0031'
    },
    {
        id: "tailwindcss",
        name: "Tailwind CSS",
        icon: <SiTailwindcss />,
        desc: "Intermediate Skills",
        category: 'frontend',
        color: '#06B6D4'
    },
    {
        id: "rxjs",
        name: "RxJS",
        icon: <SiReactivex />,
        desc: "Intermediate Skills",
        category: 'frontend',
        color: '#B7178C'
    },
    {
        id: "material",
        name: "Angular Material",
        icon: <SiAngular />, // Changed from SiAngularmaterial to SiAngular
        desc: "Intermediate Skills",
        category: 'frontend',
        color: '#3F51B5'
    },
    {
        id: "headlessui",
        name: "Headless UI",
        icon: <SiReact />,
        desc: "Intermediate Skills",
        category: 'frontend',
        color: '#66E3FF'
    },
    {
        id: "cssmodules",
        name: "CSS Modules",
        icon: <DiCss3Full />,
        desc: "Intermediate Skills",
        category: 'frontend',
        color: '#000000'
    },
    {
        id: "vite",
        name: "Vite",
        icon: <SiVite />,
        desc: "Intermediate Skills",
        category: 'frontend',
        color: '#646CFF'
    },
    {
        id: "tanstack",
        name: "TanStack Query",
        icon: <DiReact />,
        desc: "Basic Skills",
        category: 'frontend',
        color: '#FF4154'
    },
    {
        id: "jquery",
        name: "jQuery",
        icon: <DiJqueryLogo />,
        desc: "Intermediate Skills",
        category: 'frontend',
        color: '#0769AD'
    },
    {
        id: "bootstrap",
        name: "Bootstrap",
        icon: <DiBootstrap />,
        desc: "Intermediate Skills",
        category: 'frontend',
        color: '#7952B3'
    },
    {
        id: "nuxtjs",
        name: "Nuxt.js",
        icon: <SiNuxtdotjs />,
        desc: "Basic Skills",
        category: 'frontend',
        color: '#00DC82'
    },
    {
        id: "reactrouter",
        name: "React Router",
        icon: <SiReactrouter />,
        desc: "Advanced Skills",
        category: 'frontend',
        color: '#CA4245'
    },
    {
        id: "socketio",
        name: "Socket.IO",
        icon: <SiSocketdotio />,
        desc: "Intermediate Skills",
        category: 'frontend',
        color: '#010101'
    },
    {
        id: "threejs",
        name: "THREE.js",
        icon: <SiThreedotjs />,
        desc: "Basic Skills",
        category: 'frontend',
        color: '#000000'
    },
    {
        id: "framer",
        name: "Framer Motion",
        icon: <SiFramer />,
        desc: "Intermediate Skills",
        category: 'frontend',
        color: '#0055FF'
    },
    {
        id: "webspeech",
        name: "Web Speech API",
        icon: <SiReact />,
        desc: "Basic Skills",
        category: 'frontend',
        color: '#4285F4'
    },
    {
        id: "indexeddb",
        name: "IndexedDB",
        icon: <FaDatabase />,
        desc: "Basic Skills",
        category: 'frontend',
        color: '#FF9800'
    },
    {
        id: "serviceworkers",
        name: "Service Workers",
        icon: <SiReact />,
        desc: "Basic Skills",
        category: 'frontend',
        color: '#3740FF'
    },
    {
        id: "accessibility",
        name: "W3C Accessibility",
        icon: <FaAccessibleIcon />,
        desc: "Intermediate Skills",
        category: 'frontend',
        color: '#005A9C'
    },

    // Backend Technologies
    {
        id: "nodejs",
        name: "Node.js",
        icon: <DiNodejs />,
        desc: "Advanced Skills",
        category: 'backend',
        color: '#339933'
    },
    {
        id: "express",
        name: "Express",
        icon: <SiExpress />,
        desc: "Advanced Skills", // Updated based on Black Nib project
        category: 'backend',
        color: '#000000'
    },
    {
        id: "java",
        name: "Java",
        icon: <DiJava />,
        desc: "Intermediate Skills",
        category: 'backend',
        color: '#007396'
    },
    {
        id: "springboot",
        name: "Spring Boot",
        icon: <SiSpringboot />,
        desc: "Basic Skills",
        category: 'backend',
        color: '#6DB33F'
    },
    {
        id: "php",
        name: "PHP",
        icon: <FaPhp />,
        desc: "Intermediate Skills",
        category: 'backend',
        color: '#777BB4'
    },
    {
        id: "laravel",
        name: "Laravel",
        icon: <DiLaravel />,
        desc: "Intermediate Skills",
        category: 'backend',
        color: '#FF2D20'
    },
    {
        id: "python",
        name: "Python",
        icon: <DiPython />,
        desc: "Advanced Skills",
        category: 'backend',
        color: '#3776AB'
    },
    {
        id: "graphql",
        name: "GraphQL",
        icon: <SiGraphql />,
        desc: "Basic Skills",
        category: 'backend',
        color: '#E10098'
    },
    {
        id: "jwt",
        name: "JWT",
        icon: <SiJsonwebtokens />,
        desc: "Intermediate Skills",
        category: 'backend',
        color: '#000000'
    },
    {
        id: "ejs",
        name: "EJS",
        icon: <SiEmberdotjs />,
        desc: "Basic Skills",
        category: 'backend',
        color: '#A91E50'
    },
    {
        id: "shell",
        name: "Shell/CLI",
        icon: <FaTerminal />,
        desc: "Intermediate Skills",
        category: 'backend',
        color: '#4EAA25'
    },
    {
        id: "maven",
        name: "Maven",
        icon: <SiApachejmeter />,
        desc: "Basic Skills",
        category: 'backend',
        color: '#C71A36'
    },
    {
        id: "composer",
        name: "Composer",
        icon: <SiComposer />,
        desc: "Basic Skills",
        category: 'backend',
        color: '#885630'
    },

    // Database Technologies
    {
        id: "mysql",
        name: "MySQL",
        icon: <DiMysql />,
        desc: "Intermediate Skills",
        category: 'database',
        color: '#4479A1'
    },
    {
        id: "postgres",
        name: "PostgreSQL",
        icon: <DiPostgresql />,
        desc: "Intermediate Skills",
        category: 'database',
        color: '#336791'
    },
    {
        id: "mongodb",
        name: "MongoDB",
        icon: <DiMongodb />,
        desc: "Advanced Skills", // Updated based on Black Nib project
        category: 'database',
        color: '#47A248'
    },
    {
        id: "sqlServer",
        name: "SQL Server",
        icon: <DiMsqlServer />,
        desc: "Basic Skills",
        category: 'database',
        color: '#CC2927'
    },
    {
        id: "firebase",
        name: "Firebase",
        icon: <DiFirebase />,
        desc: "Advanced Skills",
        category: 'database',
        color: '#FFCA28'
    },
    {
        id: "firebaseauth",
        name: "Firebase Authentication",
        icon: <SiFirebase />,
        desc: "Advanced Skills",
        category: 'database',
        color: '#FFCA28'
    },
    {
        id: "realtimedb",
        name: "Realtime Database",
        icon: <SiFirebase />,
        desc: "Advanced Skills",
        category: 'database',
        color: '#FFCA28'
    },
    {
        id: "sqlite",
        name: "SQLite",
        icon: <DiSqllite />,
        desc: "Basic Skills",
        category: 'database',
        color: '#003B57'
    },
    {
        id: "phpmyadmin",
        name: "phpMyAdmin",
        icon: <SiPhpmyadmin />,
        desc: "Intermediate Skills",
        category: 'database',
        color: '#6C78AF'
    },

    // DevOps & Tools
    {
        id: "git",
        name: "Git",
        icon: <FaGitSquare />,
        desc: "Advanced Skills",
        category: 'devops',
        color: '#F05032'
    },
    {
        id: "github",
        name: "GitHub",
        icon: <DiGithub />,
        desc: "Advanced Skills",
        category: 'devops',
        color: '#181717'
    },
    {
        id: "githubactions",
        name: "GitHub Actions",
        icon: <SiGithubactions />,
        desc: "Intermediate Skills",
        category: 'devops',
        color: '#2088FF'
    },
    {
        id: "gitlab",
        name: "GitLab",
        icon: <SiGitlab />,
        desc: "Intermediate Skills",
        category: 'devops',
        color: '#FC6D26'
    },
    {
        id: "docker",
        name: "Docker",
        icon: <FaDocker />,
        desc: "Intermediate Skills",
        category: 'devops',
        color: '#2496ED'
    },
    {
        id: "gitlabci",
        name: "GitLab CI/CD",
        icon: <SiGitlab />,
        desc: "Intermediate Skills",
        category: 'devops',
        color: '#FC6D26'
    },
    {
        id: "kubernetes",
        name: "Kubernetes",
        icon: <SiKubernetes />,
        desc: "Basic Skills",
        category: 'devops',
        color: '#326CE5'
    },
    {
        id: "aws",
        name: "AWS",
        icon: <DiAws />,
        desc: "Basic Skills",
        category: 'devops',
        color: '#232F3E'
    },
    {
        id: "jenkins",
        name: "Jenkins",
        icon: <FaJenkins />,
        desc: "Basic Skills",
        category: 'devops',
        color: '#D24939'
    },

    // Development Tools
    {
        id: "jest",
        name: "Jest",
        icon: <SiJest />,
        desc: "Intermediate Skills",
        category: 'tools',
        color: '#C21325'
    },
    {
        id: "webpack",
        name: "Webpack",
        icon: <SiWebpack />,
        desc: "Intermediate Skills",
        category: 'tools',
        color: '#8DD6F9'
    },
    {
        id: "npm",
        name: "NPM",
        icon: <FaNpm />,
        desc: "Advanced Skills",
        category: 'tools',
        color: '#CB3837'
    },
    {
        id: "jira",
        name: "Jira",
        icon: <SiJira />,
        desc: "Intermediate Skills",
        category: 'tools',
        color: '#0052CC'
    },
    {
        id: "swagger",
        name: "Swagger",
        icon: <SiSwagger />,
        desc: "Intermediate Skills",
        category: 'tools',
        color: '#85EA2D'
    },
    {
        id: "figma",
        name: "Figma",
        icon: <FaFigma />,
        desc: "Intermediate Skills",
        category: 'tools',
        color: '#F24E1E'
    },
    {
        id: "vercel",
        name: "Vercel",
        icon: <SiVercel />,
        desc: "Advanced Skills",
        category: 'tools',
        color: '#000000'
    },
    {
        id: "sanity",
        name: "Sanity",
        icon: <SiContentful />,
        desc: "Basic Skills",
        category: 'tools',
        color: '#F03E2F'
    },
    {
        id: "office",
        name: "Microsoft Office",
        icon: <SiMicrosoftoffice />,
        desc: "Advanced Skills",
        category: 'tools',
        color: '#D83B01'
    },
    {
        id: "excel",
        name: "Microsoft Excel",
        icon: <SiMicrosoftexcel />,
        desc: "Advanced Skills",
        category: 'tools',
        color: '#217346'
    },
    {
        id: "powerpoint",
        name: "Microsoft PowerPoint",
        icon: <SiMicrosoftpowerpoint />,
        desc: "Advanced Skills",
        category: 'tools',
        color: '#B7472A'
    },
    {
        id: "computerrepair",
        name: "Computer Repair",
        icon: <FaTerminal />,
        desc: "Intermediate Skills",
        category: 'tools',
        color: '#4CAF50'
    },
    {
        id: "figma",
        name: "Figma",
        icon: <SiFigma />,
        desc: "Intermediate Skills",
        category: 'tools',
        color: '#F24E1E'
    },
    {
        id: "webdesign",
        name: "Web Design",
        icon: <DiCss3 />,
        desc: "Advanced Skills",
        category: 'tools',
        color: '#FF9800'
    },
    {
        id: "uiux",
        name: "UI/UX Design",
        icon: <FaFigma />,
        desc: "Intermediate Skills",
        category: 'tools',
        color: '#0ACF83'
    },
    {
        id: "prototyping",
        name: "Prototyping",
        icon: <SiFigma />,
        desc: "Intermediate Skills",
        category: 'tools',
        color: '#A259FF'
    },
    {
        id: "agile",
        name: "Agile Methodology",
        icon: <SiJira />,
        desc: "Advanced Skills",
        category: 'tools',
        color: '#0052CC'
    }
];

export default technologies;