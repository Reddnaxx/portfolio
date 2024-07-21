import { getSkill } from "@/sections/about/constants/technical-skills";
import { IProject } from "@/sections/projects/interfaces/project.interface";

export const projects: IProject[] = [
	{
		title: "Business volchonok",
		description:
			"Website of business school for children with lessons and tests.",
		image: "/img/projects/business-volchonok.png",
		stack: [getSkill("React")],
	},
	{
		title: "Bistro scout",
		description: "Service for booking tables in restaurants, cafes, etc.",
		image: "/img/projects/bistro-scout.png",
		stack: getSkill(["Next.js"]),
	},
	{
		title: "Warpoint merch",
		description:
			"Website for hackathon Unit Hack, the essence of the site is the sale of Warpoint's merch",
		image: "/img/projects/warpoint.png",
		stack: getSkill(["Next.js", "Material UI"]),
	},
	{
		title: "Vacation planner",
		description: "Website for course by Artsofte",
		image: "/img/projects/vacation-planner.png",
		stack: getSkill(["Angular", "Material UI"]),
	},
];
