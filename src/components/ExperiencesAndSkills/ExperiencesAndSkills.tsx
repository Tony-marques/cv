import {styled} from "styled-components";
import Skills from "./components/Skills/Skills.tsx";

const ExperiencesAndSkills = () => {
    return (
        <SkillsStyled>
            <div className="experiences"></div>
            <Skills/>
        </SkillsStyled>
    );
};

export default ExperiencesAndSkills;

const SkillsStyled = styled.div`
    border: 1px solid red;
    height: 100%;
    display: flex;

    .experiences, .skills {
        border: 1px solid blue;
        height: 100%;
    }

    .experiences {
        flex: 4;
    }


`;