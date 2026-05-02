// import project images here, sample import:
import project1 from "../assets/images/Main-Page.png";
import project2 from "../assets/images/design-system.png";
import project3 from "../assets/images/Personal-website.png";
import project4 from "../assets/images/Hiring Platform.png";
import project5 from "../assets/images/Mobile-application.png";
import project6 from "../assets/images/Al Rajhi E-Business Project.png"


export interface ProjectType {
    title: string;
    skills: string[];
    description: string;
    previewLink?: string;
    image: string;
}
// Just uncomment the block, and copy paste it to add more
// You can add as many as you'd like.
export const projects: ProjectType[] = [

  {
        title: "Al Rajhi Bank (E-Business)",
        skills: ["FinTech" , "B2B", "Figma", "Design System" , "Usablity Testing" , "Prototypes" , "Wireframing" , "Benchmarking"],
        description: "I worked as a Senior UX Consultant for Alrajhi Bank, where I ensured design consistency and high usability standards across a wide array of digital services, including card , finance and main dashboard. My role involved bridging the gap between complex business requirements and technical execution by producing interactive mockups and providing design direction to the broader team. Because this work involves proprietary banking systems, the project remains confidential; however, I can share insights into my methodology and stakeholder management upon request.",
        previewLink: "",
        image: project6,
    },


  {
        title: "Scalers Hiring Platform",
        skills: ["Hiring" , "B2B","Figma", "Design System" , "User Intreview" , "Usablity Testing" , "Prototypes" , "Wireframing" , "Benchmarking"],
        description: "Scalers is a hiring platform designed to help companies find top talent in specialized fields, with a current focus on Sales, Marketing, and Accounting. The job creation process is customized for each field, collecting role-specific details to build an Ideal Candidate Profile (ICP). Based on the ICP, the platform automatically matches the most relevant candidates. Recruiters can then manage candidates through Scalers’ integrated ATS, which includes features like match explanations, interview scheduling, and offer management—streamlining the entire hiring workflow.",
        previewLink: "https://childlike-spoon-75b.notion.site/Scalers-Hiring-Platform-21629ee59bee8030bc84f1c1c99221f1?source=copy_link",
        image: project4,
    },

 {
        title: "Job Seeker Mobile Application",
        skills: ["Hiring" , "B2C" , "Figma", "Design System" , "User Intreview" , "Usablity Testing" , "Prototypes" , "Wireframing" , "Benchmarking"],
        description: "Scalers is a Saudi-based hiring platform designed to connect ambitious talents with their next big career opportunity effortlessly. By combining advanced skills evaluation with an intuitive job application experience—both on web and mobile—Scalers empowers job seekers to achieve their professional aspirations. Whether you’re exploring tailored job opportunities or streamlining your applications through the mobile app, Scalers simplifies every step of your job hunt.",
        previewLink: "https://childlike-spoon-75b.notion.site/Job-Seeker-Mobile-Application-21629ee59bee800591c6ebecb8168fc6?source=copy_link",
        image: project5,
    },



    {
        title: "Scalers Landing Page",
        skills: ["Hiring" , "B2B", "B2C" , "Framer", "CMS integration" , "Responsive Design" , "Visual Hierarchy" , "Design Systems", "Components"],
        description: "Designed the landing page for Scalers, a talent platform connecting top candidates with leading companies. Focused on clearly communicating value to both candidates and employers, with a strong emphasis on driving signups and conversions.",
        previewLink: "https://childlike-spoon-75b.notion.site/Landing-Page-Project-21629ee59bee80b293caf17d065a495f?source=copy_link",
        image: project1,
    },

   {
        title: "Scalers Design System",
        skills: ["Figma", "Typography" , "Color Palette" , "Compoentns" , "Auto Layout"],
        description: "Designed and built a scalable design system in Figma to unify our product’s visual language and improve team efficiency. It included a consistent typography scale, color palette, and responsive components using Variants and Auto Layout. I created interactive components, documented usage guidelines, and collaborated with developers to align on tokens and ensure a smooth handoff. The system reduced inconsistencies and sped up the design workflow across teams.",
        previewLink: "https://www.figma.com/design/owV9V0DTXt5YCH1cJLc5EK/HexaScale-Design-System?node-id=1249-4414&t=rUXCFypJl708o6k4-1",
        image: project2,
    },

  {
        title: "This Site",
        skills: ["Light/Dark Modes", "Variables/Tokens" ,"Themes" , "Animation"],
        description: "This personal portfolio website was created to showcase my design skills and offer a more in-depth complement to my CV (linked in the preview). More than just a gallery of my work, I approached this project as a chance to challenge myself in new areas—such as implementing dark and light modes, different themes, and advanced animations. In the past, I relied on pre-built templates, but this time, I built everything from scratch with a focus on clean architecture, thoughtful design, and a well-structured codebase.",
        previewLink: "https://drive.google.com/file/d/1cGHoD94qfuW30VgCgBfpsx0q6SGJaYQr/view?usp=sharing",
        image: project3,
    },


];
