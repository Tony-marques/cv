import {useState} from "react";
import Presentation from "../components/Presentation/Presentation.tsx";
import {TabInterface} from "../interfaces/TabInterface.ts";
import ExperiencesAndSkills from "../components/ExperiencesAndSkills/ExperiencesAndSkills.tsx";

export const useTabs = () => {
    const [selectedTab, setSelectedTab] = useState<number>(1);
    const tabs: TabInterface[] = [
        {id: 1, title: "Présentation", content: <Presentation/>},
        {id: 2, title: "Compétences & expériences", content: <ExperiencesAndSkills/>},
        {id: 3, title: "Scolarité", content: "Scolarité"}
    ];
    const handleSelectedTab = (id: number) => {
        setSelectedTab(id);
    };

    return {
        selectedTab,
        handleSelectedTab,
        tabs
    };
};