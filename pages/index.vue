<template>
	<div>
		<div class="overflow-x-scroll no-scrollbar border-t border-b">
			<ul class="flex space-x-2 py-2">
				<li
					v-if="fetching"
					class="whitespace-nowrap border rounded-full px-4"
				>
					<div>Loading...</div>
				</li>
				<li
					v-else
					v-for="item in books.data"
					class="whitespace-nowrap border rounded-full px-4 cursor-pointer"
					:class="selectPill(book.name == item.name)"
					@click="selectBook(item)"
				>
					{{ item.name }}
				</li>
			</ul>
		</div>
		<div v-if="chapters != 0">
			<div class="overflow-x-scroll no-scrollbar border-b">
				<ul class="flex space-x-2 py-2">
					<li
						v-for="i in chapters"
						class="whitespace-nowrap border rounded-full px-3 cursor-pointer text-sm"
						:class="selectPill(chapter == i)"
						@click="fetchPassage(i)"
					>
						{{ i }}
					</li>
				</ul>
			</div>
		</div>
		<div
			v-if="response.length == 0 && !loading"
			class="flex items-center justify-center h-80"
		>
			Select book and chapter to continue
		</div>
		<div class="mt-5">
			<div
				v-if="!loading && response.verses && response.verses.length > 0"
			>
				<h2 class="font-black">{{ book.name }} {{ chapter }}</h2>
			</div>
			<div v-if="loading" class="animate-pulse space-y-3">
				<div
					v-for="i in 30"
					class="bg-gray-200 rounded-full h-3"
					:class="randomWidth()"
				></div>
			</div>
			<ul v-else class="space-y-3 mt-5">
				<li v-for="verse in response.verses">
					<div v-if="verse.type === 'title'" class="font-bold">
						{{ verse.content }}
					</div>
					<div v-else class="flex">
						<div class="font-bold mr-1 flex items-start">
							{{ verse.verse }}
						</div>
						<div>
							{{ verse.content }}
						</div>
					</div>
				</li>
			</ul>
		</div>
	</div>
</template>

<script setup>
const { fetching, data: books } = await useLazyFetch("/api/v1/passage/list");

useHead({
	title: "Home | Beeble Indonesia",
	meta: [
		{
			name: "description",
			content:
				"Beeble Indonesia is an API provider that offers a comprehensive set of tools and resources for developers who want to integrate Bible data into their applications.",
		},
	],
});
</script>

<script>
export default {
	data() {
		return {
			book: {},
			chapter: 0,
			chapters: 0,
			response: [],
			loading: null,
		};
	},
	methods: {
		randomWidth() {
			const width = [
				"w-[80%]",
				"w-[85%]",
				"w-[90%]",
				"w-[95%]",
				"w-[99%]",
			];
			return width[Math.floor(Math.random() * width.length)];
		},
		selectBook(book) {
			this.book = book;
			this.chapter = 0;
			this.chapters = book.chapter;
			this.response = [];
		},
		selectPill(status) {
			if (status) {
				return "border-blue-500 bg-blue-500 text-white";
			}
		},
		async fetchPassage(chapter) {
			this.loading = true;
			this.chapter = chapter;
			const abbr = this.book.abbr;
			const response = await useLazyFetch(
				`/api/v1/passage/${abbr}/${chapter}`
			);

			this.loading = false;
			this.response = response.data._rawValue.data;
		},
	},
};
</script>
