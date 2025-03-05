export const navLinks = [
    { name: "about", link: "#about" },
    { name: "skills", link: "#skills" },
    { name: "experience", link: "#experience" },
    { name: "projects", link: "#projects" },
    { name: "contact", link: "#contact" },
];

export const titles = {
    about: "About Me.",
    skills: "Skills.",
    experience: "Experience.",
    projects: "Projects.",
    contact: "Contact Me.",
};

export const aboutMeDescription = `I'm Xiaoyun, I graduated with Bachelor of Computing (Honours) in Computer Science from the National University of Singapore. As a full stack enthusiast, I have actively sought opportunities to expand my skill set in both front-end and back-end development. I have hands-on experience with web design with Figma, front-end technologies e.g. React.js and responsive design principles. On the server side, I have worked with databases and I'm familiar with backend frameworks like Node.js. 

I thrive on challenges and continuously seek opportunities to grow in the rapidly evolving field of technology. As I embark on the journey towards my professional career, I am excited to join a dynamic team where I can leverage my skills and contribute to building innovative applications.
`;

export const githubLink = "https://github.com/Xiaoyunnn";
export const linkedinLink = "https://www.linkedin.com/in/wu-xiaoyun/";

export const skills = {
    familiar: [
        {
            name: "Java",
            path: "/svg-logos/java.svg",
        },
        {
            name: "Python",
            path: "/svg-logos/python.svg",
        },
        {
            name: "JavaScript",
            path: "/svg-logos/javascript.svg",
        },
        {
            name: "HTML",
            path: "/svg-logos/html.svg",
        },
        {
            name: "CSS",
            path: "/svg-logos/css.svg",
        },
        {
            name: "React.js",
            path: "/svg-logos/react.svg",
        },
        {
            name: "Node.js",
            path: "/svg-logos/nodejs.svg",
        },
        {
            name: "MongoDB",
            path: "/svg-logos/mongodb.svg",
        },
        {
            name: "PostgreSQL",
            path: "/svg-logos/postgresql.svg",
        },
    ],
    playedAround: [
        {
            name: "Next.js",
            path: "/svg-logos/nextjs.svg",
        },
        {
            name: "Tailwind CSS",
            path: "/svg-logos/tailwind.svg",
        },
        {
            name: "TypeScript",
            path: "/svg-logos/typescript.svg",
        },
        {
            name: "Angular",
            path: "/svg-logos/angular.svg",
        },
        {
            name: "React Native",
            path: "/svg-logos/react-native.svg",
        },
        {
            name: "Rust",
            path: "/svg-logos/rust.svg",
        },
        {
            name: "Golang",
            path: "/svg-logos/golang.svg",
        },
        {
            name: "C++",
            path: "/svg-logos/cpp.svg",
        },
        {
            name: "C",
            path: "/svg-logos/c.svg",
        },
    ],
};

export const experiences = [
    {
        title: "Analyst (Software Engineer)",
        company: "Goldman Sachs",
        companyLogo: "/icons/gs.png",
        date: "Mar 2024 - Present",
        description: [
            "Worked under the Futures Technology team.",
            "Implemented new features to improve the trading flow of our users, e.g. calculating and displaying" +
                " users’ position occupied margin for futures and options as part of pre-trade risk controls.",
        ],
        techStack: [
            {
                name: "Java",
                path: "/svg-logos/java.svg",
            },
            {
                name: "Angular",
                path: "/svg-logos/angular.svg",
            },
        ],
    },
    {
        title: "Software Engineer Intern",
        company: "PayPal",
        companyLogo: "/icons/pp.png",
        date: "Aug 2023 - Dec 2023",
        description: [
            "Interned under the Escheatment team.",
            "Added and tested new frontend features e.g. generation of reports for Escheatment processes with Next.js.",
            "Refactored manual mappers for mapping between different object models to use Java MapStruct so as to simplify the implementation and improve code maintainability.",
        ],
        techStack: [
            {
                name: "Java",
                path: "/svg-logos/java.svg",
            },
            {
                name: "Next.js",
                path: "/svg-logos/nextjs.svg",
            },
            {
                name: "React.js",
                path: "/svg-logos/react.svg",
            },
        ],
    },
    {
        title: "Summer Analyst (Software Engineer)",
        company: "Goldman Sachs",
        companyLogo: "/icons/gs.png",
        date: "May 2023 - Jul 2023",
        description: [
            "Interned under Global Banking and Markets - Margin Technology.",
            "Enhanced a dashboard which compiles the Jira issues and Gitlab changes for different products and" +
                " services under Margin Technology to facilitate the release coordinates and regional managers in tracking monthly production releases’ progress.",
            "Added features to allow regional managers to sign off and view release and rollback steps.",
        ],
        techStack: [
            {
                name: "Next.js",
                path: "/svg-logos/nextjs.svg",
            },
            {
                name: "React.js",
                path: "/svg-logos/react.svg",
            },
            {
                name: "Tailwind CSS",
                path: "/svg-logos/tailwind.svg",
            },
        ],
    },
    {
        title: "Global Technology Analyst (Software Engineer)",
        company: "Bank of America Merrill Lynch",
        companyLogo: "/icons/bofa.png",
        date: "Jan 2023 - May 2023",
        description: [
            "Interned within the Global Markets Operations Technology department to develop a data extraction tool" +
                " to facilitate Transaction Operations staff in processing and analysing trade data and reports.",
            "Created frontend components using Angular framework and added backend features, e.g. new operator for data query with Python and Elasticsearch APIs.",
        ],
        techStack: [
            {
                name: "Python",
                path: "/svg-logos/python.svg",
            },
            {
                name: "Elasticsearch",
                path: "/svg-logos/elasticsearch.svg",
            },
            {
                name: "Angular",
                path: "/svg-logos/angular.svg",
            },
        ],
    },
    {
        title: "Full Stack Developer Intern",
        company: "Learna Systems Pte Ltd",
        companyLogo: "/icons/learna.png",
        date: "Jan 2022 - Jan 2023",
        description: [
            "Designed and implemented new user interfaces that improve user satisfaction for the mobile application" +
                " aimed at serving and connecting educators, parents, students and life-long learners.",
            "Translated client requirements into technical design specifications and engineered new features.",
            "Worked in an agile SCRUM team to build reusable components for greater consistency, scalability and code maintainability with ReactJS and CSS and write REST backend APIs with PHP.",
        ],
        techStack: [
            {
                name: "React.js",
                path: "/svg-logos/react.svg",
            },
            {
                name: "PHP",
                path: "/svg-logos/php.svg",
            },
        ],
    },
];

