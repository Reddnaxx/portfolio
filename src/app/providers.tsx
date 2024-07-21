"use client";

import React, { createContext, ReactNode, useState } from "react";

export interface IModalContext {
	modalContent: ReactNode | null;
	// eslint-disable-next-line no-unused-vars
	openModal: (content: ReactNode | null) => void;
	closeModal: () => void;
}

export const ModalContext = createContext<IModalContext>({
	modalContent: null,
	openModal: () => {},
	closeModal: () => {},
});

function Providers({ children }: { children: ReactNode }) {
	const [modalContent, setModalContent] = useState<ReactNode>(null);

	return (
		<ModalContext.Provider
			value={{
				modalContent: modalContent,
				openModal: setModalContent,
				closeModal: () => setModalContent(null),
			}}
		>
			{children}
		</ModalContext.Provider>
	);
}

export default Providers;
