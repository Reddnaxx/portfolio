"use client";

import React, {
	createContext,
	ReactNode,
	SetStateAction,
	useMemo,
	useState,
} from "react";

import { useSectionNavigation } from "@/shared/hooks/useSectionNavigation";

export interface IModalContext {
	modalContent: ReactNode | null;
	// eslint-disable-next-line no-unused-vars
	openModal: (content: ReactNode | null) => void;
	closeModal: () => void;
}

export interface INavigationContext {
	currentSection: number;
	// eslint-disable-next-line no-unused-vars
	setSection: (section: SetStateAction<number>) => void;
}

export const ModalContext = createContext<IModalContext>({
	modalContent: null,
	openModal: () => {},
	closeModal: () => {},
});

export const NavigationContext = createContext<INavigationContext>({
	currentSection: 0,
	setSection: () => {},
});

function Providers({ children }: { children: ReactNode }) {
	const [modalContent, setModalContent] = useState<ReactNode>(null);
	const { currentSection, setCurrentSection } = useSectionNavigation();

	const modalCtxValue = useMemo(
		() => ({
			modalContent: modalContent,
			openModal: setModalContent,
			closeModal: () => setModalContent(null),
		}),
		[modalContent],
	);

	const navigationCtxValue = useMemo(
		() => ({
			currentSection: currentSection,
			setSection: setCurrentSection,
		}),
		[currentSection, setCurrentSection],
	);

	return (
		<ModalContext.Provider value={modalCtxValue}>
			<NavigationContext.Provider value={navigationCtxValue}>
				{children}
			</NavigationContext.Provider>
		</ModalContext.Provider>
	);
}

export default Providers;
