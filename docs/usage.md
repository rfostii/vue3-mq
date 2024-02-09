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
