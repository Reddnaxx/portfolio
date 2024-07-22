import clsx from "clsx";
import React from "react";

import ProjectCard from "@/sections/projects/components/project-card/project-card";
import { projects } from "@/sections/projects/constants/projects.data";
import Carousel from "@/shared/ui/carousel/carousel";

import styles from "./projects-section.module.scss";

function ProjectsSection() {
	const projectElements = projects.map((project, index) => {
		return (
			<ProjectCard
				key={index}
				title={project.title}
				description={project.description}
				image={project.image}
				stack={project.stack}
				github={project.github}
				url={project.url}
			/>
		);
	});

	return (
		<>
			<span
				className={clsx("section-spacer", styles["spacer"])}
				id="projects-section"
			/>
			<section className={styles["projects-section"]}>
				<h2>My projects</h2>
				<Carousel items={projectElements} />
			</section>
		</>
	);
}

export default ProjectsSection;
