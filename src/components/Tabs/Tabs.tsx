import {styled} from "styled-components";
import TabList from "./components/TabList/TabList.tsx";
import TabContent from "./components/TabContent/TabContent.tsx";

const Tabs = () => {

    return (
        <TabsStyled>
            <TabList/>
            <TabContent/>
        </TabsStyled>
    );
};

export default Tabs;

const TabsStyled = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
`;