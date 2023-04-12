<template>
	<nav class="shadow">
		<div class="max-w-screen flex flex-col items-center">
			<div class="w-11/12 sm:w-10/12 md:w-8/12 lg:w-6/12 h-14">
				<div class="flex h-full justify-between">
					<Nuxt-Link to="/">
						<div class="flex h-full items-center space-x-2">
							<span class="font-bold text-lg">
								Beeble Indonesia
							</span>
						</div>
					</Nuxt-Link>
					<div class="flex h-full items-center">
						<ul class="flex flex-row space-x-3">
							<li v-for="item in menu">
								<Nuxt-Link :to="item.link">
									{{ item.name }}
								</Nuxt-Link>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</nav>
</template>

<script>
export default {
	data() {
		return {
			menu: [
				{ name: "Docs", link: "/docs" },
				{
					name: "Github",
					link: "https://github.com/erwindosianipar/beeble",
				},
			],
		};
	},
};
</script>
