"use client";

import React from "react";

import Slider from "@ant-design/react-slick";

import styles from "./carousel.module.scss";
import { CarouselProps } from "./carousel.props";

function Carousel({ items }: CarouselProps) {
	return (
		<div className={styles["carousel"]}>
			<Slider
				rows={2}
				slidesPerRow={3}
				className={styles["carousel-slider"]}
				responsive={[
					{
						breakpoint: 1600,
						settings: {
							slidesPerRow: 2,
						},
					},
					{
						breakpoint: 1024,
						settings: {
							rows: 2,
							slidesPerRow: 1,
						},
					},
				]}
			>
				{items.map((item, index) => {
					return (
						<li className={styles["list-item"]} key={index}>
							{item}
						</li>
					);
				})}
			</Slider>
		</div>
	);
}

export default Carousel;
