<template>
  <div class="container mt-3">
    <!-- ========== Thanh search + filter + tag ========== -->
    <div class="row mb-4">
      <!-- Search + filter -->
      <div class="col-lg-8 col-md-6 col-sm-12 d-flex gap-4">
        <div class="search-bar flex-grow-1">
          <div class="position-relative search-bar-box">
            <input type="text" class="form-control search-control ps-5" placeholder="Type to search..." />
            <span class="position-absolute top-50 search-show translate-middle-y"><i
                class="fa-solid fa-magnifying-glass px-3"></i></span>
            <span class="position-absolute top-50 search-close translate-middle-y">
              <!-- <i class="fa-solid fa-circle-xmark"></i> -->
            </span>
          </div>
        </div>
        <button class="btn btn-outline-success d-flex align-items-center justify-content-center">
          <i class="fa-solid fa-filter"></i>
        </button>
      </div>
      <!-- Tag -->
      <div class="col-lg-4 col-md-6 col-sm-12">
        <div class="row">
          <template v-for="tag in tags" :key="tag">
            <div class="col-lg-4 col-md-6 col-sm-4 d-flex align-items-center">
              <button type="button" class="btn btn-outline-success w-100 " :class="{ active: selectedTag === tag }"
                @click="selectTag(tag)">
                {{ tag }}
              </button>
            </div>
          </template>
        </div>
      </div>
    </div>
    <!-- ========== Carousel ========== -->
    <div class="row mb-4">
      <div class="col-12">
        <div id="carouselExampleIndicators" class="carousel slide">
          <div class="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active"
              aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
              aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
              aria-label="Slide 3"></button>
          </div>
          <div class="carousel-inner rounded-3 overflow-hidden">
            <div class="carousel-item active">
              <img src="https://i.pinimg.com/1200x/1b/08/af/1b08af4eab12bd921dc3541ccf6a10b1.jpg" class="d-block w-100"
                style="height: 350px;" alt="...">
            </div>
            <div class="carousel-item">
              <img src="https://i.pinimg.com/736x/0a/20/fc/0a20fcc7bfacc5a20151f9e791e6b0f8.jpg" class="d-block w-100"
                style="height: 350px;" alt="...">
            </div>
            <div class="carousel-item">
              <img src="https://i.pinimg.com/736x/00/a4/eb/00a4eb0eca9d3ac72ff6ca2e7421e825.jpg" class="d-block w-100"
                style="height: 350px;" alt="...">
            </div>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
        <!-- <img src="/src/assets/img/3.png" alt="banner" class="img-fluid w-100 rounded" style="height: 300px" /> -->
      </div>
    </div>
    <!-- Tiêu đề -->
    <h4 class="fw-bold text-success mb-3">Auction List</h4>



    <!-- Danh sách buổi đấu giá -->
    <div class="row">
      <template v-for="auction in AuctionList" :key="auction.id">
        <div class="col-lg-4 col-md-6 col-sm-12 d-flex">
          <div class="card mb-4">
            <div class="card-body">
              <div class="row mb-2">
                <div class="col-lg-12 d-flex justify-content-between  align-items-center">
                  <!-- <div class="p-3 text-start">#{{ auction.auctionRoomId }} - {{ auction.roomName }}</div> -->
                  <p class="fw-bold fs-6 text-success m-0"># {{ auction.id }}</p>
                  <div class="d-flex align-items-center gap-3">
                    <span class="text-success fw-bold">12:34</span>
                    <!-- <div class="col-5 col-md-4 text-danger fs-5">
                      <i class="bi bi-exclamation-circle"></i>
                    </div> -->
                    <div class="">
                      <div v-if="auction.status === 1" class="col-5 col-md-4"><i
                          class="bi bi-bullseye text-success fs-5"></i></div>
                      <div v-if="auction.status === 2" class="col-5 col-md-4"><i
                          class="bi bi-bullseye text-warning fs-5"></i></div>
                    </div>
                    <i class="fa-solid fa-ellipsis-vertical"></i>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-lg-5 col-md-12 col-sm-12 mb-3 mb-lg-0 d-flex flex-column">
                  <!--<img :src="auction.imageUrl" alt="..." class="card-img" style="height: 200px; object-fit: cover;"> -->
                  <img src="https://i.pinimg.com/1200x/1b/08/af/1b08af4eab12bd921dc3541ccf6a10b1.jpg" alt="..."
                    class="img-thumbnail w-100 h-100">
                  <!-- <div class="mt-auto d-flex justify-content-center">
                    <div class="d-flex align-items-center gap-2">
                      <i class="fa-solid fa-eye"></i>
                      <p class="m-0">1000</p>
                    </div>
                  </div> -->
                </div>
                <div class="col-lg-7 col-md-12 col-sm-12 d-flex flex-column gap-2 ps-lg-0">
                  <div class="d-flex justify-content-between align-items-center">
                    <p class="fw-bold fs-5 text-success m-0">{{ auction.roomName }}</p>

                  </div>
                  <div class="d-flex justify-content-between align-items-center">
                    <p class="m-0">Type</p>
                    <p class="m-0">{{ auction.type }}</p>
                  </div>
                  <div class="d-flex justify-content-between align-items-center">
                    <p class="m-0">
                      <!-- <i class="bi bi-coin text-warning"></i> -->
                      Started price
                    </p>
                    <p class="m-0">{{ auction.startingPrice }}</p>
                  </div>
                  <div class="d-flex justify-content-between align-items-center">
                    <p class="m-0">
                      <!-- <i class="bi bi-coin text-success"></i> -->
                      Current price
                    </p>
                    <p class="m-0">{{ auction.currentPrice }}</p>
                  </div>
                  <div class="d-flex justify-content-between align-items-center">
                    <p class="m-0">
                      Viewers
                    </p>
                    <p class="m-0">{{ auction.memberIds.length }}</p>
                  </div>

                  <!-- <p class="m-0 text-danger"><i class="bi bi-eye-fill text-dark"></i> 1000 <span
                      class="text-black fs-6 text">viewers</span></p> -->
                  <button v-if="auction.status === 1" type="button" class="btn btn-success mt-auto w-100">Watch
                    live</button>
                  <button v-if="auction.status === 2" type="button"
                    class="btn btn-outline-warning mt-auto w-100 ">Starting soon</button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </template>

    </div>

  </div>

</template>
<script>

import axios from "axios";
export default {
  data() {
    return {
      AuctionList: {},
      tags: ["Landscape", "Portrait", "Folk"],
    };
  },

  computed: {
    // lọc theo ô tìm kiếm và tag
    filteredFeatured() {
      let list = this.featuredList;
      if (this.selectedTag) {
        list = list.filter((item) => item.tag === this.selectedTag);
      }
      if (this.searchQuery) {
        list = list.filter((item) =>
          item.title.toLowerCase().includes(this.searchQuery.toLowerCase())
        );
      }
      return list;
    },
  },

  mounted() {
    this.getAuction();
  },

  methods: {
    getAuction() {
      axios
        .get("http://localhost:8081/api/auctionroom/allAuctionRoom")
        .then((res) => {
          this.AuctionList = res.data;
          console.log(this.AuctionList);

        })
        .catch((err) => {
          this.error = err.message;
        })

    },
  }
};

</script>
<style></style>
