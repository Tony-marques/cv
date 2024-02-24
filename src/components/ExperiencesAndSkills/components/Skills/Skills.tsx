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
                        <i className="fa-brands fa-js"></i>
                        <i className="fa-brands fa-php"></i>
                    </div>
                </div>
                <div className="groups">
                    <h3>Framework</h3>
                    <div className="languages">
                        <i className="fa-brands fa-react"></i>
                        <i className="fa-brands fa-symfony"></i>
                    </div>
                </div>
                <div className="groups">
                    <h3>SGBD</h3>
                    <div className="languages">
                        <img className="mysql" src="/assets/images/mysql-icon.svg" alt=""/>
                    </div>
                </div>
                <div className="groups">
                    <h3>Versionning</h3>
                    <div className="languages">
                        <i className="fa-brands fa-git-alt"></i>
                        <i className="fa-brands fa-github"></i>
                    </div>
                </div>
                <div className="groups">
                    <h3>Méthodologie</h3>
                    <div className="languages">
                        <img className="scrum" src="/assets/images/scrum.svg" alt=""/>
                        <i className="fa-brands fa-trello"></i>
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
    //border: 1px solid blue;
    color: ${theme.fontColor.primary};
    margin-left: 2rem;


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
                    width: 40px;
                }

                .fa-git-alt {
                    color: ${theme.colorLogo.git};

                }

                .fa-github {
                    color: ${theme.colorLogo.github};
                }

                .scrum {
                    width: 40px;
                    color: red;
                }

                .fa-trello {
                    color: ${theme.colorLogo.trello};
                }
            }
        }
    }


`;