"use client";

import { type ElementRef, useState, useEffect, useRef, useMemo } from "react";

export default function Indent({
	children,
	count = 1,
}: {
	children: React.ReactNode;
	count?: number;
}) {
	const ref = useRef<ElementRef<"pre">>(null!);

	return (
		<pre
			ref={ref}
			style={{
				marginLeft: `${count * 2}em`,
			}}
		>
			{children}
		</pre>
	);
}
