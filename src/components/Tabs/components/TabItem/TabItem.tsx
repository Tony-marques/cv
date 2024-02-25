import {css, styled} from "styled-components";
import {ReactNode} from "react";
import {theme} from "../../../../theme";
import {motion} from "framer-motion";

interface TabProps {
    id?: number;
    title: string;
    content?: ReactNode;
    onClick: () => void;
    $isSelected: boolean;
}

interface StyleProps {
    $isSelected: boolean;
}

const TabItem = ({title, onClick, $isSelected}: TabProps) => {
    // const controls = useAnimation();

    return (
        <TabStyled $isSelected={$isSelected} onClick={onClick}
            // animate={controls}
        >
            <p>{title}</p>
        </TabStyled>
    );
};

export default TabItem;

const TabStyled = styled(motion.div)<StyleProps>`
    display: flex;
    justify-content: center;
    cursor: pointer;
    border-right: 1px solid ${theme.borderColor.primary};
    flex: 1;
    padding: 0.75rem 1rem;
    letter-spacing: 1.5px;
    color: ${theme.fontColor.primary};
    transition: background-color 0.3s, color 0.3s;

    &:hover {
        background-color: ${theme.fontColor.secondaryLighter};
        color: ${theme.backgroundColor.primary};
    }

    &:nth-last-child(1) {
        border-right: none;
    }

    p {
        font-weight: 600;
    }

    ${({$isSelected}) => $isSelected && isSelected}
`;

const isSelected = css`
    background-color: ${theme.fontColor.secondary};
    color: ${theme.backgroundColor.primary};
`;