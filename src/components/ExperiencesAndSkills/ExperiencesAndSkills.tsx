import {styled} from "styled-components";
import Skills from "./components/Skills/Skills.tsx";
import Experiences from "./components/Experiences/Experiences.tsx";
import {theme} from "../../theme";
import {motion} from "framer-motion";

const ExperiencesAndSkills = () => {
    return (
        <SkillsStyled
            initial={{x: "-25%"}}
            animate={{x: "0"}}
            transition={{type: "spring", stiffness: 150}}
        >
            <Experiences/>
            <Skills/>
        </SkillsStyled>
    );
};

export default ExperiencesAndSkills;

const SkillsStyled = styled(motion.div)`
    height: 100%;
    max-height: 596px;
    display: flex;

    ::-webkit-scrollbar {
        width: 5px;
    }

    ::-webkit-scrollbar-track {
        background: ${theme.borderColor.primary};
        border-radius: 50px;

    }

    ::-webkit-scrollbar-thumb {
        background: ${theme.fontColor.secondary};
        border-radius: 50px;
    }
`;