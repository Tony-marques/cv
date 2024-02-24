import {styled} from "styled-components";
import {theme} from "../../../../theme";

const Skills = () => {
    return (
        <SkillsStyled>
            <h2>Compétences</h2>
            <div className="languages-container">

                <div className="groups">
                    <h3>Langage de programmation</h3>
                    <div className="languages">
                        <i className="fa-brands fa-js" title="javascript"></i>
                        <img className="typescript" src="/assets/images/typescript.svg" alt="logo typescript"
                             title="typescript"/>
                        <i className="fa-brands fa-php" title="PHP"></i>
                    </div>
                </div>
                <div className="groups">
                    <h3>Framework</h3>
                    <div className="languages">
                        <i className="fa-brands fa-react" title="react"></i>
                        <i className="fa-brands fa-symfony" title="symfony"></i>
                    </div>
                </div>
                <div className="groups">
                    <h3>SGBD</h3>
                    <div className="languages">
                        <img className="mysql" src="/assets/images/mysql-icon.svg" alt="logo mysql" title="MySQL"/>
                    </div>
                </div>
                <div className="groups">
                    <h3>Versionning</h3>
                    <div className="languages">
                        <i className="fa-brands fa-git-alt" title="git"></i>
                        <i className="fa-brands fa-github" title="Github"></i>
                    </div>
                </div>
                <div className="groups">
                    <h3>Méthodologie</h3>
                    <div className="languages">
                        <img className="scrum" src="/assets/images/scrum.svg" alt="logo méthode scrum"
                             title="méthode agile Scrum"/>
                        <i className="fa-brands fa-trello" title="trello"></i>
                    </div>
                </div>

            </div>

        </SkillsStyled>
    );
};

export default Skills;

const SkillsStyled = styled.div`
    flex: 1.5;
    height: 100%;
    color: ${theme.fontColor.primary};
    padding-left: 2rem;

    h2 {
        font-size: 2rem;
        margin-bottom: 2rem;
    }

    .languages-container {
        display: flex;
        flex-direction: column;
        gap: 1rem;

        .groups {

            h3 {
                font-size: 1.3rem;
                font-weight: 500;
                margin-bottom: 0.5rem;
            }

            .languages {
                //border: 1px solid orange;
                display: flex;
                gap: 1rem;

                i {
                    font-size: 40px;
                    display: flex;
                }

                .fa-js {
                    color: ${theme.colorLogo.javascript};
                }

                .fa-php {
                    color: ${theme.colorLogo.php};
                }

                .fa-react {
                    color: ${theme.colorLogo.react};
                }

                .fa-symfony {
                    color: ${theme.colorLogo.symfony};
                }

                .mysql {
                    width: 35px;
                }

                .fa-git-alt {
                    color: ${theme.colorLogo.git};

                }

                .fa-github {
                    color: ${theme.colorLogo.github};
                }

                .scrum {
                    width: 35px;
                }

                .fa-trello {
                    color: ${theme.colorLogo.trello};
                }

                .typescript {
                    width: 35px;
                }
            }
        }
    }


`;