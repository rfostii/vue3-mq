<script setup>
import { useMq } from '../src';
const mq = useMq();
</script>

# The MQ Object

Vue3-Mq provides your app with a fully reactive object detailing the environment that it's operating within. This includes the screen size, orientation and OS/browser theme preference (i.e. dark mode).

<code class="block">
<pre>
{{ mq }}
</pre>
</code>

Notice that booleans are created for each of your provided breakpoints to allow you to easily respond to different size screens.

You can access this object inside your Vue 3 application like so:

::: code-group

```vue [Composition API]
<script setup>
import { useMq } from "vue3-mq";

const mq = useMq();
</script>
```

```vue [Options API]
<script>
export default {
	inject: ["mq"],
};
</script>
```

:::

## Global Installation

If you'd like to have the MQ object and the component globally available in your app, you can set it up like this in your entry file:

```js
import { createApp } from "vue";
import { Vue3Mq, MqResponsive, mqObject } from "vue3-mq";

const app = createApp();
app.use(Vue3Mq);
app.component("mq-responsive", MqResponsive);
// Below available for version 3.2+
app.config.globalProperties.$mq = mqObject;

app.mount("#app");
```
