export function Expr({
	children,
	displayMode = false,
}: {
	children: React.ReactNode | string;
	displayMode?: boolean;
}) {
	return (
		<span>
			<span>{displayMode ? "$$" : "$"}</span>
			{children}
			<span>{displayMode ? "$$" : "$"}</span>
		</span>
	);
}

export function Frac({
	terms,
	displayStyle = true,
}: {
	terms: [
		string | number | React.ReactNode,
		string | number | React.ReactNode
	];
	displayStyle?: boolean;
}) {
	return (
		<span>
			<span>{`\\${displayStyle ? "dfrac" : "frac"}{`}</span>
			<span>{terms[0]}</span>
			<span>{`}{`}</span>
			<span>{terms[1]}</span>
			<span>{`}`}</span>
		</span>
	);
}

export function Abs({ children }: { children: React.ReactNode | string }) {
	return <span>{`\\left|${children}\\right|`}</span>;
}

export function Int({
	args,
	limits = true,
}: {
	args?: [string | number, string | number];
	limits?: boolean;
}) {
	return (
		<span>{`${limits ? "\\displaystyle" : ""}\\int${
			args ? `_{${args[0]}}^{${args[1]}}` : ""
		}`}</span>
	);
}

export function Lim({
	variable = "x",
	to = "\\infty",
	limits = true,
}: {
	variable?: string;
	to?: string | number;
	limits?: boolean;
}) {
	return (
		<span>
			{`\\lim${limits ? "\\limits" : ""}_{${variable} \\to ${to}}`}
		</span>
	);
}

export function Sum({
	variable = "i",
	from = "1",
	to = "n",
	limits = true,
}: {
	variable?: string;
	from?: string | number;
	to?: string | number;
	limits?: boolean;
}) {
	return (
		<span>
			{`\\sum${
				limits ? "\\limits" : ""
			}_{${variable}=${from} \\to ${to}} `}
		</span>
	);
}
