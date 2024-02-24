import {styled} from "styled-components";
import {theme} from "../../../../theme";
import {ReactNode} from "react";

interface SocialProps {
    icon?: ReactNode;
    href: string;
    linkName: string;
    socialName: string;
}

const Social = ({icon, href, linkName, socialName}: SocialProps) => {
    return (
        <SocialStyled target="_blank" href={href}>
            {icon && icon}
            <div className="link">
                <div>{linkName}</div>
                <span>{socialName}</span>
            </div>
        </SocialStyled>
    );
};

export default Social;

const SocialStyled = styled.a`
    display: flex;
    flex: 1;
    gap: 0.75rem;
    padding: 10px;
    border-radius: ${theme.borderRadius.small};
    border: 1px solid ${theme.borderColor.primary};
    color: ${theme.fontColor.secondary};
    text-decoration: none;
    transition: color 0.3s, border-color 0.3s;

    &:hover {
        border-color: ${theme.fontColor.secondary};
    }

    i {
        display: flex;
        justify-content: center;
        align-items: center;
        color: ${theme.fontColor.primary};
        font-size: 40px;
        height: 46px;
        width: 46px;
    }

    .link {
        display: flex;
        flex-direction: column;
        justify-content: center;

        &:hover {
            color: ${theme.fontColor.secondaryLighter}
        }

        span {
            font-size: 0.7rem;
            color: ${theme.fontColor.primary}

        }

        //}


    }
`;