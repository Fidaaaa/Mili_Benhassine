<template>
  <router-link to="/">Retour</router-link>
  <InvoiceForm/>
</template>

<script lang="ts">

    import InvoiceForm from "@/components/InvoiceForm.vue";

    export default {
		  components: {
			  "InvoiceForm": InvoiceForm
	  	}
    }

</script>