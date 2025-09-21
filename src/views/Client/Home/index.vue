<script>
import axios from "axios";

// State
// const featuredList = ref([]); // dữ liệu tác phẩm nổi bật
// const searchQuery = ref(""); // nội dung tìm kiếm
// const loading = ref(false);
// const error = ref(null);

// Gọi API khi component load
// onMounted(async () => {
//   try {
//     loading.value = true;
//     const res = await getFeatured();
//     featuredList.value = res.data; // dữ liệu từ API
//   } catch (err) {
//     error.value = err.message;
//   } finally {
//     loading.value = false;
//   }
// });

// const getImageUrl = (url) => {
//   return url && url !== "" ? url : "/placeholder.png";
// };

// Lọc theo ô tìm kiếm
// const filteredFeatured = computed(() => {
//   if (!searchQuery.value) return featuredList.value;
//   return featuredList.value.filter((item) =>
//     item.title.toLowerCase().includes(searchQuery.value.toLowerCase())
//   );
// });

export default {
  data() {
    return {
      featuredList: [],
      searchQuery: "",
      loading: false,
      error: null,
      tags: ["Phong cảnh", "Chân dung", "Dân gian"],
      selectedTag: null,
      // Dữ liệu tĩnh cho phòng đấu giá hot
      hotAuctions: [
        {
          id: 1,
          image: "/src/assets/img/3.png",
          status: "LIVE",
          time: "12:35",
          bidders: 85,
          title: "Modern Asian Expressions",
          description: "Contemporary Asian artists redefining tradition",
          currentProduct: "7 of 10",
          highBid: "$12M",
          buttonText: "Join Auction",
          buttonClass: "btn-outline-success",
          badgeClass: "bg-danger",
        },
        {
          id: 2,
          image: "/src/assets/img/3.png",
          status: "STARTS IN 1H",
          time: "12:35",
          bidders: 85,
          title: "Classic European Art",
          description: "Masterpieces from the Renaissance era",
          currentProduct: "3 of 8",
          highBid: "$2.5M - $3.8M",
          buttonText: "View Catalog",
          buttonClass: "btn-success",
          badgeClass: "bg-warning text-dark",
        },
        {
          id: 3,
          image: "/src/assets/img/3.png",
          status: "LIVE",
          time: "12:35",
          bidders: 85,
          title: "Vietnamese Folk Art",
          description: "Traditional art from Vietnam",
          currentProduct: "5 of 12",
          highBid: "$5M",
          buttonText: "Join Auction",
          buttonClass: "btn-outline-success",
          badgeClass: "bg-danger",
        },
        {
          id: 4,
          image: "/src/assets/img/3.png",
          status: "STARTS IN 1H",
          time: "12:35",
          bidders: 85,
          title: "Abstract Modernism",
          description: "Exploring modern abstract forms",
          currentProduct: "2 of 6",
          highBid: "$2.5M - $3.8M",
          buttonText: "View Catalog",
          buttonClass: "btn-success",
          badgeClass: "bg-warning text-dark",
        },
      ],
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

  methods: {
    getImageUrl(url) {
      return url && url !== "" ? url : "/placeholder.png";
    },

    fetchFeatured() {
      this.loading = true;
      axios
        .get("http://localhost:8081/featured", {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("key_admin"),
          },
        })
        .then((res) => {
          this.featuredList = res.data;
        })
        .catch((err) => {
          this.error = err.message;
        })
        .finally(() => {
          this.loading = false;
        });
    },

    selectTag(tag) {
      this.selectedTag = this.selectedTag === tag ? null : tag;
    },
  },

  mounted() {
    this.fetchFeatured();
  },
};
</script>

<template>
  <div class="content container">
    <!-- ========== Thanh search + filter + tag ========== -->
    <div class="row section1 mb-4" style="margin-top: 50px">
      <!-- Search + filter -->
      <div class="col-12 col-md-8 d-flex" style="gap: 16px">
        <div class="search-bar flex-grow-1">
          <div class="position-relative search-bar-box">
            <input
              type="text"
              class="form-control search-control"
              placeholder="Type to search..."
            />
            <span class="position-absolute top-50 search-show translate-middle-y"
              ><i class="bx bx-search"></i
            ></span>
            <span class="position-absolute top-50 search-close translate-middle-y"
              ><i class="bx bx-x"></i
            ></span>
          </div>
        </div>
        <button
          class="btn btn-outline-secondary d-flex align-items-center justify-content-center"
          style="width: 36px; height: 36px"
        >
          <img src="/src/assets/img/loc.png" alt="filter" />
        </button>
      </div>

      <!-- Tag -->
      <div class="col-12 col-md-4 d-flex justify-content-end" style="gap: 12px">
        <button
          v-for="tag in tags"
          :key="tag"
          type="button"
          class="btn btn-light tag-btn"
          :class="{ active: selectedTag === tag }"
          @click="selectTag(tag)"
        >
          {{ tag }}
        </button>
      </div>
    </div>

    <!-- ========== Banner ========== -->
    <div class="row mb-4">
      <div class="col-12">
        <img
          src="/src/assets/img/3.png"
          alt="banner"
          class="img-fluid w-100 rounded"
          style="height: 300px"
        />
      </div>
    </div>

    <!-- ========== Tác phẩm nổi bật ========== -->
    <div class="row">
      <h5 class="fw-bold mb-3" style="color: #044a42">Tác phẩm nổi bật</h5>
      <div class="col-12 col-md-6 col-lg-4 mb-4" v-for="item in filteredFeatured" :key="item.id">
        <div class="card featured-card h-100 p-3 d-flex">
          <div class="row w-100 g-2 align-items-center">
            <div class="col-5 d-flex align-items-center">
              <img :src="getImageUrl(item.imageUrl)" alt="thumb" class="rounded thumb img-fluid" />
            </div>

            <div class="col-7 d-flex flex-column justify-content-start text-start">
              <p class="mb-1 fw-bold text-truncate" style="font-size: 16px; color: #044a42">
                {{ item.title }}
              </p>
              <p class="mb-2 text-truncate">
                {{ item.description }}
              </p>

              <button class="btn btn-outline-success mt-auto">Xem chi tiết</button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Danh sách buổi đấu giá  -->
    <div class="row">
      <h5 class="fw-bold mb-3" style="color: #044a42">Phòng đấu giá hot</h5>

      <!-- Card đấu giá -->
      <div class="col-12 col-md-6 col-lg-3 mb-4" v-for="auction in hotAuctions" :key="auction.id">
        <div class="card shadow-sm h-100 border-0">
          <!-- Ảnh + trạng thái -->
          <div class="position-relative">
            <img
              :src="auction.image"
              class="card-img-top rounded-top"
              alt="auction item"
              style="height: 160px; object-fit: cover"
            />
            <!--  trạng thái -->
            <span
              class="badge position-absolute top-0 start-0 m-2 px-2 py-1 d-flex align-items-center"
              :class="auction.badgeClass"
              style="font-size: 12px"
            >
              <span
                v-if="auction.status === 'LIVE'"
                class="d-inline-block rounded-circle bg-light me-2 circle-8-about"
              ></span>
              {{ auction.status }}
            </span>

            <!-- Thời gian -->
            <span class="badge position-absolute top-0 end-0 m-2 time" style="font-size: 12px">
              {{ auction.time }}
            </span>

            <!-- người đấu giá -->
            <span class="badge position-absolute bottom-0 end-0 m-2 amount"
              >{{ auction.bidders }} bidders</span
            >
          </div>

          <!-- Nội dung card -->
          <div class="card-body d-flex flex-column">
            <p class="fw-bold mb-1 text-title-home">
              {{ auction.title }}
            </p>
            <p class="mb-2 text-muted text-des-home">
              {{ auction.description }}
            </p>

            <!-- Dòng thông tin -->
            <div class="d-flex justify-content-between mb-1" style="font-size: 13px">
              <div class="d-flex flex-column">
                <span class="fw-bold">Current product</span>
                <span class="">{{ auction.currentProduct }}</span>
              </div>

              <div class="d-flex flex-column align-items-end">
                <span class="fw-bold">High Bid</span>
                <span class="">{{ auction.highBid }}</span>
              </div>
            </div>

            <!-- Nút -->
            <button
              class="btn btn-sm w-100 mt-auto"
              :class="auction.buttonClass"
              :style="
                auction.buttonClass === 'btn-outline-success'
                  ? 'background-color: #044a42; border-color: #044a42; color: white'
                  : 'border-color: #044a42; color: #044a42; background-color: #fff'
              "
            >
              {{ auction.buttonText }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.bx {
  font-family: "boxicons" !important;
  font-weight: normal;
  font-style: normal;
  font-variant: normal;
  line-height: inherit;
  display: inline-block;
  text-transform: none;
  speak: none;
  -webkit-font-smoothing: antialiased;
}
/*
.tag-btn {
  width: 120px;
  height: 36px;
  background-color: white;
  border: 1px solid #044a42;
  text-align: center;
  font-size: 13px;
}
.card {
  border-radius: 10px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25) !important;
}

.amount,
.time {
  background-color: #044a42;
}
.thumb {
  width: 140px;
  height: 100px;
  object-fit: cover;
  display: flex;
  align-self: center;
}

.desc {
  font-size: 13px;
  color: #555;
  overflow-wrap: break-word;
  word-break: break-word;
  white-space: normal;

  overflow: hidden;
  text-overflow: ellipsis;
}

.form-control:focus {
  box-shadow: 0 0 2 0.25rem rgba(4, 72, 64, 1) !important;
}
.circle-8-about {
  width: 8px;
  height: 8px;
}
.text-title-home {
  color: #044a42;
}
.text-des-home {
  font-size: 13px;
  color: #044a42;
} */
</style>
