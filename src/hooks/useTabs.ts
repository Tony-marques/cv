import {useState} from "react";

export const useTabs = () => {
    const [selectedTab, setSelectedTab] = useState<number>(1);

    const handleSelectedTab = (id: number) => {
        setSelectedTab(id);
    };

    return {
        selectedTab,
        handleSelectedTab
    };
};