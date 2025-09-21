<script>
export default {
  name: "HomeIndex",
};
</script>

<script setup></script>

<template>
  <!-- Section 1 -->
  <section class="section1 container-xl mt-5 content_sec w-100">
    <div class="row container">
      <div class="col-md-6 d-flex flex-column justify-content-center">
        <div class="d-flex flex-column gap-5 left_section1">
          <div class="text">
            <h4
              class="mb-4 fs-4 fw-bold d-flex flex-column justify-content-start text-success-custom"
            >
              Discover Extraordinary Art at Auction
            </h4>
            <p class="mb-4 fs-6 p-home">
              Discover a world of exquisite art pieces and unique collectibles at ArtAuction.
              Whether you're an avid collector or a first-time buyer, our platform offers a seamless
              and exciting auction experience.
            </p>
          </div>
          <div class="button d-flex gap-4">
            <button class="btn btn-success btn-lg" type="button">Explore Now</button>
            <button class="btn btn-light btn-lg" type="button">See details</button>
          </div>
        </div>
      </div>
      <div class="picture col-md-6 container">
        <div class="big-picture">
          <img
            src="/src/assets/img/1.png"
            alt="Art Auction"
            class="img-fluid"
            style="width: 250px; height: auto"
          />
        </div>
        <div class="small-picture" style="display: flex; flex-direction: column; gap: 20px">
          <img
            src="/src/assets/img/2.png"
            alt="Art Auction"
            class="img-fluid"
            style="width: 180px; height: auto; display: flex; justify-self: flex-start"
          />
          <img
            src="/src/assets/img/3.png"
            alt="Art Auction"
            class="img-fluid"
            style="width: 180px; height: auto; display: flex; margin-left: 100px"
          />
        </div>
      </div>
    </div>
  </section>

  <!-- Section 2 -->
  <section class="section2 d-flex justify-content-center align-items-center w-100">
    <div class="text text-center">
      <h4 class="text-white fs-4 fw-bold text-success-custom">Where Art Meets Passion</h4>
      <p class="text-white p-home">
        Explore a colorful treasure trove of creative work and open up investment opportunities in
        one-of-a-kind masterpieces.
      </p>
    </div>
  </section>

  <!-- Section 3 -->
  <section class="section3">
    <div class="container-xl">
      <div class="top container-xl">
        <div class="row d-flex align-items-center content_sec gap-140">
          <div class="left_section3 d-flex col-12 col-md-6 mb-4 mb-md-0">
            <img
              src="/src/assets/img/4.png"
              alt="Art Auction"
              class="img-fluid img border border-2 border-success p-3 w-400 h-350"
            />
          </div>

          <div class="text col-12 col-md-6">
            <h4 class="fs-4 fw-bold text-success-custom">Discover & Own Great Works of Art</h4>
            <p class="p-home">
              Join a global community of collectors in bidding on unique, museum-worthy works of
              art.
            </p>
            <p class="section3-description">
              Open up the opportunity to own and invest in timeless masterpieces.
            </p>
            <button class="btn btn-green section3-btn">See details</button>
          </div>
        </div>
      </div>

      <div class="bottom mt-5">
        <div class="text mx-auto text-center">
          <h4 class="fs-4 fw-bold text-success-custom">Bringing Art to You</h4>
          <p class="p-home">Participate in online auctions, transparent and secure.</p>
        </div>

        <!-- Card container -->
        <div class="row g-4 mt-4 justify-content-between">
          <div class="col-12 col-md-4 d-flex justify-content-center">
            <div
              class="card text-center p-3 res-sec3 h-100 rounded-4 card-intro"
              style="width: 100%; max-width: 350px; min-height: 250px"
            >
              <img src="/src/assets/img/Law.png" class="mx-auto p-3 w-100px h-100px" alt="..." />
              <div class="card-body">
                <h4 class="fs-4 fw-bold text-success-custom">Easy Participation</h4>
                <p class="card-text">Quick registration, join the auction with just a few steps.</p>
              </div>
            </div>
          </div>

          <div class="col-12 col-md-4 d-flex justify-content-center">
            <div
              class="card text-center p-3 res-sec3 h-100 rounded-4 card-home"
              style="width: 100%; max-width: 350px; min-height: 250px"
            >
              <img src="/src/assets/img/Lock.png" class="mx-auto p-3 w-100px h-100px" alt="..." />
              <div class="card-body">
                <h4 class="fs-4 fw-bold text-success-custom">Transparent and Safe</h4>
                <p class="card-text">
                  The entire auction process is guaranteed to be clear, fair and confidential.
                </p>
              </div>
            </div>
          </div>

          <div class="col-12 col-md-4 d-flex justify-content-center">
            <div
              class="card text-center p-3 res-sec3 h-100 rounded-4 card-home"
              style="width: 100%; max-width: 350px; min-height: 250px"
            >
              <img
                src="/src/assets/img/palette-solid-full.svg"
                class="mx-auto p-3 w-100px h-100px"
                alt="..."
              />
              <div class="card-body">
                <h4 class="fs-4 fw-bold text-success-custom">Unique Masterpiece</h4>
                <p class="card-text">Opportunity to own works of art with timeless value.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Section 4 -->
  <section
    class="section4 d-flex justify-content-center align-items-center position-relative overflow-hidden"
  >
    <div class="row">
      <div class="col col-md-6">
        <img
          src="/src/assets/img/flower.png"
          alt="Flower"
          class="img-fluid position-absolute translate-middle-x custom-abs-intro"
        />
      </div>
      <div class="col col-md-6">
        <div class="text text-center mt-5 section4-text">
          <h4 class="text-white fs-4 fw-bold text-success-custom text-start">Breath of Time</h4>
          <p class="text-white text-start p-home">
            The work recreates a fragile moment with magical colors, where light and dreaminess
            blend, evoking deep emotions in the viewer.
          </p>
        </div>
      </div>
    </div>
  </section>

  <!-- Section 5 -->
  <section class="section5 container-xl mt-5 content_sec mb-5 w-100">
    <div class="row container">
      <div class="col-md-6 d-flex flex-column justify-content-center">
        <div class="text_left d-flex flex-column gap-25">
          <h4 class="fs-4 fw-bold text-success-custom">Where Talents Meet</h4>
          <p class="p-home">
            Connecting creative masters and promising young artists, bringing a colorful art space
            for collectors to explore.
          </p>
          <button class="btn btn-green">See details</button>
        </div>
      </div>
      <div class="col-md-6 container d-flex justify-content-end">
        <div class="card_right d-flex gap-3">
          <div class="card card-custom d-flex flex-column align-items-center flex-fill">
            <img src="/src/assets/img/3.png" class="card-img-top card-img-custom" alt="..." />
            <div class="card-body">
              <p class="card-text p-home">Jinnn</p>
            </div>
          </div>
          <div class="card card-custom d-flex flex-column align-items-center flex-fill">
            <img src="/src/assets/img/3.png" class="card-img-top card-img-custom" alt="..." />
            <div class="card-body">
              <p class="card-text p-home">Jinnn</p>
            </div>
          </div>

          <div class="card card-custom d-flex flex-column align-items-center flex-fill">
            <img src="/src/assets/img/3.png" class="card-img-top card-img-custom" alt="..." />
            <div class="card-body">
              <p class="card-text p-home">Jinnn</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.card_right .card-intro {
  width: 18rem;
  width: 150px !important;
  height: 170px !important;
}
.text {
  width: 550px;
  color: #044a42;
}
.w-400 {
  width: 400px;
}
.h-350 {
  height: 350px;
}
.picture {
  display: flex;
  gap: 20px;
  margin-top: 30px;
  justify-content: flex-end;
  align-items: center;
}
.btn {
  width: 150px !important;
  height: 30px !important;
  font-size: 10px !important;
  font-weight: bold !important;
  border-radius: 5px !important;
  border: 1px solid #044a42 !important;
}

