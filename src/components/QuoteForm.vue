<template>
	<h1>Devis</h1>
	<p>Client : {{ store.clientFullName }}</p>
	<p>TVA : {{ store.listInvoice.firstInvoice.tva }} %</p>
	<p>Échéance : {{ store.listInvoice.firstInvoice.dueDate }}</p>
	<p>Prix total : {{ store.totalPrice }}</p>
	<p>Route : {{ currentRoutePath }}</p>

	<h2>Client</h2>
	<template v-if="!displayClientForm">
		<Client v-bind:client="store.listInvoice.firstInvoice.client" />
		<button v-on:click="showClientForm">Éditer</button>
	</template>
	<ClientForm v-else v-bind:client="store.listInvoice.firstInvoice.client" v-on:form-submit=" store.hideClientForm" />

	<h2>Lignes</h2>
	<table>
		<thead>
			<tr>
				<td>Désignation</td>
				<td>Prix</td>
				<td>Quantité</td>
				<td>Total</td>
			</tr>
		</thead>
		<tbody>
			<template v-for="(line, index) in store.listInvoice.firstInvoice.lines">
				<Line v-if="!displayLineForm[index]" v-bind:line="line" @click="handleEditLine(index)" />
				<LineForm v-else v-bind:line="line" @edit-finished="handleEditLineFinished(index)" />
			</template>
		</tbody>
	</table>
	<button v-on:click="store.addLine">Ajouter une ligne</button>
</template>

<script setup lang="ts">

	import { useInvoiceStore } from "@/stores/invoice";

	const store = useInvoiceStore();

</script>

<script lang="ts">
	import Client from "./Client.vue";
	import ClientForm from "./ClientForm.vue";
	import Line from "./Line.vue";
	import LineForm from "./LineForm.vue";

	export default {

		components: {
			"Client": Client,
			"ClientForm": ClientForm,
			"Line": Line,
			"LineForm": LineForm,
		},

		data() {
			return {
				displayClientForm: false,
				displayLineForm: [
					false
				]
			}
		},

		computed: {
    		currentRoutePath() {
        		return (this.$route.path.substr(7));
    		}
		},
		
		methods: {
			showClientForm() {
				this.displayClientForm = true;
			},
			hideClientForm() {
				this.displayClientForm = false;
			},
			handleEditLine(index) {
				this.displayLineForm.splice(index, 1, true);
			},
			handleEditLineFinished(index) {
				this.displayLineForm.splice(index, 1, false);
			}
		}
	}

</script>