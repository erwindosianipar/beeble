import * as cheerio from "cheerio";

export default defineEventHandler(async (event) => {
	const book = event.context.params.book;
	const chapter = event.context.params.chapter;
	let ver = getQuery(event).ver;

	if (ver == undefined) {
		ver = "tb";
	}

	const xml = await $fetch(
		`https://alkitab.sabda.org/api/passage.php?passage=${book}+${chapter}&ver=${ver}`
	);
	const $ = cheerio.load(xml, { xmlMode: true });

	let verses = [];
	$("verse").each((_, e) => {
		if ($(e).find("title").text()) {
			verses.push({
				verse: 0,
				type: "title",
				content: $(e).find("title").text(),
			});
		}
		verses.push({
			verse: parseInt($(e).find("number").text()),
			type: "content",
			content: $(e).find("text").text(),
		});
	});

	return {
		data: {
			book: {
				no: parseInt($("book_id").text()),
				name: $("book").attr("name"),
				chapter: parseInt(chapter),
			},
			verses: verses,
		},
	};
});
