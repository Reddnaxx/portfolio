import { getSkill } from "@/sections/about/constants/technical-skills";
import { IProject } from "@/sections/projects/interfaces/project.interface";

export const projects: IProject[] = [
	{
		title: "Business volchonok",
		description:
			"Website of business school for children with lessons and tests.",
		image: "/img/projects/business-volchonok.png",
		stack: [getSkill("React")],
		github: "https://github.com/MyLongCode/BusinessWolf",
	},
	{
		title: "Bistro scout",
		description: "Service for booking tables in restaurants, cafes, etc.",
		image: "/img/projects/bistro-scout.png",
		stack: getSkill(["Next.js"]),
		github: "https://github.com/Reddnaxx/BistroScout",
		url: "https://bistro-scout.vercel.app",
	},
	{
		title: "Warpoint merch",
		description:
			"Website for hackathon Unit Hack, the essence of the site is the sale of Warpoint's merch",
		image: "/img/projects/warpoint.png",
		stack: getSkill(["Next.js", "Material UI"]),
		github: "https://github.com/Reddnaxx/unit-hack",
		url: "https://unit-hack.vercel.app",
	},
	{
		title: "Vacation planner",
		description: "Website for course by Artsofte",
		image: "/img/projects/vacation-planner.png",
		stack: getSkill(["Angular", "Material UI"]),
		github: "https://github.com/Reddnaxx/VacationPlanningApp/tree/dev",
	},
];
