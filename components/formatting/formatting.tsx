import type * as Types from "@/types";

export function MakeTitle() {
	return <span>\maketitle</span>;
}

export function Text({
	size = "normalsize",
	children,
}: {
	size?: Types.Sizes;
	children: string;
}) {
	return <span>{`\\text{\\${size}{${children}}}`}</span>;
}

export function VSpace({ size = "10pt" }: { size?: Types.Unit }) {
	return <span>{`\\vspace{${size}}`}</span>;
}
