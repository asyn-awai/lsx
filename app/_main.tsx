import Preamble from "@/components/Preamble";
import Br from "@/components/formatting/Br";
import GraphicsPath from "@/components/GraphicsPath";
import Line from "@/components/Line";
import * as Fmt from "@/components/formatting/formatting";
import * as Env from "@/components/env/env";
import * as Math from "@/components/math/math";
import * as Elms from "@/components/elements/elements";

export default function Main() {
	return (
		<>
			<Preamble
				documentClass="article"
				args={["a4paper", "11pt"]}
				geometry="margin=1in"
				packages={[
					"amsmath",
					"amssymb",
					"amsthm",
					"graphicx",
					"hyperref",
				]}
				title="My First Document"
				author="John Doe"
				date="September 2021"
			/>
			<Br />
			<Env.Document>
				<Fmt.MakeTitle />
				<GraphicsPath path="./images/" />
				<Env.Center>
					<Fmt.Text size="LARGE">Hello, world!</Fmt.Text>
				</Env.Center>
				<Fmt.VSpace />
				<Env.Align>
					<Line>{`\\frac{1}{2}`}</Line>
					<Line>{`\\frac{1}{2}`}</Line>
					<Line>{`\\frac{1}{2}`}</Line>
				</Env.Align>
				<Fmt.VSpace />
				<Env.Align numbered>
					<Line>
						<Math.Frac terms={[<Math.Int args={[5, 10]} />, 2]} />
						<Math.Frac terms={[5, 2]} />
						<Math.Frac terms={[5, 2]} />
						<Math.Frac terms={[5, 2]} />
					</Line>
					<Math.Lim to={9} />
				</Env.Align>
				<Elms.Flex>
					<Elms.FlexItem>
						<Math.Frac terms={[1, 2]} />
						<Fmt.Text>hello</Fmt.Text>
					</Elms.FlexItem>
					<Elms.FlexItem>
						<Math.Frac terms={[1, 2]} />
						<Fmt.Text>hello</Fmt.Text>
					</Elms.FlexItem>
				</Elms.Flex>
				<Elms.Flex gapx="5em">
					<Elms.FlexItem>
						<Math.Frac terms={[1, 2]} />
						<Fmt.Text>hello</Fmt.Text>
					</Elms.FlexItem>
					<Elms.FlexItem>
						<Math.Frac terms={[1, 2]} />
						<Fmt.Text>hello</Fmt.Text>
					</Elms.FlexItem>
				</Elms.Flex>
				<Elms.SplitPage>
					<Elms.SplitPageItem>
						<Math.Expr>
                        <Math.Frac terms={[1, 2]} />
                        </Math.Expr>
					</Elms.SplitPageItem>
					<Elms.SplitPageItem centering={false}>
						<Math.Expr>
							<Math.Frac terms={[1, 2]} />
							<Math.Sum variable="n" to="\\infty" />
						</Math.Expr>
					</Elms.SplitPageItem>
				</Elms.SplitPage>
			</Env.Document>
		</>
	);
}
