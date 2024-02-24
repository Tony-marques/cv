import {styled} from "styled-components";
import Tab from "../Tab/Tab.tsx";
import {TabsConfig} from "../Tabs/TabsConfig.tsx";
import {useTabsContext} from "../../contexts/TabsContext.tsx";
import {theme} from "../../theme";

const TabList = () => {
    const {selectedTab, handleSelectedTab} = useTabsContext();

    const config = TabsConfig;

    return (
        <TabListStyled>
            {config?.map(({id, title}) => {
                return (
                    <Tab
                        key={id}
                        title={title}
                        $isSelected={selectedTab === id}
                        onClick={() => handleSelectedTab(id)}/>
                );
            })}
        </TabListStyled>
    );
};

export default TabList;

const TabListStyled = styled.div`
    display: flex;
    justify-content: center;
    border-bottom: 1px solid ${theme.borderColor.primary};
`;