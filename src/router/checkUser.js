import axios from "axios";

export default function (from, to, next) {
  axios
    .get("http://localhost:8081/getEmailAndUsernameFromToken", {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem("authToken")
      }
    })
    .then((res) => {
      if (res.data) {
        next();
        // Lưu thông tin user nếu cần
        localStorage.setItem("name_kh", res.data.username);
        localStorage.setItem("email_kh", res.data.email);
        localStorage.setItem("check_kh", res.data.status);
      } else {
        next("/login");
        this.$toast.error("Bạn cần đăng nhập trước!!!!");
      }
    })
    .catch((error) => {
      console.error("Auth check failed:", error);
      localStorage.removeItem("authToken");
      localStorage.removeItem("name_kh");
      localStorage.removeItem("email_kh");
      localStorage.removeItem("check_kh");
      next("/login");
    });
  // axios
  //   .get("http://127.0.0.1:8000/api/", {
  //     headers: {
  //       Authorization: 'Bearer ' + localStorage.getItem("")
  //     }
  //   })
  //   .then((res) => {
  //     if (res.data.status) {
  //       next();
  //       // localStorage.setItem("name_kh", res.data.name);
  //       // localStorage.setItem("email_kh", res.data.email);
  //       // localStorage.setItem("check_kh", res.data.status);
  //     } else {
  //       next("/client/dang-nhap");
  //       // this.$toast.error("Bạn cần đăng nhập trước!!!!");

  //     }
  //   });
}
