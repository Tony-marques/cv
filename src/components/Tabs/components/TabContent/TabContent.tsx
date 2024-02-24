import {styled} from "styled-components";
import {TabInterface} from "../../../../interfaces/TabInterface.ts";
import {useTabsContext} from "../../../../contexts/TabsContext.tsx";

const TabContent = () => {
    const {selectedTab, tabs} = useTabsContext();

    const tab = tabs.find((el: TabInterface) => {
        return el.id === selectedTab;
    });

    return (
        <TabContentStyled>
            {tab?.content}
        </TabContentStyled>
    );
};

export default TabContent;

const TabContentStyled = styled.div`
    padding: 30px;
    flex: 1;
`;