import projectOne from "../assets/project-1.JPG";
import projectTwo from "../assets/project-2.JPG";
import projectThree from "../assets/project-3.jpg";
import projectFour from "../assets/project-4.jpg";
import projectFive from "../assets/project-5.jpg";
import projectSix from "../assets/ProjectSix.png";
import projectSeven from "../assets/Projectseven.png";
import projectEight from "../assets/Landing page .png"; 
import projectNine from "../assets/IMA.png";  
import projectTen from "../assets/CSai .png";  
import projectEleven from "../assets/RateMY.png";  
import projectTwelve from "../assets/Soccer.png";  

const projects = {
    1: {
        title: "AI Assistant",
        image: projectOne,
        description: (
            <>
                <p>
                    With the help of OpenAI, I was able to use an API key for a version of ChatGPT 3.5 to make an AI assistant. I was even able to make it sound Nigerian with the help of the second-level domain “com.ng”.
                </p>
            </>
        ),
        google: "https://docs.google.com/presentation/d/1-cuUuNIe8Ge99XIOsIx4R0YzJYBVAgCN59vBEZTGwvM/edit?usp=sharing",
        demo: "https://docs.google.com/presentation/d/1-cuUuNIe8Ge99XIOsIx4R0YzJYBVAgCN59vBEZTGwvM/edit?usp=sharing",
        category: "Freelance",
    },
    2: {
        title: "Motion Sensor Security Camera",
        image: projectTwo,
        description: (
            <>
                <p>
                    While in undergrad, me and my classmates built an alarm system using a Raspberry Pi and PIR motion sensor. The Pi recorded footage whenever motion was detected.
                </p>
            </>
        ),
        google: "https://docs.google.com/presentation/d/1eHCc_mF5bBNzwgYEciCcS5qosJrQ36CQOVPRAY78qdo/edit?usp=sharing",
        demo: "https://docs.google.com/presentation/d/1eHCc_mF5bBNzwgYEciCcS5qosJrQ36CQOVPRAY78qdo/edit?usp=sharing",
        category: "During School",
    },
    3: {
        title: "Programmable Door Lock",
        image: projectThree,
        description: (
            <>
                <p>
                    In undergrad, I collaborated with classmates to build a 4-digit programmable lock using Arduino, SolidWorks, and an Ender-3 3D printer.
                </p>
            </>
        ),
        google: "https://docs.google.com/presentation/d/18-ovSyGvz4Li7vz3OiBS4GWRnBhN82tLLA-YF3ubIC0/edit?usp=sharing",
        demo: "https://docs.google.com/presentation/d/18-ovSyGvz4Li7vz3OiBS4GWRnBhN82tLLA-YF3ubIC0/edit?usp=sharing",
        category: "During School",
    },
    4: {
        title: "3D Prints",
        image: projectFour,
        description: (
            <>
                <p>
                    Some of the functional and creative 3D prints I've made using my Ender-3 printer.
                </p>
            </>
        ),
        category: "Freelance",
    },
    5: {
        title: "Nova",
        image: projectFive,
        description: (
            <>
                <p>
                    Nova is the brainchild of my two passions: 3D printing and software engineering. It's an AI assistant built into a custom-printed head and powered by the Jetson Nano.
                </p>
            </>
        ),
        google: "https://docs.google.com/presentation/d/1FMCs7ui83y8MotPI2MmwshtQYL-Q07Gw7HluLLxoZKs/edit?usp=sharing",
        demo: "https://docs.google.com/presentation/d/1FMCs7ui83y8MotPI2MmwshtQYL-Q07Gw7HluLLxoZKs/edit?usp=sharing",
        category: "Freelance",
    },
    6: {
        title: "Predicting Monthly Customer Revenue using Pecan AI",
        image: projectSix,
        description: (
            <>
                <p>
                    I used Pecan AI’s platform to build a model that predicts monthly revenue from customer data. This involved data preprocessing, feature selection, and model deployment for business insights.
                </p>
            </>
        ),
        google: "https://docs.google.com/presentation/d/1_uX4b-b8yVJGnp75pzxNc4VF0GX3mn3j-Q26Ikk3apI/edit?usp=sharing",
        demo: "https://docs.google.com/presentation/d/1_uX4b-b8yVJGnp75pzxNc4VF0GX3mn3j-Q26Ikk3apI/edit?usp=sharing",
        category: "Freelance",
    },
    7: {
        title: "Data Generation and Analysis using Python",
        image: projectSeven,
        description: (
            <>
                <p>
                    I built custom scripts in Python to generate synthetic data, analyze trends, and visualize patterns. The project demonstrates skills in data science, NumPy, pandas, and Matplotlib.
                </p>
            </>
        ),
        google: "https://docs.google.com/presentation/d/12qP2AmsMD3ZrVMLhCyStfYFSfUVLwCdMt6sHE9gGb3I/edit?usp=sharing",
        demo: "https://docs.google.com/presentation/d/12qP2AmsMD3ZrVMLhCyStfYFSfUVLwCdMt6sHE9gGb3I/edit?usp=sharing",
        category: "Freelance",
    },
    8: {
        title: "Headstarter Landing Page",
        image: projectEight,
        description: (
            <>
                <p>
                    A clean and responsive landing page designed for the Headstarter Fellowship program. Built using React and styled with modern CSS practices.
                </p>
            </>
        ),
        google: "https://github.com/Nova-64/landing-page",
        demo: "https://github.com/Nova-64/landing-page",
        category: "Headstarter",
    },
    9: {
        title: "Inventory Management App",
        image: projectNine,
        description: (
            <>
                <p>
                    This app helps businesses track inventory levels, manage restocking, and monitor product flow. Built with full CRUD functionality and real-time UI updates.
                </p>
            </>
        ),
        google: "https://github.com/Nova-64/inventory-management-app",
        demo: "https://github.com/Nova-64/inventory-management-app",
        category: "Headstarter",
    },
    10: {
        title: "Customer Support AI",
        image: projectTen,
        description: (
            <>
                <p>
                    An AI assistant for small businesses that answers customer questions.
                </p>
            </>
        ),
        google: "https://github.com/Nova-64/customer-support-ai",
        demo: "https://github.com/Nova-64/customer-support-ai",
        category: "Headstarter",
    },
    11: {
        title: "AI Rate My Professor",
        image: projectEleven,
        description: (
            <>
                <p>
                    An AI-powered app that evaluates and summarizes professor feedback and course experiences from students to aid in course selection.
                </p>
            </>
        ),
        google: "https://github.com/Nova-64/AI-RateMyProf",
        demo: "https://github.com/Nova-64/AI-RateMyProf",
        category: "Headstarter",
    },
    12: {
        title: "Soccer Flashcards with AI",
        image: projectTwelve,
        description: (
            <>
                <p>
                    This website allows users to generate soccer-related flashcards using AI, aimed at helping players learn tactics, terms, and techniques interactively.
                </p>
            </>
        ),
        google: "https://github.com/Nova-64/Novasoccerflashcards",
        demo: "https://github.com/Nova-64/Novasoccerflashcards",
        category: "Headstarter",
    },

    13: {
        title: "Customer Support AI",
        image: projectTen,
        description: (
            <>
                <p>
                    I built a Customer Support AI system using Twilio, Node.js, and OpenAI. It answers customer questions, handles bookings and cancellations, and supports SMS and voice. (256) 892‑4429
                </p>
            </>
        ),
        Phone: "(256) 892‑4429",  
        category: "Freelance",
    },
};

export default projects;
