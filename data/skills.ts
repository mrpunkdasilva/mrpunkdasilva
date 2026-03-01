import technologies  from './technologies'

export interface SkillCategory {
    name: string
    description: string
    skills: typeof technologies
}

export const skillCategories: SkillCategory[] = [
    {
        name: "Frontend Development",
        description: "Building responsive and interactive user interfaces",
        skills: technologies.filter(tech => 
            ["react", "vue", "angular", "html", "css", "js", "typescript", "nextjs", 
             "tailwindcss", "rxjs", "material", "headlessui", "cssmodules", "vite", "tanstack",
             "sass", "redux", "nuxtjs", "reactrouter", "socketio", "threejs", "framer", 
             "webspeech", "indexeddb", "serviceworkers", "accessibility", "jquery", "bootstrap",
             "responsive"].includes(tech.id)
        )
    },
    {
        name: "Backend Development",
        description: "Creating robust and scalable server-side applications",
        skills: technologies.filter(tech => 
            ["nodejs", "python", "express", "java", "springboot", "php", "laravel", 
             "graphql", "jwt", "ejs", "shell", "maven", "composer"].includes(tech.id)
        )
    },
    {
        name: "Database & State Management",
        description: "Working with various database systems and state management solutions",
        skills: technologies.filter(tech => 
            ["firebase", "mongodb", "mysql", "postgres", "sqlServer", "firebaseauth", 
             "realtimedb", "sqlite", "phpmyadmin", "tanstack", "redux"].includes(tech.id)
        )
    },
    {
        name: "DevOps & Cloud",
        description: "Managing development operations and cloud infrastructure",
        skills: technologies.filter(tech => 
            ["docker", "git", "github", "githubactions", "gitlab", "gitlabci", "kubernetes", 
             "aws", "jenkins", "vercel"].includes(tech.id)
        )
    },
    {
        name: "Development Tools & Methodologies",
        description: "Essential tools and practices for modern development workflow",
        skills: technologies.filter(tech => 
            ["github", "figma", "vercel", "jest", "webpack", "npm", "jira", "swagger", 
             "sanity", "office", "excel", "powerpoint", "computerrepair", "webdesign", 
             "uiux", "prototyping", "agile"].includes(tech.id)
        )
    }
];