.btn-success {
  background-color: #044a42 !important;
  color: white !important;
}

.picture {
  gap: 20px;
  margin-top: 30px;
}
.text-success-custom {
  color: #044a42;
}
.section2 {
  height: 150px;
  background-color: #044a42;
  margin-top: 50px;
  box-shadow: inset 0px 10px 4px rgba(0, 0, 0, 0.25), inset 0px -10px 4px rgba(0, 0, 0, 0.25);
}

.p-home {
  color: #044a42;
}
.w-100px {
  width: 100px;
}
.h-100px {
  height: 100px;
}

.section3 {
  margin-top: 50px;
}

.card {
  max-width: 350px;
}

.section4 {
  min-height: 237px;
  background-color: #044a42;
  margin-top: 50px;
  box-shadow: inset 0px 10px 4px rgba(0, 0, 0, 0.25), inset 0px -10px 4px rgba(0, 0, 0, 0.25);
  position: relative;
  overflow: hidden;
}

/* Ảnh nền ban đầu */
.custom-abs-intro {
  top: -110px;
  left: 187px;
  width: 1000px;
  height: 1000px;
  transform: translateX(-39%);
}
.w-180 {
  width: 180px;
}
.card-img-top {
  width: 130px !important;
  height: 120px !important;
  margin-bottom: -10px !important;
}

@media (max-width: 992px) {
  .picture {
    flex-direction: column !important;
    align-items: center !important;
    margin-top: 20px;
  }

  .section3 .top {
    flex-direction: column !important;
    gap: 30px !important;
    text-align: center;
  }

  .section3 img {
    max-width: 100% !important;
    height: auto !important;
  }

  .section4 .text {
    text-align: center !important;
    margin: 20px auto 0;
    max-width: 90%;
  }

  .section5 .content_section5 {
    align-items: center;
    text-align: center;
    gap: 30px;
  }

  .section5 .text_left {
    height: auto;
    display: flex;
  }

  .section5 .card_right {
    justify-content: center;
    flex-wrap: wrap;
  }
  .content_sec,
  .img,
  .res-sec3 {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: auto;
  }
}

@media (max-width: 728px) {
  .left_section1 {
    gap: 20px !important;
    display: flex;
    margin: auto;
    text-align: start;
  }
  .text {
    margin: auto;
    text-align: start;
  }
  .top {
    display: flex;
    gap: 20px;
  }
  .content_sec,
  .img,
  .res-sec3 {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: auto;
  }
  .res-sec5 {
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
@media (max-width: 576px) {
  .btn {
    width: 120px !important;
    font-size: 9px !important;
  }
}
/* Tablet: ảnh nhỏ lại và không che text */
@media (max-width: 992px) {
  .custom-abs-intro {
    width: 500px;
    height: 500px;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    opacity: 0.3; /* làm mờ để text nổi bật hơn */
  }

  .section4 .text {
    position: relative;
    z-index: 2; /* text nằm trên ảnh */
    text-align: center !important;
    margin: 40px auto;
    max-width: 90%;
  }
}

/* Mobile: ảnh co hẳn lại hoặc ẩn đi */
@media (max-width: 576px) {
  .custom-abs-intro {
    display: none; /* ẩn ảnh để ưu tiên text */
  }

  .section4 .text {
    margin: 30px auto;
    padding: 0 15px;
    text-align: center !important;
  }
}
</style>
