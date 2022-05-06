<template>
	<p>
		Prénom : {{ client.firstname }}
		<br>
		Nom : {{ client.lastname }}
		<br>
		Numéro : {{ client.phoneNumber }}
	</p>
</template>

<script lang="ts">
	export default {
		props: [
			"client",
		],
	};
</script>