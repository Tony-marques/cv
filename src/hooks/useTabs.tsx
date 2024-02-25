import {useState} from "react";
import Presentation from "../components/Presentation/Presentation.tsx";
import {TabInterface} from "../interfaces/TabInterface.ts";
import ExperiencesAndSkills from "../components/ExperiencesAndSkills/ExperiencesAndSkills.tsx";
import Formations from "../components/Formations/Formations.tsx";

export const useTabs = () => {
    const [selectedTab, setSelectedTab] = useState<number>(1);
    // const controls = useAnimation();
    const tabs: TabInterface[] = [
        {id: 1, title: "Présentation", content: <Presentation/>},
        {id: 2, title: "Compétences & expériences", content: <ExperiencesAndSkills/>},
        {id: 3, title: "Formations", content: <Formations/>}
    ];
    const handleSelectedTab = (id: number) => {
        // controls.start({
        //     scale: 2, // Doubler la taille de l'élément
        //     transition: {duration: 0.5} // Durée de l'animation
        // });
        setSelectedTab(id);
    };

    return {
        selectedTab,
        handleSelectedTab,
        tabs
    };
};