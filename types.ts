export type Units = "pt" | "mm" | "cm" | "in" | "ex" | "em" | "mu" | "sp";
export type Unit = `${number}${Units}`;

export type Sizes =
	| "tiny"
	| "scriptsize"
	| "footnotesize"
	| "small"
	| "normalsize"
	| "large"
	| "Large"
	| "LARGE"
	| "huge"
	| "Huge";
