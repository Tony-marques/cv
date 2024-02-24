import {styled} from "styled-components";
import TabItem from "../TabItem/TabItem.tsx";
import {useTabsContext} from "../../../../contexts/TabsContext.tsx";
import {theme} from "../../../../theme";

const TabList = () => {
    const {selectedTab, handleSelectedTab, tabs} = useTabsContext();

    return (
        <TabListStyled>
            {tabs?.map(({id, title}) => {
                return (
                    <TabItem
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