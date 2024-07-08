import { INavigation } from "@/shared/constants/navigation/navigation.interface";
import { SetStateAction } from "react";

export interface HeaderFullNavbarProps {
  navigations: INavigation[];
  currentSection: number;
  // eslint-disable-next-line no-unused-vars
  setCurrentSection: (args: SetStateAction<number>) => void;
}
