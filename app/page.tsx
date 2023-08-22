import Main from "./_main";
import DocumentRefiner from "@/components/DocumentRefiner";

export default function Home() {
	return (
		<main className="flex flex-col items-center justify-between w-full min-h-screen p-24 gap-y-8">
			<DocumentRefiner className="w-5/6">
				<Main />
			</DocumentRefiner>
			<iframe
				src="https://latex-editor.pages.dev/formatter/"
				className="w-full h-[75vh]"
			/>
		</main>
	);
}
