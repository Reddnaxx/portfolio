import { INavigation } from "@/shared/constants/navigation/navigation.interface";

export interface HeaderFullNavbarProps {
  navigations: INavigation[];
  currentSection: number;
  setCurrentSection: (newSection: number) => void;
}
