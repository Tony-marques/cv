import {styled} from "styled-components";
import {TabsConfig} from "../Tabs/TabsConfig.tsx";

interface TabContentProps {
    selectedTab: number
}

const TabContent = ({selectedTab}: TabContentProps) => {
    const item = TabsConfig.find((el) => {
        return el.id === selectedTab;
    });

    console.log(item);
    return (
        <TabContentStyled>
            {item?.content}
        </TabContentStyled>
    );
};

export default TabContent;

const TabContentStyled = styled.div`
    padding: 30px;
    //border: 1px solid red;
    flex: 1;
`;