export interface Project {
    title: string;
    description: string;
    technologies: string[];
    challenges: string[];
    solutions: string[];
    keyFeatures: string[];
    learnings: string[];
    link?: string;
    githubLink?: string;
    isFeatured?: boolean;
}

export const projects: Project[] = [
     {
        title: "Coffee Website",
        description: "Development of a responsive landing page for a coffee shop using HTML, CSS, and JavaScript.",
        technologies: ["JavaScript", "CSS", "HTML", "UI/UX", "Semantic HTML", "Web Project Management"],
        challenges: [
            "Creating responsive and modern design",
            "Implementing interactive features",
            "Optimizing for search engines"
        ],
        solutions: [
            "Developed mobile-first responsive layout",
            "Created interactive UI components",
            "Implemented SEO best practices"
        ],
        keyFeatures: [
            "Modern and attractive design with responsive layout",
            "Coffee shop presentation section with history and philosophy",
            "Interactive menu with product details",
            "Engagement features including contact forms and rating system",
            "SEO optimization for better search engine visibility"
        ],
        learnings: [
            "Responsive design implementation",
            "Modern web development practices",
            "SEO optimization techniques"
        ],
        link: "https://mrpunkdasilva.github.io/coffee-website/",
        githubLink: "https://github.com/mrpunkdasilva/coffee-website/"
    },
    {
        title: "Doces da Thay - E-commerce Frontend",
        description: "Frontend development for a dessert e-commerce platform",
        technologies: ["JavaScript", "Git", "jQuery", "Bootstrap", "Project Management"],
        challenges: [
            "Developing a responsive and accessible design",
            "Integrating different technologies into an efficient purchase flow",
            "Adopting good project management practices"
        ],
        solutions: [
            "Implemented responsive design principles",
            "Created seamless integration between technologies",
            "Established efficient project management workflow"
        ],
        keyFeatures: [
            "Development using jQuery, HTML, CSS, Bootstrap, and JavaScript",
            "Responsive and accessible product gallery and shopping screens",
            "Fluid navigation across different devices",
            "Project management using Git for version control",
            "Interactive shopping experience for dessert lovers"
        ],
        learnings: [
            "E-commerce development best practices",
            "Integration of multiple frontend technologies",
            "Project management and version control",
            "Responsive design implementation"
        ],
        link: "https://docinhos-da-thay.netlify.app/",
        githubLink: "https://github.com/mrpunkdasilva/doces_da_thay"
    },
     {
        title: "Punk Domus - Blog (In Progress)",
        description: "Blog created with Vue and Nuxt Content, featuring a minimalist and responsive design with efficient content management.",
        technologies: ["Vue.js", "Nuxt.js", "Nuxt Content", "JavaScript"],
        challenges: [
            "Adaptation to Nuxt Content for efficient content management",
            "Implementation of Vue.js best practices",
            "Creation of clean and accessible design"
        ],
        solutions: [
            "Implemented SEO-friendly features with Nuxt",
            "Created modular and organized structure",
            "Developed fast and interactive navigation"
        ],
        keyFeatures: [
            "Efficient content management with Nuxt Content",
            "Minimalist and responsive design",
            "SEO optimization",
            "Fast and interactive navigation"
        ],
        learnings: [
            "Vue.js and Nuxt Content mastery",
            "Frontend development best practices",
            "Performance optimization techniques"
        ],
        link: "https://punkdomus.netlify.app/",
        githubLink: "https://github.com/mrpunkdasilva/PunkDomus",
        isFeatured: true
    },
    {
        title: "ByteBabe",
        description: "Modular CLI toolkit with cyberpunk aesthetics for development workflow management, featuring Docker, Git, and development tools integration.",
        technologies: ["Shell", "Docker", "Git", "CLI", "DevOps"],
        challenges: [
            "Creating modular architecture for extensibility",
            "Implementing unified interface for diverse tools",
            "Developing cyberpunk-themed CLI experience"
        ],
        solutions: [
            "Developed modular system with independent modules",
            "Created consistent CLI interface across tools",
            "Implemented aesthetic terminal UI"
        ],
        keyFeatures: [
            "Docker management (Poseidon Module)",
            "Git operations (Neo Module)",
            "Development tools (Matrix Module)",
            "Database operations (Oracle Module)",
            "Cyberpunk CLI interface"
        ],
        learnings: [
            "CLI application architecture",
            "DevOps tool integration",
            "Shell module development"
        ],
        link: "https://mrpunkdasilva.github.io/bytebabe/",
        githubLink: "https://github.com/mrpunkdasilva/bytebabe"
    },
    {
        title: "Opala Filmes",
        description: "Web platform for movie voting and sharing opinions, built with Next.js, Firebase, and TailwindCSS.",
        technologies: ["Next.js", "React", "Firebase", "TailwindCSS", "Headless UI"],
        challenges: [
            "Implementing real-time voting system",
            "Creating efficient movie management",
            "Developing random movie selection algorithm"
        ],
        solutions: [
            "Integrated Firebase for real-time features",
            "Developed organized movie management system",
            "Created engaging user interface"
        ],
        keyFeatures: [
            "Movie watchlist management",
            "5-star voting system",
            "Random movie selection",
            "Watched movies tracking",
            "Dark/light theme",
            "Responsive design"
        ],
        learnings: [
            "Real-time database integration",
            "Modern React patterns",
            "UI/UX best practices"
        ],
        link: "https://opala-filmes.vercel.app/",
        githubLink: "https://github.com/Opaleiros-Foundation/Opala-Filmes"
    },
    {
        title: "Mental Health DB",
        description: "Accessibility-focused website dedicated to Mental Health, featuring comprehensive accessibility resources for diverse users.",
        technologies: ["HTML", "CSS", "JavaScript", "W3C Accessibility", "Responsive Design"],
        challenges: [
            "Implementing Text-to-Speech functionality",
            "Creating accessible dark mode and high contrast features",
            "Integrating Sign Language translation and video subtitles"
        ],
        solutions: [
            "Developed W3C compliant accessibility features",
            "Implemented responsive design for all devices",
            "Created inclusive user experience"
        ],
        keyFeatures: [
            "Text-to-Speech content reading",
            "Dark mode and high contrast options",
            "Sign Language translation",
            "Video subtitles"
        ],
        learnings: [
            "Accessibility best practices",
            "Inclusive design principles",
            "Web standards compliance"
        ],
        link: "https://mrpunkdasilva.github.io/mental-health-db/",
        githubLink: "https://github.com/mrpunkdasilva/mental-health-db"
    },
    {
        title: "VChat",
        description: "Real-time chat application built with Vue.js and Firebase Realtime Database, featuring secure authentication and instant messaging.",
        technologies: ["Vue.js", "Firebase", "JavaScript", "Firebase Authentication", "Realtime Database"],
        challenges: [
            "Integration of Firebase Realtime Database with Vue.js",
            "Implementation of secure authentication flow",
            "Ensuring real-time communication performance"
        ],
        solutions: [
            "Created efficient real-time data synchronization",
            "Implemented secure Firebase Authentication",
            "Developed responsive and intuitive UI"
        ],
        keyFeatures: [
            "Real-time messaging",
            "Secure authentication",
            "Chat room creation",
            "Responsive design"
        ],
        learnings: [
            "Real-time database management",
            "Authentication implementation",
            "Vue.js state management"
        ],
        link: "https://appvchat.netlify.app/",
        githubLink: "https://github.com/mrpunkdasilva/vchat"
    },
    {
        title: "Multiform",
        description: "Multi-step form application built with ReactJS and TypeScript, featuring dynamic validation and smooth navigation.",
        technologies: ["ReactJS", "TypeScript", "Frontend Development"],
        challenges: [
            "Managing complex form state across multiple steps",
            "Implementing TypeScript validation",
            "Creating fluid navigation between steps"
        ],
        solutions: [
            "Developed efficient state management system",
            "Created robust form validation",
            "Implemented intuitive step navigation"
        ],
        keyFeatures: [
            "Multi-step form flow",
            "Dynamic validation",
            "Responsive design",
            "State persistence"
        ],
        learnings: [
            "Form state management",
            "TypeScript integration",
            "React hooks optimization"
        ],
        link: "https://multiform-react-red.vercel.app/step3",
        githubLink: "https://github.com/mrpunkdasilva/multiform"
    },
    {
        title: "Black Nib - Modern Blog Platform",
        description: "Full-featured blog platform built with React 18 and Node.js, featuring modern state management and server-side rendering.",
        technologies: [
            "React 18", "Vite 6", "TanStack Query 5", "Node.js",
            "Express", "MongoDB", "Docker", "JWT",
            "CSS Modules", "React Router DOM 7"
        ],
        challenges: [
            "Implementation of modern blog architecture",
            "Development of responsive markdown editor",
            "Integration of MongoDB with Docker",
            "Creation of efficient state management system"
        ],
        solutions: [
            "Implemented comprehensive SEO optimization",
            "Created responsive and accessible design",
            "Developed scalable backend architecture"
        ],
        keyFeatures: [
            "Server-side rendering",
            "Dark/Light theme support",
            "Infinite scroll for posts",
            "Category-based organization",
            "Featured posts section",
            "RSS feed support"
        ],
        learnings: [
            "Modern JavaScript technologies",
            "Full-stack development practices",
            "Database integration and containerization"
        ],
        link: "https://blog-black-nilb.vercel.app/",
        githubLink: "https://github.com/mrpunkdasilva/blog-black-nilb",
        isFeatured: true
    },
    {
        title: "Blooger Website",
        description: "Clean and functional blog interface developed using HTML and CSS, focusing on user experience and responsive design.",
        technologies: ["HTML", "CSS", "JavaScript"],
        challenges: [
            "Creating effective layout with pure HTML and CSS",
            "Adapting design for mobile devices",
            "Organizing clean and reusable code"
        ],
        solutions: [
            "Implemented semantic HTML practices",
            "Created responsive design system",
            "Developed modular CSS structure"
        ],
        keyFeatures: [
            "Clean and functional interface",
            "Responsive design",
            "Modern typography and colors",
            "Semantic HTML structure"
        ],
        learnings: [
            "Responsive design techniques",
            "Modern CSS practices",
            "Frontend development best practices"
        ],
        link: "https://mrpunkdasilva.github.io/blooger_website/",
        githubLink: "https://github.com/mrpunkdasilva/blooger_website"
    },
    {
        title: "BigbasketEccomerce - In Progress",
        description: "E-commerce platform built with Angular 19, featuring modern shopping experience and responsive design.",
        technologies: ["Angular", "TypeScript", "RxJS", "Angular Material", "Vercel"],
        challenges: [
            "Building scalable e-commerce architecture",
            "Implementing efficient state management",
            "Creating responsive product catalog"
        ],
        solutions: [
            "Developed modular Angular architecture",
            "Implemented modern state management patterns",
            "Created responsive and intuitive UI"
        ],
        keyFeatures: [
            "Product catalog management",
            "Shopping cart functionality",
            "User authentication",
            "Responsive design",
            "Modern Angular features"
        ],
        learnings: [
            "Angular 19 development",
            "E-commerce architecture",
            "State management patterns"
        ],
        link: "https://bigbasket-eccomerce.vercel.app",
        githubLink: "https://github.com/mrpunkdasilva/bigbasket-ecommerce",
    },
    {
        title: "Budget App",
        description: "JavaScript-powered budget management application with interactive features for tracking income and expenses.",
        technologies: ["JavaScript", "HTML", "CSS"],
        challenges: [
            "Structuring efficient budget calculation logic",
            "Developing user-friendly interface",
            "Ensuring calculation accuracy"
        ],
        solutions: [
            "Implemented real-time calculations",
            "Created responsive design",
            "Developed organized code structure"
        ],
        keyFeatures: [
            "Income and expense management",
            "Automatic balance calculation",
            "Category organization",
            "Responsive design"
        ],
        learnings: [
            "JavaScript data manipulation",
            "Dynamic interface development",
            "Performance optimization"
        ],
        link: "https://mrpunkdasilva.github.io/js-bundget-app/",
        githubLink: "https://github.com/mrpunkdasilva/js-bundget-app"
    },
    {
        title: "Cadmo SA - Dental Clinic System",
        description: "Complete web system for a dental clinic featuring modern interface and comprehensive management capabilities.",
        technologies: [
            "JavaScript", "jQuery", "PHP",
            "MySQL", "Git", "CSS",
            "PhpMyAdmin"
        ],
        challenges: [
            "Technology selection within project constraints",
            "Understanding and implementing client requirements",
            "Integration of multiple system components"
        ],
        solutions: [
            "Applied agile methodologies",
            "Implemented comprehensive system analysis",
            "Developed scalable architecture"
        ],
        keyFeatures: [
            "Modern and intuitive interface",
            "Database integration",
            "User experience focused design",
            "Complete clinic management"
        ],
        learnings: [
            "Project management skills",
            "System analysis techniques",
            "Full-stack development practices"
        ],
        isFeatured: true
    },
    {
        title: "Easy Bank - Landing Page",
        description: "Frontend development of a landing page for a bank",
        technologies: ["SCSS", "JavaScript", "Project Management", "UX/UI", "HTML"],
        challenges: [
            "Implementation of mobile-first design",
            "Creation of interactive and attractive sections",
            "Efficient integration of HTML, JavaScript, and SCSS"
        ],
        solutions: [
            "Applied mobile-first design principles",
            "Developed interactive UI components",
            "Created efficient integration workflow"
        ],
        keyFeatures: [
            "Developed with HTML, JavaScript, and SCSS using mobile-first approach",
            "Optimized design for mobile devices",
            "Interactive sections highlighting bank services",
            "Clear and efficient navigation",
            "Modern and responsive styling with SCSS"
        ],
        learnings: [
            "Mobile-first development approach",
            "SCSS architecture and organization",
            "Modern frontend development practices",
            "Performance optimization"
        ],
        link: "https://ieasybank.netlify.app/",
        githubLink: "https://github.com/mrpunkdasilva/fem-easybank"
    },
    {
        title: "FocalPoint - Technical Test (To-Do List)",
        description: "To-Do List application built with Next.js (App Router) and SCSS, featuring fluid navigation and optimized performance.",
        technologies: ["Next.js", "SCSS", "TypeScript", "Vercel"],
        challenges: [
            "Maximum design fidelity with precise proportions and gradients",
            "Organizing SCSS code for maintainability and reusability",
            "Meeting 3-day delivery deadline with complete functionality"
        ],
        solutions: [
            "Implemented responsive and accessible design",
            "Created modular SCSS architecture",
            "Delivered high-quality application within deadline"
        ],
        keyFeatures: [
            "Next.js App Router implementation",
            "SCSS modular styling",
            "Task management (CRUD operations)",
            "Responsive and accessible design",
            "High-performance Vercel deployment"
        ],
        learnings: [
            "Next.js App Router optimization",
            "SCSS architecture best practices",
            "Frontend development with design focus"
        ],
        link: "https://focalpoint-punk.vercel.app",
        githubLink: "https://github.com/mrpunkdasilva/focalpoint-teste-tecnico"
    },
    {
        title: "Food Website",
        description: "Modern restaurant website with responsive design and interactive features, built using HTML, CSS, and JavaScript.",
        technologies: ["HTML", "CSS", "JavaScript", "UX/UI"],
        challenges: [
            "Implementing responsive design across devices",
            "Creating cohesive brand visual identity",
            "Efficient integration of frontend technologies"
        ],
        solutions: [
            "Developed mobile-responsive layouts",
            "Created engaging user interface",
            "Implemented smooth navigation system"
        ],
        keyFeatures: [
            "Interactive menu and photo gallery",
            "Contact form integration",
            "Responsive design",
            "Modern UI/UX",
            "Fluid navigation"
        ],
        learnings: [
            "Responsive design techniques",
            "Brand identity implementation",
            "Frontend integration practices"
        ],
        link: "https://mrpunkdasilva.github.io/food-website/",
        githubLink: "https://github.com/mrpunkdasilva/food-website"
    },
    {
        title: "Belinha's PetShop Frontend",
        description: "Interactive pet shop website featuring jQuery animations and responsive design.",
        technologies: ["HTML", "CSS", "JavaScript", "jQuery"],
        challenges: [
            "Implementing dynamic jQuery functionalities",
            "Ensuring cross-device responsiveness",
            "Creating intuitive service navigation"
        ],
        solutions: [
            "Developed interactive animations",
            "Implemented responsive design patterns",
            "Created user-friendly navigation"
        ],
        keyFeatures: [
            "Dynamic jQuery animations",
            "Responsive layout",
            "Product showcase",
            "Service information",
            "Contact integration"
        ],
        learnings: [
            "jQuery animation techniques",
            "Responsive design implementation",
            "Frontend integration skills"
        ],
        link: "https://petshopdabelinha.netlify.app/",
        githubLink: "https://github.com/mrpunkdasilva/Interfaces-Projetos"
    },
    {
        title: "hDC Host Landing Page",
        description: "Mobile-first responsive landing page for hosting platform with modern design and smooth animations.",
        technologies: ["HTML", "CSS", "JavaScript", "Mobile First"],
        challenges: [
            "Implementing mobile-first responsive design",
            "Creating smooth scroll animations",
            "Optimizing for various screen sizes"
        ],
        solutions: [
            "Applied mobile-first methodology",
            "Implemented smooth transitions",
            "Created responsive layouts"
        ],
        keyFeatures: [
            "Mobile-first approach",
            "Scroll animations",
            "Responsive design",
            "Modern UI",
            "Smooth navigation"
        ],
        learnings: [
            "Mobile-first development",
            "Animation implementation",
            "Responsive design patterns"
        ],
        link: "https://hdchost.vercel.app/",
        githubLink: "https://github.com/mrpunkdasilva/HTML5-e-CSS3-Tecnicas-Avancadas-4-projetos"
    },
    {
        title: "Simple Recipes",
        description: "Frontend development of a responsive recipes website, featuring intuitive navigation and dynamic filtering capabilities.",
        technologies: ["HTML", "CSS", "JavaScript", "UX/UI", "Project Management"],
        challenges: [
            "Creating intuitive navigation for extensive recipe collection",
            "Implementing responsive design across devices",
            "Integrating dynamic JavaScript features"
        ],
        solutions: [
            "Developed user-friendly interface",
            "Implemented comprehensive filtering system",
            "Created dynamic interactive features"
        ],
        keyFeatures: [
            "Intuitive recipe navigation",
            "Ingredient and category filters",
            "Responsive design",
            "Dynamic annotations and favorites"
        ],
        learnings: [
            "User interface optimization",
            "Dynamic feature implementation",
            "Responsive design techniques"
        ],
        link: "https://you-simply-recipes.netlify.app/",
        githubLink: "https://github.com/mrpunkdasilva/simply-recipes"
    },
    {
        title: "Vuether",
        description: "Weather forecast application built with Vue.js and OpenWeather API, featuring real-time weather updates and responsive design.",
        technologies: ["Vue.js", "JavaScript", "REST API", "OpenWeather API"],
        challenges: [
            "Integrating OpenWeather API effectively",
            "Implementing real-time data updates",
            "Creating responsive weather displays"
        ],
        solutions: [
            "Developed efficient API integration",
            "Created dynamic weather interface",
            "Implemented responsive design"
        ],
        keyFeatures: [
            "Real-time weather data",
            "Location-based forecasts",
            "Multi-day predictions",
            "Responsive interface"
        ],
        learnings: [
            "API integration techniques",
            "Vue.js development",
            "Weather data handling"
        ],
        link: "https://vuether-peach.vercel.app/",
        githubLink: "https://github.com/mrpunkdasilva/vuether"
    },
    {
        title: "Halloween Website",
        description: "Mobile-first responsive Halloween-themed website showcasing modern web development practices.",
        technologies: ["HTML", "CSS", "JavaScript", "Mobile First"],
        challenges: [
            "Implementing mobile-first design approach",
            "Creating theme-consistent visual identity",
            "Ensuring cross-device compatibility"
        ],
        solutions: [
            "Applied mobile-first methodology",
            "Developed cohesive theme design",
            "Created responsive layouts"
        ],
        keyFeatures: [
            "Mobile-first design",
            "Responsive layout",
            "Theme-based aesthetics",
            "Smooth navigation"
        ],
        learnings: [
            "Mobile-first development",
            "Theme-based design",
            "Responsive techniques"
        ],
        link: "https://mrpunkdasilva.github.io/responsive-halloween/",
        githubLink: "https://github.com/mrpunkdasilva/responsive-halloween"
    },
    {
        title: "vMovie",
        description: "Movie search and details webapp built with Vue.js, integrating with OMDb API for comprehensive movie information.",
        technologies: ["Vue.js", "JavaScript", "OMDb API", "Fetch API"],
        challenges: [
            "Integrating OMDb API securely",
            "Creating responsive movie displays",
            "Implementing efficient search functionality"
        ],
        solutions: [
            "Developed secure API integration",
            "Created responsive movie interface",
            "Implemented dynamic search system"
        ],
        keyFeatures: [
            "Movie search functionality",
            "Detailed movie information",
            "Responsive design",
            "Dynamic navigation"
        ],
        learnings: [
            "Vue.js development",
            "API integration",
            "Frontend optimization"
        ],
        githubLink: "https://github.com/mrpunkdasilva/vmovies"
    },
    {
        title: "Mashup",
        description: "Real-time social webapp simulating a chat platform with music and 3D avatar rendering capabilities (3D features coming soon, with a 3D cake prototype already implemented).",
        technologies: ["TypeScript", "Next.js", "Socket.IO", "Tailwind CSS", "Redux", "THREE.js"],
        challenges: [
            "Implementing real-time communication features",
            "Integrating 3D rendering capabilities",
            "Creating responsive social app interface",
            "Managing complex state with Redux"
        ],
        solutions: [
            "Developed Socket.IO integration for real-time features",
            "Created 3D rendering prototype using THREE.js",
            "Implemented responsive UI with Tailwind CSS",
            "Utilized Redux for efficient state management"
        ],
        keyFeatures: [
            "Real-time chat functionality",
            "Music integration",
            "3D avatar rendering (coming soon)",
            "Responsive social interface",
            "Modern TypeScript implementation"
        ],
        learnings: [
            "Real-time web application development",
            "3D rendering in web applications",
            "State management with Redux",
            "Next.js application architecture"
        ],
        link: "https://mashup-kappa.vercel.app/",
        githubLink: "https://github.com/mrpunkdasilva/mashup"
    },
    {
        title: "CyberNews - Cyberpunk Hacker News Client",
        description: "A retro-futuristic take on Hacker News, built with Next.js and featuring cyberpunk/retrowave aesthetics.",
        technologies: ["Next.js", "TypeScript", "TailwindCSS", "Framer Motion", "Web Speech API", "IndexedDB", "Service Workers"],
        challenges: [
            "Creating an immersive cyberpunk interface with retro effects",
            "Implementing keyboard-first navigation and voice commands",
            "Building offline support and real-time updates",
            "Developing multiple theme customizations"
        ],
        solutions: [
            "Designed terminal-like interface with CRT screen effects",
            "Implemented vim-style keyboard navigation and voice command system",
            "Created offline support using Service Workers and IndexedDB",
            "Developed multiple cyberpunk themes with customization options"
        ],
        keyFeatures: [
            "Terminal-like interface with CRT screen effect",
            "Keyboard-first navigation (vim-style)",
            "Hacker mode with pure terminal interface",
            "Voice command support",
            "Article decryption animations",
            "Matrix-style rain effect",
            "Retro boot sequence",
            "Multiple cyberpunk themes"
        ],
        learnings: [
            "Advanced Next.js application development",
            "Voice recognition implementation",
            "Offline-first application architecture",
            "Animation and motion design in web applications"
        ],
        link: "https://cynews.vercel.app/",
        githubLink: "https://github.com/mrpunkdasilva/cybernews",
        isFeatured: true
    },
    {
        title: "Blood Donation Project",
        description: "A platform connecting individuals in need of blood with willing blood donors, built with modern web technologies and containerized with Docker.",
        technologies: ["Next.js", "TypeScript", "TailwindCSS", "Docker", "Git"],
        challenges: [
            "Creating an intuitive interface for connecting blood donors and recipients",
            "Implementing responsive design for accessibility across devices",
            "Setting up containerized development environment with Docker",
            "Collaborating effectively in a team environment"
        ],
        solutions: [
            "Contributed to interface development with focus on usability",
            "Implemented responsive design using TailwindCSS",
            "Utilized Docker for consistent development environments",
            "Collaborated through Git for version control and team coordination"
        ],
        keyFeatures: [
            "Donor-recipient matching system",
            "Responsive and accessible interface",
            "Containerized application architecture",
            "Collaborative development workflow"
        ],
        learnings: [
            "Collaborative development practices",
            "Docker containerization",
            "Modern frontend development with Next.js and TypeScript",
            "Documentation best practices"
        ],
        link: "https://blood-donation-project.vercel.app/",
        githubLink: "https://github.com/mrpunkdasilva/Blood-Donation-Project"
    },
    {
        title: "Tour de Linux",
        description: "A Linux forum with a pure terminal-like interface experience, designed for Linux enthusiasts to discuss and share knowledge.",
        technologies: ["HTML", "CSS", "JavaScript", "Terminal UI", "Linux"],
        challenges: [
            "Creating an authentic terminal-like experience on the web",
            "Implementing forum functionality with terminal aesthetics",
            "Balancing usability with the terminal interface concept"
        ],
        solutions: [
            "Developed terminal-inspired UI with command-line interaction",
            "Created intuitive navigation within terminal constraints",
            "Implemented Linux-themed design elements"
        ],
        keyFeatures: [
            "Terminal-like user interface",
            "Linux discussion forums",
            "Command-line navigation",
            "Linux community features"
        ],
        learnings: [
            "Terminal UI implementation in web applications",
            "Linux community engagement patterns",
            "Command-line interface design principles"
        ],
        githubLink: "https://github.com/mrpunkdasilva/tourdelinux"
    },
    {
        title: "Rocket.Q",
        description: "An interactive Q&A application where users can create rooms for anonymous questions, with password-protected management features.",
        technologies: ["HTML", "CSS", "JavaScript", "Node.js", "EJS", "Express", "SQLite"],
        challenges: [
            "Implementing secure room creation and management",
            "Developing anonymous question submission system",
            "Creating efficient database structure with SQLite"
        ],
        solutions: [
            "Developed password-protected room management",
            "Created intuitive anonymous question interface",
            "Implemented efficient data storage with SQLite"
        ],
        keyFeatures: [
            "Anonymous question submission",
            "Password-protected room management",
            "Question status tracking",
            "Interactive user interface"
        ],
        learnings: [
            "Full-stack application development",
            "Database design with SQLite",
            "Server-side rendering with EJS",
            "Express.js application architecture"
        ],
        link: "https://nlw-6-discover.vercel.app/",
        githubLink: "https://github.com/mrpunkdasilva/rocketq"
    },
    {
        title: "Music Generics",
        description: "A responsive frontend website for concert ticket sales and merchandise, featuring modern HTML5 and CSS3 implementation.",
        technologies: ["HTML5", "CSS3", "Responsive Design"],
        challenges: [
            "Creating an attractive and responsive design for ticket sales",
            "Implementing intuitive e-commerce interface for merchandise",
            "Developing mobile-friendly concert information displays"
        ],
        solutions: [
            "Designed responsive layouts for all device sizes",
            "Created intuitive ticket purchasing interface",
            "Implemented attractive merchandise showcase"
        ],
        keyFeatures: [
            "Concert ticket sales interface",
            "Merchandise store",
            "Responsive design",
            "Modern visual aesthetics"
        ],
        learnings: [
            "Responsive design techniques",
            "E-commerce frontend development",
            "Modern CSS3 implementation",
            "User experience design for events"
        ],
        link: "https://mrpunkdasilva.github.io/site-music-generics/",
        githubLink: "https://github.com/mrpunkdasilva/site-music-generics"
    },
    {
        title: "Turtle Python Art",
        description: "Creative drawings and art made with Python's Turtle graphics library, showcasing programming and artistic skills.",
        technologies: ["Python", "Turtle Graphics"],
        challenges: [
            "Translating artistic concepts into programmatic instructions",
            "Optimizing drawing algorithms for complex patterns",
            "Creating visually appealing designs with limited graphics tools"
        ],
        solutions: [
            "Developed efficient drawing algorithms",
            "Created modular code for reusable pattern elements",
            "Implemented creative use of Turtle's movement capabilities"
        ],
        keyFeatures: [
            "Geometric pattern generation",
            "Artistic drawings through code",
            "Visual programming demonstrations",
            "Creative coding examples"
        ],
        learnings: [
            "Python programming techniques",
            "Algorithmic thinking for visual art",
            "Geometry and mathematics in programming",
            "Creative coding practices"
        ],
        githubLink: "https://github.com/mrpunkdasilva/Turtle-Python"
    },
    {
        title: "My TODO List",
        description: "A task management application built with ReactJS and TypeScript, featuring modern state management and type safety.",
        technologies: ["ReactJS", "TypeScript", "Frontend Development"],
        challenges: [
            "Implementing type-safe state management",
            "Creating intuitive task organization interface",
            "Developing efficient data persistence"
        ],
        solutions: [
            "Utilized TypeScript for type safety",
            "Implemented modern React patterns",
            "Created user-friendly task management interface"
        ],
        keyFeatures: [
            "Task creation and management",
            "Type-safe implementation",
            "Modern React architecture",
            "Intuitive user interface"
        ],
        learnings: [
            "TypeScript integration with React",
            "Modern state management techniques",
            "Frontend development best practices",
            "User experience design for productivity tools"
        ],
        githubLink: "https://github.com/mrpunkdasilva/my-todo-list-react"
    },
    {
        title: "Trick Lix - Digital Library",
        description: "A digital library platform for book lovers, featuring a clean interface and book management capabilities.",
        technologies: ["HTML", "CSS", "JavaScript"],
        challenges: [
            "Creating an engaging interface for book enthusiasts",
            "Implementing efficient book catalog management",
            "Developing responsive design for various devices"
        ],
        solutions: [
            "Designed user-friendly book browsing interface",
            "Created responsive layouts for all screen sizes",
            "Implemented intuitive navigation system"
        ],
        keyFeatures: [
            "Digital book catalog",
            "User-friendly interface",
            "Responsive design",
            "Book lover community features"
        ],
        learnings: [
            "Frontend development techniques",
            "Digital library implementation",
            "User experience design for readers",
            "Collaborative development practices"
        ],
        link: "https://dev-gustavo-henrique.github.io/trick-lix/",
        githubLink: "https://github.com/mrpunkdasilva/trick-lix"
    },
    {
        title: "Minerva OS",
        description: "A browser-based operating system simulation with desktop environment and applications, built with web technologies.",
        technologies: ["HTML", "SCSS", "JavaScript"],
        challenges: [
            "Creating an authentic OS experience in the browser",
            "Implementing window management and application switching",
            "Developing a cohesive desktop environment"
        ],
        solutions: [
            "Designed realistic OS interface and interactions",
            "Implemented window management system",
            "Created simulated applications and system features"
        ],
        keyFeatures: [
            "Desktop environment simulation",
            "Window management system",
            "Application simulation",
            "OS-like user experience"
        ],
        learnings: [
            "Complex UI/UX implementation",
            "Advanced JavaScript techniques",
            "Operating system interface design",
            "Browser capabilities and limitations"
        ],
        link: "https://mrpunkdasilva.github.io/minervaOS/",
        githubLink: "https://github.com/mrpunkdasilva/minervaOS",
        isFeatured: true
    },
    {
        title: "REST API",
        description: "A RESTful API built with Java and Spring Boot, providing CRUD operations and user authentication for data management.",
        technologies: ["Java", "Spring Boot", "MySQL", "Maven"],
        challenges: [
            "Implementing secure authentication system",
            "Creating efficient data management operations",
            "Developing well-structured API documentation"
        ],
        solutions: [
            "Developed secure authentication mechanisms",
            "Implemented efficient CRUD operations",
            "Created comprehensive API documentation"
        ],
        keyFeatures: [
            "CRUD operations",
            "User authentication",
            "JSON response format",
            "Comprehensive documentation"
        ],
        learnings: [
            "RESTful API development",
            "Spring Boot framework",
            "Database integration",
            "API security best practices",
            "Open source contribution"
        ],
        githubLink: "https://github.com/mrpunkdasilva/REST_API"
    },
    {
        title: "ChamaSamu - PHP Debugging Library",
        description: "A simple and useful debugging library for PHP developers that provides methods to display debugging information in a readable and organized manner.",
        technologies: ["PHP", "Composer", "Library Development"],
        challenges: [
            "Creating intuitive debugging methods for various data types",
            "Implementing visually clear output formatting",
            "Developing a package structure for Composer distribution",
            "Ensuring compatibility across PHP environments"
        ],
        solutions: [
            "Designed specialized debugging methods for different data types",
            "Created visually distinct output formats for different debugging needs",
            "Implemented Composer package structure for easy distribution",
            "Developed consistent API for debugging operations"
        ],
        keyFeatures: [
            "Floating debug panel for visual output",
            "Specialized formatters for JSON, SQL, XML, and more",
            "Request data inspection (session, GET, POST)",
            "Code display with formatting",
            "Multiple output formats (panel, text, table, list)"
        ],
        learnings: [
            "PHP library development",
            "Composer package creation and distribution",
            "Debugging tool design principles",
            "Developer experience optimization"
        ],
        githubLink: "https://github.com/mrpunkdasilva/ChamaSamu"
    },
    {
        title: "LinkBucket",
        description: "A platform that solves the digital chaos for developers and technology professionals by transforming how they organize and share technical resources online.",
        technologies: ["React", "TypeScript", "Java", "Spring", "Docker"],
        challenges: [
            "Creating an intuitive organization system for digital resources",
            "Implementing efficient sharing mechanisms for technical content",
            "Developing a scalable full-stack architecture",
            "Ensuring seamless user experience across devices"
        ],
        solutions: [
            "Designed bucket-based organization system for links",
            "Implemented flexible sharing options for individual and group use",
            "Created robust backend with Java Spring and containerization",
            "Developed responsive frontend with React and TypeScript"
        ],
        keyFeatures: [
            "Bucket-based link organization",
            "Customizable categorization system",
            "Shareable link collections",
            "Full-stack implementation",
            "Responsive design for all devices"
        ],
        learnings: [
            "Full-stack application architecture",
            "React and TypeScript integration",
            "Java Spring backend development",
            "Docker containerization",
            "User experience design for productivity tools"
        ],
        link: "https://applinkbucket.vercel.app/",
        githubLink: "https://github.com/mrpunkdasilva/applinkbucket",
        isFeatured: true
    },
    {
        title: "VNews",
        description: "VNews is a Feed application built with Vue, Sanity, and Tailwind CSS, providing a modern news reading experience.",
        technologies: ["Vue.js", "Sanity", "Tailwind CSS", "Frontend Development"],
        challenges: [
            "Implementing content management with Sanity",
            "Creating responsive feed layout",
            "Developing efficient data fetching mechanisms"
        ],
        solutions: [
            "Integrated Sanity for content management",
            "Designed responsive UI with Tailwind CSS",
            "Implemented efficient Vue.js components"
        ],
        keyFeatures: [
            "News feed interface",
            "Content management system integration",
            "Responsive design",
            "Modern UI with Tailwind CSS"
        ],
        learnings: [
            "Vue.js application development",
            "Headless CMS integration",
            "Tailwind CSS implementation",
            "Modern frontend architecture"
        ],
        link: "https://vnews-three.vercel.app/",
        githubLink: "https://github.com/mrpunkdasilva/vnews"
    },
    {
        title: "Event Platform",
        description: "Uma plataforma de eventos feita com ReactJS e TypeScript, oferecendo gerenciamento completo de eventos online.",
        technologies: ["ReactJS", "TypeScript", "Frontend Development"],
        challenges: [
            "Criação de sistema de gerenciamento de eventos",
            "Implementação de interface de usuário intuitiva",
            "Desenvolvimento de funcionalidades de registro e participação"
        ],
        solutions: [
            "Desenvolvido sistema modular com ReactJS",
            "Implementado TypeScript para maior segurança de código",
            "Criado interface responsiva e acessível"
        ],
        keyFeatures: [
            "Gerenciamento de eventos",
            "Sistema de registro de participantes",
            "Interface de usuário moderna",
            "Implementação com TypeScript"
        ],
        learnings: [
            "Desenvolvimento React com TypeScript",
            "Arquitetura de aplicações de eventos",
            "Práticas modernas de frontend",
            "Gerenciamento de estado em aplicações React"
        ],
        githubLink: "https://github.com/mrpunkdasilva/event-platform"
    },
    {
        title: "Solidários",
        description: "O Solidários é um site de doações de alimentos, facilitando a conexão entre doadores e pessoas necessitadas.",
        technologies: ["PHP", "MySQL", "JavaScript", "Web Development"],
        challenges: [
            "Desenvolvimento de sistema de gerenciamento de doações",
            "Implementação de banco de dados para rastreamento de alimentos",
            "Criação de interface acessível para diferentes tipos de usuários"
        ],
        solutions: [
            "Desenvolvido sistema de cadastro e gerenciamento de doações",
            "Implementado banco de dados MySQL para armazenamento seguro",
            "Criado interface intuitiva para facilitar o processo de doação"
        ],
        keyFeatures: [
            "Sistema de cadastro de doações",
            "Gerenciamento de alimentos disponíveis",
            "Interface para conectar doadores e beneficiários",
            "Banco de dados para rastreamento de doações"
        ],
        learnings: [
            "Desenvolvimento PHP com MySQL",
            "Criação de sistemas de impacto social",
            "Gerenciamento de dados sensíveis",
            "Desenvolvimento de interfaces inclusivas"
        ],
        githubLink: "https://github.com/mrpunkdasilva/solidarios"
    },
    {
        title: "Silver Waffle",
        description: "Um sistema que permite visualizar seguidores do GitHub informando apenas o nome de usuário, utilizando a API do GitHub.",
        technologies: ["PHP", "SCSS", "JavaScript", "HTML", "API Integration"],
        challenges: [
            "Integração com a API do GitHub",
            "Processamento e exibição de dados de usuários",
            "Desenvolvimento de interface responsiva e atraente"
        ],
        solutions: [
            "Implementado integração eficiente com a API do GitHub",
            "Desenvolvido sistema de processamento de dados de usuários",
            "Criado interface visual com SCSS para melhor experiência"
        ],
        keyFeatures: [
            "Consulta de seguidores do GitHub",
            "Visualização de perfis de usuários",
            "Interface responsiva e moderna",
            "Integração com API externa"
        ],
        learnings: [
            "Integração com APIs externas",
            "Desenvolvimento PHP moderno",
            "Estilização avançada com SCSS",
            "Manipulação de dados JSON"
        ],
        githubLink: "https://github.com/mrpunkdasilva/silver-waffle"
    },
    {
        title: "Gallery React",
        description: "Uma galeria de imagens desenvolvida com ReactJS e TypeScript, oferecendo uma experiência visual moderna e responsiva.",
        technologies: ["ReactJS", "TypeScript", "Frontend Development"],
        challenges: [
            "Implementação de galeria de imagens responsiva",
            "Otimização de carregamento de imagens",
            "Desenvolvimento de interface de usuário intuitiva"
        ],
        solutions: [
            "Desenvolvido componentes React reutilizáveis",
            "Implementado carregamento otimizado de imagens",
            "Criado interface responsiva para diferentes dispositivos"
        ],
        keyFeatures: [
            "Galeria de imagens responsiva",
            "Navegação intuitiva entre imagens",
            "Visualização otimizada para diferentes dispositivos",
            "Implementação com TypeScript para maior segurança"
        ],
        learnings: [
            "Desenvolvimento React com TypeScript",
            "Otimização de performance em aplicações web",
            "Gerenciamento de estado em componentes React",
            "Técnicas modernas de UI/UX"
        ],
        link: "http://mypixelvault.vercel.app/",
        githubLink: "https://github.com/mrpunkdasilva/PixelVault"
    },
    {
        title: "RPG Game React",
        description: "Um jogo de RPG desenvolvido com React e TypeScript, oferecendo uma experiência de jogo interativa no navegador.",
        technologies: ["React", "TypeScript", "Game Development"],
        challenges: [
            "Implementação de mecânicas de jogo em ambiente web",
            "Desenvolvimento de sistema de movimento e interação",
            "Criação de lógica de jogo com TypeScript"
        ],
        solutions: [
            "Desenvolvido sistema de movimento e interação",
            "Implementado lógica de jogo com TypeScript",
            "Criado componentes React para elementos do jogo"
        ],
        keyFeatures: [
            "Sistema de movimento de personagem",
            "Interação com objetos e NPCs",
            "Mecânicas de RPG em ambiente web",
            "Desenvolvimento com TypeScript para maior segurança"
        ],
        learnings: [
            "Desenvolvimento de jogos com React",
            "Implementação de lógica de jogo em TypeScript",
            "Gerenciamento de estado em aplicações complexas",
            "Técnicas de renderização eficiente"
        ],
        githubLink: "https://github.com/mrpunkdasilva/rpggame-react"
    },
    {
        title: "Altair Books",
        description: "O Altair Books é um projeto que consiste em armazenar livros de tecnologia de modo livre, oferecendo acesso a conhecimento técnico.",
        technologies: ["React", "JavaScript", "MySQL", "Full Stack Development"],
        challenges: [
            "Desenvolvimento de sistema de catalogação de livros",
            "Implementação de banco de dados para armazenamento de informações",
            "Criação de interface de usuário para acesso aos livros"
        ],
        solutions: [
            "Desenvolvido sistema de catalogação e busca de livros",
            "Implementado banco de dados MySQL para armazenamento",
            "Criado interface React para visualização e acesso aos livros"
        ],
        keyFeatures: [
            "Catálogo de livros de tecnologia",
            "Sistema de busca e filtragem",
            "Interface de usuário moderna e responsiva",
            "Integração com banco de dados MySQL"
        ],
        learnings: [
            "Desenvolvimento full stack com React e MySQL",
            "Gerenciamento de dados bibliográficos",
            "Implementação de sistemas de busca",
            "Técnicas de UI/UX para plataformas educacionais"
        ],
        link: "https://altair-books.vercel.app/",
        githubLink: "https://github.com/mrpunkdasilva/altair-books"
    }
];
