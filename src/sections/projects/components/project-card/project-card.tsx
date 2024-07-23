"use client";

import Image from "next/image";
import React, { useContext, useMemo } from "react";

import { ModalContext } from "@/app/providers";

import StackList from "./components/stack-list/stack-list";
import styles from "./project-card.module.scss";
import { ProjectCardProps } from "./project-card.props";

function ProjectCard({
	title,
	description,
	github,
	url,
	image,
	stack,
}: ProjectCardProps) {
	const { openModal } = useContext(ModalContext);

	const modalContent = useMemo(
		() => (
			<div className={styles["modal"]}>
				<h2>{title}</h2>
				<p className={styles["modal__desc"]}>{description}</p>
				<p>
					GitHub:{" "}
					<a target="_blank" href={github}>
						{github}
					</a>
				</p>
				{url && (
					<p>
						URL:{" "}
						<a target="_blank" href={url}>
							{url}
						</a>
					</p>
				)}
			</div>
		),
		[description, github, title, url],
	);

	return (
		<div
			className={styles["project-card"]}
			onClick={() => openModal(modalContent)}
		>
			<Image src={image} alt="" width={480} height={280} />
			<div className={styles["project-card__bottom"]}>
				<h3>{title}</h3>
				<StackList stack={stack} />
			</div>
		</div>
	);
}

export default ProjectCard;
