"use client";

import type * as Types from "@/types";
import { Children, createContext, useContext } from "react";
import Indent from "@/components/Indent";
import * as Fmt from "@/components/formatting/formatting";
import * as Env from "@/components/env/env";

const FlexContext = createContext<{
	gapx: Types.Unit | "auto";
}>({ gapx: "auto" });

export function Flex({
	children,
	gapx = "auto",
	numbered = false,
}: {
	children: (React.ReactNode | string)[] | React.ReactNode | string;
	gapx?: Types.Unit | "auto";
	numbered?: boolean;
}) {
	return (
		<FlexContext.Provider value={{ gapx }}>
			<span>{`\\begin{align${numbered ? "" : "*"}}\n`}</span>
			<Indent>{children}</Indent>
			<span>{`\\end{align${numbered ? "" : "*"}}\n`}</span>
		</FlexContext.Provider>
	);
}

export function FlexItem({
	children,
}: {
	children: React.ReactNode[] | string[];
	last?: boolean;
}) {
	const { gapx } = useContext(FlexContext);

	return (
		<>
			<span>
				{Children.map(children, (child, i) => {
					const hspace =
						gapx === "auto" ? `${1 / children.length}in` : gapx;

					return (
						<>
							{child}
							{i !== children.length - 1 && (
								<span>{` & \\hspace{${hspace}} `}</span>
							)}
						</>
					);
				})}
			</span>
			<span>{` \\\\ \n`}</span>
		</>
	);
}

// const SplitPageContext = createContext<{}>({});
export function SplitPage({
	children,
}: {
	children: React.ReactNode[] | string[] | React.ReactNode | string;
}) {
	return (
		<Env.Center>
			<Indent>{children}</Indent>
		</Env.Center>
	);
}

export function SplitPageItem({
	children,
	width = "0.5",
	centering = true,
}: {
	children: React.ReactNode[] | string[] | React.ReactNode | string;
	width?: string;
	centering?: boolean;
}) {
	return (
		<>
			<span>{`\\begin{minipage}{${width}\\textwidth}\n`}</span>
            {centering && <span>{`\\centering\n`}</span>}
			<span>
				{Children.map(children, (child, i) => {
					return (
						<>
							{child}
							{/* {i !== children.length - 1 && (
							<span>{` & \\hspace{} `}</span>
						)} */}
						</>
					);
				})}
			</span>
			<span>{`\\end{minipage}\n`}</span>
			{/* <span>{` \\\\ \n`}</span> */}
		</>
	);
}
