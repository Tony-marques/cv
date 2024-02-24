import {styled} from "styled-components";
import Informations from "../Informations/Informations.tsx";
import SocialMedia from "../SocialMedia/SocialMedia.tsx";

const Presentation = () => {
    return (
        <PresentationStyled>
            <Informations/>
            <SocialMedia/>
        </PresentationStyled>
    );
};

export default Presentation;

const PresentationStyled = styled.div`
    height: 100%;
    display: flex;
    gap: 2rem;
    flex-direction: column;
    justify-content: center;
    margin: 0 auto;
`;