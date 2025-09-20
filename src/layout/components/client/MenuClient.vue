<template>
  <div class="container">
    <nav class="navbar navbar-expand-lg bg-white shadow-sm rounded-3 px-3 my-3">
      <router-link to="/" class="navbar-brand d-flex align-items-center gap-3">
        <img src="../../../assets/img/Logo_AA.png" class="imgLogo" alt="">
        <span class="fw-semibold"><span class="text-success-bright fw-semibold">Art</span>Auction</span>
      </router-link>

      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mx-auto gap-lg-4">
          <li class="nav-item">
            <router-link v-if="user" to="/client/home" class="nav-link"
              :class="{ 'active': $route.path === '/client/home' }" aria-current="page">
              Home
            </router-link>
            <router-link v-else to="/" class="nav-link" :class="{ 'active': $route.path === '/' }" aria-current="page">
              Home
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/client/auction" class="nav-link" :class="{ 'active': $route.path === '/client/auction' }">
              Auction
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/about-us" class="nav-link" :class="{ 'active': $route.path === '/about-us' }">
              About us
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/help" class="nav-link" :class="{ 'active': $route.path === '/help' }">
              Help
            </router-link>
          </li>
        </ul>
         <div class="d-flex align-items-center gap-5">
           <!-- Loading state -->
           <div v-if="isLoading" class="d-flex align-items-center gap-2">
             <div class="spinner-border spinner-border-sm text-success" role="status">
               <span class="visually-hidden">Loading...</span>
             </div>
             <span class="text-muted">Đang tải...</span>
           </div>

           <!-- User logged in -->
           <template v-else-if="user">
             <div class="">
               <i class="fa-regular fa-bell fa-xl"></i>
             </div>
             <div class="d-flex gap-2 action-buttons">
              <div class="dropdown">
                <div class="dropdown-toggle dropdown-toggle-no-caret" type="button" data-bs-toggle="dropdown"
                  aria-expanded="false">
                  <div class="d-flex gap-3 align-items-center">
                    <img src="../../../assets/img/user_test.jpg" class="img-avatar" alt="">

                  </div>
                </div>
                <ul class="dropdown-menu dropdown-menu-end mt-3 p-3 border-0 shadow overflow-hidden">
                  <li>
                    <div class="card bg-accent shadow-sm mb-2">
                      <div class="card-body p-2 d-flex align-items-center gap-3">
                        <img src="../../../assets/img/user_test.jpg" class="img-avatar" alt="">
                        <div class="d-flex align-content-center flex-column">
                          <p class="fw-bold text-success mb-1">
                            {{ user.email }}
                          </p>
                          <p class="text-success m-0">User</p>
                        </div>

                      </div>
                    </div>
                  </li>
                  <li>
                    <router-link to="/client/profile" class="dropdown-item d-flex align-items-center gap-3 py-3">
                      <i class="bi bi-person fa-xl me-2"></i>
                      <span>Profile</span>
                    </router-link>
                  </li>
                  <li>
                    <router-link to="/client/profile" class="dropdown-item d-flex align-items-center gap-3 py-3">
                      <i class="bi bi-credit-card fa-xl me-2"></i>
                      <span>Payment</span>
                    </router-link>
                  </li>
                  <li>
                    <router-link to="/client/profile" class="dropdown-item d-flex align-items-center gap-3 py-3">
                      <i class="bi bi-gear fa-xl me-2"></i>
                      <span>Setting</span>
                    </router-link>
                  </li>
                  <li>
                    <a href="#" class="dropdown-item d-flex align-items-center gap-3 py-3 text-danger" @click="logout">
                      <i class="bi bi-box-arrow-right fa-xl me-2"></i>
                      <span>Log out</span>
                    </a>
                  </li>
                </ul>

               </div>
             </div>
           </template>

           <!-- User not logged in -->
           <div v-else class="d-flex gap-2">
             <router-link to="/register">
               <button class="btn btn-outline-success">Đăng ký</button>
             </router-link>
             <router-link to="/login">
               <button class="btn btn-success">Đăng nhập</button>
             </router-link>
           </div>
         </div>

      </div>
    </nav>
  </div>
</template>
<script>
import axios from "axios";

export default {
  data() {
    return {
      user: null,
      isLoading: true, // Thêm loading state
    }
  },
  mounted() {
    this.kiemTraDangNhap();
  },
  methods: {
    kiemTraDangNhap() {
      const token = localStorage.getItem("authToken");
      console.log(token);

      if (!token) {
        this.user = null;
        this.isLoading = false; // Kết thúc loading
        return;
      }

      axios
        .get("http://localhost:8081/checkUser", {
          headers: {
            Authorization: 'Bearer ' + token
          }
        })
        .then((res) => {
          if (res.data) {
            this.user = res.data;
            // Lưu thông tin user nếu cần
            localStorage.setItem("name_kh", res.data.username);
            localStorage.setItem("email_kh", res.data.email);
            localStorage.setItem("check_kh", "true");
            // console.log('User logged in:', this.user);
          } else {
            this.user = null;
            localStorage.removeItem("authToken");
            localStorage.removeItem("name_kh");
            localStorage.removeItem("email_kh");
            localStorage.removeItem("check_kh");
          }
        })
        .catch((error) => {
          console.log('Check login error:', error);
          this.user = null;
          localStorage.removeItem("authToken");
          localStorage.removeItem("name_kh");
          localStorage.removeItem("email_kh");
          localStorage.removeItem("check_kh");
        })
        .finally(() => {
          this.isLoading = false; // Kết thúc loading
        });
    },
    logout() {
    },
  },
};
</script>
<style scoped></style>
