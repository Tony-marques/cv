import {styled} from "styled-components";
import {theme} from "../../../../theme";

interface ExperienceProps {
    title: string;
    elementDetails: string[];
    date: string;
}

const Experience = ({title, elementDetails, date}: ExperienceProps) => {
    return (
        <ExperienceStyled>
            <h3>{title}</h3>
            <div className="experience">
                <div className="details">
                    {elementDetails.map((el) => {
                        return (
                            <p>{el}</p>
                        );
                    })}
                </div>
                <div className="dates">
                    <div className="tag">{date}</div>
                </div>
            </div>
        </ExperienceStyled>
    );
};

export default Experience;

const ExperienceStyled = styled.div`
    border-bottom: 1px solid ${theme.borderColor.primary};
    padding-bottom: 1rem;

    &:nth-last-child(1) {
        border: none;
    }

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
`;