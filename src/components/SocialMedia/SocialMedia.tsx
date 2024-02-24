import {styled} from "styled-components";
import Social from "./components/Social/Social.tsx";
import {SocialMediaConfigs} from "./SocialMediaConfigs.tsx";

const SocialMedia = () => {
    const socialConfig = SocialMediaConfigs;
    return (
        <SocialMediaStyled>
            {socialConfig.map(({id, icon, href, linkName, socialName}) => {
                return (
                    <Social
                        key={id}
                        icon={icon}
                        href={href}
                        linkName={linkName}
                        socialName={socialName}
                    />
                );
            })}
        </SocialMediaStyled>
    );
};

export default SocialMedia;

const SocialMediaStyled = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.5rem;
`;