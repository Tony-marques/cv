import {styled} from "styled-components";
import {theme} from "../../theme";

const Formations = () => {
    return (
        <ExperiencesStyled>
            <div className="container">
                <h2>Formations</h2>
                <div className="experiences-container">
                    <div className="groups">
                        <h3>Développeur d'application PHP/symfony - OpenClassrooms
                            (diplôme RNCP de niveau 6)</h3>
                        <div className="experience">
                            <div className="details">
                                <p>Intégrer un thème WordPress.</p>
                                <p>Construire un site avec PHP.</p>
                                <p>Construire un site / Api avec Symfony.</p>
                            </div>
                            <div className="dates">
                                <div className="tag">Mai 2023 - Mars 2024</div>
                            </div>
                        </div>
                    </div>
                    <div className="separator"></div>
                    <div className="groups">
                        <h3>Développeur web - OpenClassrooms (diplôme RNCP de niveau 5)</h3>
                        <div className="experience">
                            <div className="details">
                                <p>Créer un site web avec HTML5 et CSS3.</p>
                                <p>Dynamiser une page web avec des animations CSS.</p>
                                <p>Construire un site e-commerce avec JavaScript.</p>
                                <p>Construire une API sécurisée avec NodeJs et expressJS.</p>
                                <p>Créer un réseau social d'entreprise avec React.</p>
                            </div>
                            <div className="dates">
                                <div className="tag">Jan 2022 - Juin 2022</div>
                            </div>

                        </div>
                    </div>
                    <div className="separator"></div>
                    <div className="groups">
                        <h3>Précédents diplômes</h3>
                        <div className="experience">
                            <div className="details">
                                <p>
                                    BTS Management des Unités Commerciales (2012-2014).
                                </p>
                                <p>
                                    Bac STG option Mercatique (2011).
                                </p>
                            </div>
                            <div className="dates">
                                <div className="tag">2011 - 2014</div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </ExperiencesStyled>
    );
};

export default Formations;

const ExperiencesStyled = styled.div`
    flex: 4;
    color: ${theme.fontColor.primary};
    overflow-y: hidden;
    height: 100%;
    display: flex;
    max-height: 596px;

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

    .container {
        overflow-y: scroll;
        width: 100%;
    }


    h2 {
        font-size: 2rem;
        margin-bottom: 2rem;
    }

    .experiences-container {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        margin-right: 2rem;

        .groups {


            h3 {
                font-size: 1.3rem;
                font-weight: 500;
                margin-bottom: 0.5rem;
            }

            .experience {
                display: flex;
                //border: 1px solid orange;
                gap: 2rem;
                line-height: 1.5;

                .details {
                    flex: 2;

                    //justify-content: ;
                }

                .dates {
                    flex: 0.5;
                    display: flex;
                    align-items: flex-start;
                    justify-content: flex-end;

                    .tag {
                        background-color: ${theme.fontColor.secondary};
                        font-size: 10px;
                        padding: 0.4rem;
                        color: ${theme.backgroundColor.primary};
                        border-radius: ${theme.borderRadius.small};
                        width: max-content;
                    }
                }
            }
        }

        .separator {
            border-top: 1px solid ${theme.borderColor.primary};
        }
    }

`;