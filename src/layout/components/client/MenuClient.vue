<template>
  <div class="container">
    <nav class="navbar navbar-expand-lg bg-white shadow-sm rounded-3 px-3 my-3">
      <router-link to="/" class="navbar-brand d-flex align-items-center gap-3">
        <img src="../../../assets/img/Logo_AA.png" class="imgLogo" alt="" />
        <span class="fw-semibold"
          ><span class="text-success-bright fw-semibold">Art</span>Auction</span
        >
      </router-link>

      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mx-auto gap-lg-4">
          <li class="nav-item">
            <router-link
              to="/"
              class="nav-link"
              :class="{ active: $route.path === '/' }"
              aria-current="page"
            >
              Home
            </router-link>
          </li>
          <li class="nav-item">
            <router-link
              to="/client/auction"
              class="nav-link"
              :class="{ active: $route.path === '/client/auction' }"
            >
              Auction
            </router-link>
          </li>
          <li class="nav-item">
            <router-link
              to="/about-us"
              class="nav-link"
              :class="{ active: $route.path === '/about-us' }"
            >
              About us
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/help" class="nav-link" :class="{ active: $route.path === '/help' }">
              Help
            </router-link>
          </li>
        </ul>

        <!-- notify -->
        <div class="notification-container">
          <button
            class="notification-btn"
            @click="toggleNotification"
            :class="{ active: isNotificationOpen }"
          >
            <img src="/src/assets/img/icon-bell.png" class="icon-bell" />
          </button>

          <!-- Notification Dropdown -->
          <div v-if="isNotificationOpen" class="notification-dropdown">
            <div class="notification-list">
              <div
                v-for="notification in notifications"
                :key="notification.id"
                class="notification-item"
                :class="{ unread: !notification.isRead }"
                @click="markAsRead(notification.id)"
              >
                <div class="notification-icon">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 12C14.21 12 16 10.21 16 8C16 5.79 14.21 4 12 4C9.79 4 8 5.79 8 8C8 10.21 9.79 12 12 12ZM12 14C9.33 14 4 15.34 4 18V20H20V18C20 15.34 14.67 14 12 14Z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
                <div class="notification-content">
                  <p class="notification-message">
                    {{ notification.message }}
                  </p>
                  <div class="d-flex flex-row gap-4">
                    <p class="notification-time">{{ notification.time }}</p>
                    <p class="notification-date">{{ notification.date }}</p>
                  </div>
                </div>
                <div class="notification-menu">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 8C13.1 8 14 7.1 14 6C14 4.9 13.1 4 12 4C10.9 4 10 4.9 10 6C10 7.1 10.9 8 12 8ZM12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10ZM12 16C10.9 16 10 16.9 10 18C10 19.1 10.9 20 12 20C13.1 20 14 19.1 14 18C14 16.9 13.1 16 12 16Z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="d-flex gap-2">
          <router-link to="/register">
            <button class="btn btn-outline-success">Đăng ký</button>
          </router-link>
          <router-link to="/login">
            <button class="btn btn-success">Đăng nhập</button>
          </router-link>
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
      isNotificationOpen: false,
      notifications: [],
      loading: false,
      error: null,
      userId: localStorage.getItem("userId"),
    };
  },
  methods: {
    toggleNotification() {
      this.isNotificationOpen = !this.isNotificationOpen;
      if (this.isNotificationOpen) {
        this.fetchNotifications();
      }
    },
    fetchNotificationsbyId() {
      axios
        .get(
          "http://localhost:8081/api/notification/68c9154508a3858c703ad81f",
          // "http://localhost:8081/notifications/${this.userId}"
          {
            headers: {
              Authorization: "Bearer " + localStorage.getItem("key_admin"),
            },
          }
        )
        .then((res) => {
          // Nếu API trả về là mảng JSON trực tiếp
          this.notifications = res.data.map((n) => ({
            id: n.notificationId,
            message: n.notificationContent,
            isRead: n.notificationStatus === "READ",
            time: new Date(n.notificationTime).toLocaleTimeString("vi-VN"),
            date: new Date(n.notificationTime).toLocaleDateString("vi-VN"),
          }));
        })
        .catch((err) => {
          this.error = err.message;
        });
    },
    markAsRead(notificationId) {
      const notification = this.notifications.find((n) => n.id === notificationId);
      if (notification && !notification.isRead) {
        notification.isRead = true;
      }
    },

    //Thêm thông báo
    addNotification(newNotification) {
      axios
        .post("http://localhost:8081/api/notification/addNotification", newNotification, {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("key_admin"),
          },
        })
        .then((res) => {
          this.notifications.unshift({
            id: res.data.notificationId,
            message: res.data.notificationContent,
            isRead: res.data.notificationStatus === "READ",
            time: new Date(res.data.notificationTime).toLocaleTimeString("vi-VN"),
            date: new Date(res.data.notificationTime).toLocaleDateString("vi-VN"),
          });
        })
        .catch((err) => {
          this.error = err.message;
        });
    },
  },
  mounted() {
    this.fetchNotificationsbyId();
  },
};
</script>
<style scoped>
.icon-bell {
  width: 24px;
  height: 24px;
}
.notification-container {
  position: relative;
}

.notification-btn {
  background: none;
  border: none;
  color: #044a42;
  cursor: pointer;
  padding: 8px;
  border-radius: 50%;
  transition: background-color 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;
}

.notification-btn:hover {
  background-color: rgba(4, 74, 66, 0.1);
}

.notification-btn.active {
  background-color: rgba(4, 74, 66, 0.2);
}

.notification-dropdown {
  position: absolute;
  top: 100%;
  right: 0;
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
  min-width: 350px;
  max-width: 400px;
  z-index: 1000;
  margin-top: 8px;
  border: 2px solid #044a42;
  margin-top: 20px;
}

.notification-dropdown::before {
  content: "";
  position: absolute;
  top: -8px;
  right: 20px;
  width: 0;
  height: 0;
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  border-bottom: 10px solid white;
}

.notification-list {
  max-height: 400px;
  border-radius: 10px;
  overflow-y: auto;
  -ms-overflow-style: none;
  scrollbar-width: none;
}

.notification-item {
  display: flex;
  align-items: flex-start;
  padding: 12px 16px;
  border-bottom: 1px solid #f0f0f0;
  cursor: pointer;
  transition: background-color 0.2s;
  position: relative;
}

.notification-item:last-child {
  border-bottom: none;
}

.notification-item:hover {
  background-color: #f8f9fa;
}

.notification-item.unread {
  background-color: #7cebde;
}

.notification-icon {
  width: 40px;
  height: 40px;
  background-color: #f0f0f0;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 12px;
  flex-shrink: 0;
  color: #666;
}

.notification-content {
  flex: 1;
  min-width: 0;
}

.notification-message {
  font-size: 14px;
  color: #333;
  margin: 0 0 4px 0;
  line-height: 1.4;
  word-wrap: break-word;
}

.notification-time,
.notification-date {
  font-size: 12px;
  color: #666;
  margin: 0;
}

.notification-menu {
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #999;
  flex-shrink: 0;
  margin-left: 8px;
}
</style>
