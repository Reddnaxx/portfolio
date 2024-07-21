"use client";

import Image from "next/image";
import React, {
	useCallback,
	useContext,
	useEffect,
	useRef,
	useState,
} from "react";
import {
	CSSTransition,
	Transition,
	TransitionStatus,
} from "react-transition-group";

import { ModalContext } from "@/app/providers";
import Button from "@/shared/ui/button/button";

import styles from "./modal.module.scss";

const TIMEOUT = 200;

const transitionStyles = {
	entering: { opacity: 0 },
	entered: { opacity: 1 },
	exiting: { opacity: 1 },
	exited: { opacity: 0, "pointer-events": "none" },
};

function Modal() {
	const { modalContent, closeModal } = useContext(ModalContext);
	const [visible, setVisible] = useState(!!modalContent);
	const modalRef = useRef<HTMLDivElement>(null);

	const handleClose = useCallback(() => {
		setVisible(false);
		setTimeout(() => closeModal(), TIMEOUT + 100);
	}, [closeModal]);

	useEffect(() => {
		setVisible(!!modalContent);
	}, [modalContent]);

	useEffect(() => {
		function handleEsc(event: KeyboardEvent) {
			if (visible && event.key === "Escape") {
				handleClose();
			}
		}

		window.addEventListener("keydown", handleEsc);
		return () => {
			window.removeEventListener("keydown", handleEsc);
		};
	}, [handleClose, visible]);

	return (
		<Transition
			nodeRef={modalRef}
			in={visible}
			timeout={TIMEOUT}
		>
			{status => (
				<div
					className={styles["modal-bg"]}
					ref={modalRef}
					onClick={handleClose}
					style={{
						...transitionStyles[status as keyof typeof transitionStyles],
					}}
				>
					<div
						className={styles["modal"]}
						onClick={e => e.stopPropagation()}
					>
						<Button
							onlyIcon
							onClick={handleClose}
							size={"small"}
						>
							<Image
								src="/svg/close.svg"
								alt=""
								width={24}
								height={24}
							/>
						</Button>
						<div className={styles["modal-content"]}>{modalContent}</div>
					</div>
				</div>
			)}
		</Transition>
	);
}

export default Modal;
