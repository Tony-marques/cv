import {styled} from "styled-components";
import {theme} from "./theme";
import AppContainer from "./components/AppContainer/AppContainer.tsx";

const App = () => {
    return (
        <AppStyled>
            <AppContainer/>
        </AppStyled>
    );
};

export default App;

const AppStyled = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${theme.backgroundColor.secondary};
    width: 100%;
    min-height: 100vh;
`;