import {styled} from "styled-components";
import {theme} from "../../../../theme";
import Experience from "../Experience/Experience.tsx";

interface IExperience {
    title: string;
    elementDetails: string[];
    date: string;
}

const Experiences = () => {
    const experiences: IExperience[] = [
        {
            title: "Armée de l'air et de l'espace - Réserve citoyenne",
            elementDetails: [
                "Gestion des finances pour le rayonnement de l'Armée de l'air et de l'espace au travers du CESA."
            ],
            date: "Nov 2023 - Aujourd'hui"
        },
        {
            title: "Armée de l'air et de l'espace - Comptable",
            elementDetails: [
                "Demandes d'achat pour plusieurs unités de la place parisienne, les bases aériennes de France concernant la venue d'avions anciens et les musées dans les bases.",
                "Suivi des dossiers de la création de la demande jusqu'à la livraison (via CHORUS Formulaire)."
            ],
            date: "Nov 2018 - Nov 2023"
        },
        {
            title: "Kantar Worldpanel - Chargé d'études statistiques",
            elementDetails: [
                "Mise à jour des bases de données produits depuis les logiciels internes (MKE, Sicéron) pour des clients de type média (TF1, M6, France TV , NRJ12).",
                "Génération de probabilités (logiciel interne Mediaway)."
            ],
            date: "Sept 2015 - Nov 2018"
        },
        {
            title: "Super U - Employé commercial",
            elementDetails: [
                "Gestion d'une équipe de 3 personnes du rayon boulangerie (planning, commandes, suivi des stocks).",
                "Mise en rayon fruits et légumes, facing.",
                "Prise de commandes avec le logiciel Univers.",
                "Réception des marchandises."
            ],
            date: "Déc 2014 - Sept 2015"
        },
        {
            title: "Précédentes expériences",
            elementDetails: [
                "Stagiaire commercial - Casino Shopping (Mai à Octobre 2013).",
                "Opérateur codificateur - Kantar média (7 mois de 2011 à 2014).",
                "Technicien de maintenance - Kantar média (3 mois de 2008 à 2010)."
            ],
            date: "2008 - 2014"
        }
    ];

    return (
        <ExperiencesStyled>
            <h2>Expériences professionnelles</h2>
            <div className="experiences-container">
                {experiences.map(({title, elementDetails, date}: IExperience) => {
                    return (
                        <Experience
                            title={title}
                            elementDetails={elementDetails}
                            date={date}
                        />
                    );
                })}
            </div>
        </ExperiencesStyled>
    );
};

export default Experiences;

const ExperiencesStyled = styled.div`
    flex: 4;
    color: ${theme.fontColor.primary};
    overflow-y: scroll;

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
                gap: 2rem;
                line-height: 1.5;

                .details {
                    flex: 2;
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
    }
`;