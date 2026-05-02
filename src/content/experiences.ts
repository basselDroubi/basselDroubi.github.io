interface Experiences {
    job_title: string;
    company_name: string;
    start_date: string;
    end_date: string;
    responsibilities: string[];
}
// Just copy paste the entire block if you need to add experiences
// The design supports exactly 3 experiences, so please add exactly 3
export const experiences: Experiences[] = [
    {
        job_title: "UX Designer / Researcher Intern",
        company_name: "UXBERT Labs",
        start_date: "06/2022",
        end_date: "12/2022",
        responsibilities: ["Conducted usability testing as moderator and observer for a Derayah platform.", "Evaluated new product features for the Ministry of Interior through UX benchmarking and usability interviews to identify improvement areas.", "Created and built information architecture, wireframes and high-fidelity UI designs for Elm."],
    },
        {
        job_title: "Product Designer",
        company_name: "Scalers",
        start_date: "02/2023",
        end_date: "10/2024",
        responsibilities: ["Built and maintained a scalable Web design system for consistent UI across products.", "Conducted benchmarking, user interviews, and usability testing to inform design decisions." , "Designed features end-to-end: user flows, wireframes, prototypes, and final screens." , "Organized and documented designs for smooth handoff and team alignment." , "Collaborated with developers for accurate implementation and led design QA/UAT." , "Analyzed user behavior with Hotjar and PostHog to optimize UX."],
    },

         {
        job_title: "Senior Product Designer",
        company_name: "Scalers",
        start_date: "10/2024",
        end_date: "9/2025",
        responsibilities: ["Built and maintained a scalable mobile design system for consistent UI across products.Developed and designed interactive landing pages using Framer to support marketing and product initiatives.","Mentored and guided intern designers, providing feedback and onboarding support.",
                        "Analyzed behavior data (Hotjar, PostHog) and conducted usability tests to drive iterative improvements.",
                        "Recorded walkthrough videos for each new feature to keep internal teams informed and aligned.",
                        "Created in-product guides and onboarding flows to introduce new features, reduce churn, and ensure users understand how to use the product and recognize feature value."],
    },
    
        {
        job_title: "Senior UX Design Consultant",
        company_name: "AZMX / Al Rajhi Bank",
        start_date: "9/2025",
        end_date: "present",
        responsibilities: ["Designed and maintained user experiences for the e-business portal (web) and mobile applications, ensuring consistency and usability across finance, card services, and specialized user journeys", "Led the design of advanced, customizable dashboards, enabling users to personalize data visualizations and metrics for a tailored e-business experience.","Partnered closely with product managers and developers to transform business requirements into intuitive digital solutions" , "Produced interactive mockups and design demos to communicate concepts and secure stakeholder approval before development." , "Provided design direction and feedback to team members, helping maintain high standards of quality and consistency."],
    },
];
