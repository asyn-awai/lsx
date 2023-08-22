export default function Line({
	children,
}: {
	children: React.ReactNode | string;
}) {
	return (
		<p>
			<span>{children}</span>
			<span>{` \\\\ \n`}</span>
		</p>
	);
}
