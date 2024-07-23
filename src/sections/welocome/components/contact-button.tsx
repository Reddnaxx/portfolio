"use client";

import React, { useContext } from "react";

import { NavigationContext } from "@/app/providers";
import Button from "@/shared/ui/button/button";
import { ButtonProps } from "@/shared/ui/button/button.props";

function ContactButton(props: ButtonProps) {
	const { setSection } = useContext(NavigationContext);

	return (
		<Button onClick={() => setSection(3)} {...props}>
			Contact me!
		</Button>
	);
}

export default ContactButton;
