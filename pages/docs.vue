<template>
	<div class="prose max-w-[100%]">
		<h1>API Documentation</h1>
		<p>
			Beeble Indonesia is an API provider that offers a comprehensive set
			of tools and resources for developers who want to integrate Bible
			data into their applications.
		</p>
		<p>
			This API allows developers to access different versions of the Bible
			in various languages, along with additional information such as
			book, chapter, and verse title, numbers, and contents.
		</p>
		<p>
			The Bible content in Beeble Indonesia's API is sourced from
			<Nuxt-Link to="https://labs.sabda.org/API">SABDA LABS</Nuxt-Link>.
			It's important to note that Beeble Indonesia is not affiliated with
			the SABDA. Developers can use Beeble Indonesia's API to retrieve
			passage lists and content, which are sourced from SABDA's database.
			With clear documentation and easy-to-use endpoints.
		</p>
		<h2 class="mb-1">1. Passage List</h2>
		<p>This endpoint returns a list of passages</p>
		<table class="table-auto">
			<thead>
				<tr>
					<th>METHOD</th>
					<th>BASE URL</th>
					<th>ENDPOINT</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>GET</td>
					<td>https://beeble.vercel.app</td>
					<td>/api/v1/passage/list</td>
				</tr>
			</tbody>
		</table>
		<h3 class="font-bold mb-1">Response</h3>
		<Nuxt-Link to="https://beeble.vercel.app/api/v1/passage/list">
			https://beeble.vercel.app/api/v1/passage/list
		</Nuxt-Link>
		<pre>
{
    "data": [
        {
            "no": 1,
            "abbr": "Kej",
            "name": "Kejadian",
            "chapter": 50
        },
        {
            "no": 2,
            "abbr": "Kel",
            "name": "Keluaran",
            "chapter": 40
        },
        ...
    ]
}</pre
		>

		<h2 class="mb-1">2. Passage Content</h2>
		<p>This endpoint returns a passage content</p>
		<table class="table-auto">
			<thead>
				<tr>
					<th>METHOD</th>
					<th>BASE URL</th>
					<th>ENDPOINT</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>GET</td>
					<td>https://beeble.vercel.app</td>
					<td>
						/api/v1/passage/<span class="font-bold">{abbr}</span
						>/<span class="font-bold">{chapter}</span>
					</td>
				</tr>
			</tbody>
		</table>
		<p class="uppercase mb-0 font-bold">Description</p>
		<ul class="mt-0">
			<li class="mt-0 mb-0">
				<span class="font-bold">abbr</span> is abbreviation of book name
			</li>
			<li class="mt-0 mb-0">
				<span class="font-bold">chapter</span> is a number of chapter
			</li>
		</ul>
		<h3 class="font-bold mb-1">Response</h3>
		<Nuxt-Link to="https://beeble.vercel.app/api/v1/passage/Kej/1">
			https://beeble.vercel.app/api/v1/passage/Kej/1
		</Nuxt-Link>
		<pre>
{
    "data": {
        "book": {
            "no": 1,
            "name": "Kejadian",
            "chapter": 1
        },
        "verses": [
            {
                "verse": 0,
                "type": "title",
                "content": "Allah menciptakan langit dan bumi serta isinya"
            },
            {
                "verse": 1,
                "type": "content",
                "content": "Pada mulanya Allah menciptakan langit dan bumi."
            },
            ...
        ]
    }
}</pre
		>
	</div>
</template>

<script setup>
useHead({
	title: "Docs | Beeble Indonesia",
	meta: [
		{
			name: "description",
			content:
				"Beeble Indonesia is an API provider that offers a comprehensive set of tools and resources for developers who want to integrate Bible data into their applications.",
		},
	],
});
</script>
