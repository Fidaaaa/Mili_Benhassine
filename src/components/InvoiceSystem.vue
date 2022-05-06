<template>
	<p @click="newQuote(2)">Nouveau devis</p>
	<h2> Liste des Factures </h2>
	    <table @click="handleClickInvoice(store.listInvoice.firstInvoice.number)">
        <tr v-for="invoice in store.listInvoice">
            <th>
                Numéro 
                <p>
                    {{ store.listInvoice.firstInvoice.number }}
                </p>
            </th>
            <th>
				<br>
				<br>
                Client
                <p>
                    Prénom :  {{ store.listInvoice.firstInvoice.client.firstname }}
                    <br>
                    Nom :  {{ store.listInvoice.firstInvoice.client.lastname }}
                    <br>
                    Numéro : {{ store.listInvoice.firstInvoice.client.phoneNumber }}              
                </p>
            </th>
            <th>
                Date
                <p>
                    {{ store.listInvoice.firstInvoice.dueDate }}
                </p>
            </th>
            <th>
                Montant
                <p>
                    {{ store.totalPrice}}
                </p>
            </th>
        </tr>
    </table>
</template>

<script setup lang="ts">

	import { useInvoiceStore } from "@/stores/invoice";

	const store = useInvoiceStore();

</script>

<script lang="ts">
	import InvoiceForm from "./InvoiceForm.vue";

    export default {
		components: {
			"InvoiceForm": InvoiceForm,
		},

		methods:{
            handleClickInvoice(number) {
                this.$router.push("/invoice/" + number);
            },

			newQuote(number) {
				this.$router.push("/quote/" + number);
			}
        }

    }
</script>