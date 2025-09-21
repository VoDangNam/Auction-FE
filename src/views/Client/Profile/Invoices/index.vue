<script>
import axios from "axios";

export default {
  name: "ClientInvoices",
  data() {
    return {
      invoices: [],
      loading: false,
      error: null,
    };
  },

  methods: {
    fetchInvoices() {
      axios
        .get("http://localhost:8081/getListInvoice", {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("key_admin"),
          },
        })
        .then((res) => {
          this.invoices = res.data;
        })
        .catch((err) => {
          this.error = err.message;
        });
    },

    // Thêm hóa đơn
    addInvoice() {
      axios
        .post("http://localhost:8081/addInvoice", this.newInvoice, {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("key_admin"),
          },
        })
        .then((res) => {
          this.invoices.unshift(res.data);
          this.newInvoice = {
            auctionRoom: "",
            amount: 0,
            paymentStatus: "Pending",
            createdAt: new Date().toISOString().slice(0, 10),
          };
        })
        .catch((err) => {
          this.error = err.message;
        });
    },

    // Lấy hóa đơn theo userId
    fetchInvoicesByUser() {
      axios
        .get("http://localhost:8081/invoice/${this.userId}", {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("key_admin"),
          },
        })
        .then((res) => {
          this.invoices = res.data;
        })
        .catch((err) => {
          this.error = err.message;
        });
    },
  },

  mounted() {
    this.fetchInvoices();
    this.fetchInvoicesByUser();
  },
};
</script>

<template>
  <div class="container-xl py-3">
    <div v-if="loading" class="text-center">Loading...</div>
    <div v-else-if="error" class="text-danger">{{ error }}</div>
    <div v-else class="row">
      <div v-for="item in invoices" :key="item.id" class="col-12 col-md-6 d-flex">
        <div class="card border-0 shadow-sm m-3 w-100">
          <!-- Header -->
          <div class="row g-0 align-items-center p-3 card-items">
            <li class="list-group-item border-0 d-flex justify-content-between">
              <p class="fs-6 fw-bold">ID Phòng: {{ item.auctionRoom }}</p>
            </li>
          </div>
          <hr class="my-2" />

          <!-- Body -->
          <ul class="list-group list-group-flush small">
            <li class="list-group-item border-0 d-flex justify-content-between fw-bold">
              <p class="total">Total Payment</p>
              <p class="priceTotal">{{ item.amount }}</p>
            </li>

            <li class="list-group-item border-0 d-flex justify-content-between">
              <p>Payment Status</p>
              <p
                class="px-2 py-1 rounded pay-status-inv"
                :class="item.status === 'Paid' ? 'bg-success text-white' : 'bg-warning text-dark'"
              >
                {{ item.paymentStatus }}
              </p>
            </li>

            <li class="list-group-item border-0 d-flex justify-content-between">
              <p>Payment Time</p>
              <p>{{ item.createdAt }}</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* .priceTotal,
.total {
  color: #044a42;
  font-weight: bold;
  font-size: 16px;
}
.card {
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25) !important;
}
.pay-status-inv {
  font-size: 12px;
} */
</style>
