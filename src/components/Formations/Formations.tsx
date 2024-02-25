import {styled} from "styled-components";
import {theme} from "../../theme";
import {motion} from "framer-motion";
import Formation from "./components/Formation/Formation.tsx";

interface IFormation {
    title: string;
    elementDetails: string[];
    date: string;
}

const Formations = () => {
    const formations: IFormation[] = [
        {
            title: "Développeur d'application PHP/symfony - OpenClassrooms (diplôme RNCP de niveau 6)",
            elementDetails: [
                "Intégrer un thème WordPress.",
                "Construire un site avec PHP.",
                "Construire un site / Api avec Symfony."
            ],
            date: "Mai 2023 - Mars 2024"
        },
        {
            title: "Développeur web - OpenClassrooms (diplôme RNCP de niveau 5)",
            elementDetails: [
                "Créer un site web avec HTML5 et CSS3.",
                "Dynamiser une page web avec des animations CSS.",
                "Construire un site e-commerce avec JavaScript.",
                "Construire une API sécurisée avec NodeJs et expressJS.",
                "Créer un réseau social d'entreprise avec React."
            ],
            date: "Jan 2022 - Juin 2022"
        }, {
            title: "Précédents diplômes",
            elementDetails: [
                "BTS Management des Unités Commerciales (2012-2014).",
                "Bac STG option Mercatique (2011)."
            ],
            date: "2011 - 2014"
        }
    ];

    return (
        <ExperiencesStyled
            initial={{x: "-25%"}}
            animate={{x: "0"}}
            transition={{type: "spring", stiffness: 150}}
        >
            <div className="container">
                <h2>Formations</h2>
                <div className="experiences-container">
                    {formations.map(({title, elementDetails, date}: IFormation) => {
                        return (
                            <>
                                <Formation
                                    title={title}
                                    elementDetails={elementDetails}
                                    date={date}
                                />
                            </>
                        );
                    })}
                </div>
            </div>
        </ExperiencesStyled>
    );
};

export default Formations;

const ExperiencesStyled = styled(motion.div)`
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

    }
`;