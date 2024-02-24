import {createContext, ReactNode, useContext} from "react";
import {useTabs} from "../hooks/useTabs.tsx";
import {TabInterface} from "../interfaces/TabInterface.ts";

interface TabsContextProviderProps {
    children: ReactNode;
}

interface ITabsContext {
    selectedTab: number;
    handleSelectedTab: (id: number) => void;
    tabs: TabInterface[];
}

const TabsContext = createContext<ITabsContext | null>(null);

export const TabsContextProvider = ({children}: TabsContextProviderProps) => {

    const {selectedTab, handleSelectedTab, tabs} = useTabs();

    const contextValue: ITabsContext = {
        selectedTab,
        handleSelectedTab,
        tabs
    };

    return <TabsContext.Provider value={contextValue}>
        {children}
    </TabsContext.Provider>;
};

export const useTabsContext = () => {
    const context = useContext(TabsContext);

    if(!context) {
        throw new Error("useTabsContext must be in TabsContextProvider");
    }

    return context;
};