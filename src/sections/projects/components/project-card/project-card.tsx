"use client";

import Image from "next/image";
import React, { useContext, useMemo } from "react";

import { ModalContext } from "@/app/providers";
import StackList from "@/sections/projects/components/project-card/components/stack-list/stack-list";

import styles from "./project-card.module.scss";
import { ProjectCardProps } from "./project-card.props";

function ProjectCard({ title, description, image, stack }: ProjectCardProps) {
	const { openModal } = useContext(ModalContext);

	const modalContent = useMemo(
		() => (
			<>
				<h2>{title}</h2>
				<p>{description}</p>
				<h3>Stack</h3>
				<StackList stack={stack} />
			</>
		),
		[description, stack, title],
	);

	return (
		<div
			className={styles["project-card"]}
			onClick={() => openModal(modalContent)}
		>
			<Image
				src={image}
				alt=""
				width={480}
				height={280}
			/>
			<div className={styles["project-card__bottom"]}>
				<h3>{title}</h3>
				<StackList stack={stack} />
			</div>
		</div>
	);
}

export default ProjectCard;
