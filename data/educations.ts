export type TEducation = {
    title: string;
    institution: string;
    period: string;
    description?: string;
};

export const educations: TEducation[] = [
    {
        title: "Bachelor's Degree in Software Engineering",
        institution: "Jala University",
        period: "July 2024 – December 2028",
        description: "Currently pursuing a Bachelor's degree in Software Engineering, focusing on advanced software development methodologies, data structures, algorithms, and system design."
    },
    {
        title: "High School with Technical Qualification in Internet Informatics",
        institution: "ETEC de Francisco Morato",
        period: "2021 – 2023",
        description: "Completed high school with a technical qualification in Internet Informatics, gaining foundational knowledge in web development, programming logic, and network fundamentals."
    },
    {
        title: "Technician in Systems Development",
        institution: "ETEC de Francisco Morato",
        period: "February 2022 – September 2023",
        description: "Acquired practical skills in systems development, including database management, backend programming, and software project management."
    },
    {
        title: "Centro Paula Souza Exchange Program",
        institution: "CES Dublin, Ireland",
        period: "December/2022 – February/2023",
        description: "Participated in a 60-hour intensive English immersion program, significantly improving communication and fluency skills in an international environment."
    },
    {
        title: "Web Design Course",
        institution: "Escola Modelo",
        period: "October 2019 – October 2021",
        description: "Completed a comprehensive Web Design course, covering principles of UI/UX, graphic design, and front-end development tools."
    },
];