import {ReactNode} from "react";

export interface TabInterface {
    id: number;
    title: string;
    content: ReactNode | string;
}