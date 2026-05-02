// import { FaReact } from "react-icons/fa";
import { ToolType } from "../components/Sections/Tools/Tool";
import { IoLogoFigma } from "react-icons/io5";
import { SiJira } from "react-icons/si";
import { SiFramer } from "react-icons/si";
import { FaHotjar } from "react-icons/fa";
import { SiPosthog } from "react-icons/si";
import { SiMixpanel } from "react-icons/si";
import { SiNotion } from "react-icons/si";
import { RiGuideFill } from "react-icons/ri";
import { IoPlanetOutline } from "react-icons/io5";
import { CgMaze } from "react-icons/cg";
import { SiCanva } from "react-icons/si";



// Description of how to add icons:
// We use the library 'react-icons' for getting the icons
// Visit: https://react-icons.github.io/react-icons/
// Search for whatever icon you want,
// once you find the exact one you want
// just click it and it will give you the exact import (to add above)
// and the usage as well.

export const tools: ToolType[] = [
     {
        icon: <IoLogoFigma/>,
         name: "Figma",
    },
     {
        icon: <SiFramer/>,
         name: "Framer",
    },

 {
        icon: <SiCanva />,
         name: "Canva",
    },


  {
        icon: <IoLogoFigma/>,
         name: "Figjam",
    },


   {
        icon: <FaHotjar />,
         name: "Hotjar",
    },
 {
        icon: <SiPosthog />,
         name: "Posthog",
    },

 {
        icon: <CgMaze />,
         name: "Maze",
    },

 {
        icon: <SiMixpanel />,
         name: "Mixpanel",
    },
   
    {
        icon: <RiGuideFill />,
         name: "Userguiding",
    },


    {
        icon: <IoPlanetOutline />,
         name: "Storylane",
    },


     {
        icon: <SiJira/>,
         name: "Jira",
    },

  {
        icon: <SiNotion />,
         name: "Notion",
    },

];
