import { getSkill } from "@/sections/about/constants/technical-skills";
import { IProject } from "@/sections/projects/interfaces/project.interface";

export const projects: IProject[] = [
	{
		title: "Business volchonok",
		description:
			"Website of business school for children with lessons and tests.\n" +
			"My first project as frontend developer.\n" +
			"While working on this site, I studied JS, TS and React from scratch.",
		image: "/img/projects/business-volchonok.png",
		stack: [getSkill("React")],
		github: "https://github.com/MyLongCode/BusinessWolf",
	},
	{
		title: "Bistro scout",
		description:
			"Service for booking tables in restaurants, cafes, etc.\n" +
			"During development, I was a frontend developer in a team of 5 students",
		image: "/img/projects/bistro-scout.png",
		stack: getSkill(["Next.js"]),
		github: "https://github.com/Reddnaxx/BistroScout",
		url: "https://bistro-scout.vercel.app",
	},
	{
		title: "Warpoint merch",
		description:
			"Website for hackathon Unit Hack, the essence of the site is the sale of Warpoint's merch.\n" +
			"It was out first hackathon, so backend wasn't ready in time cause of bad deploy, but frontend is almost done",
		image: "/img/projects/warpoint.png",
		stack: getSkill(["Next.js", "Material UI"]),
		github: "https://github.com/Reddnaxx/unit-hack",
		url: "https://unit-hack.vercel.app",
	},
	{
		title: "Vacation planner",
		description:
			"Website for angular course by Artsofte.\n" +
			"We worked in teams of 3 people. My team didn't know much about programming," +
			" so I was the team leader and gave the guys tips.\n" +
			"As a result, an excellent grade was obtained.",
		image: "/img/projects/vacation-planner.png",
		stack: getSkill(["Angular", "Material UI"]),
		github: "https://github.com/Reddnaxx/VacationPlanningApp/tree/dev",
	},
];
