import Indent from "@/components/Indent";

export function Document({ children }: { children: React.ReactNode | string }) {
	return (
		<>
			<p>{`\\begin{document}`}</p>
			<Indent>{children}</Indent>
			<p>{`\\end{document}`}</p>
		</>
	);
}

export function Center({ children }: { children: React.ReactNode | string }) {
	return (
		<>
			<p>{`\\begin{center}`}</p>
			<Indent>{children}</Indent>
			<p>{`\\end{center}`}</p>
		</>
	);
}

export function Equation({
	children,
	numbered = false,
}: {
	children: React.ReactNode | string;
	numbered?: boolean;
}) {
	return (
		<>
			<p>{`\\begin{equation${numbered ? "" : "*"}}`}</p>
			<Indent>{children}</Indent>
			<p>{`\\end{equation${numbered ? "" : "*"}}`}</p>
		</>
	);
}

export function Align({
	children,
	numbered = false,
}: {
	children: React.ReactNode | string;
	numbered?: boolean;
}) {
	return (
		<>
			<p>{`\\begin{align${numbered ? "" : "*"}}`}</p>
			<Indent>{children}</Indent>
			<p>{`\\end{align${numbered ? "" : "*"}}`}</p>
		</>
	);
}
