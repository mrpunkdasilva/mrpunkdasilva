export interface Technology {
    id: string;
    name: string;
    desc: string;
    category: 'frontend' | 'backend' | 'database' | 'devops' | 'tools';
    color?: string;
}

export const technologies: Technology[] = [
    {
        id: "html",
        name: "HTML5",
        desc: "Advanced Skills",
        category: 'frontend',
        color: '#E44D26'
    },
    {
        id: "responsive",
        name: "Responsive Design",

        desc: "Advanced Skills",
        category: 'frontend',
        color: '#1572B6'
    },
    {
        id: "css",
        name: "CSS3",

        desc: "Advanced Skills",
        category: 'frontend',
        color: '#1572B6'
    },
    {
        id: "sass",
        name: "Sass",

        desc: "Advanced Skills",
        category: 'frontend',
        color: '#CC6699'
    },
    {
        id: "js",
        name: "JavaScript",

        desc: "Advanced Skills",
        category: 'frontend',
        color: '#F0DB4F'
    },
    {
        id: "typescript",
        name: "TypeScript",

        desc: "Intermediate Skills",
        category: 'frontend',
        color: '#3178C6'
    },
    {
        id: "react",
        name: "React",

        desc: "Advanced Skills",
        category: 'frontend',
        color: '#61DAFB'
    },
    {
        id: "redux",
        name: "Redux",

        desc: "Intermediate Skills",
        category: 'frontend',
        color: '#764ABC'
    },
    {
        id: "nextjs",
        name: "Next.js",

        desc: "Advanced Skills",
        category: 'frontend',
        color: '#000000'
    },
    {
        id: "vue",
        name: "Vue.js",

        desc: "Basic Skills",
        category: 'frontend',
        color: '#4FC08D'
    },
    {
        id: "angular",
        name: "Angular",

        desc: "Intermediate Skills",
        category: 'frontend',
        color: '#DD0031'
    },
    {
        id: "tailwindcss",
        name: "Tailwind CSS",

        desc: "Intermediate Skills",
        category: 'frontend',
        color: '#06B6D4'
    },
    {
        id: "rxjs",
        name: "RxJS",

        desc: "Intermediate Skills",
        category: 'frontend',
        color: '#B7178C'
    },
    {
        id: "material",
        name: "Angular Material",

        desc: "Intermediate Skills",
        category: 'frontend',
        color: '#3F51B5'
    },
    {
        id: "headlessui",
        name: "Headless UI",

        desc: "Intermediate Skills",
        category: 'frontend',
        color: '#66E3FF'
    },
    {
        id: "cssmodules",
        name: "CSS Modules",

        desc: "Intermediate Skills",
        category: 'frontend',
        color: '#000000'
    },
    {
        id: "vite",
        name: "Vite",

        desc: "Intermediate Skills",
        category: 'frontend',
        color: '#646CFF'
    },
    {
        id: "tanstack",
        name: "TanStack Query",

        desc: "Basic Skills",
        category: 'frontend',
        color: '#FF4154'
    },
    {
        id: "jquery",
        name: "jQuery",

        desc: "Intermediate Skills",
        category: 'frontend',
        color: '#0769AD'
    },
    {
        id: "bootstrap",
        name: "Bootstrap",

        desc: "Intermediate Skills",
        category: 'frontend',
        color: '#7952B3'
    },
    {
        id: "nuxtjs",
        name: "Nuxt.js",

        desc: "Basic Skills",
        category: 'frontend',
        color: '#00DC82'
    },
    {
        id: "reactrouter",
        name: "React Router",

        desc: "Advanced Skills",
        category: 'frontend',
        color: '#CA4245'
    },
    {
        id: "socketio",
        name: "Socket.IO",

        desc: "Intermediate Skills",
        category: 'frontend',
        color: '#010101'
    },
    {
        id: "threejs",
        name: "THREE.js",

        desc: "Basic Skills",
        category: 'frontend',
        color: '#000000'
    },
    {
        id: "framer",
        name: "Framer Motion",

        desc: "Intermediate Skills",
        category: 'frontend',
        color: '#0055FF'
    },
    {
        id: "webspeech",
        name: "Web Speech API",

        desc: "Basic Skills",
        category: 'frontend',
        color: '#4285F4'
    },
    {
        id: "indexeddb",
        name: "IndexedDB",

        desc: "Basic Skills",
        category: 'frontend',
        color: '#FF9800'
    },
    {
        id: "serviceworkers",
        name: "Service Workers",

        desc: "Basic Skills",
        category: 'frontend',
        color: '#3740FF'
    },
    {
        id: "accessibility",
        name: "W3C Accessibility",

        desc: "Intermediate Skills",
        category: 'frontend',
        color: '#005A9C'
    },

    // Backend Technologies
    {
        id: "nodejs",
        name: "Node.js",

        desc: "Advanced Skills",
        category: 'backend',
        color: '#339933'
    },
    {
        id: "express",
        name: "Express",

        desc: "Advanced Skills", // Updated based on Black Nib project
        category: 'backend',
        color: '#000000'
    },
    {
        id: "java",
        name: "Java",

        desc: "Intermediate Skills",
        category: 'backend',
        color: '#007396'
    },
    {
        id: "springboot",
        name: "Spring Boot",

        desc: "Basic Skills",
        category: 'backend',
        color: '#6DB33F'
    },
    {
        id: "php",
        name: "PHP",

        desc: "Intermediate Skills",
        category: 'backend',
        color: '#777BB4'
    },
    {
        id: "laravel",
        name: "Laravel",

        desc: "Intermediate Skills",
        category: 'backend',
        color: '#FF2D20'
    },
    {
        id: "python",
        name: "Python",

        desc: "Advanced Skills",
        category: 'backend',
        color: '#3776AB'
    },
    {
        id: "graphql",
        name: "GraphQL",

        desc: "Basic Skills",
        category: 'backend',
        color: '#E10098'
    },
    {
        id: "jwt",
        name: "JWT",

        desc: "Intermediate Skills",
        category: 'backend',
        color: '#000000'
    },
    {
        id: "ejs",
        name: "EJS",

        desc: "Basic Skills",
        category: 'backend',
        color: '#A91E50'
    },
    {
        id: "shell",
        name: "Shell/CLI",

        desc: "Intermediate Skills",
        category: 'backend',
        color: '#4EAA25'
    },
    {
        id: "maven",
        name: "Maven",

        desc: "Basic Skills",
        category: 'backend',
        color: '#C71A36'
    },
    {
        id: "composer",
        name: "Composer",

        desc: "Basic Skills",
        category: 'backend',
        color: '#885630'
    },

    // Database Technologies
    {
        id: "mysql",
        name: "MySQL",

        desc: "Intermediate Skills",
        category: 'database',
        color: '#4479A1'
    },
    {
        id: "postgres",
        name: "PostgreSQL",

        desc: "Intermediate Skills",
        category: 'database',
        color: '#336791'
    },
    {
        id: "mongodb",
        name: "MongoDB",

        desc: "Advanced Skills", // Updated based on Black Nib project
        category: 'database',
        color: '#47A248'
    },
    {
        id: "sqlServer",
        name: "SQL Server",

        desc: "Basic Skills",
        category: 'database',
        color: '#CC2927'
    },
    {
        id: "firebase",
        name: "Firebase",

        desc: "Advanced Skills",
        category: 'database',
        color: '#FFCA28'
    },
    {
        id: "firebaseauth",
        name: "Firebase Authentication",

        desc: "Advanced Skills",
        category: 'database',
        color: '#FFCA28'
    },
    {
        id: "realtimedb",
        name: "Realtime Database",

        desc: "Advanced Skills",
        category: 'database',
        color: '#FFCA28'
    },
    {
        id: "sqlite",
        name: "SQLite",

        desc: "Basic Skills",
        category: 'database',
        color: '#003B57'
    },
    {
        id: "phpmyadmin",
        name: "phpMyAdmin",

        desc: "Intermediate Skills",
        category: 'database',
        color: '#6C78AF'
    },

    // DevOps & Tools
    {
        id: "git",
        name: "Git",

        desc: "Advanced Skills",
        category: 'devops',
        color: '#F05032'
    },
    {
        id: "github",
        name: "GitHub",

        desc: "Advanced Skills",
        category: 'devops',
        color: '#181717'
    },
    {
        id: "githubactions",
        name: "GitHub Actions",

        desc: "Intermediate Skills",
        category: 'devops',
        color: '#2088FF'
    },
    {
        id: "gitlab",
        name: "GitLab",

        desc: "Intermediate Skills",
        category: 'devops',
        color: '#FC6D26'
    },
    {
        id: "docker",
        name: "Docker",

        desc: "Intermediate Skills",
        category: 'devops',
        color: '#2496ED'
    },
    {
        id: "gitlabci",
        name: "GitLab CI/CD",

        desc: "Intermediate Skills",
        category: 'devops',
        color: '#FC6D26'
    },
    {
        id: "kubernetes",
        name: "Kubernetes",

        desc: "Basic Skills",
        category: 'devops',
        color: '#326CE5'
    },
    {
        id: "aws",
        name: "AWS",

        desc: "Basic Skills",
        category: 'devops',
        color: '#232F3E'
    },
    {
        id: "jenkins",
        name: "Jenkins",

        desc: "Basic Skills",
        category: 'devops',
        color: '#D24939'
    },

    // Development Tools
    {
        id: "jest",
        name: "Jest",

        desc: "Intermediate Skills",
        category: 'tools',
        color: '#C21325'
    },
    {
        id: "webpack",
        name: "Webpack",

        desc: "Intermediate Skills",
        category: 'tools',
        color: '#8DD6F9'
    },
    {
        id: "npm",
        name: "NPM",

        desc: "Advanced Skills",
        category: 'tools',
        color: '#CB3837'
    },
    {
        id: "jira",
        name: "Jira",

        desc: "Intermediate Skills",
        category: 'tools',
        color: '#0052CC'
    },
    {
        id: "swagger",
        name: "Swagger",

        desc: "Intermediate Skills",
        category: 'tools',
        color: '#85EA2D'
    },
    {
        id: "figma",
        name: "Figma",

        desc: "Intermediate Skills",
        category: 'tools',
        color: '#F24E1E'
    },
    {
        id: "vercel",
        name: "Vercel",

        desc: "Advanced Skills",
        category: 'tools',
        color: '#000000'
    },
    {
        id: "sanity",
        name: "Sanity",

        desc: "Basic Skills",
        category: 'tools',
        color: '#F03E2F'
    },
    {
        id: "office",
        name: "Microsoft Office",

        desc: "Advanced Skills",
        category: 'tools',
        color: '#D83B01'
    },
    {
        id: "excel",
        name: "Microsoft Excel",

        desc: "Advanced Skills",
        category: 'tools',
        color: '#217346'
    },
    {
        id: "powerpoint",
        name: "Microsoft PowerPoint",

        desc: "Advanced Skills",
        category: 'tools',
        color: '#B7472A'
    },
    {
        id: "computerrepair",
        name: "Computer Repair",

        desc: "Intermediate Skills",
        category: 'tools',
        color: '#4CAF50'
    },
    {
        id: "figma",
        name: "Figma",

        desc: "Intermediate Skills",
        category: 'tools',
        color: '#F24E1E'
    },
    {
        id: "webdesign",
        name: "Web Design",

        desc: "Advanced Skills",
        category: 'tools',
        color: '#FF9800'
    },
    {
        id: "uiux",
        name: "UI/UX Design",

        desc: "Intermediate Skills",
        category: 'tools',
        color: '#0ACF83'
    },
    {
        id: "prototyping",
        name: "Prototyping",

        desc: "Intermediate Skills",
        category: 'tools',
        color: '#A259FF'
    },
    {
        id: "agile",
        name: "Agile Methodology",

        desc: "Advanced Skills",
        category: 'tools',
        color: '#0052CC'
    }
];

export default technologies;