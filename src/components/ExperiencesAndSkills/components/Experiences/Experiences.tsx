import {styled} from "styled-components";
import {theme} from "../../../../theme";

const Experiences = () => {
    return (
        <ExperiencesStyled>
            <h2>Expériences professionnelles</h2>
            <div className="experiences-container">
                <div className="groups">
                    <h3>Armée de l'air et de l'espace - Réserve citoyenne</h3>
                    <div className="experience">
                        <div className="details">
                            <p>Gestion des finances pour le rayonnement de l'Armée de l'air et de l'espace au travers du
                                CESA.</p>
                        </div>
                        <div className="dates">
                            <div className="tag">Nov 2023 - Aujourd'hui</div>
                        </div>
                    </div>
                </div>
                <div className="separator"></div>
                <div className="groups">
                    <h3>Armée de l'air et de l'espace - Comptable</h3>
                    <div className="experience">
                        <div className="details">
                            <p>
                                Demandes d'achat pour plusieurs unités de la place parisienne, les bases aériennes de
                                France
                                concernant la venue d'avions anciens et les musées dans les bases.
                            </p>
                            <p>
                                Suivi des dossiers de la création de la demande jusqu'à la livraison (via CHORUS
                                Formulaire).
                            </p>
                        </div>
                        <div className="dates">
                            <div className="tag">Nov 2018 - Nov 2023</div>
                        </div>

                    </div>
                </div>
                <div className="separator"></div>
                <div className="groups">
                    <h3>Kantar Worldpanel - Chargé d'études statistiques</h3>
                    <div className="experience">
                        <div className="details">
                            <p>
                                Mise à jour des bases de données produits depuis les logiciels internes (MKE, Sicéron)
                                pour des clients de type média (TF1, M6, France TV , NRJ12).
                            </p>
                            <p>
                                Génération de probabilités (logiciel interne Mediaway).
                            </p>
                        </div>
                        <div className="dates">
                            <div className="tag">Sept 2015 - Nov 2018</div>
                        </div>

                    </div>
                </div>
                <div className="separator"></div>
                <div className="groups">
                    <h3>Super U - Employé commercial</h3>
                    <div className="experience">
                        <div className="details">
                            <p>
                                Gestion d'une équipe de 3 personnes du rayon boulangerie (planning, commandes, suivi des
                                stocks).
                            </p>
                            <p>
                                Mise en rayon fruits et légumes, facing.
                            </p>
                            <p>
                                Prise de commandes avec le logiciel Univers.
                            </p>
                            <p>
                                Réception des marchandises.
                            </p>
                        </div>
                        <div className="dates">
                            <div className="tag">Déc 2014 - Sept 2015</div>
                        </div>

                    </div>
                </div>
                <div className="separator"></div>
                <div className="groups">
                    <h3>Précédentes expériences</h3>
                    <div className="experience">
                        <div className="details">
                            <p>
                                Stagiaire commercial - Casino Shopping (Mai à Octobre 2013).

                            </p>
                            <p>
                                Opérateur codificateur - Kantar média (7 mois de 2011 à 2014).

                            </p>
                            <p>
                                Technicien de maintenance - Kantar média (3 mois de 2008 à 2010).
                            </p>
                        </div>
                        <div className="dates">
                            <div className="tag">2008 - 2014</div>
                        </div>

                    </div>
                </div>
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

        .separator {
            border-top: 1px solid ${theme.borderColor.primary};
        }
    }

`;