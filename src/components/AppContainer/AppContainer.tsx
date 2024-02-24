import {styled} from "styled-components";
import {theme} from "../../theme";

const AppContainer = () => {
    return (
        <AppContainerStyled>

        </AppContainerStyled>
    );
};

export default AppContainer;

const AppContainerStyled = styled.div`
    width: 1120px;
    height: 700px;
    background-color: ${theme.backgroundColor.primary};
    border-radius: ${theme.borderRadius.small};
`;