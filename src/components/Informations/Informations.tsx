import {styled} from "styled-components";
import {theme} from "../../theme";

const Informations = () => {
    return (
        <InformationsStyled>
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
        </InformationsStyled>
    );
};

export default Informations;

const InformationsStyled = styled.div`
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

`;