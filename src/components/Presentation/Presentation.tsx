import {styled} from "styled-components";
import {theme} from "../../theme";

const Presentation = () => {
    return (
        <PresentationStyled>
            <div className="informations">
                <img
                    src="https://img-19.commentcamarche.net/WNCe54PoGxObY8PCXUxMGQ0Gwss=/480x270/smart/d8c10e7fd21a485c909a5b4c5d99e611/ccmcms-commentcamarche/20456790.jpg"
                    alt=""/>
                <div className="details">
                    <h1><span className="letter-color">M</span>ARQUES <span className="letter-color">T</span>ONY</h1>
                    <h3>Développeur React et Symfony</h3>
                    <p>
                        <i className="fa-solid fa-earth-europe"></i>
                        <span>Région parisienne</span>
                    </p>
                    <p>
                        <i className="fa-solid fa-mobile"></i>
                        <span>06.75.59.34.66</span>
                    </p>
                </div>
            </div>
            <div className="social-media">
                <div className="social">
                    <i className="fa-brands fa-linkedin-in"></i>
                    <div className="link">
                        <a target="_blank" href="https://www.linkedin.com/in/tony-marques1/">Marques Tony</a>
                        <span>Linkedin</span>
                    </div>
                </div>
                <div className="social">
                    <i className="fa-brands fa-github"></i>
                    <div className="link">
                        <a target="_blank" href="https://github.com/Tony-marques">Marques Tony</a>
                        <span>Github</span>
                    </div>
                </div>
                <div className="social">
                    <i className="fa-regular fa-envelope"></i>
                    <div className="link">
                        <a target="_blank" href="mailto:tony.marques@live.fr">tony.marques@live.fr</a>
                        <span>Email</span>
                    </div>
                </div>
            </div>
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

    .informations {
        display: flex;
        gap: 2rem;

        img {
            width: 300px;
            height: 300px;
            object-fit: cover;
            border-radius: ${theme.borderRadius.small};
        }

        .details {
            color: ${theme.fontColor.primary};
            display: flex;
            flex-direction: column;
            gap: 1rem;

            .letter-color {
                color: ${theme.fontColor.secondary};
            }

            p {
                display: flex;
                align-items: center;
                gap: 1rem;

                i {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    font-size: 25px;
                    width: 25px;
                    color: ${theme.fontColor.secondary}
                }

                span {
                    font-weight: 500;
                }
            }

            h1 {
                font-size: 3rem;
            }

            h3 {
                font-size: 2rem;
                font-weight: 400;
            }
        }
    }

    .social-media {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 1.5rem;

        .social {
            display: flex;
            flex: 1;
            gap: 0.75rem;
            padding: 10px;
            border-radius: ${theme.borderRadius.small};
            border: 1px solid ${theme.borderColor.primary};

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

                a {
                    font-weight: 600;
                    color: ${theme.fontColor.secondary};
                    text-decoration: none;
                    transition: color 0.3s;

                    &:hover {
                        color: ${theme.fontColor.secondaryLighter}
                    }
                }

                span {
                    font-size: 0.7rem;
                }
            }
        }


    }
`;