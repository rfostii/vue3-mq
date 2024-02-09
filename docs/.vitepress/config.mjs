import { defineConfig } from "vitepress";
import fg from "fast-glob";

const changelogs = fg.sync(["./changelog/*.md"]);

// https://vitepress.dev/reference/site-config
export default defineConfig({
	title: "Vue3 MQ",
	base: "/vue3-mq/",
	description:
		"Bring fully reactive, responsive design to your Vue 3 project with Vue3-MQ, a plugin which allows your components and pages to adapt and react to changes in the browser environment.",
	head: [["link", { rel: "icon", href: "/images/favicon.png" }]],
	themeConfig: {
		logo: "/images/logo.png",
		siteTitle: false,
		// https://vitepress.dev/reference/default-theme-config
		nav: [
			{
				text: "Changelog",
				items: changelogs
					.map((log) => ({
						text: log
							.match(
								/(?:\.\/changelog\/)(v[A-Za-z0-9.]+)(?:\.md)/
							)
							.pop(),
						link: "/" + log,
					}))
					.reverse(),
			},
			{ text: "FAQ", link: "/faq" },
		],

		sidebar: [
			{
				text: "Installation",
				link: "/installation",
			},
			{
				text: "Usage",
				link: "/usage",
			},
			{
				text: "Component",
				link: "/component/",
				items: [
					{ text: "Props", link: "/component/props" },
					{ text: "Slots", link: "/component/slots" },
				],
			},
			{
				text: "Configure",
				link: "/configure/",
				items: [
					{ text: "Presets", link: "/configure/presets" },
					{ text: "Dynamic", link: "/configure/dynamic" },
				],
			},
			{
				text: "Frequently Asked Questions",
				link: "/faq",
			},
		],
		socialLinks: [
			{
				icon: "github",
				link: "https://github.com/craigrileyuk/vue3-mq",
			},
			{
				icon: "npm",
				link: "https://www.npmjs.com/package/vue3-mq",
			},
		],
		footer: {
			message: "Released under the MIT License.",
			copyright:
				"Copyright © 2022-2024 Craig Riley, forked from the vue-mq project by Alexandre Bonaventure",
		},
	},
});
