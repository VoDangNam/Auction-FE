<template>
  <div class="wrapper">
    <div class="header-wrapper">
      <MenuClient></MenuClient>
    </div>
    <div class="page-wrapper">
      <div class="page-content">
        <router-view></router-view>
      </div>
    </div>
    <BotClient></BotClient>
  </div>
</template>
<script>
import BotClient from "../components/client/BotClient.vue";
import MenuClient from "../components/client/MenuClient.vue";
export default {
  name: "default-layout",
  components: {
    MenuClient,
    BotClient
  }
}

</script>
<style>
@import 'bootstrap/dist/css/bootstrap.min.css';
@import 'bootstrap';
@import 'bootstrap-icons/font/bootstrap-icons.css';
@import '../../assets/css/base.css';
@import '../../assets/css/bootstrap-override.css';
@import '../../assets/css/pages.css';
@import '../../assets/css/triangles.css';
</style>
