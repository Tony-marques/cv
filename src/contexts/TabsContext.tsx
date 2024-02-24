import {createContext, ReactNode, useContext} from "react";
import {useTabs} from "../hooks/useTabs.ts";

interface TabsContextProviderProps {
    children: ReactNode;
}

interface ITabsContext {
    selectedTab: number;
    handleSelectedTab: (id: number) => void;
}

const TabsContext = createContext<ITabsContext | null>(null);

export const TabsContextProvider = ({children}: TabsContextProviderProps) => {

    const {selectedTab, handleSelectedTab} = useTabs();

    const contextValue: ITabsContext = {
        selectedTab,
        handleSelectedTab
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