import {styled} from "styled-components";
import TabList from "../TabList/TabList.tsx";
import TabContent from "../TabContent/TabContent.tsx";
import {useTabsContext} from "../../contexts/TabsContext.tsx";

const Tabs = () => {
    const {selectedTab} = useTabsContext()

    return (
        <TabsStyled>
            <TabList/>
            <TabContent selectedTab={selectedTab}/>
        </TabsStyled>
    );
};

export default Tabs;

const TabsStyled = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
`;