import { ChipData } from "@/shared/ui/chip/interfaces/chip-data.interface";

export interface IProject {
	title: string;
	description: string;
	image: string;
	stack: ChipData[];
}
