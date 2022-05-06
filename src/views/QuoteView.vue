<template>
    <router-link to="/">Retour</router-link>
    <QuoteForm/>
</template>

<script lang="ts">

    import QuoteForm from "@/components/QuoteForm.vue";

    export default {
		  components: {
			  "QuoteForm": QuoteForm
		  }
    }

</script>