interface Props {
	documentClass: string;
	args: string[];
	geometry?: string;
	graphicsPath?: string;
	packages?: string[];
	title?: string;
	author?: string;
	date?: string;
}
export default function Preamble({
	documentClass,
	args,
	geometry,
	packages,
	title,
	author,
	date,
}: Props) {
	return (
		<>
			<p>{`\\documentclass[${args.join(",")}]{${documentClass}}\n`}</p>
			<p>{geometry ? `\\usepackage[${geometry}]{geometry}\n` : ""}</p>
			<p>
				{packages
					? packages
							.map(pkg => `\\usepackage{${pkg}}`)
							.map(pkg => `${pkg}\n`)
					: ""}
			</p>
			<p>{title ? `\\title{${title}}\n` : ""}</p>
			<p>{author ? `\\author{${author}}\n` : ""}</p>
			<p>{date ? `\\date{${date}}\n` : ""}</p>
		</>
	);
}
