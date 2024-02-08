# Dynamic Breakpoints

Need to change your breakpoint presets on the go? Then good news everyone, Vue3 Mq supports dynamically updating your application's breakpoints.

Simply import or inject the provided function and pass your new configuration object.

::: code-group

```vue [Composition API]
<script setup>
import { onMounted } from "vue";
import { updateBreakpoints } from "vue3-mq";

onMounted(() => {
	updateBreakpoints({
		breakpoints: {
			mobile: 0,
			tablet: 576,
			desktop: 1200,
		},
	});
});
</script>
```

```vue [Options API]
<script>
export default {
	inject: ["updateBreakpoints"],
	created() {
		this.updateBreakpoints({
			breakpoints: {
				mobile: 0,
				tablet: 576,
				desktop: 1200,
			},
		});
	},
};
</script>
```

:::

Or you can switch to any of the [breakpoint presets](/configure/presets.md) available.
