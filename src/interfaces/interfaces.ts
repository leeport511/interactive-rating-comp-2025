export type Number = {
	number: number;
};

export interface MainPageProps {
	selected: number | null;
	handleSelectedBtn: (num: number) => void;
	handleSubmitBtn: () => void;
}
export interface ThanksPageProps {
	selectedNumber: number | null;
}

export interface NumberSelectorProps {
	selected: number | null;
	handleSelectedBtn: (num: number) => void;
}

export interface SubmitBtnProps {
	handleSubmitBtn: () => void;
}

export interface SelectedPointsProps {
	selectedNumber: number | null;
}
