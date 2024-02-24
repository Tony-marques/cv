import {styled} from "styled-components";
import {theme} from "../../theme";
import Tabs from "../Tabs/Tabs.tsx";
import {TabsContextProvider} from "../../contexts/TabsContext.tsx";

const AppContainer = () => {
    return (
        <AppContainerStyled>
            <TabsContextProvider>
                <Tabs/>
            </TabsContextProvider>
        </AppContainerStyled>
    );
};

export default AppContainer;

const AppContainerStyled = styled.div`
    width: 1240px;
    height: 700px;
    background-color: ${theme.backgroundColor.primary};
    border-radius: ${theme.borderRadius.small};
    overflow: hidden;
`;