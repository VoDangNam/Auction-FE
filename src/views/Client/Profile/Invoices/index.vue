<template>
  <div class="row mb-3">
    <div class="col-lg-12">
      <div class="card">
        <div class="card-body">
          <div class="row">
            <div class="col-lg-12 col-md-6 col-sm-12 d-flex align-items-center">
              <h4 class="text-success fw-bold m-0">Artwork Management</h4>
            </div>
          </div>
          <hr class="text-success ">
          <div class="row d-flex align-items-center justify-content-between mt-3 ">
            <div class="col-lg-6 col-md-12 col-sm-12 d-flex align-items-center gap-3 mb-lg-0 mb-3">
              <input type="date" class="form-control">
              <p class="fw-bold">_</p>
              <input type="date" class="form-control">
            </div>
            <div class="col-lg-5 col-md-12 col-sm-12">
              <div class="input-group">
                <input type="text" class="form-control border border-2 border-success " placeholder="Search....">
                <button class="btn btn-success input-group-text"><i class="fa-solid fa-magnifying-glass"></i></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="">
    <div v-if="loading" class="text-center">Loading...</div>
    <!-- <div v-else-if="error" class="text-danger">{{ error }}</div> -->
    <div v-else class="row">
      <div v-for="item in invoices" :key="item.id" class="col-12 col-lg-6 col-md-6 d-flex">
        <div class="card w-100 overflow-hidden mb-4">
          <div class="card-body d-flex flex-column">
            <div class="row gap-2">
              <div class="col-12 d-flex align-items-center justify-content-between">
                <p class="fs-6  m-0">Invoice Code </p>
                <p class="m-0 fw-bold">{{ item.id }}</p>
              </div>
              <div class="col-12 d-flex align-items-center justify-content-between">
                <p class="fs-6  m-0">Session Code</p>
                <p class="m-0 fw-bold">{{ item.auctionRoomId }}</p>
              </div>
            </div>
            <hr>
            <div class="row ">
              <div class="col-12 d-flex align-items-center justify-content-between mb-2">
                <p class="m-0">Payment Time</p>
                <p class="m-0">{{ item.createdAt }}</p>
              </div>
              <div class="col-12 d-flex align-items-center justify-content-between mb-2">
                <p class="fs-6  m-0">Artwork Code</p>
                <p class=" m-0">{{ item.artworkId }}</p>
              </div>
              <div class="col-5">
                <img :src="item.artworkAvt" alt="" class="img-thumbnail img-invoice w-100">
              </div>
              <div class="col-7">

                <p class="m-0 fw-bold">{{ item.artworkTitle }}</p>
              </div>
            </div>
            <hr>
            <div class="row mt-auto">
              <div class="col-12 d-flex align-items-center justify-content-between mb-3">
                <p class="m-0 fw-bold text-success">Total </p>
                <p class="m-0 fw-bold">{{ item.totalAmount }}</p>
              </div>
              <div class="col-12">
                <div v-if="item.paymentStatus === 1" class="d-flex gap-2">
                  <button class="btn btn-outline-success w-100">View Details</button>
                  <button class="btn btn-success w-100">Paid</button>
                </div>
                <div v-else class="d-flex gap-2">
                  <button class="btn btn-outline-danger w-100">View Details</button>
                  <button class="btn btn-danger w-100">Unpaid</button>
                </div>
              </div>
            </div>

          </div>
        </div>
        <!-- <div class="card border-0 shadow-sm m-3 w-100">
          <div class="row g-0 align-items-center p-3 card-items">
            <li class="list-group-item border-0 d-flex justify-content-between">
              <p class="fs-6 fw-bold">ID Phòng: {{ item.auctionRoom }}</p>
              <p class="fs-6 fw-bold">ID Phòng: {{ item.auctionRoomId }}</p>
            </li>
          </div>
          <hr class="my-2" />
          <ul class="list-group list-group-flush small">
            <li class="list-group-item border-0 d-flex justify-content-between fw-bold">
              <p class="total">Total Payment</p>
              <p class="priceTotal">{{ item.totalAmount }}</p>
            </li>

            <li class="list-group-item border-0 d-flex justify-content-between">
              <p>Payment Status</p>
              <p class="px-2 py-1 rounded pay-status-inv"
                :class="item.status === 'Paid' ? 'bg-success text-white' : 'bg-warning text-dark'">
                {{ item.paymentStatus }}
              </p>
            </li>

            <li class="list-group-item border-0 d-flex justify-content-between">
              <p>Payment Time</p>
              <p>{{ item.createdAt }}</p>
            </li>
          </ul>
        </div> -->
      </div>
    </div>
  </div>
</template>

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
        .get("http://localhost:8081/api/invoice/my-invoice", {
          headers: {
            Authorization: 'Bearer ' + localStorage.getItem("token")
          }
        })
        .then((res) => {
          this.invoices = res.data;
          // console.log(list);
          console.log("data loaded invoice", this.invoices);
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


  },

  mounted() {
    this.fetchInvoices();
  },
};
</script>



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
