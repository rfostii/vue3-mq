<template>
	<div>
		<mq-responsive name="fade" mode="out-in">
			<template #xxl+>
				<img src="/images/desktop.png" />
			</template>
			<template #lg-xl>
				<img src="/images/macbook.png" />
			</template>
			<template #md>
				<img src="/images/ipad.png" />
			</template>
			<template #sm->
				<img src="/images/iphone.png" />
			</template>
		</mq-responsive>
	</div>
</template>

<script setup>
import { MqResponsive } from "../../../src";
</script>
