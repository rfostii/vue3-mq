---
title: Installation
---

# Install Vue3-MQ using a package manager

To add Vue3-Mq to your Vue 3 app, first install it using your chosen package manager.

::: code-group

```bash [NPM]
npm install vue3-mq
```

```bash [YARN]
yarn add vue3-mq
```

```bash [PNPM]
pnpm add vue3-mq
```

:::

## Standard Installation

Now add the plugin to your app entry file

```js
import { createApp } from "vue";
import { Vue3Mq } from "vue3-mq";
const app = createApp({});
app.use(Vue3Mq);
app.mount("#app");
```

## Global Installation

You can now use the `global` config option for the plugin to install the `<MqResponsive>` component and the `$mq` object globally in your application.

```js
import { createApp } from "vue";
import { Vue3Mq } from "vue3-mq";

const app = createApp();
app.use(Vue3Mq, {
	global: true,
});

app.mount("#app");
```

Then in your templates:

```vue
<template>
	<MqResponsive target="lg+">Large</MqResponsive>
	<div v-if="$mq.lgPlus">Large</div>
</template>
```
