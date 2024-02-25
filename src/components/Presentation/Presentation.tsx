import {styled} from "styled-components";
import Informations from "../Informations/Informations.tsx";
import SocialMedia from "../SocialMedia/SocialMedia.tsx";
import {motion} from "framer-motion";

const Presentation = () => {
    return (
        <PresentationStyled
            initial={{x: "-25%"}}
            animate={{x: "0"}}
            transition={{type: "spring", stiffness: 150}}
        >
            <Informations/>
            <SocialMedia/>
        </PresentationStyled>
    );
};

export default Presentation;

const PresentationStyled = styled(motion.div)`
    height: 100%;
    display: flex;
    gap: 2rem;
    flex-direction: column;
    justify-content: center;
    margin: 0 auto;
`;