export const projects = {
    favorites: [
        {
            title: "Punkt.",
            img: "/icons/punkt-leaderboard.png",
            demoLink: "https://punkt-orbital.netlify.app",
            githubLink: "https://github.com/angkoonhwee/Punkt-Milestone3",
            description:
                "Oftentimes, we find it difficult to stay focus and make the best use of our time. Punkt" +
                ' gives you a little external push to stop procrastinating by raising the stakes of your study sessions and the completion of your goals. First, set your goals and bet with your friends. If you complete your goals, well done! Otherwise, you will need to do a forfeit and prove it to your friends :c Next, get yourself a buddy with a common background to study together! Lastly, accomplish your goals and see yourself climb up the "Productivity" leaderboard!',
            techStack: [
                {
                    name: "MongoDB",
                    path: "/svg-logos/mongodb.svg",
                },
                {
                    name: "Express.js",
                    path: "/svg-logos/expressjs.svg",
                },
                {
                    name: "React.js",
                    path: "/svg-logos/react.svg",
                },
                {
                    name: "Node.js",
                    path: "/svg-logos/nodejs.svg",
                },
                {
                    name: "Firebase",
                    path: "/svg-logos/firebase.svg",
                },
            ],
        },
        {
            title: "Reisen",
            img: "/icons/reisen.png",
            demoLink:
                "https://drive.google.com/file/d/17xKyHZQK-Rqd3nSEV-8urGacpFHgoXqx/view?usp=sharing",
            githubLink: "https://github.com/angkoonhian/huawei-reisen",
            description:
                "This project achieved top 10 Finalist team project in Huawei Cloud Spark Hackathon 2022." +
                " Reisen is a mobile application built with React Native, vanilla CSS, Nest.js and Huawei Cloud that" +
                " uses AI to generate personalised itineraries for users and allow users to book from a readily available pool of suitable tour guides in minutes. In addition, Reisen as a platform is able to provide job opportunities for locals who are capable and willing to freelance as tour guides. ",
            techStack: [
                {
                    name: "Huawei Cloud",
                    path: "/icons/huawei-cloud.png",
                },
                {
                    name: "React Native",
                    path: "/svg-logos/react-native.svg",
                },
                {
                    name: "Nest.js",
                    path: "/svg-logos/nestjs.svg",
                },
            ],
        },
        {
            title: "Tuition Address Book",
            img: "/icons/tab.png",
            githubLink: "https://github.com/AY2122S1-CS2103T-F13-3/tp",
            description:
                "TAB is a all-in-one tuition management application for private tutors. TAB enables you to" +
                " keep track of your student and lesson information, schedule, and tuition fees – everything a private 1-to-1 home tutor needs – without needing to lift your hands off the keyboard. TAB is a Command-line Interface (CLI) app, meaning that you tell TAB what to do using commands in the form of lines of text.",
            techStack: [
                {
                    name: "Java",
                    path: "/svg-logos/java.svg",
                },
                {
                    name: "JavaFX",
                    path: "/icons/javafx.png",
                },
                {
                    name: "Scene Builder",
                    path: "/icons/scene-builder.png",
                },
            ],
        },
    ],
    others: [
        {
            title: "Citi HackOverflow 2022",
            img: "/icons/citihack.png",
            githubLink: "https://github.com/Xiaoyunnn/CitiHackOverflow2022",
            description:
                "Wealth management web application that advises clients on the benefits of well-balanced" +
                " portfolio with investment tracking dashboard and portfolio rebalancing advices.",
            techStack: ["#reactjs", "#nestjs"],
        },
        {
            title: "Grab HackForGood 2022",
            img: "/icons/grabhack.png",
            githubLink: "https://github.com/5StarTeam/5stars",
            description:
                "A mobile application built with React Native, Java and Firebase that shows bird watching spots in Singapore for the bird lover community.",
            techStack: ["#reactnative", "#java", "#firebase"],
        },
        {
            title: "Oxen Company Website",
            img: "/icons/oxen.png",
            demoLink: "http://www.oxen.com.sg/",
            githubLink: "https://github.com/Xiaoyunnn/oxen-frontend",
            description:
                "Freelance frontend project for Oxen (OST) Singapore built with React and vanilla CSS.",
            techStack: ["#reactjs", "#css"],
        },
    ],
};
