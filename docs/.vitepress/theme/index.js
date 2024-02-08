// https://vitepress.dev/guide/custom-theme
import { h } from "vue";
import HomeImage from "./HomeImage.vue";
import DefaultTheme from "vitepress/theme";
import "./style.css";
import { Vue3Mq } from "../../../src";

/** @type {import('vitepress').Theme} */
export default {
	extends: DefaultTheme,
	Layout: () => {
		return h(DefaultTheme.Layout, null, {
			// https://vitepress.dev/guide/extending-default-theme#layout-slots
			"home-hero-image": () => h(HomeImage),
		});
	},
	enhanceApp({ app, router, siteData }) {
		app.use(Vue3Mq);
	},
};
