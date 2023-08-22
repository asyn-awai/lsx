export async function POST(req: Request) {
	const body = await req.json();
	const res = await fetch("https://latexformat.com/format/", {
		headers: {
			accept: "*/*",
			"accept-language": "en-US,en;q=0.5",
			"content-type": "application/x-www-form-urlencoded; charset=UTF-8",
			"sec-ch-ua":
				'"Not/A)Brand";v="99", "Brave";v="115", "Chromium";v="115"',
			"sec-ch-ua-mobile": "?0",
			"sec-ch-ua-platform": '"Windows"',
			"sec-fetch-dest": "empty",
			"sec-fetch-mode": "cors",
			"sec-fetch-site": "same-origin",
			"sec-gpc": "1",
			"x-requested-with": "XMLHttpRequest",
		},
		referrer: "https://latexformat.com/",
		referrerPolicy: "strict-origin-when-cross-origin",
		body: `latex_data=${encodeURIComponent(body.content)}&spaces_or_tabs=${
			body.spaces_or_tabs
		}&number_of=${body.number_of}`,
		method: "POST",
		mode: "cors",
		credentials: "omit",
	});
	const text = await res.text();
    console.log(text);
	return new Response(
		JSON.stringify({
			data: text,
		}),
		{
			status: 200,
		}
	);
}
