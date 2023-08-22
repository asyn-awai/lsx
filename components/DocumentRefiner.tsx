"use client";

import { type ElementRef, useRef, useMemo } from "react";
import SyntaxHighlighter from "react-syntax-highlighter/dist/esm/default-highlight";
import { Button } from "./ui/Button";

export default function DocumentRefiner({
	children,
	className,
}: {
	children: React.ReactNode;
	className?: string;
}) {
	const ref = useRef<ElementRef<"pre">>(null!);

	const content = useMemo(() => {
		const content = ref.current?.textContent?.trim();
		if (content) {
			return content;
		}
	}, [ref]);

	return (
		<div className={className}>
			<Button
				className="mb-10 text-black bg-white"
				onClick={() => {
					navigator.clipboard.writeText(
						content ??
							ref.current?.textContent?.trim() ??
							"failed to copy"
					);
                    // alert("Copied to clipboard!");
				}}
			>
				Copy
			</Button>
			<pre ref={ref}>{content ?? children ?? ""}</pre>
		</div>
	);
}
