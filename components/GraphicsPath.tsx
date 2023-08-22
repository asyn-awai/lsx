export default function GraphicsPath({ path }: { path: string }) {
	return <p>{`\\graphicspath{{${path}}}`}</p>;
}
