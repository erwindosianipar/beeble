import * as cheerio from "cheerio";

export default defineEventHandler(async (event) => {
  const html = await $fetch(`https://alkitab.app/renunganpagi`);

  const $ = cheerio.load(html);

  const $date = $("div.me-date").text();
  const $title = $("big").text();
  const $content = $("p.me-content").text();

  return {
    date: $date,
    title: $title,
    content: $content,
  };
});
