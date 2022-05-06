import { defineStore } from 'pinia'

export const useInvoiceStore = defineStore({
  
  id: 'invoice',
  
  state: () => (
    {
        listInvoice: {
            firstInvoice: {
                number: 0,

                client: {
                    firstname: "Fida",
                    lastname: "Samy",
                    phoneNumber: "12345678",
                },

               
                lines: [
                    {
                        designation: "fruit",
                        price: 10,
                        quantity: 5,
                    }
                ],

                tva: 0,

                dueDate: new Date(),
            }
        }, 
    }),

  getters: {

    totalPrice() {
        let total = 0;
        for (let line of this.listInvoice.firstInvoice.lines) {
            total += Number(line.quantity) * Number(line.price);
        }
        return total;
    },

    clientFullName() {
        return `${this.listInvoice.firstInvoice.client.firstname} ${this.listInvoice.firstInvoice.client.lastname} (${this.listInvoice.firstInvoice.client.phoneNumber})`;
    }

  },
  
  actions: {

    addLine() {
        this.listInvoice.firstInvoice.lines.push({
            designation: "",
            price: 0,
            quantity: 0,
        });
    },

    hideClientForm(newClient) {
        this.listInvoice.firstInvoice.client.firstname = newClient.firstname;
        this.listInvoice.firstInvoice.client.lastname = newClient.lastname;
        this.listInvoice.firstInvoice.client.phoneNumber = newClient.phoneNumber;
    }

  }

})