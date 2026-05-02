import MyIcon from "../assets/images/MyIcon";
import ThemeSvg from "../assets/images/theme-icon.svg?react";

const content = {
    header_footer: {
        name: "Bassel Al Droubi",
        // If you keep the following empty, it will not show in footer and header
        github_link: "",
        linkedin_link: "https://www.linkedin.com/in/bassel-AlDroubi-aa064413a/",
        icon: <MyIcon />,
        theme_icon: <ThemeSvg />,
    },
    top_banner: {
        first_name: "Bassel",
        last_name: "Al Droubi",
        job_title: "Senior Product Designer (UI/UX)",
    },
    stats: {
        // You can change the following accordingly, but make sure not to change
        // the names of the fields, only change content (after the colon ':')
        stat1: {
            number: 4,
            stat_title: "Years of Experience",
        },
        stat2: {
            number: 160,
            stat_title: "Design Features Delivered",
        },
        stat3: {
            number: 3,
            stat_title: "Design Systems Created",
        },
        // stat4: {
        //     number: 4,
        //     stat_title: "Revamp",
        // },
        
    },
    about_me: {
        text: "Senior Product Designer with 3+ years of experience designing web and mobile experiences in Arabic and English. Skilled in end-to-end design, design systems, usability testing, and behavior analysis (Hotjar, PostHog). Built landing pages with Framer, created in-product guides, and collaborated closely with developers. Passionate about crafting clear, user-centered solutions and mentoring junior designers.",
    },
    experiences: {
        beginning_content: "The Journey Start",
        end_content: "The Journey Continues",
    },
    contact_me_token: "xpwrlzyo",
};

export default content;
