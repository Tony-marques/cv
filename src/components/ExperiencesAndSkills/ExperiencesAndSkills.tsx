import {styled} from "styled-components";
import Skills from "./components/Skills/Skills.tsx";
import Experiences from "./Experiences.tsx";
import {theme} from "../../theme";

const ExperiencesAndSkills = () => {
    return (
        <SkillsStyled>
            <Experiences/>
            <Skills/>
        </SkillsStyled>
    );
};

export default ExperiencesAndSkills;

const SkillsStyled = styled.div`
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